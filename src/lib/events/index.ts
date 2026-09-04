import { client } from "@/sanity/lib/client";
import {
  eventBySlugQuery,
  eventSlugsQuery,
  eventsQuery,
} from "@/sanity/lib/queries";

import type {
  AgendaItem,
  ClubEvent,
  ClubEventSummary,
  EventBlock,
  EventFact,
  EventRegistration,
  EventSponsor,
} from "./types";

export type {
  AgendaItem,
  ClubEvent,
  ClubEventSummary,
  EventBlock,
  EventCategory,
  EventFact,
  EventLocation,
  EventRegistration,
  EventSponsor,
  Sponsor,
  SponsorTier,
} from "./types";

/** Published content changes without a redeploy, within a minute. */
const REVALIDATE = 60;

/**
 * The club runs on West Africa Time, so every date on the site is printed in
 * it — a reader in London should see the hour they'd have to be in Ibadan for,
 * not their own. WAT has no daylight saving, so the offset is a constant.
 */
const TIME_ZONE = "Africa/Lagos";
const UTC_OFFSET = "+01:00";

/** Google Calendar needs an end; events without one are booked as two hours. */
const ASSUMED_DURATION_MS = 2 * 60 * 60 * 1000;

type RawBlock = {
  _type: string;
  heading?: string | null;
  body?: string[] | null;
  alt?: string | null;
  caption?: string | null;
  src?: string | null;
  quote?: string | null;
  attribution?: string | null;
  role?: string | null;
  ordered?: boolean | null;
  items?: string[] | null;
  facts?: EventFact[] | null;
  agenda?: AgendaItem[] | null;
};

type RawSummary = Omit<
  ClubEventSummary,
  "displayDate" | "displayTime" | "displayMonth" | "displayDay" | "isPast"
> & { hideTime?: boolean | null };

type RawEvent = RawSummary & {
  heroPhoto: string;
  registration?: EventRegistration | null;
  programme?: { slug: string; title: string } | null;
  sponsorsHeading?: string | null;
  sponsors?: (EventSponsor | null)[] | null;
  blocks: RawBlock[] | null;
};

/** e.g. "2025-07-28" in club time, which is what date comparisons hang on. */
function calendarDay(date: Date): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

function dateParts(date: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: TIME_ZONE,
    year: "numeric",
    month: "long",
    day: "numeric",
  }).formatToParts(date);

  const pick = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value ?? "";

  return { month: pick("month"), day: pick("day"), year: pick("year") };
}

/** e.g. "10:00 AM". */
function formatTime(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: TIME_ZONE,
    hour: "numeric",
    minute: "2-digit",
  }).format(date);
}

/**
 * "July 28, 2025" for a single day; "July 28 – 30, 2025" and
 * "July 28 – August 2, 2025" for runs that span days or months.
 */
export function formatEventDate(startsAt: string, endsAt?: string): string {
  const start = new Date(startsAt);
  const from = dateParts(start);

  if (!endsAt || calendarDay(start) === calendarDay(new Date(endsAt))) {
    return `${from.month} ${from.day}, ${from.year}`;
  }

  const to = dateParts(new Date(endsAt));

  if (from.year !== to.year) {
    return `${from.month} ${from.day}, ${from.year} – ${to.month} ${to.day}, ${to.year}`;
  }
  if (from.month !== to.month) {
    return `${from.month} ${from.day} – ${to.month} ${to.day}, ${to.year}`;
  }

  return `${from.month} ${from.day} – ${to.day}, ${to.year}`;
}

/** "10:00 AM", or "10:00 AM – 4:00 PM" when an event starts and ends in a day. */
export function formatEventTime(
  startsAt: string,
  endsAt?: string,
): string | undefined {
  const start = new Date(startsAt);

  if (!endsAt) return formatTime(start);

  const end = new Date(endsAt);
  if (calendarDay(start) !== calendarDay(end)) return formatTime(start);

  return `${formatTime(start)} – ${formatTime(end)}`;
}

/**
 * The moment an event stops being "upcoming". Without an explicit end it runs
 * to the close of its own day, so a morning event doesn't drop off the home
 * page while the guests are still in the hall.
 */
function endsAtMoment(startsAt: string, endsAt?: string): Date {
  if (endsAt) return new Date(endsAt);
  return new Date(`${calendarDay(new Date(startsAt))}T23:59:59${UTC_OFFSET}`);
}

/**
 * Narrows Sanity's `_type` to the `kind` discriminator the components use.
 * Blocks missing their required content are dropped rather than rendered
 * half-empty — a draft with an image but no upload shouldn't break the page.
 */
function mapBlock(block: RawBlock): EventBlock | null {
  switch (block._type) {
    case "sectionBlock":
      if (!block.body?.length) return null;
      return {
        kind: "section",
        // Headingless sections carry on under the heading above them.
        heading: block.heading?.trim() || undefined,
        body: block.body,
      };
    case "imageBlock":
      if (!block.src) return null;
      return {
        kind: "image",
        src: block.src,
        alt: block.alt ?? "",
        // Blank or whitespace-only captions render nothing at all.
        caption: block.caption?.trim() || undefined,
      };
    case "quoteBlock":
      if (!block.quote) return null;
      return {
        kind: "quote",
        quote: block.quote,
        attribution: block.attribution?.trim() || undefined,
        role: block.role?.trim() || undefined,
      };
    case "listBlock":
      if (!block.items?.length) return null;
      return {
        kind: "list",
        heading: block.heading?.trim() || undefined,
        ordered: block.ordered ?? false,
        items: block.items,
      };
    case "calloutBlock":
      if (!block.heading || !block.body?.length) return null;
      return { kind: "callout", heading: block.heading, body: block.body };
    case "factsBlock":
      if (!block.heading || !block.facts?.length) return null;
      return { kind: "facts", heading: block.heading, facts: block.facts };
    case "agendaBlock":
      if (!block.heading || !block.agenda?.length) return null;
      return { kind: "agenda", heading: block.heading, items: block.agenda };
    default:
      return null;
  }
}

function mapSummary(raw: RawSummary, now: Date): ClubEventSummary {
  const { hideTime, ...rest } = raw;
  const endsAt = raw.endsAt ?? undefined;
  const start = new Date(raw.startsAt);

  return {
    ...rest,
    endsAt,
    displayDate: formatEventDate(raw.startsAt, endsAt),
    displayTime: hideTime ? undefined : formatEventTime(raw.startsAt, endsAt),
    displayMonth: new Intl.DateTimeFormat("en-US", {
      timeZone: TIME_ZONE,
      month: "short",
    }).format(start),
    displayDay: dateParts(start).day,
    isPast: now > endsAtMoment(raw.startsAt, endsAt),
  };
}

function mapEvent(raw: RawEvent, now: Date): ClubEvent {
  return {
    ...mapSummary(raw, now),
    heroPhoto: raw.heroPhoto,
    registration: raw.registration?.url ? raw.registration : undefined,
    programme: raw.programme ?? undefined,
    sponsorsHeading: raw.sponsorsHeading?.trim() || undefined,
    // A sponsor deleted out from under an event leaves a dangling reference.
    sponsors: (raw.sponsors ?? []).filter(
      (entry): entry is EventSponsor => Boolean(entry?.sponsor?.logo),
    ),
    blocks: (raw.blocks ?? []).map(mapBlock).filter((b) => b !== null),
  };
}

/** Latest first. The upcoming/past splits below reorder from here. */
export async function getEvents(): Promise<ClubEventSummary[]> {
  const raw = await client.fetch<RawSummary[]>(
    eventsQuery,
    {},
    { next: { revalidate: REVALIDATE } },
  );

  const now = new Date();
  return (raw ?? []).map((event) => mapSummary(event, now));
}

export async function getEvent(slug: string): Promise<ClubEvent | null> {
  const raw = await client.fetch<RawEvent | null>(
    eventBySlugQuery,
    { slug },
    { next: { revalidate: REVALIDATE } },
  );

  return raw ? mapEvent(raw, new Date()) : null;
}

export async function getEventSlugs(): Promise<string[]> {
  return (
    (await client.fetch<string[]>(
      eventSlugsQuery,
      {},
      { next: { revalidate: REVALIDATE } },
    )) ?? []
  );
}

export function eventHref(slug: string) {
  return `/events/${slug}` as const;
}

/** Still to come, soonest first — the order a reader plans around. */
export function pickUpcoming<T extends ClubEventSummary>(events: T[]): T[] {
  return events.filter((event) => !event.isPast).reverse();
}

/** Already held, most recent first. */
export function pickPast<T extends ClubEventSummary>(events: T[]): T[] {
  return events.filter((event) => event.isPast);
}

/**
 * What to show beside an event: the next few things a reader could actually
 * attend, topped up from the archive so a page is never left with an empty rail.
 */
export function pickRelatedEvents(
  events: ClubEventSummary[],
  currentSlug: string,
  limit = 3,
): ClubEventSummary[] {
  const others = events.filter((event) => event.slug !== currentSlug);

  return [...pickUpcoming(others), ...pickPast(others)].slice(0, limit);
}

/** Prefills Google Calendar's "new event" form from the page. */
export function googleCalendarUrl(event: ClubEvent): string {
  const start = new Date(event.startsAt);
  const end = event.endsAt
    ? new Date(event.endsAt)
    : new Date(start.getTime() + ASSUMED_DURATION_MS);

  const stamp = (date: Date) => date.toISOString().replace(/[-:]|\.\d{3}/g, "");

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: event.title,
    dates: `${stamp(start)}/${stamp(end)}`,
    details: event.excerpt,
    location: [event.location.name, event.location.address]
      .filter(Boolean)
      .join(", "),
  });

  return `https://calendar.google.com/calendar/render?${params}`;
}

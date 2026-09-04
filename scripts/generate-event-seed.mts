/**
 * Turns src/sanity/seed/events.data.ts into an NDJSON file the Sanity CLI can
 * import.
 *
 *   node scripts/generate-event-seed.mts
 *   pnpm sanity dataset import src/sanity/seed/events.ndjson --dataset production
 *
 * Sponsors are authored inline on each event but imported as their own
 * documents, deduplicated by name, so the same logo is shared by every event
 * that used it — which is how the Studio expects them to be edited afterwards.
 *
 * Events that name a programme reference it strongly, so import the programmes
 * first (`pnpm seed:import`) or the reference will have nothing to point at.
 *
 * Image paths become `_sanityAsset` references, which the importer resolves
 * against the local filesystem and uploads on the way in.
 */
import { writeFileSync } from "node:fs";
import { relative, resolve } from "node:path";
import { pathToFileURL } from "node:url";

import type {
  ClubEventInput,
  EventBlock,
  Sponsor,
} from "../src/lib/events/types.ts";
import { events } from "../src/sanity/seed/events.data.ts";

const ROOT = resolve(import.meta.dirname, "..");
const OUT = resolve(ROOT, "src/sanity/seed/events.ndjson");

/**
 * `/assets/x.png` in public/ -> a `file://` ref the importer can upload.
 *
 * @sanity/import passes the URI straight to `fileURLToPath`, so it must be an
 * absolute `file:///` URL — relative refs resolve `..` as the URL host and
 * throw ERR_INVALID_FILE_URL_HOST. `pathToFileURL` also escapes the spaces in
 * the project path. That makes this file machine-specific, which is why it is
 * generated immediately before every import rather than committed.
 */
function asset(publicPath: string) {
  const onDisk = resolve(ROOT, "public", publicPath.replace(/^\//, ""));
  return { _sanityAsset: `image@${pathToFileURL(onDisk).href}` };
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function sponsorId(name: string) {
  return `sponsor-${slugify(name)}`;
}

function block(b: EventBlock, index: number) {
  const _key = `${b.kind}-${index}`;

  switch (b.kind) {
    case "section":
      return { _key, _type: "sectionBlock", heading: b.heading, body: b.body };
    case "image":
      return {
        _key,
        _type: "imageBlock",
        image: asset(b.src),
        alt: b.alt,
        caption: b.caption,
      };
    case "quote":
      return {
        _key,
        _type: "quoteBlock",
        quote: b.quote,
        attribution: b.attribution,
        role: b.role,
      };
    case "list":
      return {
        _key,
        _type: "listBlock",
        heading: b.heading,
        ordered: b.ordered,
        items: b.items,
      };
    case "callout":
      return { _key, _type: "calloutBlock", heading: b.heading, body: b.body };
    case "facts":
      return {
        _key,
        _type: "factsBlock",
        heading: b.heading,
        facts: b.facts.map((f, i) => ({
          _key: `fact-${i}`,
          _type: "programmeFact",
          ...f,
        })),
      };
    case "agenda":
      return {
        _key,
        _type: "agendaBlock",
        heading: b.heading,
        agenda: b.items.map((item, i) => ({
          _key: `item-${i}`,
          _type: "agendaItem",
          ...item,
        })),
      };
  }
}

function sponsorDocument(sponsor: Sponsor) {
  return {
    // Stable ids keep re-imports idempotent under `--replace`.
    _id: sponsorId(sponsor.name),
    _type: "sponsor",
    name: sponsor.name,
    logo: asset(sponsor.logo),
    website: sponsor.website,
  };
}

function eventDocument(event: ClubEventInput) {
  return {
    _id: `event-${event.slug}`,
    _type: "event",
    title: event.title,
    slug: { _type: "slug", current: event.slug },
    category: event.category,
    excerpt: event.excerpt,
    startsAt: new Date(event.startsAt).toISOString(),
    endsAt: event.endsAt ? new Date(event.endsAt).toISOString() : undefined,
    hideTime: event.hideTime,
    location: { _type: "eventLocation", ...event.location },
    photo: asset(event.photo),
    heroPhoto: asset(event.heroPhoto),
    registration: event.registration
      ? { _type: "eventRegistration", ...event.registration }
      : undefined,
    programme: event.programme
      ? { _type: "reference", _ref: `programme-${event.programme.slug}` }
      : undefined,
    sponsorsHeading: event.sponsorsHeading,
    sponsors: event.sponsors.map((entry, i) => ({
      _key: `sponsor-${i}`,
      _type: "eventSponsor",
      tier: entry.tier,
      sponsor: { _type: "reference", _ref: sponsorId(entry.sponsor.name) },
    })),
    blocks: event.blocks.map(block),
  };
}

/** One document per sponsor, however many events name them. */
const sponsors = new Map<string, Sponsor>();
for (const event of events) {
  for (const { sponsor } of event.sponsors) {
    sponsors.set(sponsor.name, sponsor);
  }
}

const documents = [
  // Sponsors first: the events below reference them by id.
  ...[...sponsors.values()].map(sponsorDocument),
  ...events.map(eventDocument),
];

writeFileSync(OUT, `${documents.map((d) => JSON.stringify(d)).join("\n")}\n`);
console.log(
  `Wrote ${events.length} events and ${sponsors.size} sponsors to ${relative(ROOT, OUT)}`,
);

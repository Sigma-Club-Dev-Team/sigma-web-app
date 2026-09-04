/** Shapes shared by the Sanity schema, the seed data and the UI. */

export type EventCategory =
  | "Flagship Events"
  | "Impact and outreach"
  | "Social & Cultural"
  | "Alumni & Networking";

/** Drives how prominently a logo is set in the sponsors marquee. */
export type SponsorTier = "Headline" | "Partner" | "Supporter";

export type Sponsor = {
  name: string;
  logo: string;
  website?: string;
};

/** A sponsor as it appears on one event — the same logo is reused across many. */
export type EventSponsor = { tier: SponsorTier; sponsor: Sponsor };

export type EventLocation = {
  name: string;
  address?: string;
  /** Optional link out to Google Maps or similar. */
  mapUrl?: string;
};

export type EventFact = { label: string; value: string };

/** One line in the run of show. `time` is authored free-form, e.g. "10:00 AM". */
export type AgendaItem = { time?: string; title: string; detail?: string };

export type EventRegistration = {
  /** Button copy, e.g. "Register to attend" or "Get tickets". */
  label: string;
  url: string;
  /** Small print under the button — deadline, price, who may attend. */
  note?: string;
};

/**
 * The detail page body is an ordered run of blocks, so text, photographs, the
 * run of show and key facts can be interleaved per event rather than living in
 * fixed slots. The first six are shared with news articles.
 */
export type EventBlock =
  /** `heading` is optional — leave it off to continue the section above. */
  | { kind: "section"; heading?: string; body: string[] }
  | { kind: "image"; src: string; alt: string; caption?: string }
  | { kind: "quote"; quote: string; attribution?: string; role?: string }
  | { kind: "list"; heading?: string; ordered: boolean; items: string[] }
  | { kind: "callout"; heading: string; body: string[] }
  | { kind: "facts"; heading: string; facts: EventFact[] }
  | { kind: "agenda"; heading: string; items: AgendaItem[] };

/** Everything a card needs: the events index, the home page rail, related events. */
export type ClubEventSummary = {
  slug: string;
  title: string;
  category: EventCategory;
  /** One-line summary used on cards and in page metadata. */
  excerpt: string;
  /** Square image used on cards. */
  photo: string;
  /** ISO timestamp, kept for `<time dateTime>` and for the countdown. */
  startsAt: string;
  /** ISO timestamp. Absent for events that run a single day. */
  endsAt?: string;
  location: EventLocation;
  /**
   * Dates are formatted once on the server, in the club's own timezone. Client
   * components only ever render the string, so a reader's locale or timezone
   * can't desync it from the markup that was sent down.
   */
  displayDate: string;
  /** Absent when the event hides its time, or has none worth printing. */
  displayTime?: string;
  /** Short forms for the date badge on a card, e.g. "JUL" and "28". */
  displayMonth: string;
  displayDay: string;
  /**
   * True once the event's last day is over. Derived on read rather than
   * authored, so nobody has to remember to flip a switch the morning after.
   */
  isPast: boolean;
};

export type ClubEvent = ClubEventSummary & {
  /** Wide image behind the detail page hero. */
  heroPhoto: string;
  registration?: EventRegistration;
  /** The programme this event belongs to, where it is part of a series. */
  programme?: { slug: string; title: string };
  /** Overrides the default heading above the sponsors marquee. */
  sponsorsHeading?: string;
  sponsors: EventSponsor[];
  blocks: EventBlock[];
};

/** What the seed file authors — the derived fields are added on read. */
export type ClubEventInput = Omit<
  ClubEvent,
  "displayDate" | "displayTime" | "displayMonth" | "displayDay" | "isPast"
> & {
  /** Hides the clock time on the page, for events billed by date alone. */
  hideTime?: boolean;
};

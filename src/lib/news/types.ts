/** Shapes shared by the Sanity schema, the seed data and the UI. */

export type ArticleCategory =
  | "Announcements"
  | "Alumni Spotlight"
  | "Events"
  | "Press";

/** Label/value pair in an “at a glance” block. */
export type ArticleFact = { label: string; value: string };

/**
 * An article body is an ordered run of blocks, so an editor can interleave
 * running text, photographs, pull quotes, lists and callouts in whatever order
 * the story needs rather than filling fixed slots.
 */
export type ArticleBlock =
  /** `heading` is optional — leave it off to continue the previous section. */
  | { kind: "section"; heading?: string; body: string[] }
  | { kind: "image"; src: string; alt: string; caption?: string }
  | { kind: "quote"; quote: string; attribution?: string; role?: string }
  | { kind: "list"; heading?: string; ordered: boolean; items: string[] }
  | { kind: "callout"; heading: string; body: string[] }
  | { kind: "facts"; heading: string; facts: ArticleFact[] };

/** Everything a card needs: the news index, the home page rail, related reads. */
export type ArticleSummary = {
  slug: string;
  title: string;
  category: ArticleCategory;
  author: string;
  /** ISO timestamp, kept for `<time dateTime>` and sorting. */
  publishedAt: string;
  /**
   * Formatted once on the server. Client components only ever render the
   * string, so a reader's locale or timezone can't desync it from the markup
   * that was sent down.
   */
  displayDate: string;
  /** One-line standfirst, used on cards and as the page meta description. */
  excerpt: string;
  /** Square-ish image: the card thumbnail, and the faded wash behind the hero. */
  coverImage: string;
};

export type Article = ArticleSummary & {
  updatedAt?: string;
  displayUpdatedAt?: string;
  tags: string[];
  /** Estimated from the body copy rather than authored. */
  readMinutes: number;
  blocks: ArticleBlock[];
};

/** What the seed file authors — the derived fields are added on read. */
export type ArticleInput = Omit<
  Article,
  "displayDate" | "displayUpdatedAt" | "readMinutes"
>;

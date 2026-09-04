/** Shapes shared by the Sanity schema, the seed data and the UI. */

export type ProgrammeCategory =
  | "Flagship Events"
  | "Impact and outreach";

export type ProgrammeFact = { label: string; value: string };

export type ProgrammeEdition = {
  /** e.g. "11th Edition" or "6th Edition". */
  label: string;
  year: string;
  /** The edition's theme, where the programme has one. */
  theme?: string;
  /** Keynote speaker, winner, or whatever headlines the edition. */
  highlight?: string;
  detail?: string;
};

/**
 * The detail page body is an ordered run of blocks, so text, images, key facts
 * and past editions can be interleaved per programme rather than living in
 * fixed slots.
 */
export type ProgrammeBlock =
  | { kind: "section"; heading: string; body: string[] }
  | { kind: "image"; src: string; alt: string; caption: string }
  | { kind: "facts"; heading: string; facts: ProgrammeFact[] }
  | { kind: "editions"; heading: string; editions: ProgrammeEdition[] };

export type Programme = {
  slug: string;
  title: string;
  category: ProgrammeCategory;
  /** Square image used on the home page and the programmes grid. */
  photo: string;
  /** Wide image behind the detail page hero. */
  heroPhoto: string;
  /** One-line summary used on cards and in page metadata. */
  desc: string;
  /** The purple card pinned beside the body copy. */
  summary: { heading: string; body: string };
  blocks: ProgrammeBlock[];
};

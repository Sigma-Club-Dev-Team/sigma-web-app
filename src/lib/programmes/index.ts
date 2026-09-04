import { client } from "@/sanity/lib/client";
import {
  programmeBySlugQuery,
  programmeSlugsQuery,
  programmesQuery,
} from "@/sanity/lib/queries";

import type {
  Programme,
  ProgrammeBlock,
  ProgrammeEdition,
  ProgrammeFact,
} from "./types";

export type {
  Programme,
  ProgrammeBlock,
  ProgrammeCategory,
  ProgrammeEdition,
  ProgrammeFact,
} from "./types";

/** Published content changes without a redeploy, within a minute. */
const REVALIDATE = 60;

type RawBlock = {
  _type: string;
  heading?: string | null;
  body?: string[] | null;
  alt?: string | null;
  caption?: string | null;
  src?: string | null;
  facts?: ProgrammeFact[] | null;
  editions?: ProgrammeEdition[] | null;
};

type RawProgramme = Omit<Programme, "blocks"> & { blocks: RawBlock[] | null };

/**
 * Narrows Sanity's `_type` to the `kind` discriminator the components use.
 * Blocks missing their required content are dropped rather than rendered
 * half-empty — a draft with an image but no upload shouldn't break the page.
 */
function mapBlock(block: RawBlock): ProgrammeBlock | null {
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
    case "factsBlock":
      if (!block.heading || !block.facts?.length) return null;
      return { kind: "facts", heading: block.heading, facts: block.facts };
    case "editionsBlock":
      if (!block.heading || !block.editions?.length) return null;
      return {
        kind: "editions",
        heading: block.heading,
        editions: block.editions,
      };
    default:
      return null;
  }
}

function mapProgramme(raw: RawProgramme): Programme {
  return {
    ...raw,
    blocks: (raw.blocks ?? []).map(mapBlock).filter((b) => b !== null),
  };
}

export async function getProgrammes(): Promise<Programme[]> {
  const raw = await client.fetch<RawProgramme[]>(
    programmesQuery,
    {},
    { next: { revalidate: REVALIDATE } },
  );

  return (raw ?? []).map(mapProgramme);
}

export async function getProgramme(slug: string): Promise<Programme | null> {
  const raw = await client.fetch<RawProgramme | null>(
    programmeBySlugQuery,
    { slug },
    { next: { revalidate: REVALIDATE } },
  );

  return raw ? mapProgramme(raw) : null;
}

export async function getProgrammeSlugs(): Promise<string[]> {
  return (
    (await client.fetch<string[]>(
      programmeSlugsQuery,
      {},
      { next: { revalidate: REVALIDATE } },
    )) ?? []
  );
}

export function programmeHref(slug: string) {
  return `/programs/${slug}` as const;
}

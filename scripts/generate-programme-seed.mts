/**
 * Turns src/lib/programmes into an NDJSON file the Sanity CLI can import.
 *
 *   node scripts/generate-programme-seed.mts
 *   pnpm sanity dataset import src/sanity/seed/programmes.ndjson --dataset production
 *
 * Image paths become `_sanityAsset` references, which the importer resolves
 * against the local filesystem and uploads on the way in.
 */
import { writeFileSync } from "node:fs";
import { relative, resolve } from "node:path";
import { pathToFileURL } from "node:url";

import { programmes } from "../src/sanity/seed/programmes.data.ts";
import type {
  Programme,
  ProgrammeBlock,
} from "../src/lib/programmes/types.ts";

const ROOT = resolve(import.meta.dirname, "..");
const SEED_DIR = resolve(ROOT, "src/sanity/seed");
const OUT = resolve(SEED_DIR, "programmes.ndjson");

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

function block(b: ProgrammeBlock, index: number) {
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
    case "editions":
      return {
        _key,
        _type: "editionsBlock",
        heading: b.heading,
        editions: b.editions.map((e, i) => ({
          _key: `edition-${i}`,
          _type: "programmeEdition",
          ...e,
        })),
      };
  }
}

function document(programme: Programme, index: number) {
  return {
    // Stable ids keep re-imports idempotent under `--replace`.
    _id: `programme-${programme.slug}`,
    _type: "programme",
    title: programme.title,
    slug: { _type: "slug", current: programme.slug },
    category: programme.category,
    order: index,
    desc: programme.desc,
    photo: asset(programme.photo),
    heroPhoto: asset(programme.heroPhoto),
    summary: { _type: "programmeSummary", ...programme.summary },
    blocks: programme.blocks.map(block),
  };
}

const ndjson = programmes.map((p, i) => JSON.stringify(document(p, i))).join("\n");
writeFileSync(OUT, `${ndjson}\n`);
console.log(`Wrote ${programmes.length} programmes to ${relative(ROOT, OUT)}`);

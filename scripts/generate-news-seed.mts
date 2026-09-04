/**
 * Turns src/sanity/seed/news.data.ts into an NDJSON file the Sanity CLI can
 * import.
 *
 *   node scripts/generate-news-seed.mts
 *   pnpm sanity dataset import src/sanity/seed/news.ndjson --dataset production
 *
 * Image paths become `_sanityAsset` references, which the importer resolves
 * against the local filesystem and uploads on the way in.
 */
import { writeFileSync } from "node:fs";
import { relative, resolve } from "node:path";
import { pathToFileURL } from "node:url";

import type { ArticleBlock, ArticleInput } from "../src/lib/news/types.ts";
import { articles } from "../src/sanity/seed/news.data.ts";

const ROOT = resolve(import.meta.dirname, "..");
const OUT = resolve(ROOT, "src/sanity/seed/news.ndjson");

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

function block(b: ArticleBlock, index: number) {
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
  }
}

function document(article: ArticleInput) {
  return {
    // Stable ids keep re-imports idempotent under `--replace`.
    _id: `article-${article.slug}`,
    _type: "article",
    title: article.title,
    slug: { _type: "slug", current: article.slug },
    category: article.category,
    author: article.author,
    publishedAt: article.publishedAt,
    updatedAt: article.updatedAt,
    excerpt: article.excerpt,
    coverImage: asset(article.coverImage),
    tags: article.tags,
    blocks: article.blocks.map(block),
  };
}

const ndjson = articles.map((a) => JSON.stringify(document(a))).join("\n");
writeFileSync(OUT, `${ndjson}\n`);
console.log(`Wrote ${articles.length} articles to ${relative(ROOT, OUT)}`);

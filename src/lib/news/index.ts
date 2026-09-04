import { client } from "@/sanity/lib/client";
import {
  articleBySlugQuery,
  articleSlugsQuery,
  articlesQuery,
} from "@/sanity/lib/queries";

import type {
  Article,
  ArticleBlock,
  ArticleFact,
  ArticleSummary,
} from "./types";

export type {
  Article,
  ArticleBlock,
  ArticleCategory,
  ArticleFact,
  ArticleSummary,
} from "./types";

/** Published content changes without a redeploy, within a minute. */
const REVALIDATE = 60;

/** Rough average for continuous prose; only ever shown rounded to a minute. */
const WORDS_PER_MINUTE = 200;

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
  facts?: ArticleFact[] | null;
};

type RawSummary = Omit<ArticleSummary, "displayDate">;
type RawArticle = Omit<
  Article,
  "displayDate" | "displayUpdatedAt" | "readMinutes" | "blocks" | "tags"
> & { tags?: string[] | null; blocks: RawBlock[] | null };

/** e.g. "July 28, 2025". Pinned to UTC so it reads the same everywhere. */
export function formatArticleDate(iso: string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(iso));
}

/**
 * Narrows Sanity's `_type` to the `kind` discriminator the components use.
 * Blocks missing their required content are dropped rather than rendered
 * half-empty — a draft with an image but no upload shouldn't break the page.
 */
function mapBlock(block: RawBlock): ArticleBlock | null {
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
    default:
      return null;
  }
}

/** Every word a reader actually reads, whichever block it sits in. */
function countWords(blocks: ArticleBlock[], excerpt: string): number {
  const text = blocks.flatMap((block) => {
    switch (block.kind) {
      case "section":
      case "callout":
        return [block.heading ?? "", ...block.body];
      case "quote":
        return [block.quote];
      case "list":
        return [block.heading ?? "", ...block.items];
      case "facts":
        return [block.heading, ...block.facts.map((f) => `${f.label} ${f.value}`)];
      case "image":
        return [block.caption ?? ""];
    }
  });

  return [excerpt, ...text].join(" ").split(/\s+/).filter(Boolean).length;
}

function mapSummary(raw: RawSummary): ArticleSummary {
  return { ...raw, displayDate: formatArticleDate(raw.publishedAt) };
}

function mapArticle(raw: RawArticle): Article {
  const blocks = (raw.blocks ?? []).map(mapBlock).filter((b) => b !== null);

  return {
    ...raw,
    displayDate: formatArticleDate(raw.publishedAt),
    displayUpdatedAt: raw.updatedAt
      ? formatArticleDate(raw.updatedAt)
      : undefined,
    tags: raw.tags ?? [],
    readMinutes: Math.max(
      1,
      Math.round(countWords(blocks, raw.excerpt) / WORDS_PER_MINUTE),
    ),
    blocks,
  };
}

/** Newest first, which is the order every list on the site renders in. */
export async function getArticles(): Promise<ArticleSummary[]> {
  const raw = await client.fetch<RawSummary[]>(
    articlesQuery,
    {},
    { next: { revalidate: REVALIDATE } },
  );

  return (raw ?? []).map(mapSummary);
}

export async function getArticle(slug: string): Promise<Article | null> {
  const raw = await client.fetch<RawArticle | null>(
    articleBySlugQuery,
    { slug },
    { next: { revalidate: REVALIDATE } },
  );

  return raw ? mapArticle(raw) : null;
}

export async function getArticleSlugs(): Promise<string[]> {
  return (
    (await client.fetch<string[]>(
      articleSlugsQuery,
      {},
      { next: { revalidate: REVALIDATE } },
    )) ?? []
  );
}

export function articleHref(slug: string) {
  return `/news/${slug}` as const;
}

/**
 * Same category first, then whatever else is newest, so a story always has
 * something to follow it even in a thinly populated category.
 */
export function pickRelated(
  articles: ArticleSummary[],
  current: Pick<Article, "slug" | "category">,
  limit = 3,
): ArticleSummary[] {
  const others = articles.filter((a) => a.slug !== current.slug);
  const sameCategory = others.filter((a) => a.category === current.category);
  const rest = others.filter((a) => a.category !== current.category);

  return [...sameCategory, ...rest].slice(0, limit);
}

/**
 * Neighbours in the published order. `previous` is the older story, so the
 * pair reads back through the archive the way a reader expects.
 */
export function pickAdjacent(articles: ArticleSummary[], slug: string) {
  const index = articles.findIndex((a) => a.slug === slug);
  if (index === -1) return { previous: null, next: null };

  return {
    previous: articles[index + 1] ?? null,
    next: articles[index - 1] ?? null,
  };
}

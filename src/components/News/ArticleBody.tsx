import Link from "next/link";

import { goudyOldStyle } from "@/fonts";
import type { Article, ArticleBlock } from "@/lib/news";

import ProgrammeFacts from "../Programs/ProgrammeFacts";
import { CoverImage } from "../ui/myImage";
import ArticleContents, { type ContentsItem } from "./ArticleContents";
import ArticleShare from "./ArticleShare";

const PARAGRAPH = "text-sigma-black text-[0.9375rem] md:text-[1.0625rem] leading-[1.75]";

/**
 * A raised initial on the opening paragraph. Set in the display serif to tie
 * the column back to the masthead above it.
 */
const DROP_CAP =
  "first-letter:float-left first-letter:mr-3 first-letter:mt-1.5 first-letter:text-[3.25rem] md:first-letter:text-[4rem] first-letter:leading-[0.75] first-letter:text-sigma-purple first-letter:[font-family:var(--font-goudy-old-style)]";

/** Anchor for a heading. The index keeps it unique across repeated headings. */
function headingId(heading: string, index: number) {
  const slug = heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  return slug ? `${slug}-${index}` : `section-${index}`;
}

/** Only blocks that carry a heading are worth listing in the contents rail. */
function blockHeading(block: ArticleBlock) {
  return block.kind === "image" || block.kind === "quote"
    ? undefined
    : block.heading;
}

/** Serif heading over a hairline rule, matching the programme pages. */
function BlockHeading({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <h2
        id={id}
        // Clears the fixed nav when the contents rail jumps to it.
        className={`${goudyOldStyle.className} scroll-mt-32 text-sigma-black text-[1.375rem] md:text-[1.75rem] leading-snug`}
      >
        {children}
      </h2>
      <div className="h-px w-full bg-divider" />
    </div>
  );
}

function Block({
  block,
  id,
  dropCap,
}: {
  block: ArticleBlock;
  id?: string;
  dropCap: boolean;
}) {
  switch (block.kind) {
    case "section":
      return (
        <div className="flex flex-col gap-5 md:gap-6">
          {block.heading && <BlockHeading id={id}>{block.heading}</BlockHeading>}
          {block.body.map((paragraph, index) => (
            <p
              key={paragraph}
              className={`${PARAGRAPH} ${dropCap && index === 0 ? DROP_CAP : ""}`}
            >
              {paragraph}
            </p>
          ))}
        </div>
      );

    case "image":
      return (
        <figure className={`flex flex-col ${block.caption ? "gap-3" : ""}`}>
          <div className="relative w-full aspect-16/10 bg-[#D9D9D9]">
            <CoverImage
              src={block.src}
              alt={block.alt}
              sizes="(max-width: 1024px) 100vw, 44rem"
            />
          </div>
          {block.caption && (
            <figcaption
              className={`${goudyOldStyle.className} italic text-secondary text-center text-xs md:text-[0.8125rem]`}
            >
              {block.caption}
            </figcaption>
          )}
        </figure>
      );

    case "quote":
      return (
        <blockquote className="flex flex-col gap-4 border-l-2 border-sigma-gold pl-6 md:pl-8">
          <p
            className={`${goudyOldStyle.className} text-sigma-purple text-[1.375rem] md:text-[1.75rem] leading-[1.4]`}
          >
            &ldquo;{block.quote}&rdquo;
          </p>
          {block.attribution && (
            <footer className="text-secondary text-[0.8125rem]">
              <span className="uppercase tracking-[0.14em]">
                {block.attribution}
              </span>
              {block.role && <span> — {block.role}</span>}
            </footer>
          )}
        </blockquote>
      );

    case "list":
      return (
        <div className="flex flex-col gap-5 md:gap-6">
          {block.heading && <BlockHeading id={id}>{block.heading}</BlockHeading>}

          {block.ordered ? (
            <ol className="flex flex-col gap-4">
              {block.items.map((item, index) => (
                <li key={item} className={`relative pl-10 ${PARAGRAPH}`}>
                  <span
                    aria-hidden
                    className={`${goudyOldStyle.className} absolute left-0 top-0 text-sigma-gold text-[1.0625rem]`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item}
                </li>
              ))}
            </ol>
          ) : (
            <ul className="flex flex-col gap-3">
              {block.items.map((item) => (
                <li key={item} className={`relative pl-6 ${PARAGRAPH}`}>
                  <span
                    aria-hidden
                    className="absolute left-0 top-[0.65em] size-1.5 rotate-45 bg-sigma-gold"
                  />
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      );

    case "callout":
      return (
        <aside className="flex flex-col gap-4 bg-[#F7F5F1] border-t-2 border-sigma-gold px-6 md:px-8 py-6 md:py-8">
          <h2
            id={id}
            className={`${goudyOldStyle.className} scroll-mt-32 text-sigma-purple text-[1.25rem] md:text-[1.375rem] leading-snug`}
          >
            {block.heading}
          </h2>
          {block.body.map((paragraph) => (
            <p
              key={paragraph}
              className="text-sigma-black text-[0.9375rem] md:text-base leading-[1.7]"
            >
              {paragraph}
            </p>
          ))}
        </aside>
      );

    case "facts":
      return (
        <div className="flex flex-col gap-5 md:gap-6">
          <BlockHeading id={id}>{block.heading}</BlockHeading>
          <ProgrammeFacts facts={block.facts} />
        </div>
      );
  }
}

function ArticleBody({ article }: { article: Article }) {
  const blocks = article.blocks.map((block, index) => {
    const heading = blockHeading(block);
    return { block, id: heading ? headingId(heading, index) : undefined, heading };
  });

  const contents: ContentsItem[] = blocks.flatMap((entry) =>
    entry.id && entry.heading ? [{ id: entry.id, label: entry.heading }] : [],
  );

  /** The opening paragraph only earns a drop cap if it opens the story. */
  const dropCapIndex = article.blocks[0]?.kind === "section" ? 0 : -1;

  return (
    <section className="px-6 md:px-20 py-14 md:py-20">
      <div className="mx-auto w-full max-w-300 grid gap-10 lg:grid-cols-[3.5rem_minmax(0,44rem)_1fr] lg:gap-12">
        <ArticleShare
          title={article.title}
          className="hidden lg:flex sticky top-32 self-start"
        />

        <div className="flex flex-col gap-10 md:gap-12">
          <p
            className={`${goudyOldStyle.className} text-sigma-black text-[1.25rem] md:text-[1.5rem] leading-[1.5]`}
          >
            {article.excerpt}
          </p>

          {blocks.map((entry, index) => (
            <Block
              key={`${entry.block.kind}-${index}`}
              block={entry.block}
              id={entry.id}
              dropCap={index === dropCapIndex}
            />
          ))}

          {article.tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-2">
              {article.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/news?q=${encodeURIComponent(tag)}`}
                  className="border border-border px-3 py-1.5 text-[0.75rem] uppercase tracking-[0.12em] text-secondary hover:border-sigma-purple hover:text-sigma-purple transition-colors duration-200"
                >
                  {tag}
                </Link>
              ))}
            </div>
          )}

          <div className="flex flex-col gap-8 border-t border-divider pt-8 md:flex-row md:items-start md:justify-between">
            <div className="flex flex-col gap-2">
              <p className="text-secondary uppercase text-[0.6875rem] tracking-[0.2em]">
                Written by
              </p>
              <p
                className={`${goudyOldStyle.className} text-sigma-purple text-[1.25rem]`}
              >
                {article.author}
              </p>
              <p className="text-secondary text-[0.8125rem]">
                Published {article.displayDate}
                {article.displayUpdatedAt &&
                  ` — updated ${article.displayUpdatedAt}`}
              </p>
            </div>

            <ArticleShare
              title={article.title}
              orientation="horizontal"
              className="lg:hidden"
            />
          </div>
        </div>

        {contents.length > 1 && <ArticleContents items={contents} />}
      </div>
    </section>
  );
}

export default ArticleBody;

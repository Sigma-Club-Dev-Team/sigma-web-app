import { ArrowLeft, Clock } from "lucide-react";
import Link from "next/link";

import { goudyOldStyle } from "@/fonts";
import type { Article } from "@/lib/news";

import { CoverImage } from "../ui/myImage";

/**
 * A grain wash, so the flat purple band behind a title reads like printed
 * stock rather than a solid fill. Inlined because it is three lines of SVG and
 * an asset request for it would be slower than the paint.
 */
const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)'/%3E%3C/svg%3E\")";

/**
 * Full-bleed masthead for a story. The main nav sits on top of it, so the top
 * scrim exists purely to keep the nav legible; the cover photograph is dropped
 * right back behind the club's purple so the title always holds.
 */
function ArticleHero({ article }: { article: Article }) {
  return (
    <header className="relative w-full min-h-120 md:min-h-[38rem] overflow-hidden bg-sigma-navy flex items-center justify-center">
      {/*
        Softened and scaled past the edges: cover images are often posters with
        their own headline, and at full definition that type competes with the
        title sitting over it.
      */}
      <div className="absolute inset-0 opacity-25 blur-[3px] scale-110">
        <CoverImage src={article.coverImage} alt="" sizes="100vw" />
      </div>

      <div className="absolute inset-0 bg-linear-to-b from-sigma-navy/90 via-sigma-navy/88 to-sigma-purple/95" />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.16] mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: GRAIN }}
      />
      {/* Separate top scrim for the overlaid nav. */}
      <div className="absolute inset-x-0 top-0 h-34 bg-linear-to-b from-[#202124]/45 to-[#202124]/0" />

      <div className="relative z-10 flex flex-col items-center text-center px-6 md:px-20 pt-32 md:pt-52 pb-14 md:pb-20">
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-white/70 hover:text-sigma-gold transition-colors text-[0.75rem] md:text-[0.8125rem] uppercase tracking-[0.18em] mb-8 md:mb-12"
        >
          <ArrowLeft size={15} aria-hidden />
          News &amp; Publications
        </Link>

        <p
          className={`${goudyOldStyle.className} text-white/75 uppercase text-[0.75rem] md:text-[0.875rem] tracking-[0.28em]`}
        >
          {article.category}
        </p>

        <h1
          className={`${goudyOldStyle.className} mt-4 md:mt-5 text-white text-[2rem] md:text-[3.5rem] leading-[1.12] tracking-[-0.01em] max-w-208`}
        >
          {article.title}
        </h1>

        <div className="mt-6 md:mt-8 h-px w-24 md:w-32 bg-sigma-gold" />

        <div className="mt-6 md:mt-8 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-[0.75rem] md:text-[0.9375rem]">
          <span className="text-sigma-gold font-bold">{article.author}</span>
          <span className="text-white/40" aria-hidden>
            &bull;
          </span>
          <time dateTime={article.publishedAt} className="text-white/75">
            {article.displayDate}
          </time>
          <span className="text-white/40" aria-hidden>
            &bull;
          </span>
          <span className="inline-flex items-center gap-1.5 text-white/75">
            <Clock size={13} aria-hidden />
            {article.readMinutes} min read
          </span>
        </div>
      </div>
    </header>
  );
}

export default ArticleHero;

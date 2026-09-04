import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

import { goudyOldStyle } from "@/fonts";
import { type ArticleSummary, articleHref } from "@/lib/news";

function NavLink({
  article,
  direction,
}: {
  article: ArticleSummary;
  direction: "previous" | "next";
}) {
  const isPrevious = direction === "previous";

  return (
    <Link
      href={articleHref(article.slug)}
      className={`group flex flex-col gap-3 py-8 md:py-10 px-6 md:px-8 transition-colors duration-200 hover:bg-[#F7F5F1] ${
        isPrevious ? "md:items-start" : "md:items-end md:text-right"
      }`}
    >
      <span className="flex items-center gap-2 text-secondary uppercase text-[0.6875rem] tracking-[0.2em]">
        {isPrevious && <ArrowLeft size={14} aria-hidden />}
        {isPrevious ? "Previous" : "Next"}
        {!isPrevious && <ArrowRight size={14} aria-hidden />}
      </span>

      <span
        className={`${goudyOldStyle.className} text-sigma-purple text-[1.125rem] md:text-[1.375rem] leading-snug group-hover:underline underline-offset-4 decoration-sigma-gold`}
      >
        {article.title}
      </span>
    </Link>
  );
}

/** Walks the reader back and forth through the archive by published order. */
function ArticleNav({
  previous,
  next,
}: {
  previous: ArticleSummary | null;
  next: ArticleSummary | null;
}) {
  if (!previous && !next) return null;

  return (
    <nav
      aria-label="More stories"
      className="px-6 md:px-20 pb-14 md:pb-20 -mt-4"
    >
      <div className="mx-auto w-full max-w-300 grid md:grid-cols-2 border-y border-divider divide-y md:divide-y-0 md:divide-x divide-divider">
        {previous ? (
          <NavLink article={previous} direction="previous" />
        ) : (
          <div className="hidden md:block" />
        )}
        {next && <NavLink article={next} direction="next" />}
      </div>
    </nav>
  );
}

export default ArticleNav;

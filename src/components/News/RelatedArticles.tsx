import Link from "next/link";

import { goudyOldStyle } from "@/fonts";
import type { ArticleSummary } from "@/lib/news";

import ArticleCard from "./ArticleCard";

/** Closes a story with somewhere else to go, in the Discourse's own livery. */
function RelatedArticles({ articles }: { articles: ArticleSummary[] }) {
  if (articles.length === 0) return null;

  return (
    <section className="bg-[#F7F5F1] px-6 md:px-20 py-15 md:py-25">
      <div className="mx-auto w-full max-w-300 flex flex-col gap-10 md:gap-14">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="flex flex-col gap-1">
            <h2
              className={`${goudyOldStyle.className} text-sigma-black text-sm md:text-[1.125rem] uppercase`}
            >
              The Sigma Discourse
            </h2>
            <div className="w-21 h-0.5 bg-sigma-gold" />
            <p
              className={`${goudyOldStyle.className} pt-4 text-sigma-black text-[1.75rem] md:text-[2.5rem] font-bold tracking-[-0.0175rem]`}
            >
              Continue reading
            </p>
          </div>

          <Link
            href="/news"
            className="shrink-0 py-3.5 px-6 rounded-md border-2 border-sigma-purple text-sigma-navy font-semibold tracking-[-0.00875rem] self-start md:self-auto"
          >
            All News
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default RelatedArticles;

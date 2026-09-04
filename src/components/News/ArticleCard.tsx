import Link from "next/link";

import { goudyOldStyle } from "@/fonts";
import { type ArticleSummary, articleHref } from "@/lib/news";

import { CoverImage } from "../ui/myImage";

/** The stacked card used wherever stories are shown as a grid. */
function ArticleCard({ article }: { article: ArticleSummary }) {
  return (
    <Link href={articleHref(article.slug)} className="group flex flex-col gap-5">
      <div className="relative w-full aspect-4/3 overflow-hidden bg-[#D9D9D9]">
        <CoverImage
          src={article.coverImage}
          alt={article.title}
          className="transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <div className="flex flex-col gap-3">
        <p
          className={`${goudyOldStyle.className} text-sigma-black uppercase text-[0.75rem] tracking-[0.2em]`}
        >
          {article.category}
        </p>

        <h3
          className={`${goudyOldStyle.className} text-sigma-purple text-[1.125rem] md:text-[1.375rem] leading-snug group-hover:underline underline-offset-4 decoration-sigma-gold`}
        >
          {article.title}
        </h3>

        <div className="flex items-center gap-2 text-[0.8125rem]">
          <span className="text-sigma-gold font-bold">{article.author}</span>
          <span className="text-secondary" aria-hidden>
            &bull;
          </span>
          <time dateTime={article.publishedAt} className="text-secondary">
            {article.displayDate}
          </time>
        </div>
      </div>
    </Link>
  );
}

export default ArticleCard;

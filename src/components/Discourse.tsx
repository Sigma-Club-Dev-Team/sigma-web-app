import Link from "next/link";

import { goudyOldStyle } from "@/fonts";
import { type ArticleSummary, articleHref } from "@/lib/news";

import { CoverImage } from "./ui/myImage";

/** The home page rail: the three most recent stories, newest first. */
function Discourse({ articles }: { articles: ArticleSummary[] }) {
  return (
    <section className="flex flex-col md:flex-row items-start justify-center md:justify-between pt-30 pb-20 px-6 md:px-20 w-full gap-12 md:gap-9 bg-[#F7F5F1] relative overflow-hidden">
      <div className="flex w-full h-full flex-col items-start">
        <div className="flex flex-col items-start md:items-start justify-center gap-1 text-sigma-black">
          <h1
            className={`${goudyOldStyle.className} md:text-left text-sigma-black text-sm  md:text-[1.125rem]`}
          >
            THE SIGMA DISCOURSE
          </h1>
          <div className="w-21 h-0.5 bg-sigma-gold"></div>
        </div>
        <h2
          className={`${goudyOldStyle.className} py-4.5 md:py-6 text-[1.75rem] md:text-[3rem] font-bold tracking-[-0.0175rem]`}
        >
          News & Publications
        </h2>
        <p
          className={`w-86.25 md:w-full tracking-[-0.00875rem]  text-sm md:text-[1.125rem]`}
        >
          Documenting national development, executive commentary, and the modern
          legacy of the fellowship.
        </p>
        <div className="hidden md:flex  w-full md:mt-10">
          <Link
            href={"/news"}
            className={`cursor-pointer flex items-center justify-center py-3.5 px-6 rounded-md text-sigma-navy font-semibold tracking-[-0.00875rem] bg-transparent border-2 border-sigma-purple`}
          >
            Read More
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-start w-full">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={articleHref(article.slug)}
            className="group flex items-center justify-between w-full gap-4 py-6 border-b border-b-border last:border-b-0"
          >
            <div className="flex flex-col items-start justify-center">
              <h6
                className={`${goudyOldStyle.className} pb-2 flex items-center justify-center gap-2.5 text-[0.875rem] md:text-[1rem] text-sigma-black`}
              >
                {article.category}
              </h6>
              <h3
                className={`${goudyOldStyle.className} pb-2 md:pb-4 tracking-normal leading-normal text-[1rem] md:text-[1.375rem] text-sigma-purple w-57.25 md:w-full group-hover:underline underline-offset-4 decoration-sigma-gold`}
              >
                {article.title}
              </h3>

              <div className="flex items-start justify-center gap-1 md:gap-2 text-[0.75rem] md:text-[0.875rem]">
                <p className={`text-sigma-gold font-bold`}>{article.author}</p>
                <small className="text-secondary">•</small>
                <time dateTime={article.publishedAt} className="text-secondary">
                  {article.displayDate}
                </time>
              </div>
            </div>
            <div className="relative h-25 w-25 shrink-0 overflow-hidden bg-[#D9D9D9]">
              <CoverImage
                src={article.coverImage}
                alt={article.title}
                className="transition-transform duration-500 group-hover:scale-105"
                sizes="6.25rem"
              />
            </div>
          </Link>
        ))}
      </div>

      <div className="flex md:hidden  items-center justify-center w-full">
        <Link
          href={"/news"}
          className={`flex items-center justify-center py-3.5 px-6 rounded-md text-sigma-navy font-semibold tracking-[-0.00875rem] bg-transparent border-2 border-sigma-purple`}
        >
          Read More
        </Link>
      </div>
    </section>
  );
}

export default Discourse;

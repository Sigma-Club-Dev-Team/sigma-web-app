"use client";

import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

import { goudyOldStyle } from "@/fonts";
import { type ArticleSummary, articleHref } from "@/lib/news";

import { CoverImage } from "../ui/myImage";

const ALL = "ALL";

const newsBtn = [
  { id: 1, label: ALL },
  { id: 2, label: "Announcements" },
  { id: 3, label: "Alumni Spotlight" },
  { id: 4, label: "Events" },
  { id: 5, label: "Press" },
];

const PAGE_SIZE = 6;

function News({
  articles,
  initialCategory = ALL,
  initialQuery = "",
}: {
  articles: ArticleSummary[];
  initialCategory?: string;
  initialQuery?: string;
}) {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [query, setQuery] = useState(initialQuery);
  const [currentPage, setCurrentPage] = useState(1);

  const matches = useMemo(() => {
    const needle = query.trim().toLowerCase();

    return articles.filter((article) => {
      if (activeCategory !== ALL && article.category !== activeCategory)
        return false;
      if (!needle) return true;

      return `${article.title} ${article.excerpt} ${article.category} ${article.author}`
        .toLowerCase()
        .includes(needle);
    });
  }, [articles, activeCategory, query]);

  const totalPages = Math.max(1, Math.ceil(matches.length / PAGE_SIZE));
  // Derived rather than stored, so narrowing the filter can't strand the
  // reader on a page that no longer exists.
  const page = Math.min(currentPage, totalPages);
  const visible = matches.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handlePageChange = (next: number) => {
    if (next >= 1 && next <= totalPages) {
      setCurrentPage(next);
    }
  };

  const renderPageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // like page 1 'd always show
      pages.push(1);

      if (page <= 4) {
        // beginning: 1, 2, 3, 4, 5, ..., 20
        pages.push(2, 3, 4, 5);
        pages.push("...");
        pages.push(totalPages);
      } else if (page >= totalPages - 3) {
        // end: 1, ..., 16, 17, 18, 19, 20
        pages.push("...");
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // the middle: 1, ..., currentPage-1, currentPage, currentPage+1, ..., 20
        pages.push("...");
        pages.push(page - 1);
        pages.push(page);
        pages.push(page + 1);
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages.map((entry, index) => {
      if (entry === "...") {
        return (
          <span
            key={`ellipsis-${index}`}
            className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 text-sigma-navy font-bold text-sm md:text-[1.125rem]"
          >
            ...
          </span>
        );
      }

      const isActive = page === entry;

      return (
        <button
          key={`page-${entry}`}
          onClick={() => handlePageChange(entry as number)}
          aria-current={isActive ? "page" : undefined}
          className={`cursor-pointer flex items-center justify-center w-8 h-8 md:w-10 md:h-10 font-bold text-sm md:text-[1.125rem] transition-colors duration-200 ${
            isActive
              ? "bg-sigma-navy text-white"
              : "text-sigma-navy hover:bg-soft-white"
          }`}
        >
          {entry}
        </button>
      );
    });
  };

  return (
    <section className="flex flex-col items-center justify-center py-15 md:py-30 px-6 md:px-40 gap-16 md:gap-20 w-full overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-center w-full gap-4 md:gap-25">
        <nav className="flex items-center justify-center ">
          {newsBtn.map((btn) => {
            const isActive = activeCategory === btn.label;
            return (
              <button
                key={btn.id}
                onClick={() => {
                  setActiveCategory(btn.label);
                  setCurrentPage(1);
                }}
                aria-pressed={isActive}
                className={`flex items-center justify-center md:py-3.5 md:px-6 md:text-[1.125rem] border-b-[0.125rem] cursor-pointer uppercase shrink-0 ${
                  goudyOldStyle.className
                } text-sigma-navy transition-colors duration-200 ${
                  isActive ? "border-sigma-navy" : "border-border"
                }`}
              >
                <p>{btn.label}</p>
              </button>
            );
          })}
        </nav>

        <form
          role="search"
          onSubmit={(event) => event.preventDefault()}
          className="border border-border flex items-center justify-between w-full h-10 pl-4 gap-2"
        >
          <input
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setCurrentPage(1);
            }}
            aria-label="Search articles or keywords"
            placeholder="Search articles or keywords..."
            className="text-secondary text-[0.75rem] w-full outline-none placeholder:text-secondary bg-transparent"
          />
          <button
            type="submit"
            aria-label="Search"
            className="cursor-pointer flex items-center justify-center w-10 h-10 shrink-0 text-secondary hover:text-sigma-purple transition-colors"
          >
            <Search size={16} />
          </button>
        </form>
      </div>

      <div className="flex flex-col gap-20 w-full">
        {visible.map((article) => (
          <Link
            key={article.slug}
            href={articleHref(article.slug)}
            className="group flex items-center justify-between gap-6 md:gap-12"
          >
            <div className="flex flex-col items-start justify-center">
              <h6
                className={`${goudyOldStyle.className} pb-2 md:pb-4 flex items-center justify-center gap-2.5 text-[0.875rem] md:text-[1.125rem] text-sigma-black`}
              >
                {article.category}
              </h6>
              <h2
                className={`${goudyOldStyle.className} pb-2 md:pb-6 md:tracking-[-0.03rem] md:leading-[3.3rem] text-[1rem] md:text-[3rem] text-sigma-purple md:w-full group-hover:underline underline-offset-8 decoration-sigma-gold decoration-1`}
              >
                {article.title}
              </h2>

              <div className="flex items-start justify-center gap-1 md:gap-2 text-[0.75rem] md:text-[1rem]">
                <p className={`text-sigma-gold font-bold`}>{article.author}</p>
                <small className="text-secondary">•</small>
                <time dateTime={article.publishedAt} className="text-secondary">
                  {article.displayDate}
                </time>
              </div>
            </div>

            <div className="relative shrink-0 w-25 h-25 md:w-97.5 md:h-97.5 overflow-hidden bg-[#D9D9D9]">
              <CoverImage
                src={article.coverImage}
                alt={article.title}
                className="transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 6.25rem, 24.375rem"
              />
            </div>
          </Link>
        ))}

        {matches.length === 0 && (
          <p className="text-secondary text-sm md:text-base text-center">
            No stories match that search yet.
          </p>
        )}

        {totalPages > 1 && (
          <div className="w-full flex items-center justify-center gap-1 md:gap-3">
            <button
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
              className={`cursor-pointer flex items-center justify-center gap-1.5 md:gap-2.5 md:text-[1.125rem] text-sigma-navy font-bold md:tracking-[-0.01125rem] md:py-1.5 px-3 h-8.75 transition-all duration-200 ${
                page === 1
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:text-sigma-purple"
              }`}
            >
              <ChevronLeft size={18} />
              <p>Back</p>
            </button>

            <div className="flex items-center justify-center gap-1 md:gap-2">
              {renderPageNumbers()}
            </div>

            <button
              onClick={() => handlePageChange(page + 1)}
              disabled={page === totalPages}
              className={`cursor-pointer flex items-center justify-center gap-1.5 md:gap-2.5 md:text-[1.125rem] text-sigma-navy font-bold md:tracking-[-0.01125rem] md:py-1.5 px-3 md:h-8.75 transition-all duration-200 ${
                page === totalPages
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:text-sigma-purple"
              }`}
            >
              <p>Next</p>
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default News;

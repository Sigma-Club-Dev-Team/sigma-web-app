"use client";

import { useState } from "react";
import { goudyOldStyle } from "@/fonts";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { newsPublications } from "../Discourse";
import Link from "next/link";
import { CoverImage } from "../ui/myImage";

const newsBtn = [
  { id: 1, label: "ALL" },
  { id: 2, label: "Announcements" },
  { id: 3, label: "Alumni Spotlight" },
  { id: 4, label: "Events" },
  { id: 5, label: "Press" },
];

function News() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 20;

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // like page 1 'd always show
      pages.push(1);

      if (currentPage <= 4) {
        // beginning: 1, 2, 3, 4, 5, ..., 20
        pages.push(2, 3, 4, 5);
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 3) {
        // end: 1, ..., 16, 17, 18, 19, 20
        pages.push("...");
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // the middle: 1, ..., currentPage-1, currentPage, currentPage+1, ..., 20
        pages.push("...");
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages.map((page, index) => {
      if (page === "...") {
        return (
          <span
            key={`ellipsis-${index}`}
            className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 text-sigma-navy font-bold text-sm md:text-[1.125rem]"
          >
            ...
          </span>
        );
      }

      const isActive = currentPage === page;

      return (
        <button
          key={`page-${page}`}
          onClick={() => handlePageChange(page as number)}
          className={`cursor-pointer flex items-center justify-center w-8 h-8 md:w-10 md:h-10 font-bold text-sm md:text-[1.125rem] transition-colors duration-200 ${
            isActive
              ? "bg-sigma-navy text-white"
              : "text-sigma-navy hover:bg-soft-white"
          }`}
        >
          {page}
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
                onClick={() => setActiveCategory(btn.label)}
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

        <div className="border border-border flex items-center justify-between w-full h-10 pl-4 gap-2">
          <input
            placeholder="Search articles or keywords..."
            className="text-secondary text-[0.75rem] w-full outline-none placeholder:text-secondary bg-transparent"
          />
          <button className="cursor-pointer flex items-center justify-center w-10 h-10 shrink-0 text-secondary hover:text-sigma-purple transition-colors">
            <Search size={16} />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-20 w-full">
        {newsPublications.map((item) => (
          <Link
            key={item.id}
            href={item.link}
            className="flex items-center justify-between gap-12"
          >
            <div className="flex flex-col items-start justify-center">
              <h6
                className={`${goudyOldStyle.className} pb-2 md:pb-4 flex items-center justify-center gap-2.5 text-[0.875rem] md:text-[1.125rem] text-sigma-black`}
              >
                {item.category}
              </h6>
              <h1
                className={`${goudyOldStyle.className} pb-2 md:pb-6 md:tracking-[-0.03rem] md:leading-[3.3rem] text-[1rem] md:text-[3rem] text-sigma-purple md:w-full`}
              >
                {item.title}
              </h1>

              <div className="flex items-start justify-center gap-1 md:gap-2 text-[0.75rem] md:text-[1rem]">
                <p className={`text-sigma-gold font-bold`}>{item.author}</p>
                <small className="text-secondary">•</small>
                <p className={` text-secondary`}>{item.pubDate}</p>
              </div>
            </div>

            <div className="relative md:h-97.5 aspect-square">
              <CoverImage src={item.thumbnail} alt={item.title} />
            </div>
          </Link>
        ))}

        {/* <div className="w-full border border-border" /> */}

        <div className="w-full flex items-center justify-center gap-1 md:gap-3">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`cursor-pointer flex items-center justify-center gap-1.5 md:gap-2.5 md:text-[1.125rem] text-sigma-navy font-bold md:tracking-[-0.01125rem] md:py-1.5 px-3 h-8.75 transition-all duration-200 ${
              currentPage === 1
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
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`cursor-pointer flex items-center justify-center gap-1.5 md:gap-2.5 md:text-[1.125rem] text-sigma-navy font-bold md:tracking-[-0.01125rem] md:py-1.5 px-3 md:h-8.75 transition-all duration-200 ${
              currentPage === totalPages
                ? "opacity-40 cursor-not-allowed"
                : "hover:text-sigma-purple"
            }`}
          >
            <p>Next</p>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default News;

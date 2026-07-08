"use client";

import { useState } from "react";
import { goudyOldStyle } from "@/fonts";
import { ChevronDown, Search } from "lucide-react";
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
      </div>
    </section>
  );
}

export default News;

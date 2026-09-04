"use client";

import { useState } from "react";

import { goudyOldStyle } from "@/fonts";
import type { Programme, ProgrammeCategory } from "@/lib/programmes";

import ProgrammeCard from "./ProgrammeCard";

const ALL = "ALL";

const filters: { id: number; label: typeof ALL | ProgrammeCategory }[] = [
  { id: 1, label: ALL },
  { id: 2, label: "Flagship Events" },
  { id: 3, label: "Impact and outreach" },
];

function Programs({
  programmes,
  initialCategory = ALL,
}: {
  programmes: Programme[];
  initialCategory?: string;
}) {
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  const visible =
    activeCategory === ALL
      ? programmes
      : programmes.filter((p) => p.category === activeCategory);

  return (
    <section className="flex flex-col items-center justify-center py-15 md:py-30 px-6 md:px-40 gap-16 md:gap-20 w-full overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-start w-full gap-4 md:gap-25">
        <nav className="flex items-center justify-center ">
          {filters.map((btn) => {
            const isActive = activeCategory === btn.label;
            return (
              <button
                key={btn.id}
                onClick={() => setActiveCategory(btn.label)}
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
      </div>

      {visible.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12.5 md:gap-8 w-86.25 md:w-full">
          {visible.map((programme) => (
            <ProgrammeCard key={programme.slug} programme={programme} />
          ))}
        </div>
      ) : (
        <p className="text-secondary text-sm md:text-base">
          No programmes in this category yet.
        </p>
      )}
    </section>
  );
}

export default Programs;

"use client";

import { goudyOldStyle } from "@/fonts";
import { useState } from "react";

const programsBtn = [
  { id: 1, label: "ALL" },
  { id: 2, label: "Flagship Events" },
  { id: 3, label: "Impact and outreach" },
];

function Programs() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  return (
    <section className="flex flex-col items-center justify-center py-15 md:py-30 px-6 md:px-40 gap-16 md:gap-20 w-full overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-start w-full gap-4 md:gap-25">
        <nav className="flex items-center justify-center ">
          {programsBtn.map((btn) => {
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
      </div>
    </section>
  );
}

export default Programs;

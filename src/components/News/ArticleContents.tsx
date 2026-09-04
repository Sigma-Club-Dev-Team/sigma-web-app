"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

export type ContentsItem = { id: string; label: string };

/**
 * The sticky "in this article" rail. It follows the reader down the page by
 * watching the headings themselves, so it stays right even when they jump
 * straight to an anchor.
 */
function ArticleContents({ items }: { items: ContentsItem[] }) {
  const [activeId, setActiveId] = useState(items[0]?.id);

  useEffect(() => {
    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter((el) => el !== null);

    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const topmost = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          )[0];

        if (topmost) setActiveId(topmost.target.id);
      },
      // A narrow band under the fixed nav: whatever heading sits in it wins.
      // rootMargin only accepts pixels or percentages — 144px is the 9rem the
      // headings are already given as scroll padding.
      { rootMargin: "-144px 0px -60% 0px" },
    );

    headings.forEach((heading) => observer.observe(heading));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav
      aria-label="In this article"
      className="hidden lg:flex flex-col gap-4 sticky top-32 self-start"
    >
      <p className="text-secondary uppercase text-[0.6875rem] tracking-[0.2em]">
        In this article
      </p>
      <div className="h-px w-full bg-divider" />

      <ul className="flex flex-col">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              aria-current={activeId === item.id ? "true" : undefined}
              className={cn(
                "block border-l-2 py-2 pl-4 text-[0.875rem] leading-snug transition-colors duration-200",
                activeId === item.id
                  ? "border-sigma-gold text-sigma-purple"
                  : "border-divider text-secondary hover:text-sigma-black",
              )}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default ArticleContents;

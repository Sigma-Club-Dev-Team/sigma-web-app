"use client";

import { useEffect, useState } from "react";

/**
 * Hairline along the top of the viewport tracking how far through the story
 * the reader is. Purely decorative, so it is hidden from assistive tech.
 */
function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? Math.min(1, window.scrollY / scrollable) : 0);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      aria-hidden
      // Above the nav, which owns z-50.
      className="fixed inset-x-0 top-0 z-[60] h-0.5 pointer-events-none"
    >
      <div
        className="h-full w-full origin-left bg-sigma-gold"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}

export default ReadingProgress;

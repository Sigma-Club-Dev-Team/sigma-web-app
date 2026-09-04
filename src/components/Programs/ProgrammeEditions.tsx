import { goudyOldStyle } from "@/fonts";
import type { ProgrammeEdition } from "@/lib/programmes";

/**
 * Chronological list of past editions, on a rail so the run of years reads as
 * one sequence rather than a stack of unrelated cards.
 */
function ProgrammeEditions({ editions }: { editions: ProgrammeEdition[] }) {
  return (
    <ol className="flex flex-col gap-8 md:gap-10 border-l border-divider pl-6 md:pl-8">
      {editions.map((edition) => (
        <li key={edition.label} className="relative flex flex-col gap-2">
          <span
            aria-hidden
            className="absolute -left-[1.8125rem] md:-left-[2.3125rem] top-2 size-2.5 rounded-full bg-sigma-gold ring-4 ring-white"
          />

          <div className="flex flex-wrap items-baseline gap-x-3">
            <span
              className={`${goudyOldStyle.className} text-sigma-black text-base md:text-lg`}
            >
              {edition.label}
            </span>
            {edition.year && (
              <span className="text-secondary text-xs md:text-sm">
                {edition.year}
              </span>
            )}
          </div>

          {edition.theme && (
            <p
              className={`${goudyOldStyle.className} italic text-sigma-purple text-sm md:text-base leading-snug`}
            >
              {edition.theme}
            </p>
          )}

          {edition.highlight && (
            <p className="text-sigma-black text-sm md:text-base font-semibold leading-[1.5]">
              {edition.highlight}
            </p>
          )}

          {edition.detail && (
            <p className="text-sigma-black text-sm md:text-base leading-[1.55]">
              {edition.detail}
            </p>
          )}
        </li>
      ))}
    </ol>
  );
}

export default ProgrammeEditions;

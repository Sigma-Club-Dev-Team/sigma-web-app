import { goudyOldStyle } from "@/fonts";
import type { AgendaItem } from "@/lib/events";

/**
 * The run of show, on a rail so the day reads as one sequence rather than a
 * stack of unrelated entries. Times are optional — an item without one simply
 * follows the one above it.
 */
function EventAgenda({ items }: { items: AgendaItem[] }) {
  return (
    <ol className="flex flex-col gap-7 md:gap-8 border-l border-divider pl-6 md:pl-8">
      {items.map((item, index) => (
        <li key={`${item.title}-${index}`} className="relative flex flex-col gap-1.5">
          <span
            aria-hidden
            className="absolute -left-[1.8125rem] md:-left-[2.3125rem] top-1.5 size-2.5 rounded-full bg-sigma-gold ring-4 ring-white"
          />

          {item.time && (
            <span className="text-[0.75rem] uppercase tracking-[0.16em] text-secondary tabular-nums">
              {item.time}
            </span>
          )}

          <h3
            className={`${goudyOldStyle.className} text-sigma-purple text-[1.0625rem] md:text-[1.25rem] leading-snug`}
          >
            {item.title}
          </h3>

          {item.detail && (
            <p className="text-sigma-black text-sm md:text-[0.9375rem] leading-[1.6]">
              {item.detail}
            </p>
          )}
        </li>
      ))}
    </ol>
  );
}

export default EventAgenda;

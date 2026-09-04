import { ArrowLeft, CalendarDays, Clock, MapPin } from "lucide-react";
import Link from "next/link";

import { goudyOldStyle } from "@/fonts";
import type { ClubEvent } from "@/lib/events";

import { CoverImage } from "../ui/myImage";
import EventCountdown from "./EventCountdown";

/**
 * Full-bleed masthead for an event. The main nav sits on top of it, so the top
 * scrim exists purely to keep the nav legible; the rest darkens towards the
 * bottom so the title and the countdown hold against any photograph.
 */
function EventHero({ event }: { event: ClubEvent }) {
  return (
    <header className="relative w-full min-h-140 md:min-h-[44rem] overflow-hidden bg-sigma-navy flex items-end">
      <CoverImage src={event.heroPhoto} alt="" sizes="100vw" />

      <div className="absolute inset-0 bg-linear-to-b from-[#202124]/45 via-[#202124]/55 to-sigma-purple/90" />
      {/* Separate top scrim for the overlaid nav. */}
      <div className="absolute inset-x-0 top-0 h-34 bg-linear-to-b from-[#202124]/45 to-[#202124]/0" />

      <div className="relative z-10 flex w-full flex-col items-center text-center px-6 md:px-20 pt-32 md:pt-52 pb-12 md:pb-16">
        <Link
          href="/events"
          className="inline-flex items-center gap-2 text-white/70 hover:text-sigma-gold transition-colors text-[0.75rem] md:text-[0.8125rem] uppercase tracking-[0.18em] mb-8 md:mb-12"
        >
          <ArrowLeft size={15} aria-hidden />
          All Events
        </Link>

        <p
          className={`${goudyOldStyle.className} text-white/75 uppercase text-[0.75rem] md:text-[0.875rem] tracking-[0.28em]`}
        >
          {event.category}
        </p>

        <h1
          className={`${goudyOldStyle.className} mt-4 md:mt-5 text-white text-[2rem] md:text-[3.5rem] leading-[1.12] tracking-[-0.01em] max-w-208`}
        >
          {event.title}
        </h1>

        <div className="mt-6 md:mt-8 h-px w-24 md:w-32 bg-sigma-gold" />

        <div className="mt-6 md:mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[0.8125rem] md:text-[0.9375rem] text-white/80">
          <span className="inline-flex items-center gap-2">
            <CalendarDays size={15} className="text-sigma-gold" aria-hidden />
            <time dateTime={event.startsAt}>{event.displayDate}</time>
          </span>
          {event.displayTime && (
            <>
              <span className="text-white/35" aria-hidden>
                &bull;
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock size={14} className="text-sigma-gold" aria-hidden />
                {event.displayTime}
              </span>
            </>
          )}
          <span className="text-white/35" aria-hidden>
            &bull;
          </span>
          <span className="inline-flex items-center gap-2">
            <MapPin size={15} className="text-sigma-gold" aria-hidden />
            {event.location.name}
          </span>
        </div>

        <div className="mt-8 md:mt-10">
          {event.isPast ? (
            <p className="inline-flex items-center border border-white/25 px-4 py-2 text-[0.6875rem] uppercase tracking-[0.2em] text-white/70">
              This event has ended
            </p>
          ) : (
            <EventCountdown startsAt={event.startsAt} />
          )}
        </div>
      </div>
    </header>
  );
}

export default EventHero;

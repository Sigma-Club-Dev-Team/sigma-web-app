import { ArrowRight, CalendarDays, Clock, MapPin } from "lucide-react";
import Link from "next/link";

import { goudyOldStyle } from "@/fonts";
import { type ClubEventSummary, eventHref } from "@/lib/events";

import { CoverImage } from "../ui/myImage";
import { DateChip } from "./EventCard";

/**
 * The next event, given the width it deserves at the top of the listing. Only
 * ever used for the soonest upcoming event — everything else reads as a card.
 */
function EventFeature({ event }: { event: ClubEventSummary }) {
  return (
    <Link
      href={eventHref(event.slug)}
      className="group grid w-full grid-cols-1 overflow-hidden border border-divider bg-white md:grid-cols-2"
    >
      <div className="relative aspect-16/10 w-full md:aspect-auto md:h-full md:min-h-95">
        <CoverImage
          src={event.photo}
          alt={event.title}
          className="transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <DateChip
          month={event.displayMonth}
          day={event.displayDay}
          className="absolute left-5 top-5"
        />
      </div>

      <div className="flex flex-col justify-center gap-5 px-6 py-8 md:px-10 md:py-12">
        <div className="flex flex-col gap-2">
          <p className="text-[0.6875rem] uppercase tracking-[0.22em] text-sigma-gold">
            Next up
          </p>
          <div className="h-px w-14 bg-sigma-gold" />
        </div>

        <h2
          className={`${goudyOldStyle.className} text-sigma-purple text-[1.75rem] md:text-[2.5rem] leading-[1.15]`}
        >
          {event.title}
        </h2>

        <p className="text-secondary text-sm md:text-base leading-[1.65] line-clamp-3">
          {event.excerpt}
        </p>

        <dl className="flex flex-col gap-2.5 text-sigma-black text-[0.875rem]">
          <div className="flex items-center gap-2.5">
            <CalendarDays size={15} className="shrink-0 text-sigma-gold" aria-hidden />
            <dt className="sr-only">Date</dt>
            <dd>
              <time dateTime={event.startsAt}>{event.displayDate}</time>
            </dd>
          </div>
          {event.displayTime && (
            <div className="flex items-center gap-2.5">
              <Clock size={15} className="shrink-0 text-sigma-gold" aria-hidden />
              <dt className="sr-only">Time</dt>
              <dd>{event.displayTime}</dd>
            </div>
          )}
          <div className="flex items-start gap-2.5">
            <MapPin size={15} className="mt-0.5 shrink-0 text-sigma-gold" aria-hidden />
            <dt className="sr-only">Venue</dt>
            <dd>{event.location.name}</dd>
          </div>
        </dl>

        <span className="inline-flex items-center gap-2 self-start border-b-2 border-sigma-purple pb-1 text-sigma-navy font-semibold tracking-[-0.00875rem] transition-colors duration-200 group-hover:text-sigma-purple">
          View event
          <ArrowRight
            size={16}
            aria-hidden
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </span>
      </div>
    </Link>
  );
}

export default EventFeature;

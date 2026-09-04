import { MapPin } from "lucide-react";
import Link from "next/link";

import { goudyOldStyle } from "@/fonts";
import { type ClubEventSummary, eventHref } from "@/lib/events";

import { CoverImage } from "../ui/myImage";

/** The torn-off calendar chip that dates every event image on the site. */
export function DateChip({
  month,
  day,
  className = "",
}: {
  month: string;
  day: string;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`flex w-13 flex-col items-center gap-0.5 bg-white/95 py-2 shadow-[0_1px_6px_rgba(17,24,39,0.18)] ${className}`}
    >
      <span className="text-[0.625rem] uppercase tracking-[0.16em] text-secondary">
        {month}
      </span>
      <span
        className={`${goudyOldStyle.className} text-[1.375rem] leading-none text-sigma-purple`}
      >
        {day}
      </span>
    </div>
  );
}

/** Marks an event that has already been held, wherever one is listed. */
export function PastPill({ className = "" }: { className?: string }) {
  return (
    <span
      className={`bg-sigma-black/75 px-2.5 py-1 text-[0.625rem] uppercase tracking-[0.18em] text-white ${className}`}
    >
      Past
    </span>
  );
}

/** The stacked card used wherever events are shown as a grid. */
function EventCard({ event }: { event: ClubEventSummary }) {
  return (
    <Link href={eventHref(event.slug)} className="group flex flex-col gap-5">
      <div className="relative w-full aspect-4/3 overflow-hidden bg-[#D9D9D9]">
        <CoverImage
          src={event.photo}
          alt={event.title}
          className={`transition-transform duration-500 group-hover:scale-105 ${
            event.isPast ? "grayscale-[0.4]" : ""
          }`}
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        <DateChip
          month={event.displayMonth}
          day={event.displayDay}
          className="absolute left-4 top-4"
        />
        {event.isPast && <PastPill className="absolute right-4 top-4" />}
      </div>

      <div className="flex flex-col gap-3">
        <p
          className={`${goudyOldStyle.className} text-sigma-black uppercase text-[0.75rem] tracking-[0.2em]`}
        >
          {event.category}
        </p>

        <h3
          className={`${goudyOldStyle.className} text-sigma-purple text-[1.125rem] md:text-[1.375rem] leading-snug group-hover:underline underline-offset-4 decoration-sigma-gold`}
        >
          {event.title}
        </h3>

        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.8125rem]">
          <time dateTime={event.startsAt} className="text-sigma-gold font-bold">
            {event.displayDate}
          </time>
          <span className="text-secondary" aria-hidden>
            &bull;
          </span>
          <span className="inline-flex items-center gap-1.5 text-secondary">
            <MapPin size={13} aria-hidden />
            {event.location.name}
          </span>
        </div>

        <p className="text-secondary text-sm leading-[1.6] line-clamp-2">
          {event.excerpt}
        </p>
      </div>
    </Link>
  );
}

export default EventCard;

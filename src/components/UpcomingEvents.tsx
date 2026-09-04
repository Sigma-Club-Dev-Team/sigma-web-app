import Link from "next/link";

import { goudyOldStyle } from "@/fonts";
import {
  type ClubEventSummary,
  eventHref,
  pickPast,
  pickUpcoming,
} from "@/lib/events";

import { CoverImage } from "./ui/myImage";

const LIMIT = 3;

/**
 * The events rail on the home page. It leads with what is still to come, and
 * falls back to the most recent events so the section never sits empty between
 * one edition and the next.
 */
function UpcomingEvents({ events }: { events: ClubEventSummary[] }) {
  const upcoming = pickUpcoming(events).slice(0, LIMIT);
  const showing = upcoming.length > 0 ? upcoming : pickPast(events).slice(0, LIMIT);

  if (showing.length === 0) return null;

  return (
    <section className="flex items-center justify-center flex-col py-15 md:py-30 px-6 md:px-20 gap-12 relative overflow-hidden">
      <div className="flex flex-col items-center justify-center gap-[4px] w-full text-sigma-black">
        <h1
          className={`${goudyOldStyle.className} text-center text-sigma-black text-sm  md:text-[3rem]`}
        >
          {upcoming.length > 0 ? "UPCOMING EVENTS" : "RECENT EVENTS"}
        </h1>
        <div className="w-32 md:w-48.5 h-0.5 bg-sigma-gold"></div>
      </div>

      <div className="flex items-center justify-center md:grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full">
        {showing.map((event) => (
          <Link
            href={eventHref(event.slug)}
            key={event.slug}
            className="group flex items-start flex-col justify-center w-full"
          >
            <div className="relative w-52 md:w-full aspect-square overflow-hidden mb-3 md:mb-6">
              <CoverImage
                src={event.photo}
                alt={event.title}
                className="transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h1
              className={`${goudyOldStyle.className} text-[1rem] md:text-[1.375rem] text-sigma-purple pb-1 group-hover:underline underline-offset-4 decoration-sigma-gold`}
            >
              {event.title}
            </h1>
            <div className="flex items-start justify-center gap-0.5 md:gap-2 text-[0.625rem] md:text-[0.875rem] text-secondary shrink-0">
              <time dateTime={event.startsAt} className="shrink-0">
                {event.displayDate}
              </time>
              <small>•</small>
              <p className="shrink-0">{event.location.name}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex items-center justify-center w-full">
        <Link
          href="/events"
          className="flex items-center justify-center py-3.5 px-6 rounded-md text-sigma-navy font-semibold tracking-[-0.00875rem] bg-transparent border-2 border-sigma-purple transition-colors duration-200 hover:bg-sigma-purple hover:text-white"
        >
          See all Events
        </Link>
      </div>
    </section>
  );
}

export default UpcomingEvents;

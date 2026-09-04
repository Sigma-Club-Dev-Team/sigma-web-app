import Link from "next/link";

import { goudyOldStyle } from "@/fonts";
import type { ClubEventSummary } from "@/lib/events";

import EventCard from "./EventCard";

/** Closes an event page with somewhere else to be. */
function RelatedEvents({ events }: { events: ClubEventSummary[] }) {
  if (events.length === 0) return null;

  return (
    <section className="bg-[#F7F5F1] px-6 md:px-20 py-15 md:py-25">
      <div className="mx-auto w-full max-w-300 flex flex-col gap-10 md:gap-14">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="flex flex-col gap-1">
            <h2
              className={`${goudyOldStyle.className} text-sigma-black text-sm md:text-[1.125rem] uppercase`}
            >
              The Sigma Calendar
            </h2>
            <div className="w-21 h-0.5 bg-sigma-gold" />
            <p
              className={`${goudyOldStyle.className} pt-4 text-sigma-black text-[1.75rem] md:text-[2.5rem] font-bold tracking-[-0.0175rem]`}
            >
              More events
            </p>
          </div>

          <Link
            href="/events"
            className="shrink-0 py-3.5 px-6 rounded-md border-2 border-sigma-purple text-sigma-navy font-semibold tracking-[-0.00875rem] self-start md:self-auto"
          >
            All Events
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {events.map((event) => (
            <EventCard key={event.slug} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default RelatedEvents;

import {
  ArrowUpRight,
  CalendarDays,
  CalendarPlus,
  Clock,
  Layers,
  MapPin,
} from "lucide-react";
import Link from "next/link";

import { goudyOldStyle } from "@/fonts";
import { type ClubEvent, googleCalendarUrl } from "@/lib/events";
import { programmeHref } from "@/lib/programmes";

function Row({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 shrink-0 text-sigma-gold" aria-hidden>
        {icon}
      </span>
      <div className="flex flex-col gap-1">
        <dt className="text-[0.625rem] uppercase tracking-[0.18em] text-white/55">
          {label}
        </dt>
        <dd className="text-[0.9375rem] leading-[1.5] text-white">{children}</dd>
      </div>
    </div>
  );
}

/**
 * The rail beside the body copy: everything a reader needs to actually turn up,
 * and the one button worth pressing. Sticky on desktop so the call to action
 * follows them down a long page.
 */
function EventDetailsCard({ event }: { event: ClubEvent }) {
  return (
    <aside className="flex flex-col gap-6 bg-sigma-purple px-6 py-7 text-white lg:sticky lg:top-32 md:px-8 md:py-8">
      <div className="flex flex-col gap-3">
        <h2
          className={`${goudyOldStyle.className} text-[1.375rem] leading-snug md:text-[1.5rem]`}
        >
          Event details
        </h2>
        <div className="h-px w-full bg-sigma-gold" />
      </div>

      <dl className="flex flex-col gap-5">
        <Row icon={<CalendarDays size={16} />} label="Date">
          <time dateTime={event.startsAt}>{event.displayDate}</time>
        </Row>

        {event.displayTime && (
          <Row icon={<Clock size={16} />} label="Time">
            {event.displayTime}{" "}
            <span className="text-white/55">(WAT)</span>
          </Row>
        )}

        <Row icon={<MapPin size={16} />} label="Venue">
          {event.location.mapUrl ? (
            <a
              href={event.location.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-start gap-1 underline decoration-sigma-gold underline-offset-4 hover:text-sigma-gold transition-colors"
            >
              {event.location.name}
              <ArrowUpRight size={14} className="mt-1 shrink-0" aria-hidden />
            </a>
          ) : (
            event.location.name
          )}
          {event.location.address && (
            <span className="block pt-1 text-[0.8125rem] text-white/65">
              {event.location.address}
            </span>
          )}
        </Row>

        {event.programme && (
          <Row icon={<Layers size={16} />} label="Part of">
            <Link
              href={programmeHref(event.programme.slug)}
              className="underline decoration-sigma-gold underline-offset-4 hover:text-sigma-gold transition-colors"
            >
              {event.programme.title}
            </Link>
          </Row>
        )}
      </dl>

      {event.isPast ? (
        <p className="border-t border-white/20 pt-5 text-[0.8125rem] leading-[1.6] text-white/65">
          This event has already been held. Browse what&apos;s coming up next on
          the{" "}
          <Link
            href="/events"
            className="underline decoration-sigma-gold underline-offset-4 hover:text-sigma-gold transition-colors"
          >
            events page
          </Link>
          .
        </p>
      ) : (
        <div className="flex flex-col gap-3 border-t border-white/20 pt-5">
          {event.registration && (
            <>
              <a
                href={event.registration.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-sigma-gold px-6 py-3.5 font-semibold tracking-[-0.00875rem] text-sigma-black transition-opacity duration-200 hover:opacity-90"
              >
                {event.registration.label}
                <ArrowUpRight size={16} aria-hidden />
              </a>
              {event.registration.note && (
                <p className="text-[0.75rem] leading-[1.5] text-white/60">
                  {event.registration.note}
                </p>
              )}
            </>
          )}

          <a
            href={googleCalendarUrl(event)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-white/30 px-6 py-3 text-[0.875rem] font-semibold tracking-[-0.00875rem] transition-colors duration-200 hover:border-sigma-gold hover:text-sigma-gold"
          >
            <CalendarPlus size={15} aria-hidden />
            Add to calendar
          </a>
        </div>
      )}
    </aside>
  );
}

export default EventDetailsCard;

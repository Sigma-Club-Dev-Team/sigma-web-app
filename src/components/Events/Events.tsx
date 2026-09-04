"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";

import { goudyOldStyle } from "@/fonts";
import {
  type ClubEventSummary,
  type EventCategory,
  pickPast,
  pickUpcoming,
} from "@/lib/events";

import EventCard from "./EventCard";
import EventFeature from "./EventFeature";

const ALL = "ALL";

type Tab = "UPCOMING" | "PAST" | typeof ALL;

const categories: (typeof ALL | EventCategory)[] = [
  ALL,
  "Flagship Events",
  "Impact and outreach",
  "Social & Cultural",
  "Alumni & Networking",
];

function Events({
  events,
  initialCategory = ALL,
  initialQuery = "",
}: {
  events: ClubEventSummary[];
  initialCategory?: string;
  initialQuery?: string;
}) {
  const upcoming = useMemo(() => pickUpcoming(events), [events]);
  const past = useMemo(() => pickPast(events), [events]);

  // Nothing on the calendar yet is no reason to open on an empty tab.
  const [tab, setTab] = useState<Tab>(upcoming.length > 0 ? "UPCOMING" : "PAST");
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [query, setQuery] = useState(initialQuery);

  const tabs: { id: Tab; label: string; count: number }[] = [
    { id: "UPCOMING", label: "Upcoming", count: upcoming.length },
    { id: "PAST", label: "Past", count: past.length },
    { id: ALL, label: "All", count: events.length },
  ];

  const matches = useMemo(() => {
    const pool =
      tab === "UPCOMING" ? upcoming : tab === "PAST" ? past : [...upcoming, ...past];
    const needle = query.trim().toLowerCase();

    return pool.filter((event) => {
      if (activeCategory !== ALL && event.category !== activeCategory) return false;
      if (!needle) return true;

      return `${event.title} ${event.excerpt} ${event.category} ${event.location.name}`
        .toLowerCase()
        .includes(needle);
    });
  }, [tab, upcoming, past, activeCategory, query]);

  // The soonest event leads the page, but only in the unfiltered view — under a
  // search or a category the grid should stay an even comparison.
  const isDefaultView = tab === "UPCOMING" && activeCategory === ALL && !query.trim();
  const featured = isDefaultView ? matches[0] : undefined;
  const grid = featured ? matches.slice(1) : matches;

  const emptyMessage =
    events.length === 0
      ? "Nothing has been added to the calendar yet — do check back shortly."
      : tab === "UPCOMING"
        ? "Nothing on the calendar just yet — the Past tab has every event held so far."
        : "No events match that search yet.";

  return (
    <section className="flex flex-col items-center justify-center py-15 md:py-30 px-6 md:px-40 gap-12 md:gap-16 w-full overflow-hidden">
      <div className="flex w-full flex-col gap-6 md:gap-8">
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4 md:gap-16">
          <nav className="flex items-center justify-center">
            {tabs.map((entry) => {
              const isActive = tab === entry.id;
              return (
                <button
                  key={entry.id}
                  onClick={() => setTab(entry.id)}
                  aria-pressed={isActive}
                  className={`flex items-center justify-center gap-1.5 py-2 px-4 md:py-3.5 md:px-6 md:text-[1.125rem] border-b-[0.125rem] cursor-pointer uppercase shrink-0 ${
                    goudyOldStyle.className
                  } text-sigma-navy transition-colors duration-200 ${
                    isActive ? "border-sigma-navy" : "border-border"
                  }`}
                >
                  <p>{entry.label}</p>
                  <span className="text-[0.75rem] text-secondary">
                    {entry.count}
                  </span>
                </button>
              );
            })}
          </nav>

          <form
            role="search"
            onSubmit={(e) => e.preventDefault()}
            className="border border-border flex items-center justify-between w-full md:max-w-90 h-10 pl-4 gap-2"
          >
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search events, venues or keywords"
              placeholder="Search events, venues or keywords..."
              className="text-secondary text-[0.75rem] w-full outline-none placeholder:text-secondary bg-transparent"
            />
            <button
              type="submit"
              aria-label="Search"
              className="cursor-pointer flex items-center justify-center w-10 h-10 shrink-0 text-secondary hover:text-sigma-purple transition-colors"
            >
              <Search size={16} />
            </button>
          </form>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                aria-pressed={isActive}
                className={`cursor-pointer border px-3 py-1.5 text-[0.6875rem] uppercase tracking-[0.14em] transition-colors duration-200 ${
                  isActive
                    ? "border-sigma-purple bg-sigma-purple text-white"
                    : "border-border text-secondary hover:border-sigma-purple hover:text-sigma-purple"
                }`}
              >
                {category === ALL ? "All categories" : category}
              </button>
            );
          })}
        </div>
      </div>

      {matches.length === 0 ? (
        <p className="text-secondary text-sm md:text-base text-center">
          {emptyMessage}
        </p>
      ) : (
        <div className="flex w-full flex-col gap-12 md:gap-16">
          {featured && <EventFeature event={featured} />}

          {grid.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12.5 md:gap-8 w-full">
              {grid.map((event) => (
                <EventCard key={event.slug} event={event} />
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
}

export default Events;

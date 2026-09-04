"use client";

import { useEffect, useState } from "react";

import { goudyOldStyle } from "@/fonts";

const MINUTE = 60 * 1000;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

function split(remaining: number) {
  return [
    { label: "Days", value: Math.floor(remaining / DAY) },
    { label: "Hrs", value: Math.floor((remaining % DAY) / HOUR) },
    { label: "Mins", value: Math.floor((remaining % HOUR) / MINUTE) },
    { label: "Secs", value: Math.floor((remaining % MINUTE) / 1000) },
  ];
}

/**
 * Time left until an event opens. The server has no idea what the clock reads
 * in the reader's browser, so this renders nothing until it has mounted rather
 * than shipping a figure that would be wrong by the time it arrived.
 */
function EventCountdown({ startsAt }: { startsAt: string }) {
  const [remaining, setRemaining] = useState<number | null>(null);

  useEffect(() => {
    const target = new Date(startsAt).getTime();
    const tick = () => setRemaining(target - Date.now());

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [startsAt]);

  if (remaining === null || remaining <= 0) return null;

  return (
    <div
      role="timer"
      className="flex items-stretch gap-2 md:gap-3"
      aria-label="Time until this event starts"
    >
      {split(remaining).map((unit) => (
        <div
          key={unit.label}
          className="flex min-w-15 md:min-w-18 flex-col items-center gap-1 border border-white/25 bg-white/10 px-2 py-2.5 backdrop-blur-sm"
        >
          <span
            className={`${goudyOldStyle.className} text-white text-[1.5rem] md:text-[1.875rem] leading-none tabular-nums`}
          >
            {String(unit.value).padStart(2, "0")}
          </span>
          <span className="text-[0.5625rem] md:text-[0.625rem] uppercase tracking-[0.18em] text-white/65">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}

export default EventCountdown;

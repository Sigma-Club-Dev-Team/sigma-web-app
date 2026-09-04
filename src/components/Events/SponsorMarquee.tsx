import Image from "next/image";

import { goudyOldStyle } from "@/fonts";
import type { EventSponsor, Sponsor } from "@/lib/events";

/** Below this a scrolling loop looks broken, so the logos simply sit in a row. */
const MIN_TO_SCROLL = 5;

/** Seconds each logo is given on screen; the track's duration scales with it. */
const SECONDS_PER_LOGO = 5;

function SponsorLogo({
  sponsor,
  featured = false,
}: {
  sponsor: Sponsor;
  featured?: boolean;
}) {
  const frame = featured
    ? "h-14 w-36 md:h-18 md:w-52"
    : "h-10 w-28 md:h-12 md:w-36";

  const logo = (
    <span className={`relative block ${frame}`}>
      <Image
        src={sponsor.logo}
        alt={sponsor.name}
        fill
        // Vector logos are already the right size at any scale, and Next won't
        // put an SVG through the optimizer anyway.
        unoptimized={sponsor.logo.toLowerCase().endsWith(".svg")}
        sizes={featured ? "13rem" : "9rem"}
        className="object-contain grayscale opacity-75 transition duration-300 group-hover:grayscale-0 group-hover:opacity-100"
      />
    </span>
  );

  if (!sponsor.website) {
    return <span className="group inline-flex">{logo}</span>;
  }

  return (
    <a
      href={sponsor.website}
      target="_blank"
      rel="noreferrer"
      title={sponsor.name}
      className="group inline-flex"
    >
      {logo}
    </a>
  );
}

function LogoRow({ sponsors }: { sponsors: EventSponsor[] }) {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-16">
      {sponsors.map((entry) => (
        <li key={entry.sponsor.name}>
          <SponsorLogo sponsor={entry.sponsor} />
        </li>
      ))}
    </ul>
  );
}

/**
 * The sponsor band under an event's story. Headline backers get a static row at
 * full size; everyone else scrolls past in a loop that pauses on hover, and
 * turns into a plain scrollable row for readers who ask for less motion.
 */
function SponsorMarquee({
  heading = "Sponsors & Partners",
  sponsors,
}: {
  heading?: string;
  sponsors: EventSponsor[];
}) {
  if (sponsors.length === 0) return null;

  const headline = sponsors.filter((entry) => entry.tier === "Headline");
  const rest = sponsors.filter((entry) => entry.tier !== "Headline");
  const scrolls = rest.length >= MIN_TO_SCROLL;

  return (
    <section className="border-y border-divider bg-white py-14 md:py-20">
      <div className="flex flex-col items-center gap-3 px-6">
        <h2
          className={`${goudyOldStyle.className} text-center text-sigma-black text-[1.25rem] md:text-[1.75rem] uppercase tracking-[0.06em]`}
        >
          {heading}
        </h2>
        <div className="h-0.5 w-24 bg-sigma-gold" />
      </div>

      {headline.length > 0 && (
        <div className="mt-10 flex flex-col items-center gap-5 px-6 md:mt-12">
          <p className="text-[0.625rem] uppercase tracking-[0.22em] text-secondary">
            Headline {headline.length > 1 ? "sponsors" : "sponsor"}
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:gap-x-20">
            {headline.map((entry) => (
              <li key={entry.sponsor.name}>
                <SponsorLogo sponsor={entry.sponsor} featured />
              </li>
            ))}
          </ul>
        </div>
      )}

      {rest.length > 0 &&
        (scrolls ? (
          <div className="sponsor-marquee relative mt-10 overflow-hidden md:mt-14">
            <div
              className="sponsor-marquee__track flex w-max"
              style={
                {
                  "--marquee-duration": `${rest.length * SECONDS_PER_LOGO}s`,
                } as React.CSSProperties
              }
            >
              {[false, true].map((isClone) => (
                <ul
                  key={String(isClone)}
                  aria-hidden={isClone || undefined}
                  className={`flex shrink-0 items-center ${
                    isClone ? "sponsor-marquee__clone" : ""
                  }`}
                >
                  {rest.map((entry) => (
                    <li key={entry.sponsor.name} className="px-7 md:px-11">
                      <SponsorLogo sponsor={entry.sponsor} />
                    </li>
                  ))}
                </ul>
              ))}
            </div>

            {/* Fades the logos out into the band rather than clipping them. */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r from-white to-transparent md:w-28"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l from-white to-transparent md:w-28"
            />
          </div>
        ) : (
          <div className="mt-10 px-6 md:mt-12">
            <LogoRow sponsors={rest} />
          </div>
        ))}
    </section>
  );
}

export default SponsorMarquee;

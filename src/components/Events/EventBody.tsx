import { goudyOldStyle } from "@/fonts";
import type { ClubEvent, EventBlock } from "@/lib/events";

import ProgrammeFacts from "../Programs/ProgrammeFacts";
import { CoverImage } from "../ui/myImage";
import EventAgenda from "./EventAgenda";
import EventDetailsCard from "./EventDetailsCard";

const PARAGRAPH =
  "text-sigma-black text-[0.9375rem] md:text-[1.0625rem] leading-[1.75]";

/** Serif heading over a hairline rule, matching the programme and news pages. */
function BlockHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <h2
        className={`${goudyOldStyle.className} text-sigma-black text-[1.375rem] md:text-[1.75rem] leading-snug`}
      >
        {children}
      </h2>
      <div className="h-px w-full bg-divider" />
    </div>
  );
}

function Block({ block }: { block: EventBlock }) {
  switch (block.kind) {
    case "section":
      return (
        <div className="flex flex-col gap-5 md:gap-6">
          {block.heading && <BlockHeading>{block.heading}</BlockHeading>}
          {block.body.map((paragraph) => (
            <p key={paragraph} className={PARAGRAPH}>
              {paragraph}
            </p>
          ))}
        </div>
      );

    case "image":
      return (
        <figure className={`flex flex-col ${block.caption ? "gap-3" : ""}`}>
          <div className="relative w-full aspect-16/10 bg-[#D9D9D9]">
            <CoverImage
              src={block.src}
              alt={block.alt}
              sizes="(max-width: 1024px) 100vw, 44rem"
            />
          </div>
          {block.caption && (
            <figcaption
              className={`${goudyOldStyle.className} italic text-secondary text-center text-xs md:text-[0.8125rem]`}
            >
              {block.caption}
            </figcaption>
          )}
        </figure>
      );

    case "quote":
      return (
        <blockquote className="flex flex-col gap-4 border-l-2 border-sigma-gold pl-6 md:pl-8">
          <p
            className={`${goudyOldStyle.className} text-sigma-purple text-[1.375rem] md:text-[1.75rem] leading-[1.4]`}
          >
            &ldquo;{block.quote}&rdquo;
          </p>
          {block.attribution && (
            <footer className="text-secondary text-[0.8125rem]">
              <span className="uppercase tracking-[0.14em]">
                {block.attribution}
              </span>
              {block.role && <span> — {block.role}</span>}
            </footer>
          )}
        </blockquote>
      );

    case "list":
      return (
        <div className="flex flex-col gap-5 md:gap-6">
          {block.heading && <BlockHeading>{block.heading}</BlockHeading>}

          {block.ordered ? (
            <ol className="flex flex-col gap-4">
              {block.items.map((item, index) => (
                <li key={item} className={`relative pl-10 ${PARAGRAPH}`}>
                  <span
                    aria-hidden
                    className={`${goudyOldStyle.className} absolute left-0 top-0 text-sigma-gold text-[1.0625rem]`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item}
                </li>
              ))}
            </ol>
          ) : (
            <ul className="flex flex-col gap-3">
              {block.items.map((item) => (
                <li key={item} className={`relative pl-6 ${PARAGRAPH}`}>
                  <span
                    aria-hidden
                    className="absolute left-0 top-[0.65em] size-1.5 rotate-45 bg-sigma-gold"
                  />
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      );

    case "callout":
      return (
        <aside className="flex flex-col gap-4 bg-[#F7F5F1] border-t-2 border-sigma-gold px-6 md:px-8 py-6 md:py-8">
          <h2
            className={`${goudyOldStyle.className} text-sigma-purple text-[1.25rem] md:text-[1.375rem] leading-snug`}
          >
            {block.heading}
          </h2>
          {block.body.map((paragraph) => (
            <p
              key={paragraph}
              className="text-sigma-black text-[0.9375rem] md:text-base leading-[1.7]"
            >
              {paragraph}
            </p>
          ))}
        </aside>
      );

    case "facts":
      return (
        <div className="flex flex-col gap-5 md:gap-6">
          <BlockHeading>{block.heading}</BlockHeading>
          <ProgrammeFacts facts={block.facts} />
        </div>
      );

    case "agenda":
      return (
        <div className="flex flex-col gap-5 md:gap-6">
          <BlockHeading>{block.heading}</BlockHeading>
          <EventAgenda items={block.items} />
        </div>
      );
  }
}

/**
 * The body copy with the details rail beside it. On a narrow screen the rail
 * comes first — the date, the venue and the button are what a reader came for.
 */
function EventBody({ event }: { event: ClubEvent }) {
  return (
    <section className="px-6 md:px-20 py-14 md:py-20">
      <div className="mx-auto grid w-full max-w-300 gap-10 lg:grid-cols-[minmax(0,1fr)_21rem] lg:gap-14 lg:items-start">
        <EventDetailsCard event={event} />

        <div className="flex flex-col gap-10 md:gap-12 lg:order-first">
          <p
            className={`${goudyOldStyle.className} text-sigma-black text-[1.25rem] md:text-[1.5rem] leading-[1.5]`}
          >
            {event.excerpt}
          </p>

          {event.blocks.map((block, index) => (
            <Block key={`${block.kind}-${index}`} block={block} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default EventBody;

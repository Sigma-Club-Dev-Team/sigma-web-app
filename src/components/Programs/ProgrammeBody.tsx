import { goudyOldStyle } from "@/fonts";
import type { Programme, ProgrammeBlock } from "@/lib/programmes";

import { CoverImage } from "../ui/myImage";
import ProgrammeEditions from "./ProgrammeEditions";
import ProgrammeFacts from "./ProgrammeFacts";
import ProgrammeSummaryCard from "./ProgrammeSummaryCard";

/** Serif heading over a hairline rule, used to open every non-image block. */
function BlockHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <h2
        className={`${goudyOldStyle.className} text-sigma-black text-[1.375rem] md:text-[1.5rem] leading-snug`}
      >
        {children}
      </h2>
      <div className="h-px w-full bg-divider" />
    </div>
  );
}

function Block({ block }: { block: ProgrammeBlock }) {
  if (block.kind === "image") {
    return (
      <figure className="flex flex-col gap-4">
        <div className="relative w-full aspect-4/3 bg-[#D9D9D9]">
          <CoverImage
            src={block.src}
            alt={block.alt}
            sizes="(max-width: 768px) 100vw, 60vw"
          />
        </div>
        <figcaption
          className={`${goudyOldStyle.className} italic text-center text-sigma-black text-xs md:text-[0.8125rem]`}
        >
          {block.caption}
        </figcaption>
      </figure>
    );
  }

  return (
    <div className="flex flex-col gap-5 md:gap-6">
      <BlockHeading>{block.heading}</BlockHeading>

      {block.kind === "section" &&
        block.body.map((paragraph) => (
          <p
            key={paragraph}
            className="text-sigma-black text-sm md:text-base leading-[1.55]"
          >
            {paragraph}
          </p>
        ))}

      {block.kind === "facts" && <ProgrammeFacts facts={block.facts} />}
      {block.kind === "editions" && (
        <ProgrammeEditions editions={block.editions} />
      )}
    </div>
  );
}

function ProgrammeBody({
  summary,
  blocks,
}: Pick<Programme, "summary" | "blocks">) {
  return (
    <section className="px-6 md:px-20 py-15 md:py-20">
      <div className="grid gap-10 md:gap-12 md:grid-cols-[29.5rem_1fr] md:items-start">
        <ProgrammeSummaryCard summary={summary} />

        <div className="flex flex-col gap-10 md:gap-14">
          {blocks.map((block, index) => (
            <Block key={`${block.kind}-${index}`} block={block} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProgrammeBody;

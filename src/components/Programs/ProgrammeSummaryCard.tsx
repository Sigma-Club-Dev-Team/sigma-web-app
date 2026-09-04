import { goudyOldStyle } from "@/fonts";
import type { Programme } from "@/lib/programmes";

/** The purple card that sits beside the body copy, summarising the programme. */
function ProgrammeSummaryCard({ summary }: Pick<Programme, "summary">) {
  return (
    <aside className="bg-sigma-purple text-white flex flex-col gap-4 px-6 md:px-8 py-6 md:py-8">
      <div className="flex flex-col gap-3">
        <h2
          className={`${goudyOldStyle.className} text-[1.375rem] md:text-[1.5rem] leading-snug`}
        >
          {summary.heading}
        </h2>
        <div className="h-px w-full bg-sigma-gold" />
      </div>

      <p className="text-sm leading-[1.5]">{summary.body}</p>
    </aside>
  );
}

export default ProgrammeSummaryCard;

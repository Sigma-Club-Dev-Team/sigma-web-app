import type { ProgrammeFact } from "@/lib/programmes";

/** Label/value rows for the at-a-glance details of a programme. */
function ProgrammeFacts({ facts }: { facts: ProgrammeFact[] }) {
  return (
    <dl className="flex flex-col">
      {facts.map((fact) => (
        <div
          key={fact.label}
          className="grid grid-cols-1 md:grid-cols-[13rem_1fr] gap-1 md:gap-6 py-3 border-b border-divider last:border-b-0"
        >
          <dt className="text-secondary text-xs md:text-sm uppercase tracking-[0.04em]">
            {fact.label}
          </dt>
          <dd className="text-sigma-black text-sm md:text-base leading-[1.5]">
            {fact.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export default ProgrammeFacts;

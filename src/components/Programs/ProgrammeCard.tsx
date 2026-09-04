import Link from "next/link";

import { goudyOldStyle } from "@/fonts";
import { type Programme, programmeHref } from "@/lib/programmes";

import { CoverImage } from "../ui/myImage";

function ProgrammeCard({ programme }: { programme: Programme }) {
  return (
    <Link href={programmeHref(programme.slug)} className="flex flex-col gap-6">
      <div className="relative w-full aspect-square">
        <CoverImage src={programme.photo} alt={programme.title} />
      </div>

      <div className="flex flex-col gap-4">
        <h2
          className={`${goudyOldStyle.className} text-sigma-purple text-lg font-normal leading-normal tracking-[-0.01125rem] w-full`}
        >
          {programme.title}
        </h2>
        <p className="text-sigma-black text-[0.8125rem] font-normal leading-normal">
          {programme.desc}
        </p>
      </div>
    </Link>
  );
}

export default ProgrammeCard;

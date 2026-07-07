import { goudyOldStyle } from "@/fonts";
import Link from "next/link";
import React from "react";

function SectionHeader({
  title,
  desc,
  paragraph,
  btntext,
  link,
}: {
  title: string;
  desc: string;
  paragraph: string;
  btntext: string;
  link: string;
}) {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex flex-col items-center justify-center gap-[4px]">
        <h1
          className={`${goudyOldStyle.className} text-center text-sigma-black text-[14px] md:text-[18px]`}
        >
          {title}
        </h1>
        <div className="w-[84px] h-[2px] bg-sigma-gold"></div>
      </div>

      <div className="py-[18px] md:py-[24px] flex items-center text-center justify-center gap-[10px] w-[345px] md:w-[605px]">
        <h1
          className={`${goudyOldStyle.className} font-bold text-[28px] md:text-[48px] tracking-[-0.28px] md:tracking-[-0.48px] md:leading-[52.8px] text-sigma-black`}
        >
          {desc}
        </h1>
      </div>
      <p
        className={`text-sigma-black text-center text-[14px] md:text-[18px] font-normal leading-normal tracking-[-0.14px] pb-[16px] md:pb-[24px] w-[345px] md:w-[800px]`}
      >
        {paragraph}
      </p>
      <Link
        href={link}
        className={`mt-[16px] py-[14px] px-[24px] flex items-center justify-center gap-[4px] bg-transparent border border-sigma-gold text-sigma-gold rounded-[6px] text-[16px] font-semibold tracking-[-0.14px]`}
      >
        {btntext}
      </Link>
    </div>
  );
}

export default SectionHeader;

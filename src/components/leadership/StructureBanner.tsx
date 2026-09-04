import { goudyOldStyle } from "@/fonts";

interface StructureBannerProps {
  title?: string;
  desc?: string;
  bgImageOne?: string;
  bgImageTwo?: string;
}

function StructureBanner({
  title,
  desc,
  bgImageOne,
  bgImageTwo,
}: StructureBannerProps) {
  return (
    <section className="py-20 md:py-25 px-6 md:px-60 bg-sigma-navy flex flex-col items-center justify-center relative text-white overflow-hidden gap-6 md:gap-8">
      <div
        className="absolute -right-1.5 md:-right-6.75 -top-5.5 md:-top-6.5 w-27.75 md:w-41 h-27 md:h-[9.97025rem]  opacity-60 bg-center bg-contain bg-no-repeat pointer-events-none z-0"
        style={{ backgroundImage: `url(${bgImageTwo})` }}
      ></div>
      <div
        className="absolute left-0 md:-left-6.25 bottom-0 md:-bottom-14.75 w-45.5 md:w-30.5 h-22.75 md:h-69.75 md:aspect-122/279 opacity-60 bg-center bg-contain bg-no-repeat pointer-events-none z-0"
        style={{ backgroundImage: `url(${bgImageOne})` }}
      ></div>

      <div className="flex flex-col items-center justify-center gap-2 md:py-6">
        <h1
          className={`${goudyOldStyle.className} text-center text-[2.25rem] md:text-[4rem] leading-[2.6rem] md:leading-[4.4rem] uppercase`}
        >
          {title}
        </h1>
        <div className="w-48.5 h-[2px] bg-sigma-gold"></div>
      </div>

      <p className="w-full max-w-160 text-sm md:text-[1.125rem] tracking-[-0.01125rem] text-center leading-relaxed">
        {desc}
      </p>
    </section>
  );
}

export default StructureBanner;

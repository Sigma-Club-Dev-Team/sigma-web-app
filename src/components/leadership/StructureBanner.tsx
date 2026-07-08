import { goudyOldStyle } from "@/fonts";

function StructureBanner() {
  return (
    <section className="py-20 md:py-25 px-6 md:px-60 bg-sigma-navy flex flex-col items-center justify-center relative text-white overflow-hidden gap-6 md:gap-8">
      <div className="absolute -right-1.5 md:-right-6.75 -top-5.5 md:-top-6.5 w-27.75 md:w-41 h-27 md:h-[9.97025rem]  opacity-60 bg-[url('/assets/images/pngs/crown.png')] bg-center bg-contain bg-no-repeat pointer-events-none z-0"></div>
      <div className="absolute left-0 md:-left-6.25 bottom-0 md:-bottom-14.75 w-45.5 md:w-30.5 h-22.75 md:h-69.75 md:aspect-122/279 opacity-60 bg-[url('/assets/images/pngs/sigma-artifacts3.png')] bg-center bg-contain bg-no-repeat pointer-events-none z-0"></div>

      <div className="flex flex-col items-center justify-center gap-2 md:py-6">
        <h1
          className={`${goudyOldStyle.className} text-center text-[2.25rem] md:text-[4rem] leading-[2.6rem] md:leading-[4.4rem] uppercase`}
        >
          Leadership Structure
        </h1>
        <div className="w-48.5 h-[2px] bg-sigma-gold"></div>
      </div>

      <p className="w-full max-w-160 text-sm md:text-[1.125rem] tracking-[-0.01125rem] text-center leading-relaxed">
        The Club's executive structure has remained consistent across
        generations — a deliberate choice to preserve the institutional
        continuity and values that have defined Sigma Club since its founding.
      </p>
    </section>
  );
}

export default StructureBanner;

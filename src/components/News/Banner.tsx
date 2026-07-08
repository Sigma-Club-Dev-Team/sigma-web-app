import { goudyOldStyle } from "@/fonts";
function Banner() {
  return (
    <section className="py-20 md:py-25 px-6 md:px-60 bg-sigma-navy flex flex-col items-center justify-center relative text-white overflow-hidden gap-6 md:gap-8">
      <div
        className="absolute left-0 md:-left-6.25 bottom-0 md:-bottom-14.75 w-45.5 md:w-30.5 h-22.75 md:h-69.75 md:aspect-122/279 opacity-60 bg-center bg-contain bg-no-repeat pointer-events-none z-0"
        style={{ backgroundImage: `assets/images/pngs/the-thrumpet-man.png` }}
      ></div>

      <div className="flex flex-col items-center justify-center gap-2 md:py-6">
        <h1
          className={`${goudyOldStyle.className} text-center text-[2.25rem] md:text-[4rem] leading-[2.6rem] md:leading-[4.4rem] uppercase`}
        >
          News & Publications
        </h1>
        <div className="w-48.5 h-[2px] bg-sigma-gold"></div>
      </div>
    </section>
  );
}

export default Banner;

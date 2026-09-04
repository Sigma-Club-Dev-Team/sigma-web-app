import { goudyOldStyle } from "@/fonts";

function Banner() {
  return (
    <section className="py-20 md:py-25 px-6 md:px-60 bg-sigma-navy flex flex-col items-center justify-center relative text-white overflow-hidden gap-6 md:gap-8">
      <div className="flex flex-col items-center justify-center gap-2 md:py-6">
        <h1
          className={`${goudyOldStyle.className} text-center text-[2.25rem] md:text-[4rem] leading-[2.6rem] md:leading-[4.4rem] uppercase`}
        >
          Events
        </h1>
        <div className="w-48.5 h-[2px] bg-sigma-gold" />
        <p className="pt-6 text-center text-white/75 text-sm md:text-[1.0625rem] leading-[1.7] md:max-w-160">
          Quizzes, outreaches, lectures and the long-standing traditions of the
          fellowship — everything the club is gathering for, and everything it
          has already held.
        </p>
      </div>
    </section>
  );
}

export default Banner;

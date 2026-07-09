import { goudyOldStyle } from "@/fonts";
function Banner() {
  return (
    <section className="py-20 md:py-25 px-6 md:px-60 bg-sigma-navy flex flex-col items-center justify-center relative text-white overflow-hidden gap-6 md:gap-8">
      <div className="flex flex-col items-center justify-center gap-2 md:py-6">
        <h1
          className={`${goudyOldStyle.className} text-center text-[2.25rem] md:text-[3.5rem] leading-[2.6rem] md:leading-[3.675rem]`}
        >
          Explore the landmark programs directing the course of social impact
          and elite tradition.
        </h1>
      </div>
    </section>
  );
}

export default Banner;

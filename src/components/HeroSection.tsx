import { goudyOldStyle } from "@/fonts";
import { yearsSinceFounding } from "@/lib/club";
import Link from "next/link";

function HeroSection() {
  return (
    <div className="min-h-300 w-full overflow-hidden relative bg-[url('/assets/images/jpgs/heroImage.jpg')]  bg-[lightgray] md:bg-position-[0rem_-21.8846875rem] bg-center bg-cover bg-no-repeat">
      <div className="absolute inset-0 z-0 bg-linear-to-b from-[#202124]/80 to-[#202124]/32"></div>

      <div className="mt-72 md:mt-[39.88rem] flex flex-col items-center gap-4 md:gap-5 px-10 text-white text-center relative z-10">
        <h1
          className={`${goudyOldStyle.className} font-bold  text-[3.125rem] md:text-[4rem] leading-12.5 md:leading-[4.4rem] w-78.25 md:w-full`}
        >
          For All That Is Pure
        </h1>
        <p
          className={`text-[0.875rem] md:text-[1.125rem] tracking-[-0.00875rem] md:tracking-[-0.01125rem] w-78.25 md:w-158 font-normal`}
        >
          A community of scholars, leaders, and changemakers united by a shared
          standard of excellence for over {yearsSinceFounding()} years.
        </p>
        <div className=" flex items-center justify-center gap-4.5 md:gap-6 mt-2 md:mt-5 mb-12 md:mb-39.25 relative z-10">
          <Link
            href="/"
            className={`flex items-center justify-center py-3.5 px-6 rounded-md text-sigma-navy font-semibold tracking-[-0.00875rem] bg-sigma-gold border-2 border-transparent`}
          >
            Donate Today
          </Link>
          <Link
            href="/"
            className={`flex items-center justify-center py-3.5 px-6 rounded-md text-white font-semibold tracking-[-0.00875rem] bg-transparent border-2 border-border`}
          >
            Know About Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

import { goudyOldStyle } from "@/fonts";
import Link from "next/link";

function HeroSection() {
  return (
    <div
      className="min-h-300 w-full overflow-hidden relative bg-[url('/assets/images/jpgs/heroImage.jpg')]  bg-[lightgray] md:bg-position-[0px_-350.155px] bg-center bg-cover bg-no-repeat"
    >
      <div className="absolute inset-0 z-0 bg-linear-to-b from-[#202124]/80 to-[#202124]/32"></div>

      <div className="mt-72 md:mt-[39.88rem] flex flex-col items-center gap-4 md:gap-5 px-10 text-white text-center relative z-10">
        <h1
          className={`${goudyOldStyle.className} font-bold  text-[50px] md:text-[64px] leading-[50px] md:leading-[70.4px] w-[313px] md:w-full`}
        >
          For All That Is Pure
        </h1>
        <p
          className={`text-[14px] md:text-[18px] tracking-[-0.14px] md:tracking-[-0.18px] w-[313px] md:w-[632px] font-normal`}
        >
          A community of scholars, leaders, and changemakers united by a shared
          standard of excellence for over 75 years.
        </p>
        <div className=" flex items-center justify-center gap-[18px] md:gap-[24px] mt-[8px] md:mt-[20px] mb-[48px] md:mb-[157px] relative z-10">
          <Link
            href="/"
            className={`flex items-center justify-center py-[14px] px-[24px] rounded-[6px] text-sigma-navy font-semibold tracking-[-0.14px] bg-sigma-gold border-2 border-transparent`}
          >
            Donate Today
          </Link>
          <Link
            href="/"
            className={`flex items-center justify-center py-[14px] px-6 rounded-[6px] text-white font-semibold tracking-[-0.14px] bg-transparent border-2 border-border`}
          >
            Know About Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

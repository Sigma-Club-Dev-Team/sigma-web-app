import { goudyOldStyle } from "@/fonts";
import Link from "next/link";

function MerchCTA() {
  return (
    <section className="relative overflow-hidden py-[3.75rem] md:py-[7.5rem] px-[2.25rem] md:px-[5rem] bg-[url('/assets/images/pngs/merch-cta.png')] md:bg-[url('/assets/images/pngs/merch-cta-md.png')] bg-[lightgray] bg-center bg-cover bg-no-repeat w-full flex items-center justify-center flex-col">
      <div className="absolute inset-0 bg-[#202124]/70 z-0"></div>

      <div className="relative z-10 flex flex-col items-center justify-center">
        <h1
          className={`${goudyOldStyle.className} text-[1.75rem] md:text-[3.5rem] font-bold text-center text-white w-[20.0625rem] md:w-[65.25rem] md:leading-[3.675rem] pb-[0.41rem] md:pb-[1.5rem]`}
        >
          Represent the Heritage of the Founding Fathers
        </h1>

        <Link
          href={"/merch"}
          className={`mt-4 py-3.5 px-6 flex items-center justify-center gap-1 bg-transparent border border-sigma-gold text-sigma-gold rounded-md text-[0.875rem] font-semibold tracking-[-0.00875rem]`}
        >
          Get our Merch
        </Link>
      </div>
    </section>
  );
}

export default MerchCTA;

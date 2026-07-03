import Image from "next/image";
import { mainBg } from "../../public/assets/images/image";
import { Hamburger, Logo, Search } from "../../public/assets/icons/icons";
import { goudyOldStyle, gouldy, hankeen, inter } from "@/app/layout";
import Link from "next/link";
import Navbar from "./Navbar";

function Header() {
  return (
    <div
      className="min-h-[576px] w-full overflow-hidden relative bg-[url('../../public/assets/images/d27f1edbba75949e084ca9ca7ba55f4fa5ab4141.jpg')]  bg-[lightgray] md:bg-[position:0px_-210.155px] bg-center bg-cover bg-no-repeat
"
      // style={{
      //   backgroundImage: `url(${mainBg.src})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   backgroundRepeat: "no-repeat",
      // }}
    >
      <div className="absolute inset-0 z-0 bg-linear-to-b from-[#202124]/80 to-[#202124]/32"></div>
      <Navbar />

      <div className="mt-[288px] md:mt-[455.44px] flex flex-col items-center gap-[16px] md:gap-[20px] px-[40px] text-white text-center relative z-10">
        <h1
          className={`${goudyOldStyle.className} font-bold  text-[50px] md:text-[64px] leading-[50px] md:leading-[70.4px] w-[313px] md:w-full`}
        >
          For All That Is Pure
        </h1>
        <p
          className={`${hankeen.className} text-[14px] md:text-[18px] tracking-[-0.14px] md:tracking-[-0.18px] w-[313px] md:w-[632px] font-normal`}
        >
          A community of scholars, leaders, and changemakers united by a shared
          standard of excellence for over 75 years.
        </p>
        <div className=" flex items-center justify-center gap-[18px] md:gap-[24px] mt-[8px] md:mt-[20px] mb-[48px] md:mb-[157px] relative z-10">
          <Link
            href="/"
            className={`${hankeen.className} flex items-center justify-center py-[14px] px-[24px] rounded-[6px] text-sigma-navy font-semibold tracking-[-0.14px] bg-sigma-gold border-[2px] border-transparent`}
          >
            Donate Today
          </Link>
          <Link
            href="/"
            className={`${hankeen.className} flex items-center justify-center py-[14px] px-[24px] rounded-[6px] text-white font-semibold tracking-[-0.14px] bg-transparent border-[2px] border-border`}
          >
            Know About Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;

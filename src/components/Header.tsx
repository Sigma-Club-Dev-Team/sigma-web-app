import Image from "next/image";
import { mainBg } from "../../public/assets/images/image";
import { Hamburger, Logo, Search } from "../../public/assets/icons/icons";
import { goudyOldStyle, gouldy, hankeen, inter } from "@/app/layout";
import Link from "next/link";
import Navbar from "./Navbar";

function Header() {
  return (
    <div
      className="min-h-[576px] w-full overflow-hidden relative"
      style={{
        background: `url(${mainBg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 z-0 bg-linear-to-b from-[#202124]/80 to-[#202124]/32"></div>
      <Navbar />

      <div className="mt-[288px] flex flex-col items-center gap-[16px] px-[40px] text-white text-center relative z-10">
        <h1
          className={`${goudyOldStyle.className} font-bold  text-[50px] leading-[50px] w-[313px]`}
        >
          For All That Is Pure
        </h1>
        <p
          className={`${hankeen.className} text-[14px] tracking-[-0.14px] w-[313px] font-normal`}
        >
          A community of scholars, leaders, and changemakers united by a shared
          standard of excellence for over 75 years.
        </p>
        <div className=" flex items-center justify-center gap-[18px] mt-[8px] mb-[48px] relative z-10">
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

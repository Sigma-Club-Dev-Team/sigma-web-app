import Image from "next/image";
import { Hamburger, Logo, Search } from "../../public/assets/icons/icons";
import { goudyOldStyle, hankeen, inter } from "@/app/layout";

function Navbar() {
  return (
    <nav className="min-h-[72px] relative overflow-hidden w-full  ">
      <div className="flex items-center justify-between">
        <span className="cursor-pointer mt-[24px] ml-[24px] mb-[8px] w-[40px] h-[40px] rounded-[5px] border  border-[#E8EDF8]/40 bg-white/20 flex items-center justify-center relative">
          <Image src={Hamburger} fill alt="Hamburger" />
        </span>
        <span className="mt-[12px] flex flex-col items-center gap-[7.02px]">
          <Image src={Logo} width={59.324} height={35.43} alt="" />
          <div className="flex flex-col items-center text-white">
            <h1
              className={`${goudyOldStyle.className} font-bold text-[9.887px]`}
            >
              SIGMA CLUB
            </h1>
            <p className={`${inter.className} text-[4.944px]`}>
              University of Ibadan
            </p>
          </div>
        </span>
        <span className="cursor-pointer mt-[24px] mr-[24px] mb-[8px] w-[40px] h-[40px] rounded-[5px] border  border-[#E8EDF8]/40 bg-white/20 flex items-center justify-center relative">
          <Image src={Search} fill alt="Search" />
        </span>
      </div>
    </nav>
  );
}

export default Navbar;

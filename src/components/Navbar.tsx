// "use client";
import Image from "next/image";
import Link from "next/link";
import {
  Hamburger,
  Logo,
  Search,
  searchIcon,
} from "../../public/assets/icons/icons";
import {
  NavSocials,
  NavRightSide,
  BottomNavLeft,
  BottomNavRight,
} from "@/lib/utils/nav";
import { ChevronDown } from "lucide-react";
import { goudyOldStyle, inter } from "@/fonts";

function Navbar() {
  return (
    <nav className=" fixed top-0 left-0 right-0 z-50 overflow-hidden w-full  flex flex-col items-center justify-center">
      <div className="hidden md:flex items-center justify-between w-full px-[80px] h-[48px] bg-sigma-purple">
        <div className="flex items-center justify-center">
          {NavSocials.map((social, idx) => (
            <Link key={social.id + idx} href={social.link} className="px-[12px]">
              <Image
                src={social.icon}
                alt={social.name}
                width={20}
                height={20}
                className="cursor-pointer"
              />
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-center gap-[24px]">
          <div className="flex items-center justify-center">
            {NavRightSide.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                className={`text-white text-[14px] font-normal`}
              >
                <p className="px-[16px]">{item.name}</p>
              </Link>
            ))}
          </div>

          <div className="flex w-[180px] justify-between items-center border-b border-[#E5E7EB] pb-[2px]">
            <input
              type="text"
              placeholder="Search..."
              className={`bg-transparent italic text-[14px] outline-none  text-[#FFFFFF99]`}
            />
            <Image src={searchIcon} alt="Search" width={16} height={16} />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between min-h-[72px] w-full md:px-[45px] gap-[24px] bg-linear-to-b from-[#20212466] to-[#20212400] md:bg-linear-to-t md:from-black/0 md:to-black/20 mdbackdrop-blur-[10px]">
        <span className="md:hidden cursor-pointer mt-[24px] ml-[24px] mb-[8px] w-[40px] h-[40px] rounded-[5px] border  border-[#E8EDF8]/40 bg-white/20 flex items-center justify-center relative">
          <Image src={Hamburger} fill alt="Hamburger" />
        </span>

        <div className="hidden md:flex items-center justify-center h-[60px]">
          {BottomNavLeft.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className={`text-white text-[14px] font-normal flex items-center gap-[4px] py-[14px] px-[40px] hover:text-sigma-gold transition-colors duration-200`}
            >
              <span>{item.name}</span>
              <ChevronDown size={14} className="" />
            </Link>
          ))}
        </div>

        <span className="mt-[12px] flex flex-col items-center gap-[7.02px] md:gap-[12px] md:py-[16px] md:px-[48px]">
          <Image
            src={Logo}
            width={59.324}
            height={35.43}
            alt=""
            className="md:w-[101.408px] md:h-[60.563px]"
          />
          <div className="flex flex-col items-center text-white">
            <h1
              className={`${goudyOldStyle.className} font-bold text-[9.887px] md:text-[16.901px]`}
            >
              SIGMA CLUB
            </h1>
            <p
              className={`${inter.className} text-[4.944px] md:text-[8.451px] font-500`}
            >
              University of Ibadan
            </p>
          </div>
        </span>

        <div className="hidden md:flex items-center justify-center h-[60px]">
          {BottomNavRight.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className={`text-white text-[14px] font-normal py-[14px] px-[40px] hover:text-sigma-gold transition-colors duration-200`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <span className="md:hidden cursor-pointer mt-[24px] mr-[24px] mb-[8px] w-[40px] h-[40px] rounded-[5px] border  border-[#E8EDF8]/40 bg-white/20 flex items-center justify-center relative">
          <Image src={Search} fill alt="Search" />
        </span>
      </div>
    </nav>
  );
}

export default Navbar;

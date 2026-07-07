"use client";
import { useState, useEffect } from "react";
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
import NavMobile from "./ui/NavMobile";

const aboutLinks = [
  { id: 1, name: "Overview", link: "/" },
  { id: 2, name: "Leadership Structure", link: "/" },
  { id: 3, name: "Roll of Honour", link: "/" },
  { id: 4, name: "Old Sigmites & Chiefs", link: "/" },
  { id: 5, name: "Honorary Sigmites", link: "/" },
];

const ourWorkLinks = [
  { id: 1, name: "All Projects", link: "/" },
  { id: 2, name: "Flagship Projects", link: "/" },
  { id: 3, name: "Impacts and Outreach", link: "/" },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const [showOurWorkDropdown, setShowOurWorkDropdown] = useState(false);
  const [open, setOpen] = useState(false);

  const toggleAboutDropdown = () => {
    setShowAboutDropdown(!showAboutDropdown);
    setShowOurWorkDropdown(false);
  };

  const toggleOurWorkDropdown = () => {
    setShowOurWorkDropdown(!showOurWorkDropdown);
    setShowAboutDropdown(false);
  };

  const toggleNav = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50  w-full flex flex-col items-center justify-center transition-all duration-300 ${isScrolled ? "hidden" : ""}`}
    >
      <div className="hidden md:flex items-center justify-between w-full px-20 h-12 bg-sigma-purple">
        <div className="flex items-center justify-center">
          {NavSocials.map((social, idx) => (
            <Link key={social.id + idx} href={social.link} className="px-3">
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

        <div className="flex items-center justify-center gap-6">
          <div className="flex items-center justify-center">
            {NavRightSide.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                className={`text-white text-sm font-normal`}
              >
                <p className="px-4">{item.name}</p>
              </Link>
            ))}
          </div>

          <div className="flex w-45 justify-between items-center border-b border-[#E5E7EB] pb-0.5">
            <input
              type="text"
              placeholder="Search..."
              className={`bg-transparent italic text-sm outline-none  text-[#FFFFFF99]`}
            />
            <Image src={searchIcon} alt="Search" width={16} height={16} />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between min-h-18 w-full md:px-11.25 gap-6 bg-linear-to-b from-[#20212466] to-[#20212400] md:bg-linear-to-t md:from-black/0 md:to-black/20 mdbackdrop-blur-[0.625rem]">
        <span
          onClick={toggleNav}
          className="md:hidden cursor-pointer mt-6 ml-6 mb-2 w-10 h-10 rounded-[0.3125rem] border  border-[#E8EDF8]/40 bg-white/20 flex items-center justify-center relative"
        >
          <Image src={Hamburger} fill alt="Hamburger" />
        </span>

        {open && <NavMobile closeNav={toggleNav} />}

        <div className="hidden md:flex items-center justify-center h-15 relative">
          {BottomNavLeft.map((item) => (
            <div key={item.id} className="relative h-full flex items-center">
              {item.id === 3 ? (
                <Link
                  href={item.link}
                  className={`text-white text-sm font-normal flex items-center gap-1 py-3.5 px-10 hover:text-sigma-gold transition-colors duration-200`}
                >
                  <span>{item.name}</span>
                </Link>
              ) : (
                <button
                  className={`cursor-pointer text-white text-sm font-normal flex items-center gap-1 py-3.5 px-10 hover:text-sigma-gold transition-colors duration-200`}
                  onClick={() => {
                    if (item.id === 1) toggleAboutDropdown();
                    if (item.id === 2) toggleOurWorkDropdown();
                  }}
                >
                  <span>{item.name}</span>
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${
                      (item.id === 1 && showAboutDropdown) ||
                      (item.id === 2 && showOurWorkDropdown)
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </button>
              )}

              {item.id === 1 && showAboutDropdown && (
                <div
                  className={`absolute mx-10 top-full left-0 bg-white flex flex-col items-start justify-center shadow-[1px_0_3px_0_rgba(100,95,88,0.25)] w-50 z-50 `}
                >
                  {aboutLinks.map((link) => (
                    <Link
                      key={link.id}
                      href={link.link}
                      className="bg-white border-b border-border py-4 px-6 flex items-center w-full hover:bg-slate-50 transition-colors duration-150"
                    >
                      <p className="text-sigma-purple text-sm font-semibold tracking-[-0.01rem]">
                        {link.name}
                      </p>
                    </Link>
                  ))}
                </div>
              )}

              {item.id === 2 && showOurWorkDropdown && (
                <div className="absolute mx-10 top-full left-0 bg-white flex flex-col items-start justify-center shadow-[1px_0_3px_0_rgba(100,95,88,0.25)] w-50 z-50">
                  {ourWorkLinks.map((link) => (
                    <Link
                      key={link.id}
                      href={link.link}
                      className="bg-white border-b border-border py-4 px-6 flex items-center w-full hover:bg-sigma-purple/3 transition-colors duration-150"
                    >
                      <p className="text-sigma-purple text-sm font-semibold tracking-[-0.01rem]">
                        {link.name}
                      </p>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <span className="mt-3 flex flex-col items-center gap-[0.43875rem] md:gap-3 md:py-4 md:px-12">
          <Image
            src={Logo}
            width={59.324}
            height={35.43}
            alt=""
            className="md:w-[6.338rem] md:h-[3.78519rem]"
          />
          <div className="flex flex-col items-center text-white">
            <h1
              className={`${goudyOldStyle.className} font-bold text-[0.61794rem] md:text-[1.05631rem]`}
            >
              SIGMA CLUB
            </h1>
            <p
              className={`${inter.className} text-[0.309rem] md:text-[0.52819rem] font-500`}
            >
              University of Ibadan
            </p>
          </div>
        </span>

        <div className="hidden md:flex items-center justify-center h-15">
          {BottomNavRight.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className={`text-white text-sm font-normal py-3.5 px-10 hover:text-sigma-gold transition-colors duration-200`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <span className="md:hidden cursor-pointer mt-6 mr-6 mb-2 w-10 h-10 rounded-[0.3125rem] border  border-[#E8EDF8]/40 bg-white/20 flex items-center justify-center relative">
          <Image src={Search} fill alt="Search" />
        </span>
      </div>
    </nav>
  );
}

export default Navbar;

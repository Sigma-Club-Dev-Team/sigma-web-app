"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  { id: 2, name: "Leadership Structure", link: "/leadership" },
  { id: 3, name: "Roll of Honour", link: "/" },
  { id: 4, name: "Old Sigmites & Chiefs", link: "/old-sigmites-and-chiefs" },
  { id: 5, name: "Honorary Sigmites", link: "/honourary-sigmites" },
];

const ourWorkLinks = [
  { id: 1, name: "All Projects", link: "/programs" },
  { id: 2, name: "Flagship Projects", link: "/" },
  { id: 3, name: "Impacts and Outreach", link: "/" },
];

import purpleLogo from "../../public/assets/icons/logo-purple.svg.svg";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const [showOurWorkDropdown, setShowOurWorkDropdown] = useState(false);
  const [open, setOpen] = useState(false);
  const lastScrollY = useRef(0);
  const wasScrolled = useRef(false);
  const pathname = usePathname();

  const isHome = pathname === "/";

  // Once scrolled, every page gets the same frosted bar, so nav content
  // switches to dark ink the way it already does on the inner pages.
  const onLightBg = !isHome || isScrolled;

  const barBackground = isScrolled
    ? "bg-white/70 backdrop-blur-xl shadow-[0_1px_3px_0_rgba(100,95,88,0.15)]"
    : isHome
      ? "bg-linear-to-t md:from-black/0 md:to-black/20 md:backdrop-blur-[0.625rem]"
      : "bg-white";

  // The collapsed bar pulls the six links together so they fit beside the logo.
  const navLinkPadding = isScrolled ? "px-3 lg:px-6" : "px-10";

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
      const y = window.scrollY;
      const delta = y - lastScrollY.current;

      const scrolled = y > 10;
      setIsScrolled(scrolled);

      // A dropdown left hanging while the bar re-flows looks detached.
      if (scrolled !== wasScrolled.current) {
        wasScrolled.current = scrolled;
        setShowAboutDropdown(false);
        setShowOurWorkDropdown(false);
      }

      // Socials strip: always there at the top, otherwise it follows the
      // scroll direction — away going down, back on the way up.
      if (y <= 10) {
        setShowTopBar(true);
        lastScrollY.current = y;
      } else if (Math.abs(delta) > 5) {
        setShowTopBar(delta < 0);
        lastScrollY.current = y;
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full flex flex-col items-center
      justify-center transition-all duration-300`}
    >
      <div
        className={`hidden md:flex items-center justify-between w-full px-20 overflow-hidden
        transition-all duration-300 ${isScrolled ? "bg-sigma-purple/80 backdrop-blur-md" : "bg-sigma-purple"}
        ${showTopBar ? "h-12 opacity-100" : "h-0 opacity-0"}`}
      >
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

      <div
        className={`relative flex items-center justify-between w-full min-h-18 md:min-h-0
        md:px-11.25 gap-6 md:gap-0 transition-all duration-500 ${barBackground}
        ${isScrolled ? "md:h-19" : "md:h-[9.65rem]"}`}
      >
        <span
          onClick={toggleNav}
          className={`md:hidden cursor-pointer mt-6 ml-6 mb-2 w-10 h-10 rounded-[0.3125rem] border flex items-center justify-center relative
          ${onLightBg ? "border-sigma-navy/15 bg-sigma-navy/5" : "border-[#E8EDF8]/40 bg-white/20"}`}
        >
          <Image
            src={Hamburger}
            fill
            alt="Hamburger"
            className={onLightBg ? "brightness-0 opacity-55" : ""}
          />
        </span>

        {open && <NavMobile closeNav={toggleNav} />}

        {/* Growing this spacer slides both link groups over to the right,
            clearing the left edge for the collapsed logo. */}
        <div
          className={`hidden md:block basis-0 shrink-0 transition-all duration-500
          ${isScrolled ? "grow" : "grow-0"}`}
        />

        <div className="hidden md:flex items-center justify-center h-15 relative">
          {BottomNavLeft.map((item) => (
            <div
              key={item.id}
              className={`relative h-full flex items-center text-sm font-normal
              ${onLightBg ? "text-sigma-navy" : "text-white"}`}
            >
              {item.id === 3 ? (
                <Link
                  href={item.link}
                  className={`flex items-center gap-1 py-3.5 ${navLinkPadding} hover:text-sigma-gold transition-all duration-300`}
                >
                  <span>{item.name}</span>
                </Link>
              ) : (
                <button
                  className={`cursor-pointer flex items-center gap-1 py-3.5 ${navLinkPadding} hover:text-sigma-gold transition-all duration-300`}
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
                  className={`absolute ${isScrolled ? "mx-3 lg:mx-6" : "mx-10"} top-full left-0 bg-white flex flex-col items-start justify-center shadow-[1px_0_3px_0_rgba(100,95,88,0.25)] w-50 z-50`}
                >
                  {aboutLinks.map((link) => (
                    <Link
                      key={link.id}
                      href={link.link}
                      onClick={() => setShowAboutDropdown(false)}
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
                <div
                  className={`absolute ${isScrolled ? "mx-3 lg:mx-6" : "mx-10"} top-full left-0 bg-white flex flex-col items-start justify-center shadow-[1px_0_3px_0_rgba(100,95,88,0.25)] w-50 z-50`}
                >
                  {ourWorkLinks.map((link) => (
                    <Link
                      key={link.id}
                      href={link.link}
                      onClick={() => setShowOurWorkDropdown(false)}
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

        {/* The mirror spacer: it holds the centred logo's gap open until the
            bar collapses, then hands that space to the one on the left. */}
        <div
          className={`hidden md:block basis-0 shrink-0 transition-all duration-500
          ${isScrolled ? "grow-0" : "grow"}`}
        />

        <Link
          href={"/"}
          className={`mt-3 flex flex-col items-center gap-[0.43875rem]
          md:mt-0 md:absolute md:top-1/2 md:-translate-y-1/2 md:transition-all md:duration-500
          ${isScrolled ? "md:left-11.25 md:translate-x-0 md:gap-1" : "md:left-1/2 md:-translate-x-1/2 md:gap-3"}`}
        >
          <Image
            src={onLightBg ? purpleLogo : Logo}
            width={59.324}
            height={35.43}
            alt=""
            className={`md:transition-all md:duration-500
            ${isScrolled ? "md:w-[3.17rem] md:h-[1.893rem]" : "md:w-[6.338rem] md:h-[3.78519rem]"}`}
          />
          <div
            className={`flex flex-col items-center ${onLightBg ? "text-sigma-navy" : "text-white"}`}
          >
            <h1
              className={`${goudyOldStyle.className} font-bold text-[0.61794rem] md:transition-all md:duration-500
              ${isScrolled ? "md:text-[0.72rem]" : "md:text-[1.05631rem]"}`}
            >
              SIGMA CLUB
            </h1>
            <p
              className={`${inter.className} text-[0.309rem] font-500 md:transition-all md:duration-500
              ${isScrolled ? "md:text-[0.36rem]" : "md:text-[0.52819rem]"}`}
            >
              University of Ibadan
            </p>
          </div>
        </Link>

        <div
          className={`hidden md:flex items-center justify-center h-15 ${onLightBg ? "text-sigma-navy" : "text-white"}`}
        >
          {BottomNavRight.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className={`text-sm font-normal py-3.5 ${navLinkPadding} hover:text-sigma-gold transition-all duration-300`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <span
          className={`md:hidden cursor-pointer mt-6 mr-6 mb-2 w-10 h-10 rounded-[0.3125rem] border flex items-center justify-center relative
          ${onLightBg ? "border-sigma-navy/15 bg-sigma-navy/5" : "border-[#E8EDF8]/40 bg-white/20"}`}
        >
          <Image
            src={Search}
            fill
            alt="Search"
            className={onLightBg ? "brightness-0 opacity-55" : ""}
          />
        </span>
      </div>
    </nav>
  );
}

export default Navbar;

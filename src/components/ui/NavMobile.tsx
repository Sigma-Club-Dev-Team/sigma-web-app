import { ContainImage } from "./myImage";
import Link from "next/link";

const mobileNavlinks = [
  { id: 1, name: "About", link: "/" },
  { id: 2, name: "Our Work", link: "/" },
  { id: 3, name: "News", link: "/" },
  { id: 4, name: "Donate", link: "/" },
  { id: 5, name: "Marketplace", link: "/" },
  { id: 6, name: "Events", link: "/" },
  { id: 7, name: "Alumni", link: "/" },
  { id: 8, name: "Press Hub", link: "/" },
  { id: 9, name: "The Archive", link: "/" },
  { id: 10, name: "Join Sigma", link: "/" },
];

import { ChevronDown } from "lucide-react";
import { goudyOldStyle } from "@/fonts";

interface navMobileProps {
  closeNav: () => void;
}

function NavMobile({ closeNav }: navMobileProps) {
  return (
    <div className="md:hidden flex flex-col justify-between w-full h-screen bg-sigma-purple absolute z-100 top-0 p-6 ">
      <div className="flex items-center flex-col gap-10.25 ">
        <div className="flex items-center justify-between w-full">
          <Link href={"/"} className="relative w-[3.70775rem] h-[2.21438rem]">
            <ContainImage src="/assets/icons/logo-white.svg" alt="Sigma Logo" />
          </Link>
          <button
            onClick={closeNav}
            className="relative w-10 h-10 aspect-square cursor-pointer"
          >
            <ContainImage src="/assets/icons/close.svg" alt="Close" />
          </button>
        </div>

        <div className="w-full">
          <div
            className={`${goudyOldStyle.className} max-h-88 flex flex-wrap items-start flex-col text-white text-[1.25rem] font-bold tracking-[-0.0125rem]`}
          >
            {mobileNavlinks.map((item) => (
              <div key={item.id}>
                {item.id === 1 || item.id === 2 ? (
                  <button className="flex items-center justify-center py-3.5 px-4 gap-1 cursor-pointer">
                    <p>{item.name}</p>
                    <ChevronDown className="-rotate-90 w-6 h-6" />
                  </button>
                ) : (
                  <Link
                    href={item.link}
                    className="flex text-white py-3.5 px-4"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Link
        href={"/"}
        className="bg-sigma-gold w-full flex items-center justify-center py-3.5 px-6 rounded-md text-[0.875rem] text-sigma-navy font-semibold tracking-[-0.00875rem]"
      >
        Donate Today
      </Link>
    </div>
  );
}

export default NavMobile;

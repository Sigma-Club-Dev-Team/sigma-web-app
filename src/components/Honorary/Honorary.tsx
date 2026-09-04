import { goudyOldStyle } from "@/fonts";
import { ChevronDown, Search } from "lucide-react";
import { CoverImage } from "../ui/myImage";

const honorarySigmites = [
  {
    id: 1,
    name: "Hon. Name Tag",
    photo: "/assets/images/jpgs/sigma-chief.jpg",
    year: 1950,
  },
  {
    id: 2,
    name: "Hon. Name Tag",
    photo: "/assets/images/jpgs/sigma-chief.jpg",
    year: 1950,
  },
  {
    id: 3,
    name: "Hon. Name Tag",
    photo: "/assets/images/jpgs/sigma-chief.jpg",
    year: 1950,
  },
  {
    id: 4,
    name: "Hon. Name Tag",
    photo: "/assets/images/jpgs/sigma-chief.jpg",
    year: 1950,
  },
  {
    id: 5,
    name: "Hon. Name Tag",
    photo: "/assets/images/jpgs/sigma-chief.jpg",
    year: 1950,
  },
  {
    id: 6,
    name: "Hon. Name Tag",
    photo: "/assets/images/jpgs/sigma-chief.jpg",
    year: 1950,
  },
];

function Honorary() {
  return (
    <section className="flex flex-col items-center justify-center py-15 md:py-30 px-6 md:px-40 gap-16 md:gap-15 w-full overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-center w-full gap-4 md:gap-10">
        <div className="border border-border flex items-center justify-between w-full md:w-72.5 h-10 shrink-0">
          <p className="text-[0.75rem] text-shadow-black font-bold pl-4">
            ALL YEAR
          </p>
          <button className="cursor-pointer flex items-center justify-center bg-sigma-gold w-10 h-10 shrink-0 hover:bg-sigma-gold/90 transition-colors">
            <ChevronDown size={16} />
          </button>
        </div>

        <div className="border border-border flex items-center justify-between w-full md:w-72.5 h-10 shrink-0">
          <p className="text-[0.75rem] text-shadow-black font-bold pl-4">
            ALL TITLES
          </p>
          <button className="cursor-pointer flex items-center justify-center bg-sigma-gold w-10 h-10 shrink-0 hover:bg-sigma-gold/90 transition-colors">
            <ChevronDown size={16} />
          </button>
        </div>

        <div className="border border-border flex items-center justify-between w-full h-10 pl-4 gap-2">
          <input
            placeholder="Search Honorary Sigmite"
            className="text-secondary text-[0.75rem] w-full outline-none placeholder:text-secondary bg-transparent"
          />
          <button className="cursor-pointer flex items-center justify-center w-10 h-10 shrink-0 text-secondary hover:text-sigma-purple transition-colors">
            <Search size={16} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full">
        {honorarySigmites.map((honorarySigmite) => (
          <div
            key={honorarySigmite.id}
            className="flex flex-col items-center md:items-start gap-4 w-full"
          >
            <div className="relative w-full aspect-square bg-[#D9D9D9] overflow-hidden">
              <CoverImage
                src={honorarySigmite.photo}
                alt={honorarySigmite.name}
                position="0px 0.485px"
              />
            </div>
            <div className="flex flex-col items-start justify-center gap-2 w-full">
              <h3
                className={`text-sigma-gold text-[1.375rem] ${goudyOldStyle.className}`}
              >
                {honorarySigmite.name}
              </h3>
              <p className="text-sigma-black text-[1.125rem] tracking-[-0.01125rem]">
                Admitted in {honorarySigmite.year}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Honorary;

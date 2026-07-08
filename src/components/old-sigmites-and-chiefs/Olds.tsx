import { ChevronDown, Search } from "lucide-react";

const oldsDirectory = [
  {
    id: 1,
    year: "1950",
    name: "John Watson Brown",
    title: "Sigma Chief",
  },
  {
    id: 2,
    year: "1950",
    name: "Guy Hawkins Franklin",
    title: "Deputy Chief",
  },
  {
    id: 3,
    year: "1950",
    name: "Lex Luthor Alexander",
    title: "Chief Scribe",
  },
  {
    id: 4,
    year: "1950",
    name: "Kristian Harry Murphy",
    title: "Financial Scribe",
  },
  {
    id: 5,
    year: "1950",
    name: "Jacob Jeremy Jones",
    title: "Deputy Scribe",
  },
  {
    id: 6,
    year: "1950",
    name: "Cody Larson Fisher",
    title: "Publicity Committee Chairman",
  },
  {
    id: 7,
    year: "1950",
    name: "Floyd Williams Miles",
    title: "Investment and Special Duties Committee Chairman",
  },
  {
    id: 8,
    year: "1950",
    name: "John Kennedy Cooper",
    title: "Security Committee Chairman",
  },
  {
    id: 9,
    year: "1950",
    name: "Darrell Stan Steward",
    title: "Sigmite",
  },
];

function Olds() {
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
            placeholder="Search Sigmite"
            className="text-secondary text-[0.75rem] w-full outline-none placeholder:text-secondary bg-transparent"
          />
          <button className="cursor-pointer flex items-center justify-center w-10 h-10 shrink-0 text-secondary hover:text-sigma-purple transition-colors">
            <Search size={16} />
          </button>
        </div>
      </div>

      <div className="w-full flex flex-col gap-1">
        {oldsDirectory.map((old) => (
          <div
            key={old.id}
            className={`grid grid-cols-[4rem_1fr_9rem] md:grid-cols-[6.25rem_25rem_30rem] justify-between text-left py-3 px-4 items-center md:text-[1.125rem] w-full ${
              old.id % 2 === 0 ? "bg-[#e8edf8]" : "bg-white"
            }`}
          >
            <p className="text-sigma-black">{old.year}</p>
            <p className="text-sigma-navy">{old.name}</p>
            <p className="text-sigma-black">{old.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Olds;

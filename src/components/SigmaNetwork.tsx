import { goudyOldStyle } from "@/fonts";

function SigmaNetwork() {
  return (
    <section className="px-6 md:px-20 py-30 flex flex-col items-center gap-16 md:gap-12 bg-sigma-navy relative">
      <div className="flex items-center flex-col text-center text-white md:gap-[px]">
        <h2
          className={`${goudyOldStyle.className} text-center text-sigma-white pb-4.5 text-[1.75rem] tracking-[-0.0175rem] font-bold`}
        >
          The Sigma Club Network
        </h2>

        <p className={`text-sm tracking-[-0.00875rem] md:text-lg`}>
          Our network of student leaders, alumni, and honorary inductees is at
          the heart of what we do. Through world-class civic lectures, secondary
          school academic development, and targeted humanitarian initiatives,
          Sigma Club instills the essential virtues of integrity and
          responsibility in the next generation.{" "}
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-10 md:gap-12 text-white w-full">
        <div className="flex flex-col items-start gap-2 w-full md:w-70">
          <div className="w-full h-0.5 bg-sigma-gold"></div>
          <h4
            className={`${goudyOldStyle.className} text-[1.375rem] text-sigma-white`}
          >
            75+ Years
          </h4>
          <p className={` text-[0.8125rem] w-70`}>
            of continuous student leadership and character development.
          </p>
        </div>

        <div className="flex flex-col items-start gap-2 w-full md:w-70">
          <div className="w-full h-0.5 bg-sigma-gold"></div>
          <h4
            className={`${goudyOldStyle.className} text-[1.375rem] text-sigma-white`}
          >
            1,000+ Schools
          </h4>
          <p className={`text-[0.8125rem] w-70`}>
            engaged through academic quiz competitions.
          </p>
        </div>

        <div className="flex flex-col items-start gap-2 w-full md:w-70">
          <div className="w-full h-0.5 bg-sigma-gold"></div>
          <h4
            className={`${goudyOldStyle.className} text-[1.375rem] text-sigma-white`}
          >
            100% Volunteer-Led
          </h4>
          <p className={`text-[0.8125rem] w-70`}>
            undergraduate administrative and philanthropic execution.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SigmaNetwork;

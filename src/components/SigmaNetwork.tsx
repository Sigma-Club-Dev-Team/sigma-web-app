import { goudyOldStyle, hankeen } from "@/app/layout";

function SigmaNetwork() {
  return (
    <section className="px-[24px] md:px-[80px] py-[120px] flex flex-col items-center gap-[64px] md:gap-[48px] bg-sigma-navy">
      <div className="flex items-center flex-col text-center text-white md:gap-[px]">
        <h2
          className={`${goudyOldStyle.className} text-center text-sigma-white pb-[18px] text-[28px] tracking-[-0.28px] font-bold`}
        >
          The Sigma Club Network
        </h2>

        <p
          className={`${
            hankeen.className
          } text-[14px] tracking-[-0.14px] md:text-[18px]`}
        >
          Our network of student leaders, alumni, and honorary inductees is at
          the heart of what we do. Through world-class civic lectures, secondary
          school academic development, and targeted humanitarian initiatives,
          Sigma Club instills the essential virtues of integrity and
          responsibility in the next generation.{" "}
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-[40px] md:gap-[48px] text-white w-full">
        <div className="flex flex-col items-start gap-[8px] w-full md:w-[280px]">
          <div className="w-full h-[2px] bg-sigma-gold"></div>
          <h4
            className={`${goudyOldStyle.className} text-[22px] text-sigma-white`}
          >
            75+ Years
          </h4>
          <p className={`${hankeen.className} text-[13px] w-[280px]`}>
            of continuous student leadership and character development.
          </p>
        </div>

        <div className="flex flex-col items-start gap-[8px] w-full md:w-[280px]">
          <div className="w-full h-[2px] bg-sigma-gold"></div>
          <h4
            className={`${goudyOldStyle.className} text-[22px] text-sigma-white`}
          >
            1,000+ Schools
          </h4>
          <p className={`${hankeen.className} text-[13px] w-[280px]`}>
            engaged through academic quiz competitions.
          </p>
        </div>

        <div className="flex flex-col items-start gap-[8px] w-full md:w-[280px]">
          <div className="w-full h-[2px] bg-sigma-gold"></div>
          <h4
            className={`${goudyOldStyle.className} text-[22px] text-sigma-white`}
          >
            100% Volunteer-Led
          </h4>
          <p className={`${hankeen.className} text-[13px] w-[280px]`}>
            undergraduate administrative and philanthropic execution.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SigmaNetwork;

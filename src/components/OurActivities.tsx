import Link from "next/link";
import { goudyOldStyle } from "@/fonts";
import { CoverImage } from "./ui/myImage";

export const Activities = [
  {
    id: 1,
    link: "/",
    photo: "/assets/images/pngs/roseline.png",
    title: "Roseline Etuokwu Quiz Competition",
    desc: "Elevating academic standards and expanding educational access for thousands of students across the South-West.",
  },
  {
    id: 2,
    link: "/",
    photo: "/assets/images/pngs/mtn-ceo.png",
    title: "The National Public Lecture Series",
    desc: "Convening business leaders, policymakers, and academics to solve pressing socioeconomic and technological challenges.",
  },
  {
    id: 3,
    link: "/",
    photo: "/assets/images/pngs/scholarship.png",
    title: "SIGMA Scholarship Scheme",
    desc: "Providing vital undergraduate funding to indigent students and deploying wellness resources to underserved populations.",
  },
];

function OurActivities() {
  return (
    <section className="px-[24px] md:px-[80px] pt-[60px] pb-[80px] md:pt-[120px] md:pb-[160px] flex flex-col items-center gap-[48px]">
      <div className="flex items-center justify-center flex-col gap-[48px] w-full">
        <div className="flex items-center justify-center md:justify-between w-full flex-col md:flex-row">
          <div className="flex flex-col items-center justify-center md:items-start w-ful">
            <div className="flex flex-col items-center md:items-start justify-center gap-[4px]">
              <h1
                className={`${goudyOldStyle.className} text-center md:text-left text-sigma-black text-[14px] md:text-[18px]`}
              >
                OUR ACTIVITIES
              </h1>
              <div className="w-[84px] h-[2px] bg-sigma-gold"></div>
            </div>

            <div className="py-[18px] md:py-[24px] flex items-center text-center md:items-start md:text-left justify-center md:justify-start gap-[10px] w-[345px] md:w-[800px] ">
              <h1
                className={`${goudyOldStyle.className} font-bold text-[28px] md:text-[48px] tracking-[-0.28px] md:tracking-[-0.48px] md:leading-[52.8px] text-sigma-black`}
              >
                Our Philanthropic Activities
              </h1>
            </div>
            <p
              className={`text-sigma-black text-center md:text-left text-[14px] md:text-[18px] font-normal leading-normal tracking-[-0.14px] pb-[16px] md:pb-[24px] w-[345px] md:w-[800px]`}
            >
              The Sigma Club is building a movement of student leaders,
              philanthropists, and reputable figures who believe that character
              and intellect are vital to a progressive society.
            </p>
          </div>
          <Link
            href={"."}
            className={`mt-[16px] py-[14px] px-[24px] flex items-center justify-center gap-[4px] bg-transparent border border-sigma-gold text-sigma-gold rounded-[6px] text-[16px] font-semibold tracking-[-0.14px]`}
          >
            Explore Our Impact
          </Link>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-[50px] md:gap-[16px] w-[345px] md:w-full">
        {Activities.map((activities) => (
          <Link
            href={activities.link}
            key={activities.id}
            className="flex flex-col gap-6"
          >
            <div className="relative w-full aspect-square">
              <CoverImage src={activities.photo} alt={activities.title} />
            </div>

            <div className="flex flex-col gap-4">
              <h1
                className={`${goudyOldStyle.className} text-sigma-purple text-[18px] font-normal leading-normal tracking-[-0.18px] w-full`}
              >
                {activities.title}
              </h1>
              <p
                className={`text-sigma-black text-[13px] font-normal leading-normal`}
              >
                {activities.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default OurActivities;

import Link from "next/link";
import { goudyOldStyle } from "@/fonts";
import { getProgrammes, programmeHref } from "@/lib/programmes";
import { CoverImage } from "./ui/myImage";

async function OurActivities() {
  const programmes = await getProgrammes();

  return (
    <section className="px-6 md:px-20 pt-15 pb-20 md:pt-30 md:pb-40 flex flex-col items-center gap-12">
      <div className="flex items-center justify-center flex-col gap-12 w-full">
        <div className="flex items-center justify-center md:justify-between w-full flex-col md:flex-row">
          <div className="flex flex-col items-center justify-center md:items-start w-ful">
            <div className="flex flex-col items-center md:items-start justify-center gap-1">
              <h1
                className={`${goudyOldStyle.className} text-center md:text-left text-sigma-black text-sm md:text-lg`}
              >
                OUR ACTIVITIES
              </h1>
              <div className="w-21 h-[2px] bg-sigma-gold"></div>
            </div>

            <div className="py-4.5 md:py-6 flex items-center text-center md:items-start md:text-left justify-center md:justify-start gap-2.5 w-86.25 md:w-200 ">
              <h1
                className={`${goudyOldStyle.className} font-bold text-[1.75rem] md:text-[3rem] tracking-[-0.0175rem] md:tracking-[-0.03rem] md:leading-[3.3rem] text-sigma-black`}
              >
                Our Philanthropic Activities
              </h1>
            </div>
            <p
              className={`text-sigma-black text-center md:text-left text-sm md:text-lg font-normal leading-normal tracking-[-0.00875rem] pb-4 md:pb-6 w-86.25 md:w-200`}
            >
              The Sigma Club is building a movement of student leaders,
              philanthropists, and reputable figures who believe that character
              and intellect are vital to a progressive society.
            </p>
          </div>
          <Link
            href="/programs"
            className={`mt-4 py-3.5 px-6 flex items-center justify-center gap-1 bg-transparent border border-sigma-gold text-sigma-gold rounded-md text-base font-semibold tracking-[-0.00875rem]`}
          >
            Explore Our Impact
          </Link>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12.5 md:gap-4 w-86.25 md:w-full">
        {programmes.map((activity) => (
          <Link
            href={programmeHref(activity.slug)}
            key={activity.slug}
            className="flex flex-col gap-6"
          >
            <div className="relative w-full aspect-square">
              <CoverImage src={activity.photo} alt={activity.title} />
            </div>

            <div className="flex flex-col gap-4">
              <h1
                className={`${goudyOldStyle.className} text-sigma-purple text-lg font-normal leading-normal tracking-[-0.01125rem] w-full`}
              >
                {activity.title}
              </h1>
              <p
                className={`text-sigma-black text-[0.8125rem] font-normal leading-normal`}
              >
                {activity.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default OurActivities;

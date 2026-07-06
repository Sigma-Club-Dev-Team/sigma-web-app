import { goudyOldStyle } from "@/fonts";
import Link from "next/link";
import { CoverImage } from "./ui/myImage";

const UpcomingEvent = [
  {
    id: 1,
    img: "/assets/images/pngs/sigma-quiz-competition.png",
    title: "Sigma Quiz Competition",
    date: "July 28, 2025",
    venue: "Student Union Building Car Park",
    link: "/",
  },
  {
    id: 2,
    img: "/assets/images/pngs/sigma-chiefs-league.png",
    title: "Sigma Quiz Competition",
    date: "July 28, 2025",
    venue: "Student Union Building Car Park",
    link: "/",
  },
  {
    id: 3,
    img: "/assets/images/pngs/sigma-health-outreach.png",
    title: "Sigma Quiz Competition",
    date: "July 28, 2025",
    venue: "Student Union Building Car Park",
    link: "/",
  },
];

function UpcomingEvents() {
  return (
    <section className="flex items-center justify-center flex-col py-15 md:py-[7.5rem] px-6 md:px-[5rem] gap-[3rem] relative overflow-hidden">
      <div className="flex flex-col items-center justify-center gap-[4px] w-full text-sigma-black">
        <h1
          className={`${goudyOldStyle.className} text-center text-sigma-black text-sm  md:text-[3rem]`}
        >
          UPCOMING EVENT
        </h1>
        <div className="w-32 md:w-[12.125rem] h-[0.125rem] bg-sigma-gold"></div>
      </div>

      <div className="flex items-center justify-center md:grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full">
        {UpcomingEvent.map((event) => (
          <Link
            href={event.link}
            key={event.id}
            className="flex items-start flex-col justify-center w-full"
          >
            <div className="relative w-[13rem] md:w-full aspect-square overflow-hidden mb-[0.75rem] md:mb-[1.5rem]">
              <CoverImage src={event.img} alt={event.title} />
            </div>
            <h1
              className={`${goudyOldStyle.className} text-[1rem] md:text-[1.375rem] text-sigma-purple pb-[0.25rem]`}
            >
              {event.title}
            </h1>
            <div className="flex items-start justify-center gap-[0.125rem] md:gap-[0.5rem] text-[0.625rem] md:text-[0.875rem] text-secondary shrink-0">
              <p className={`shrink-0`}>{event.date}</p>
              <small className="">•</small>
              <p className={`shrink-0 `}>{event.venue}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex items-center justify-center w-full">
        <button
          className={`cursor-pointer flex items-center justify-center py-3.5 px-6 rounded-md text-sigma-navy font-semibold tracking-[-0.00875rem] bg-transparent border-2 border-sigma-purple`}
        >
          See all Events
        </button>
      </div>
    </section>
  );
}

export default UpcomingEvents;

import { goudyOldStyle } from "@/fonts";
import Image from "next/image";
import Link from "next/link";

export const NewsPublications = [
  {
    id: 1,
    link: "/",
    thumbnail: "/assets/images/pngs/admission-interview.png",
    category: "ANNOUNCEMENT",
    title: "2024/2025 Sigma Admission Interview",
    author: "Sigma Club",
    pubDate: "July 28, 2025",
  },
  {
    id: 2,
    link: "/",
    thumbnail: "/assets/images/pngs/admission-interview.png",
    category: "ANNOUNCEMENT",
    title: "2024/2025 Sigma Admission Interview",
    author: "Sigma Club",
    pubDate: "July 28, 2025",
  },
  {
    id: 3,
    link: "/",
    thumbnail: "/assets/images/pngs/admission-interview.png",
    category: "ANNOUNCEMENT",
    title: "2024/2025 Sigma Admission Interview",
    author: "Sigma Club",
    pubDate: "July 28, 2025",
  },
];

function Discourse() {
  return (
    <section className="flex flex-col md:flex-row items-start justify-center md:justify-between pt-30 pb-20 px-6 md:px-20 w-full gap-12 md:gap-9 bg-[#F7F5F1] relative overflow-hidden">
      <div className="flex w-full h-full flex-col items-start">
        <div className="flex flex-col items-start md:items-start justify-center gap-1 text-sigma-black">
          <h1
            className={`${goudyOldStyle.className} md:text-left text-sigma-black text-sm  md:text-[1.125rem]`}
          >
            THE SIGMA DISCOURSE
          </h1>
          <div className="w-21 h-0.5 bg-sigma-gold"></div>
        </div>
        <h2
          className={`${goudyOldStyle.className} py-4.5 md:py-6 text-[1.75rem] md:text-[3rem] font-bold tracking-[-0.0175rem]`}
        >
          News & Publications
        </h2>
        <p
          className={`w-86.25 md:w-full tracking-[-0.00875rem]  text-sm md:text-[1.125rem]`}
        >
          Documenting national development, executive commentary, and the modern
          legacy of the fellowship.
        </p>
        <div className="hidden md:flex  w-full md:mt-10">
          <button
            className={`cursor-pointer flex items-center justify-center py-3.5 px-6 rounded-md text-sigma-navy font-semibold tracking-[-0.00875rem] bg-transparent border-2 border-sigma-purple`}
          >
            Read More
          </button>
        </div>
      </div>

      <div className="flex flex-col items-start w-full">
        {NewsPublications.map((item) => (
          <Link
            key={item.id}
            href={item.link}
            className={`flex items-center justify-between w-full gap-4 py-6 border-b border-b-border ${item.id === NewsPublications.length ? "border-b-0" : ""}`}
          >
            <div className="flex flex-col items-start justify-center">
              <h6
                className={`${goudyOldStyle.className} pb-2 flex items-center justify-center gap-2.5 text-[0.875rem] md:text-[1rem] text-sigma-black`}
              >
                {item.category}
              </h6>
              <h1
                className={`${goudyOldStyle.className} pb-2 md:pb-4 tracking-normal leading-normal text-[1rem] md:text-[1.375rem] text-sigma-purple w-57.25 md:w-full`}
              >
                {item.title}
              </h1>

              <div className="flex items-start justify-center gap-1 md:gap-2 text-[0.75rem] md:text-[0.875rem]">
                <p className={`text-sigma-gold font-bold`}>{item.author}</p>
                <small className="text-secondary">•</small>
                <p className={` text-secondary`}>{item.pubDate}</p>
              </div>
            </div>
            <div className="relative h-25 w-25">
              <Image src={item.thumbnail} alt={item.title} fill />
            </div>
          </Link>
        ))}
      </div>

      <div className="flex md:hidden  items-center justify-center w-full">
        <button
          className={`flex items-center justify-center py-3.5 px-6 rounded-md text-sigma-navy font-semibold tracking-[-0.00875rem] bg-transparent border-2 border-sigma-purple`}
        >
          Read More
        </button>
      </div>
    </section>
  );
}

export default Discourse;

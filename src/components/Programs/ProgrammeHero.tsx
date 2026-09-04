import { goudyOldStyle } from "@/fonts";

import { CoverImage } from "../ui/myImage";

/**
 * Full-bleed hero for a programme detail page. The main nav sits on top of it,
 * so the top gradient exists purely to keep the nav legible over bright images.
 */
function ProgrammeHero({ title, photo }: { title: string; photo: string }) {
  return (
    <section className="relative w-full h-100 md:h-[46.75rem] overflow-hidden">
      <CoverImage src={photo} alt={title} sizes="100vw" />

      {/* Darkens towards the bottom so the title holds against the image. */}
      <div className="absolute inset-0 bg-linear-to-b from-[#202124]/32 to-[#202124]/80" />
      {/* Separate top scrim for the overlaid nav. */}
      <div className="absolute inset-x-0 top-0 h-34 bg-linear-to-b from-[#202124]/40 to-[#202124]/0" />

      <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-center px-6 pb-12 md:pb-16">
        <h1
          className={`${goudyOldStyle.className} font-bold text-white text-center text-[2.25rem] md:text-[3rem] leading-[110%] tracking-[-0.01em] md:w-240`}
        >
          {title}
        </h1>
      </div>
    </section>
  );
}

export default ProgrammeHero;

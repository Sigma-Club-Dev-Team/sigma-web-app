import SectionHeader from "./SectionHeader";
import { CoverImage } from "./ui/myImage";

function OurHistory() {
  const gallery = [
    { id: "mtn-ceo", photo: "/assets/images/pngs/mtn-ceo.png" },
    { id: "mtn-ceo", photo: "/assets/images/pngs/quiz-23.png" },
    { id: "mtn-ceo", photo: "/assets/images/pngs/public-lecture.png" },
    { id: "mtn-ceo", photo: "/assets/images/pngs/mtn-ceo.png" },
    { id: "mtn-ceo", photo: "/assets/images/pngs/quiz-23.png" },
    { id: "mtn-ceo", photo: "/assets/images/pngs/public-lecture.png" },
    { id: "mtn-ceo", photo: "/assets/images/pngs/mtn-ceo.png" },
    { id: "mtn-ceo", photo: "/assets/images/pngs/quiz-23.png" },
    { id: "mtn-ceo", photo: "/assets/images/pngs/public-lecture.png" },
    { id: "mtn-ceo", photo: "/assets/images/pngs/mtn-ceo.png" },
    { id: "mtn-ceo", photo: "/assets/images/pngs/quiz-23.png" },
    { id: "mtn-ceo", photo: "/assets/images/pngs/public-lecture.png" },
    { id: "mtn-ceo", photo: "/assets/images/pngs/mtn-ceo.png" },
    { id: "mtn-ceo", photo: "/assets/images/pngs/quiz-23.png" },
    { id: "mtn-ceo", photo: "/assets/images/pngs/public-lecture.png" },
    { id: "mtn-ceo", photo: "/assets/images/pngs/mtn-ceo.png" },
    { id: "mtn-ceo", photo: "/assets/images/pngs/quiz-23.png" },
    { id: "mtn-ceo", photo: "/assets/images/pngs/public-lecture.png" },
    { id: "mtn-ceo", photo: "/assets/images/pngs/mtn-ceo.png" },
    { id: "mtn-ceo", photo: "/assets/images/pngs/quiz-23.png" },
    { id: "mtn-ceo", photo: "/assets/images/pngs/public-lecture.png" },
    { id: "mtn-ceo", photo: "/assets/images/pngs/mtn-ceo.png" },
    { id: "mtn-ceo", photo: "/assets/images/pngs/quiz-23.png" },
    { id: "mtn-ceo", photo: "/assets/images/pngs/public-lecture.png" },
    { id: "mtn-ceo", photo: "/assets/images/pngs/mtn-ceo.png" },
    { id: "mtn-ceo", photo: "/assets/images/pngs/quiz-23.png" },
    { id: "mtn-ceo", photo: "/assets/images/pngs/public-lecture.png" },
    { id: "mtn-ceo", photo: "/assets/images/pngs/mtn-ceo.png" },
    { id: "mtn-ceo", photo: "/assets/images/pngs/public-lecture.png" },
    { id: "mtn-ceo", photo: "/assets/images/pngs/mtn-ceo.png" },
  ];
  return (
    <section className="bg-[#F7F5F1] w-full py-15 md:py-30 px-6 md:px-20 relative flex flex-col items-center overflow-hidden">
      <div className="absolute -left-6 md:-left-12.25 -top-7.75 md:-top-33.25 w-24 md:w-64.5 h-50 md:h-134.25 aspect-12/25 md:aspect-37/77 opacity-40 mix-blend-luminosity bg-[url('/assets/images/pngs/sigma-artifacts1.png')] bg-[lightgray] bg-center bg-cover bg-no-repeat pointer-events-none z-0" />
      <div className="absolute right-0 md:right-0 bottom-[0.00944rem] md:bottom-[0.02281rem] w-27.75 md:w-[14.55356rem] h-44 md:h-92.25 aspect-41/65 md:aspect-53/84 opacity-40 mix-blend-luminosity bg-[url('/assets/images/pngs/sigma-artifacts2.png')] bg-[lightgray] bg-position-[0px_0px] bg-size-[116.933%_115.726%] bg-no-repeat pointer-events-none z-0" />

      <div className="flex items-center justify-center flex-col gap-12 w-full relative z-10">
        <SectionHeader
          title="OUR HISTORY"
          desc="Seven decades of service, scholarship and brotherhood"
          paragraph="Founded in 1950, Sigma Club is the oldest student organisation in
            sub-Saharan Africa. From the halls of the University of Ibadan,
            generations of members have carried a single standard into public
            life — purity of purpose."
          btntext="More about Sigma Club’s History"
          link="/"
        />

        <div className="grid grid-cols-6 md:grid-cols-10 gap-2 w-full">
          {gallery.map((photo, index) => (
            <div
              key={index + photo.id}
              className="relative aspect-square w-full"
            >
              <CoverImage src={photo.photo} alt={photo.id} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurHistory;

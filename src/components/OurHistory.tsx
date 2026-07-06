import Image from "next/image";
import SectionHeaderProps from "./SectionHeader";
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
    <section className="bg-[#F7F5F1] w-full py-15 md:py-30 px-6 md:px-20 relative flex flex-col items-center">
      <div className="flex items-center justify-center flex-col gap-12 w-full">
        <SectionHeaderProps
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

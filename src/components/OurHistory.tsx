import Image from "next/image";
import { PhotoGallery } from "@/app/utils/photo-gallery";
import SectionHeaderProps from "./SectionHeaderProps";

function OurHistory() {
  return (
    <section className="bg-[#F7F5F1] min-h-screen w-full py-[60px] md:py-[120px] px-[24px] md:px-[80px] relative flex flex-col items-center">
      <div className="flex items-center justify-center flex-col gap-[48px]">
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

        <div className="grid grid-cols-6 md:grid-cols-10 gap-[8.05px]">
          {PhotoGallery.map((photo) => (
            <div key={photo.id}>
              <Image
                src={photo.photo}
                alt=""
                className="w-[50.79px] md:w-[120.75px] h-[50.79px] md:h-[120.75px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurHistory;

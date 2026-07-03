import React from "react";
import SectionHeaderProps from "./SectionHeaderProps";

function OurActivities() {
  return (
    <section className="px-[24px] pt-[60px] pb-[80px] flex flex-col items-center">
      <div className="flex items-center justify-center flex-col gap-[48px]">
        <SectionHeaderProps
          title="OUR Activities"
          desc="Our Philanthropic Activities"
          paragraph="The Sigma Club is building a movement of student leaders, philanthropists, and reputable figures who believe that character and intellect are vital to a progressive society. "
          btntext="Explore Our Impact"
          link="/"
        />
      </div>
    </section>
  );
}

export default OurActivities;

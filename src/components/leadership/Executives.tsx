import { goudyOldStyle } from "@/fonts";
import { CoverImage } from "../ui/myImage";

const executives = [
  {
    id: 1,
    photo: "/assets/images/jpgs/executives/d-chief.jpg",
    name: "Loyalist Babatunde Faith",
    position: "Deputy Chief (Band Committee Chairman)",
  },
  {
    id: 2,
    photo: "/assets/images/jpgs/executives/chief-scribe.jpg",
    name: "Loyalist Adeyeye Anthony",
    position: "Chief Scribe (Secretariat Committee Chairman)",
  },
  {
    id: 3,
    photo: "/assets/images/jpgs/executives/FnD.jpg",
    name: "Loyalist Daniel Promise",
    position: "Financial Scribe (Food & Drinks Committee Chairman)",
  },
  {
    id: 4,
    photo: "/assets/images/jpgs/executives/MnD.jpg",
    name: "Loyalist Alabi Testimony",
    position: "Deputy Scribe (Maintenance & Decoration Committee Chairman)",
  },
  {
    id: 5,
    photo: "/assets/images/jpgs/executives/publicity.jpg",
    name: "Loyalist Sulaimon Philipson",
    position: "Publicity Committee Chairman",
  },
  {
    id: 6,
    photo: "/assets/images/jpgs/executives/sigma-t.jpg",
    name: "Loyalist Daniel Bright",
    position: "Sigma Treasurer (Sponsorship & Gate-keeping Committee Chairman)",
  },
  {
    id: 7,
    photo: "/assets/images/jpgs/executives/investment.png",
    name: "Loyalist Salawu Toyeeb",
    position: "Investment and Special Duties Committee Chairman",
  },
  {
    id: 8,
    photo: "/assets/images/jpgs/executives/security.jpg",
    name: "Loyalist Okwuowulu Clement",
    position: "Security Committee Chairman",
  },
];

function Executives() {
  return (
    <section className="flex flex-col items-center justify-center py-15 md:py-30 px-6 md:px-40 gap-16 md:gap-20 w-full overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-start gap-10 w-full">
        <div className="relative w-full max-w-125 md:w-125 aspect-5/6 h-auto md:h-150 shrink-0 bg-[#D9D9D9] overflow-hidden">
          <CoverImage
            src="/assets/images/jpgs/sigma-chief.jpg"
            alt="Meet the Chief, Adesokan Emmanuel"
            position="-0.226px -25.029px"
          />
        </div>

        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6 md:gap-8 md:max-w-145">
          <h1
            className={`${goudyOldStyle.className} max-w-103 text-[2rem] md:text-[3rem] text-sigma-purple font-bold tracking-[-0.03rem] leading-tight`}
          >
            Meet the Chief, Adesokan Emmanuel
          </h1>
          <p className="text-sigma-black text-sm md:text-[1.125rem] leading-relaxed text-justify md:text-start">
            This is an alternative design of where a bio goes relative to the
            Sigma club. Lorem ipsum dolor sit amet consectetur adipiscing elit.
            Quisque faucibus ex sapien vitae pellentesque sem placerat. In id
            cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed
            diam urna tempor. Pulvinar vivamus fringilla lacus nec metus
            bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc
            posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad
            litora torquent per conubia nostra inceptos himenaeos.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full justify-items-center">
        {executives.map((executive) => (
          <div
            key={executive.id}
            className="flex flex-col items-center md:items-start gap-4 w-full"
          >
            <div className="relative w-full aspect-square bg-[#D9D9D9] overflow-hidden">
              <CoverImage
                src={executive.photo}
                alt={executive.name}
                position="0px 0.485px"
              />
            </div>
            <div className="flex flex-col items-start justify-center gap-2 w-full">
              <h3
                className={`text-sigma-purple text-[1.375rem] ${goudyOldStyle.className}`}
              >
                {executive.name}
              </h3>
              <p className="text-sigma-black text-[1.125rem] tracking-[-0.01125rem]">
                {executive.position}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Executives;

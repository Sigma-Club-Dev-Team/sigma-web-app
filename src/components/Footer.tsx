import { goudyOldStyle, inter } from "@/fonts";
import Image from "next/image";
import Logo from "../../public/assets/icons/footer-logo.svg";
import Link from "next/link";

const clubLink = [
  { id: 1, link: "/", name: "Our History" },
  { id: 2, link: "/", name: "Leadership" },
  { id: 3, link: "/", name: "Alumni" },
  { id: 4, link: "/", name: "Constitution" },
];

const engagementLink = [
  { id: 1, link: "/", name: "Project" },
  { id: 2, link: "/", name: "Events" },
  { id: 3, link: "/", name: "News and Press" },
  { id: 4, link: "/", name: "Marketplace" },
];

const connectLink = [
  { id: 1, link: "/", name: "Join Sigma" },
  { id: 2, link: "/", name: "Donate" },
  { id: 3, link: "/", name: "Contact" },
  { id: 4, link: "/", name: "Archive" },
];
function Footer() {
  return (
    <footer className="py-[3.75rem] md:pt-[4rem] md:pb-[2.5rem] px-[2.25rem] md:px-[5rem] flex items-cnter justify-center flex-col gap-[1.5rem] bg-sigma-purple">
      <div className="flex items-start flex-col md:flex-row pb-[2rem] gap-[5rem]  md:justify-between md:w-full">
        <div className="flex flex-col items-start text-white">
          <div className="flex items-center justify-center gap-[0.7rem]">
            <div className="relative w-[6.338rem] h-[3.78519rem]">
              <Image src={Logo} alt="Sigma Logo" fill />
            </div>
            <span className="flex flex-col items-start justify-center uppercase ">
              <h1
                className={`${goudyOldStyle.className} text-[1.05631rem] font-bold`}
              >
                SIGMA CLUB
              </h1>
              <p
                className={`${inter.className} text-[0.52819rem]  font-medium `}
              >
                University of Ibadan
              </p>
            </span>
          </div>

          <p className="text-[0.75rem] md:text-[0.875rem] py-[1.5rem] w-[20.0625rem] md:w-[22.5rem]">
            The oldest student organisation in sub-Saharan Africa. Founded 1950
            at the University of Ibadan. For All That Is Pure.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-[3.25rem] gap-x-auto md:gap-[5rem] items-start justify-between w-full">
          <div className="flex flex-col items-start gap-[1rem]">
            <h1
              className={`${goudyOldStyle.className} text-[1.125rem] text-sigma-gold`}
            >
              THE CLUB
            </h1>
            <div className="flex flex-col items-start gap-[1rem]">
              {clubLink.map((link) => (
                <Link
                  href={link.link}
                  key={link.id}
                  className={`${inter.className} text-[0.875rem] font-medium text-white`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start gap-[1rem]">
            <h1
              className={`${goudyOldStyle.className} text-[1.125rem] text-sigma-gold`}
            >
              ENGAGEMENT
            </h1>
            <div className="flex flex-col items-start gap-[1rem]">
              {engagementLink.map((link) => (
                <Link
                  href={link.link}
                  key={link.id}
                  className={`${inter.className} text-[0.875rem] font-medium text-white`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start gap-[1rem]">
            <h1
              className={`${goudyOldStyle.className} text-[1.125rem] text-sigma-gold`}
            >
              CONNECT
            </h1>
            <div className="flex flex-col items-start gap-[1rem]">
              {connectLink.map((link) => (
                <Link
                  href={link.link}
                  key={link.id}
                  className={`${inter.className} text-[0.875rem] font-medium text-white`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full border border-border my-[1.5rem]"></div>

      <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-[1.5rem] text-[0.75rem] text-secondary-white">
        <p>© 2026 Sigma Club, University of Ibadan. All rights reserved.</p>
        <span className="flex items-center justify-center gap-[0.25rem]">
          <p>Est. 1950 </p>
          <p>·</p>
          <p>Celebrating 75 years</p>
        </span>
      </div>
    </footer>
  );
}

export default Footer;

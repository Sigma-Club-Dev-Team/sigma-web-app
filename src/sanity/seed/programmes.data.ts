/**
 * Bootstrap content for the initial Sanity import. Sanity is the source of
 * truth once this has been imported — edit programmes in the Studio, not here.
 * Kept so the dataset can be rebuilt from scratch with `pnpm seed:import`.
 *
 * Facts and editions are drawn from published reporting, cited per programme.
 */
import type { Programme } from "../../lib/programmes/types.ts";

export const programmes: Programme[] = [
  {
    slug: "roseline-etuokwu-quiz-competition",
    title: "Roseline Etuokwu Quiz Competition",
    category: "Flagship Events",
    photo: "/assets/images/pngs/roseline.png",
    heroPhoto: "/assets/images/pngs/quiz-23.png",
    desc: "Elevating academic standards and expanding educational access for thousands of students across the South-West.",
    summary: {
      heading: "Roseline Etuokwu Sigma National Secondary School Quiz Competition",
      body: "A national secondary school quiz that has grown from ten schools in one local government to thousands across the federation, sponsored by the Rams Charity Foundation.",
    },
    // Sources: ucjui.com/sigma-club-set-to-take-roseline-etuokwu-quiz-competition-national/
    // indypressui.org/2026/03/15/restoration-high-school-yola-wins-2026-...
    // thelawpress.wordpress.com/2026/03/14/sigma-club-to-hold-roseline-etuokwu-national-quiz-grand-finale-saturday-awards-n5m-to-winner/
    blocks: [
      {
        kind: "section",
        heading: "Overview",
        body: [
          "The Roseline Etuokwu Sigma National Secondary School Quiz Competition is the club's flagship educational programme, opening participation to secondary schools across all states of the federation and the Federal Capital Territory. It runs in three stages — state rounds, regional rounds, and the national grand finale — with prizes rising at each level.",
          "The competition is sponsored by Old Sigmite Victor Etuokwu through the Rams Charity Foundation, and is named in honour of Roseline Etuokwu.",
        ],
      },
      {
        kind: "facts",
        heading: "At a glance",
        facts: [
          { label: "Inaugurated", value: "2021" },
          { label: "Most recent edition", value: "6th — 14 March 2026" },
          { label: "Grand finale venue", value: "Trenchard Hall, University of Ibadan" },
          { label: "Schools registered (2026)", value: "Over 1,900 nationwide" },
          { label: "Top prize (2026)", value: "₦5,000,000" },
          { label: "Since 2023", value: "5,000+ schools, ₦100m+ in prizes" },
          { label: "Sponsor", value: "Rams Charity Foundation" },
        ],
      },
      {
        kind: "image",
        src: "/assets/images/pngs/quiz-23.png",
        alt: "Finalists at the Roseline Etuokwu Quiz Competition",
        caption: "Image description goes here",
      },
      {
        kind: "editions",
        heading: "Past editions",
        editions: [
          {
            label: "6th Edition",
            year: "2026",
            highlight: "Restoration High School, Yola",
            detail:
              "Over 1,900 schools registered nationwide. Ambassador College, Ota placed second and Global Kids College third, from a prize pool topped by ₦5,000,000.",
          },
          {
            label: "4th Edition",
            year: "2024",
            highlight: "First national edition",
            detail:
              "Opened to schools across Nigeria's 774 local governments, with a total prize pool of ₦8,000,000.",
          },
          {
            label: "3rd Edition",
            year: "2023",
            highlight: "South-West region",
            detail:
              "1,000 secondary schools and over 3,000 students across the six South-West states.",
          },
          {
            label: "2nd Edition",
            year: "2022",
            highlight: "Oyo State",
            detail:
              "Over 300 schools and more than 700 students across all 33 local governments of Oyo State.",
          },
          {
            label: "1st Edition",
            year: "2021",
            highlight: "Ibadan North",
            detail:
              "Ten secondary schools within Ibadan North Local Government Area.",
          },
        ],
      },
      {
        kind: "section",
        heading: "Sponsors & Partners",
        body: [
          "The competition is funded by Old Sigmite Victor Etuokwu through the Rams Charity Foundation, which has backed every edition since its inauguration.",
        ],
      },
    ],
  },
  {
    slug: "national-public-lecture-series",
    title: "The National Public Lecture Series",
    category: "Flagship Events",
    photo: "/assets/images/pngs/mtn-ceo.png",
    heroPhoto: "/assets/images/pngs/mtn-ceo.png",
    desc: "Convening business leaders, policymakers, and academics to solve pressing socioeconomic and technological challenges.",
    summary: {
      heading: "Sigma Public Lecture",
      body: "The Sigma Public Lecture is Africa's premier student-led intellectual arena, bridging the gap between corporate innovation, national governance, and youth development.",
    },
    // Sources: uimsapress.org/sigma-club-ui-set-to-host-11th-public-lecture-in-honour-of-old-chief-dr-adesola-kazeem-adeduntan/
    // bhmng.com/mtn-ceo-karl-toriola-we-must-make-education-employable-at-sigma-clubs-11th-public-lecture/
    // yemiosinbajo.ng/vp-osinbajo-gives-sigma-public-lecture-at-university-of-ibadan-on-27-10-2018/
    blocks: [
      {
        kind: "section",
        heading: "Overview",
        body: [
          "The Sigma Public Lecture serves as a high-profile intellectual arena hosted by Africa's oldest student organization. The primary objective of this program is to bridge the gap between youth development, corporate innovation, and governance. By inviting foremost thought leaders, captains of industry, and global policy architects to the podium, the club platforms critical solutions to sub-Saharan Africa's pressing economic, digital, and social challenges.",
        ],
      },
      {
        kind: "facts",
        heading: "At a glance",
        facts: [
          { label: "Inaugurated", value: "2000" },
          { label: "Most recent edition", value: "11th — 3 July 2025" },
          { label: "Venue", value: "Alumni Multipurpose Hall, University of Ibadan" },
          { label: "Guest speaker", value: "Dr. Karl Toriola, MD/CEO, MTN Nigeria" },
          { label: "Chairman of the day", value: "Governor Seyi Makinde" },
          {
            label: "In honour of",
            value: "Old Chief Dr. Adesola Kazeem Adeduntan, FCIB, FCA, D.Sc.",
          },
        ],
      },
      {
        kind: "image",
        src: "/assets/images/pngs/mtn-ceo.png",
        alt: "Dr. Karl Toriola delivering the 11th Sigma Public Lecture",
        caption: "Image description goes here",
      },
      {
        kind: "section",
        heading: "History & Inception",
        body: [
          "Conceived as an extension of the club's “aristocratic ideal of nobility, probity, and high endeavor,” the lecture series was inaugurated in 2000 to stimulate critical thinking outside the traditional classroom. Over the decades, it has evolved into a highly anticipated institutional milestone, featuring historic addresses from legendary public figures including former Vice Chancellor Professor Ayo Banjo and former Vice President of Nigeria, Professor Yemi Osinbajo.",
        ],
      },
      {
        kind: "editions",
        heading: "Past editions",
        editions: [
          {
            label: "11th Edition",
            year: "2025",
            theme:
              "Leveraging Technology & Digital Education for Mass Employment, Wealth Creation and Poverty Alleviation",
            highlight: "Dr. Karl Toriola, MD/CEO, MTN Nigeria",
            detail:
              "Toriola argued that curricula must be aligned to the digital economy — “we must make education employable” — and pointed to infrastructure deficits, digital literacy gaps and weak public-private coordination as the binding constraints.",
          },
          {
            label: "10th Edition",
            year: "",
            highlight: "Professor Ayo Banjo",
            detail: "Former Vice-Chancellor of the University of Ibadan.",
          },
          {
            label: "9th Edition",
            year: "2018",
            theme: "Developing the Nation through Youth Employment",
            highlight: "Professor Yemi Osinbajo, SAN, GCON",
            detail:
              "Delivered on 27 October 2018 by the then Vice-President of the Federal Republic of Nigeria, marking the club's 68th anniversary.",
          },
        ],
      },
      {
        kind: "section",
        heading: "Sponsors & Partners",
        body: [
          "Each edition is convened with the support of the club's alumni body and partner institutions, who underwrite the hosting of speakers, dignitaries and the wider university community.",
        ],
      },
      {
        kind: "image",
        src: "/assets/images/pngs/ui-gate.png",
        alt: "The University of Ibadan main gate",
        caption: "Image description goes here",
      },
    ],
  },
  {
    slug: "sigma-scholarship-scheme",
    title: "SIGMA Scholarship Scheme",
    category: "Impact and outreach",
    photo: "/assets/images/pngs/scholarship.png",
    heroPhoto: "/assets/images/pngs/sigma-health-outreach.png",
    desc: "Providing vital undergraduate funding to indigent students and deploying wellness resources to underserved populations.",
    summary: {
      heading: "SIGMA Scholarship Scheme",
      body: "Undergraduate funding for students held back by cost rather than ability, alongside free health outreach for the university community.",
    },
    // Sources: afterschoolafrica.com/94961/sigma-club-university-of-ibadan-2025-scholarship-scheme-...
    // indypressui.org/2025/06/18/sigma-club-to-host-health-outreach-program/
    blocks: [
      {
        kind: "section",
        heading: "Overview",
        body: [
          "The SIGMA Scholarship Scheme supports financially disadvantaged but academically outstanding undergraduates of the University of Ibadan, carrying them through their degree where cost, rather than ability, is what stands in the way. Across its seven-decade history the club has awarded scholarships to over 100 students, at both undergraduate and postgraduate level.",
        ],
      },
      {
        kind: "facts",
        heading: "Eligibility & award",
        facts: [
          { label: "Award", value: "₦100,000 per recipient, for one academic year" },
          { label: "Beneficiaries", value: "10 students per cycle" },
          { label: "Level", value: "200 level and above, excluding final year" },
          { label: "Minimum CGPA", value: "3.0" },
          { label: "Open to", value: "Nigerian undergraduates of the University of Ibadan" },
          { label: "Disciplines", value: "All fields of study" },
        ],
      },
      {
        kind: "image",
        src: "/assets/images/pngs/scholarship.png",
        alt: "Scholarship recipients",
        caption: "Image description goes here",
      },
      {
        kind: "section",
        heading: "Health outreach",
        body: [
          "Alongside the scholarships, the club runs free health outreach for the university community. The 2025 outreach, held at the SUB Car Park, offered body mass index and blood pressure checks and testing for HIV, syphilis and hepatitis B, together with health talks on oral hygiene and mental health awareness. All services were provided at no charge.",
        ],
      },
      {
        kind: "section",
        heading: "How to apply",
        body: [
          "Applications open annually through the club's website. Candidates submit their University of Ibadan student identification and a current academic transcript showing their CGPA, and are assessed on both financial need and academic standing.",
        ],
      },
      {
        kind: "image",
        src: "/assets/images/pngs/sigma-health-outreach.png",
        alt: "Community health outreach",
        caption: "Image description goes here",
      },
    ],
  },
];

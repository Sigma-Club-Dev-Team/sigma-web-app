/**
 * Bootstrap content for the initial Sanity import. Sanity is the source of
 * truth once this has been imported — write news in the Studio, not here.
 * Kept so the dataset can be rebuilt from scratch with `pnpm seed:news:import`.
 *
 * Where a story reports on a programme, its details are the ones already cited
 * in programmes.data.ts. Everything else is placeholder copy for the club's
 * editors to replace.
 */
import type { ArticleInput } from "../../lib/news/types.ts";

export const articles: ArticleInput[] = [
  {
    slug: "2024-2025-sigma-admission-interview",
    title: "2024/2025 Sigma Admission Interview",
    category: "Announcements",
    author: "Sigma Club",
    publishedAt: "2025-07-28T09:00:00.000Z",
    excerpt:
      "Applications are open for membership of Sigma Club. Here is how the interview runs, what the panel looks for, and what every candidate should bring.",
    coverImage: "/assets/images/pngs/admission-interview.png",
    tags: ["Admissions", "Membership", "University of Ibadan"],
    blocks: [
      {
        kind: "section",
        body: [
          "Membership of Sigma Club has been earned the same way since 1950: in person, before a panel of Sigmites, on the strength of character rather than connection. The 2024/2025 admission interview continues that tradition, and applications from undergraduates of the University of Ibadan are now open.",
          "The club admits a small cohort each session. Every applicant is assessed on academic standing, conduct, and the contribution they are already making to life on campus — the qualities the club's founders had in mind when they set out the ideal of nobility, probity and high endeavour.",
        ],
      },
      {
        kind: "callout",
        heading: "Before you apply",
        body: [
          "Applications are made through the club's official channels only. Sigma Club does not charge an application fee, and no member is authorised to collect money on the club's behalf at any stage of the process.",
          "Interview dates and venues are published on the club's website and verified social accounts. Treat any other notice as unofficial.",
        ],
      },
      {
        kind: "list",
        heading: "How the interview runs",
        ordered: true,
        items: [
          "Screening. Applications are checked against the eligibility requirements — current enrolment at the University of Ibadan, and a clean disciplinary record.",
          "First interview. A short conversation with a panel of Sigmites covering your course, your involvement on campus, and why you are drawn to the club.",
          "Second interview. A longer session with the executive council, weighted towards conduct, judgement and the way you carry yourself among others.",
          "Deliberation. The council reviews every candidate together before offers are made. Decisions are communicated directly to applicants.",
        ],
      },
      {
        kind: "image",
        src: "/assets/images/pngs/admission-interview.png",
        alt: "Candidates waiting to be called for a Sigma Club admission interview",
        caption:
          "Candidates at a previous admission interview, University of Ibadan.",
      },
      {
        kind: "section",
        heading: "What the panel looks for",
        body: [
          "There is no template for a Sigmite. The panel is not searching for a rehearsed answer or a particular course of study; it is looking for the bearing of someone who can be trusted with the club's name in a room where nobody is watching.",
          "Academic standing matters, and so does the record of what a candidate has already done — in a hall, a faculty association, a volunteer effort, a team. What is asked of members afterwards is considerable: the quiz competition, the public lecture, the scholarship scheme and the health outreach are all run by students, alongside their degrees.",
        ],
      },
      {
        kind: "quote",
        quote:
          "For all that is pure — the standard is not what a candidate says at the interview, but what they are already known for.",
        attribution: "Sigma Club",
      },
      {
        kind: "section",
        heading: "After the interview",
        body: [
          "Successful candidates are informed directly and invited to the induction, where new members are formally received into the fellowship. Unsuccessful candidates are welcome to apply again in a later session; a number of Sigmites were admitted at the second time of asking.",
          "Questions about the process can be directed to the club through the contact details on this site.",
        ],
      },
    ],
  },
  {
    slug: "restoration-high-school-yola-wins-2026-national-quiz",
    title:
      "Restoration High School, Yola wins the 6th Roseline Etuokwu National Quiz",
    category: "Events",
    author: "Sigma Club",
    publishedAt: "2026-03-15T18:30:00.000Z",
    excerpt:
      "More than 1,900 schools entered. One walked out of Trenchard Hall with the ₦5,000,000 top prize.",
    coverImage: "/assets/images/pngs/quiz-23.png",
    tags: ["Quiz Competition", "Education", "Roseline Etuokwu"],
    blocks: [
      {
        kind: "section",
        body: [
          "Restoration High School, Yola have won the sixth edition of the Roseline Etuokwu Sigma National Secondary School Quiz Competition, taking the ₦5,000,000 top prize at the grand finale held at Trenchard Hall, University of Ibadan on Saturday.",
          "Ambassador College, Ota placed second and Global Kids College third, from a field that began with more than 1,900 registered schools drawn from across the federation and the Federal Capital Territory.",
        ],
      },
      {
        kind: "facts",
        heading: "The final, at a glance",
        facts: [
          { label: "Edition", value: "6th — 14 March 2026" },
          { label: "Venue", value: "Trenchard Hall, University of Ibadan" },
          { label: "Winner", value: "Restoration High School, Yola" },
          { label: "Runners-up", value: "Ambassador College, Ota; Global Kids College" },
          { label: "Schools registered", value: "Over 1,900 nationwide" },
          { label: "Top prize", value: "₦5,000,000" },
          { label: "Sponsor", value: "Rams Charity Foundation" },
        ],
      },
      {
        kind: "image",
        src: "/assets/images/pngs/quiz-23.png",
        alt: "Finalists on stage at the Roseline Etuokwu Quiz Competition",
        caption: "Finalists on stage at the grand finale.",
      },
      {
        kind: "section",
        heading: "From ten schools to a national field",
        body: [
          "The competition was inaugurated in 2021 with ten secondary schools inside a single local government area, Ibadan North. It widened to all thirty-three local governments of Oyo State in 2022, to the six South-West states in 2023, and to schools across Nigeria's 774 local governments in 2024.",
          "Since 2023 the competition has reached more than 5,000 schools and awarded over ₦100 million in prizes. It is funded by Old Sigmite Victor Etuokwu through the Rams Charity Foundation, and named in honour of Roseline Etuokwu.",
        ],
      },
    ],
  },
  {
    slug: "karl-toriola-headlines-11th-sigma-public-lecture",
    title: "“We must make education employable” — Karl Toriola at the 11th Sigma Public Lecture",
    category: "Press",
    author: "Sigma Club",
    publishedAt: "2025-07-03T16:00:00.000Z",
    excerpt:
      "The MTN Nigeria chief executive told an Ibadan audience that Nigeria's curricula have drifted from the economy they are meant to serve.",
    coverImage: "/assets/images/pngs/mtn-ceo.png",
    tags: ["Public Lecture", "Digital Economy", "MTN Nigeria"],
    blocks: [
      {
        kind: "section",
        body: [
          "Dr. Karl Toriola, Managing Director and Chief Executive of MTN Nigeria, delivered the 11th Sigma Public Lecture at the Alumni Multipurpose Hall, University of Ibadan, on the theme “Leveraging Technology & Digital Education for Mass Employment, Wealth Creation and Poverty Alleviation”.",
          "Governor Seyi Makinde served as chairman of the day. The edition was held in honour of Old Chief Dr. Adesola Kazeem Adeduntan, FCIB, FCA, D.Sc.",
        ],
      },
      {
        kind: "quote",
        quote: "We must make education employable.",
        attribution: "Dr. Karl Toriola",
        role: "MD/CEO, MTN Nigeria",
      },
      {
        kind: "section",
        heading: "The argument",
        body: [
          "Toriola's case was that the gap between what Nigerian institutions teach and what the digital economy pays for has become the country's binding constraint on youth employment. Curricula, he argued, must be aligned to the work that actually exists.",
          "He pointed to three obstacles in particular: infrastructure deficits, gaps in digital literacy, and weak coordination between the public and private sectors — each of which, he said, is solvable within a single policy cycle if treated as an economic priority rather than an educational one.",
        ],
      },
      {
        kind: "image",
        src: "/assets/images/pngs/mtn-ceo.png",
        alt: "Dr. Karl Toriola delivering the 11th Sigma Public Lecture",
        caption: "Dr. Karl Toriola delivering the 11th Sigma Public Lecture.",
      },
      {
        kind: "section",
        heading: "A platform since 2000",
        body: [
          "The Sigma Public Lecture was inaugurated in 2000 as an extension of the club's aristocratic ideal of nobility, probity and high endeavour, and has since become the arena where Africa's oldest student organisation puts national questions to the people answering them.",
          "Previous editions have been delivered by Professor Ayo Banjo, former Vice-Chancellor of the University of Ibadan, and by Professor Yemi Osinbajo, SAN, GCON, then Vice-President of the Federal Republic of Nigeria, who spoke in October 2018 on developing the nation through youth employment.",
        ],
      },
    ],
  },
  {
    slug: "sigma-scholarship-scheme-applications-open",
    title: "SIGMA Scholarship Scheme: applications open for the new cycle",
    category: "Announcements",
    author: "Sigma Club",
    publishedAt: "2025-06-24T10:00:00.000Z",
    excerpt:
      "Ten undergraduates of the University of Ibadan will each receive ₦100,000 towards the academic year. Here is who qualifies and how to apply.",
    coverImage: "/assets/images/pngs/scholarship.png",
    tags: ["Scholarship", "Students", "Impact"],
    blocks: [
      {
        kind: "section",
        body: [
          "The SIGMA Scholarship Scheme is open again to financially disadvantaged but academically outstanding undergraduates of the University of Ibadan. The scheme exists for students held back by cost rather than by ability, and across the club's seven-decade history it has carried more than 100 students through their degrees at undergraduate and postgraduate level.",
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
        kind: "list",
        heading: "What to submit",
        ordered: false,
        items: [
          "Your University of Ibadan student identification.",
          "A current academic transcript showing your CGPA.",
          "A short statement of financial need.",
        ],
      },
      {
        kind: "callout",
        heading: "How candidates are assessed",
        body: [
          "Applications are weighed on financial need and academic standing together — neither on its own decides an award. Every application is reviewed by the club's executive council.",
          "Applications are made through this website. Sigma Club charges nothing to apply.",
        ],
      },
      {
        kind: "image",
        src: "/assets/images/pngs/scholarship.png",
        alt: "Sigma Club scholarship recipients",
      },
    ],
  },
  {
    slug: "free-health-outreach-returns-to-campus",
    title: "Free health outreach returns to the SUB Car Park",
    category: "Events",
    author: "Sigma Club",
    publishedAt: "2025-06-18T08:00:00.000Z",
    excerpt:
      "Blood pressure and BMI checks, free testing for HIV, syphilis and hepatitis B, and talks on oral hygiene and mental health — at no charge to anyone who walks in.",
    coverImage: "/assets/images/pngs/sigma-health-outreach.png",
    tags: ["Health Outreach", "Community", "Impact"],
    blocks: [
      {
        kind: "section",
        body: [
          "Sigma Club's health outreach returns to the SUB Car Park, University of Ibadan, offering the university community a full morning of free screening and health education. Every service on offer is provided at no charge, and no appointment is needed.",
        ],
      },
      {
        kind: "list",
        heading: "What is available",
        ordered: false,
        items: [
          "Body mass index and blood pressure checks.",
          "Testing for HIV, syphilis and hepatitis B.",
          "Health talks on oral hygiene.",
          "Mental health awareness sessions.",
        ],
      },
      {
        kind: "section",
        heading: "Why it runs",
        body: [
          "The outreach sits alongside the SIGMA Scholarship Scheme under the club's impact and outreach work. Both start from the same premise: that a student's circumstances should not decide what they are able to make of their time at Ibadan.",
          "The outreach is staffed with medical volunteers and run by members of the club alongside their own studies.",
        ],
      },
      {
        kind: "image",
        src: "/assets/images/pngs/sigma-health-outreach.png",
        alt: "Volunteers running checks at the Sigma Club health outreach",
        caption: "Free checks at a previous outreach, SUB Car Park.",
      },
    ],
  },
  {
    slug: "the-old-sigmites-and-the-unbroken-line",
    title: "The Old Sigmites and the unbroken line",
    category: "Alumni Spotlight",
    author: "Sigma Club",
    publishedAt: "2025-05-30T11:00:00.000Z",
    excerpt:
      "Seventy-five years of membership have produced a network that reaches from the lecture halls of Ibadan into boardrooms, courts and cabinets — and which still funds the club's work on campus.",
    coverImage: "/assets/images/jpgs/sigma-chief.jpg",
    tags: ["Old Sigmites", "Alumni", "Heritage"],
    blocks: [
      {
        kind: "section",
        body: [
          "Sigma Club was founded at the University of Ibadan in 1950, and no cohort since has left the club behind on graduation. Members who leave campus become Old Sigmites, and the fellowship that begins in a first interview holds for the rest of a working life.",
          "That continuity is not sentimental. It is the mechanism by which the club's programmes are funded, and the reason a student organisation is able to convene the people it does.",
        ],
      },
      {
        kind: "quote",
        quote:
          "The club is one body across every set: the students who run it, and the Sigmites who came before them.",
        attribution: "Sigma Club",
      },
      {
        kind: "section",
        heading: "What the network carries",
        body: [
          "The Roseline Etuokwu National Quiz Competition is sponsored by Old Sigmite Victor Etuokwu through the Rams Charity Foundation. The 11th Public Lecture was held in honour of Old Chief Dr. Adesola Kazeem Adeduntan. Each edition of the lecture is convened with the support of the alumni body and partner institutions, who underwrite the hosting of speakers and dignitaries.",
          "Behind the named gifts sits the ordinary work of the network — the introductions, the mentorship and the quiet underwriting that lets a student committee plan at national scale.",
        ],
      },
      {
        kind: "image",
        src: "/assets/images/pngs/crown.png",
        alt: "The Sigma Club crown",
      },
    ],
  },
];

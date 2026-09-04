/**
 * Bootstrap content for the initial Sanity import. Sanity is the source of
 * truth once this has been imported — edit events in the Studio, not here.
 * Kept so the dataset can be rebuilt from scratch with `pnpm seed:events:import`.
 *
 * The programmes these events belong to are drawn from published reporting and
 * cited in `programmes.data.ts`. Everything specific to a single sitting —
 * dates, times, venues, registration links and the sponsor line-up — is
 * placeholder scaffolding so the pages can be seen working, and the sponsor
 * logos are generated wordmarks, not anyone's real mark. Replace both in the
 * Studio before the site goes live.
 */
import type { ClubEventInput } from "../../lib/events/types.ts";

const SPONSORS = "/assets/images/sponsors";

/** Placeholder backers, reused across events the way real sponsors are. */
const rams = {
  name: "Rams Charity Foundation",
  logo: `${SPONSORS}/rams-charity-foundation.svg`,
};
const cardinal = { name: "Cardinal Trust", logo: `${SPONSORS}/cardinal-trust.svg` };
const lagoon = { name: "Lagoon Media", logo: `${SPONSORS}/lagoon-media.svg` };
const firstGate = {
  name: "First Gate Logistics",
  logo: `${SPONSORS}/first-gate-logistics.svg`,
};
const bellview = {
  name: "Bellview Hospitality",
  logo: `${SPONSORS}/bellview-hospitality.svg`,
};
const premier = {
  name: "Premier Diagnostics",
  logo: `${SPONSORS}/premier-diagnostics.svg`,
};
const businessCouncil = {
  name: "Ibadan Business Council",
  logo: `${SPONSORS}/ibadan-business-council.svg`,
};
const northgate = {
  name: "Northgate Assurance",
  logo: `${SPONSORS}/northgate-assurance.svg`,
};

export const events: ClubEventInput[] = [
  {
    slug: "12th-sigma-national-public-lecture",
    title: "12th Sigma National Public Lecture",
    category: "Flagship Events",
    excerpt:
      "The club's annual public lecture returns to Trenchard Hall, convening industry, the academy and the student body around one question of national consequence.",
    startsAt: "2026-10-17T10:00:00+01:00",
    endsAt: "2026-10-17T14:00:00+01:00",
    location: {
      name: "Trenchard Hall, University of Ibadan",
      address: "University of Ibadan, Ibadan, Oyo State",
      mapUrl: "https://maps.google.com/?q=Trenchard+Hall+University+of+Ibadan",
    },
    photo: "/assets/images/pngs/public-lecture.png",
    heroPhoto: "/assets/images/pngs/public-lecture.png",
    registration: {
      label: "Reserve a seat",
      url: "https://sigmaclubui.org/lecture",
      note: "Free to attend. Seating is limited, and the hall is closed once the lecture begins.",
    },
    programme: {
      slug: "national-public-lecture-series",
      title: "National Public Lecture Series",
    },
    sponsors: [
      { tier: "Headline", sponsor: rams },
      { tier: "Partner", sponsor: cardinal },
      { tier: "Partner", sponsor: lagoon },
      { tier: "Supporter", sponsor: businessCouncil },
    ],
    blocks: [
      {
        kind: "section",
        heading: "About the lecture",
        body: [
          "Every year the Sigma Club sets one question before the country and invites the people best placed to answer it. The lecture is free, open to the public, and deliberately staged on campus: students sit in the same hall as the chief executives, permanent secretaries and academics who take the podium.",
          "The 12th edition follows the 11th, at which the Chief Executive Officer of MTN Nigeria, Karl Toriola, argued that Nigeria's education system must be measured by the employability of those it produces.",
        ],
      },
      {
        kind: "agenda",
        heading: "Run of show",
        items: [
          { time: "10:00 AM", title: "Doors open", detail: "Registration and seating." },
          { time: "10:30 AM", title: "Opening remarks", detail: "The President of the Sigma Club." },
          { time: "11:00 AM", title: "Keynote address" },
          { time: "12:00 PM", title: "Panel and floor questions" },
          { time: "1:15 PM", title: "Closing and reception", detail: "Refreshments in the forecourt." },
        ],
      },
      {
        kind: "facts",
        heading: "At a glance",
        facts: [
          { label: "Edition", value: "12th" },
          { label: "Admission", value: "Free, by reservation" },
          { label: "Expected attendance", value: "800+" },
          { label: "Dress code", value: "Business formal" },
        ],
      },
      {
        kind: "callout",
        heading: "Coming from outside Ibadan?",
        body: [
          "The hall is a ten-minute walk from the university's main gate. Parking is available at the Sports Council car park, and the club's stewards will be at both entrances from 9:30 AM.",
        ],
      },
    ],
  },
  {
    slug: "sigma-free-health-outreach-2026",
    title: "Sigma Free Health Outreach",
    category: "Impact and outreach",
    excerpt:
      "A free day of screening, consultation and medication for the campus community and its neighbours, run with volunteer clinicians at the Student Union Building car park.",
    startsAt: "2026-11-07T08:00:00+01:00",
    endsAt: "2026-11-07T16:00:00+01:00",
    location: {
      name: "Student Union Building Car Park",
      address: "University of Ibadan, Ibadan, Oyo State",
    },
    photo: "/assets/images/pngs/sigma-health-outreach.png",
    heroPhoto: "/assets/images/pngs/sigma-health-outreach.png",
    sponsors: [
      { tier: "Partner", sponsor: premier },
      { tier: "Partner", sponsor: northgate },
      { tier: "Supporter", sponsor: firstGate },
      { tier: "Supporter", sponsor: businessCouncil },
    ],
    blocks: [
      {
        kind: "section",
        heading: "What the day covers",
        body: [
          "The outreach is open to everyone — students, staff, traders and residents of the surrounding communities — and nothing on the day is charged for. Volunteer doctors, pharmacists and nurses run the stations, and referrals are made where a case needs more than a day clinic can give.",
        ],
      },
      {
        kind: "list",
        heading: "Services on offer",
        ordered: false,
        items: [
          "Blood pressure and blood sugar screening",
          "Malaria and hepatitis testing",
          "General consultation with a physician",
          "Free prescribed medication, while stocks last",
          "Health talks on prevention and diet",
        ],
      },
      {
        kind: "image",
        src: "/assets/images/pngs/sigma-health-outreach.png",
        alt: "Volunteers attending to residents at a previous Sigma health outreach",
        caption: "The outreach at a previous edition.",
      },
    ],
  },
  {
    slug: "the-sigma-ball-2026",
    title: "The Sigma Ball",
    category: "Social & Cultural",
    excerpt:
      "The club's black-tie evening, closing the year with Old Sigmites, honorary members and the incoming set in one room.",
    startsAt: "2026-12-12T18:00:00+01:00",
    endsAt: "2026-12-12T23:00:00+01:00",
    location: {
      name: "International Conference Centre, University of Ibadan",
      address: "University of Ibadan, Ibadan, Oyo State",
    },
    photo: "/assets/images/pngs/crown.png",
    heroPhoto: "/assets/images/pngs/sigma-artifacts1.png",
    registration: {
      label: "Request an invitation",
      url: "https://sigmaclubui.org/ball",
      note: "By invitation. Requests close two weeks before the evening.",
    },
    sponsors: [
      { tier: "Headline", sponsor: bellview },
      { tier: "Partner", sponsor: lagoon },
      { tier: "Supporter", sponsor: cardinal },
    ],
    blocks: [
      {
        kind: "section",
        heading: "The evening",
        body: [
          "The Ball is the club's oldest social fixture and the one night of the year when every generation of the fellowship is in the same room. Dinner is served at eight, the year's honours are read after, and the floor stays open until the last set.",
        ],
      },
      {
        kind: "agenda",
        heading: "The order of the evening",
        items: [
          { time: "6:00 PM", title: "Arrival and cocktails" },
          { time: "8:00 PM", title: "Dinner is served" },
          { time: "9:15 PM", title: "Honours and toasts" },
          { time: "10:00 PM", title: "The floor opens" },
        ],
      },
    ],
  },
  {
    slug: "sigma-chiefs-league-2026",
    title: "Sigma Chiefs League",
    category: "Social & Cultural",
    excerpt:
      "Halls of residence meet on the pitch for the club's inter-hall football competition, played out across a fortnight of group stages and a final under lights.",
    startsAt: "2026-11-21T15:00:00+01:00",
    endsAt: "2026-12-05T19:00:00+01:00",
    location: {
      name: "Sports Council Field, University of Ibadan",
      address: "University of Ibadan, Ibadan, Oyo State",
    },
    photo: "/assets/images/pngs/sigma-chiefs-league.png",
    heroPhoto: "/assets/images/pngs/sigma-chiefs-league.png",
    sponsors: [],
    blocks: [
      {
        kind: "section",
        heading: "About the league",
        body: [
          "The Chiefs League puts the halls of residence against one another over two weeks of football, and fills the Sports Council field for the final. Entry is free for spectators throughout.",
        ],
      },
      {
        kind: "facts",
        heading: "At a glance",
        facts: [
          { label: "Format", value: "Group stages, semi-finals, final" },
          { label: "Teams", value: "One per hall of residence" },
          { label: "Admission", value: "Free" },
        ],
      },
    ],
  },
  {
    slug: "roseline-etuokwu-quiz-2026-grand-finale",
    title: "Roseline Etuokwu Quiz Competition — 2026 Grand Finale",
    category: "Flagship Events",
    excerpt:
      "The national grand finale of the sixth edition, contested at Trenchard Hall by the schools that came through the state and regional rounds.",
    startsAt: "2026-03-14T09:00:00+01:00",
    endsAt: "2026-03-14T15:00:00+01:00",
    location: {
      name: "Trenchard Hall, University of Ibadan",
      address: "University of Ibadan, Ibadan, Oyo State",
    },
    photo: "/assets/images/pngs/roseline.png",
    heroPhoto: "/assets/images/pngs/quiz-23.png",
    programme: {
      slug: "roseline-etuokwu-quiz-competition",
      title: "Roseline Etuokwu Quiz Competition",
    },
    sponsorsHeading: "Sponsors of the 6th edition",
    sponsors: [
      { tier: "Headline", sponsor: rams },
      { tier: "Partner", sponsor: cardinal },
      { tier: "Partner", sponsor: lagoon },
      { tier: "Partner", sponsor: northgate },
      { tier: "Supporter", sponsor: firstGate },
      { tier: "Supporter", sponsor: bellview },
      { tier: "Supporter", sponsor: businessCouncil },
    ],
    blocks: [
      {
        kind: "section",
        heading: "How the day went",
        body: [
          "Restoration High School, Yola took the sixth edition, from a field that began with over 1,900 registered schools nationwide. Ambassador College, Ota placed second and Global Kids College third, from a prize pool topped by ₦5,000,000.",
        ],
      },
      {
        kind: "image",
        src: "/assets/images/pngs/quiz-23.png",
        alt: "Finalists on stage at the Roseline Etuokwu Quiz Competition",
      },
      {
        kind: "facts",
        heading: "At a glance",
        facts: [
          { label: "Edition", value: "6th" },
          { label: "Schools registered", value: "Over 1,900 nationwide" },
          { label: "Top prize", value: "₦5,000,000" },
          { label: "Winner", value: "Restoration High School, Yola" },
        ],
      },
    ],
  },
  {
    slug: "11th-sigma-national-public-lecture",
    title: "11th Sigma National Public Lecture",
    category: "Flagship Events",
    excerpt:
      "Karl Toriola, Chief Executive Officer of MTN Nigeria, headlined the eleventh edition with a case for measuring education by the employability of those it produces.",
    startsAt: "2026-03-21T10:00:00+01:00",
    endsAt: "2026-03-21T14:00:00+01:00",
    location: {
      name: "Trenchard Hall, University of Ibadan",
      address: "University of Ibadan, Ibadan, Oyo State",
    },
    photo: "/assets/images/pngs/mtn-ceo.png",
    heroPhoto: "/assets/images/pngs/public-lecture.png",
    programme: {
      slug: "national-public-lecture-series",
      title: "National Public Lecture Series",
    },
    sponsors: [
      { tier: "Headline", sponsor: cardinal },
      { tier: "Partner", sponsor: businessCouncil },
    ],
    blocks: [
      {
        kind: "section",
        heading: "The eleventh edition",
        body: [
          "The lecture filled Trenchard Hall, with the club's own members seated alongside faculty, industry and the wider student body. The keynote pressed the argument that a degree's worth is settled by what its holder can do on the first day of work.",
        ],
      },
      {
        kind: "quote",
        quote: "We must make education employable.",
        attribution: "Karl Toriola",
        role: "Chief Executive Officer, MTN Nigeria",
      },
    ],
  },
];

import { defineQuery } from "next-sanity";

/**
 * Blocks are projected flat — every field of every block type — and narrowed
 * to the discriminated union in `mapProgramme`. Keeps the GROQ readable and
 * the type-narrowing in TypeScript where it can be checked.
 */
const PROGRAMME_FIELDS = /* groq */ `
  "slug": slug.current,
  title,
  category,
  desc,
  "photo": photo.asset->url,
  "heroPhoto": heroPhoto.asset->url,
  summary { heading, body },
  blocks[] {
    _type,
    heading,
    body,
    alt,
    caption,
    "src": image.asset->url,
    facts[] { label, value },
    editions[] { label, year, theme, highlight, detail }
  }
`;

export const programmesQuery = defineQuery(`
  *[_type == "programme" && defined(slug.current)] | order(order asc) {
    ${PROGRAMME_FIELDS}
  }
`);

export const programmeBySlugQuery = defineQuery(`
  *[_type == "programme" && slug.current == $slug][0] {
    ${PROGRAMME_FIELDS}
  }
`);

export const programmeSlugsQuery = defineQuery(`
  *[_type == "programme" && defined(slug.current)] | order(order asc).slug.current
`);

/**
 * Cards never need the body, so the list queries project only what a card
 * renders. The detail query adds the blocks on top of the same fields.
 */
const ARTICLE_CARD_FIELDS = /* groq */ `
  "slug": slug.current,
  title,
  category,
  author,
  publishedAt,
  excerpt,
  "coverImage": coverImage.asset->url
`;

const ARTICLE_FIELDS = /* groq */ `
  ${ARTICLE_CARD_FIELDS},
  updatedAt,
  tags,
  blocks[] {
    _type,
    heading,
    body,
    alt,
    caption,
    "src": image.asset->url,
    quote,
    attribution,
    role,
    ordered,
    items,
    facts[] { label, value }
  }
`;

export const articlesQuery = defineQuery(`
  *[_type == "article" && defined(slug.current)] | order(publishedAt desc) {
    ${ARTICLE_CARD_FIELDS}
  }
`);

export const articleBySlugQuery = defineQuery(`
  *[_type == "article" && slug.current == $slug][0] {
    ${ARTICLE_FIELDS}
  }
`);

export const articleSlugsQuery = defineQuery(`
  *[_type == "article" && defined(slug.current)] | order(publishedAt desc).slug.current
`);

/**
 * Cards need the date, venue and photo; the detail page adds the hero, the
 * sponsors and the body on top. Sponsors are dereferenced here so a logo
 * corrected on the sponsor document flows into every event that used it.
 */
const EVENT_CARD_FIELDS = /* groq */ `
  "slug": slug.current,
  title,
  category,
  excerpt,
  startsAt,
  endsAt,
  hideTime,
  "photo": photo.asset->url,
  location { name, address, mapUrl }
`;

const EVENT_FIELDS = /* groq */ `
  ${EVENT_CARD_FIELDS},
  "heroPhoto": heroPhoto.asset->url,
  registration { label, url, note },
  "programme": programme->{ "slug": slug.current, title },
  sponsorsHeading,
  sponsors[] {
    tier,
    "sponsor": sponsor->{ name, "logo": logo.asset->url, website }
  },
  blocks[] {
    _type,
    heading,
    body,
    alt,
    caption,
    "src": image.asset->url,
    quote,
    attribution,
    role,
    ordered,
    items,
    facts[] { label, value },
    agenda[] { time, title, detail }
  }
`;

/** Latest first, which is the order the archive reads in. */
export const eventsQuery = defineQuery(`
  *[_type == "event" && defined(slug.current)] | order(startsAt desc) {
    ${EVENT_CARD_FIELDS}
  }
`);

export const eventBySlugQuery = defineQuery(`
  *[_type == "event" && slug.current == $slug][0] {
    ${EVENT_FIELDS}
  }
`);

export const eventSlugsQuery = defineQuery(`
  *[_type == "event" && defined(slug.current)] | order(startsAt desc).slug.current
`);

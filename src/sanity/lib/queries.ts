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

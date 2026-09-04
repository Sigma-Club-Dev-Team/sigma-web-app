import { defineField, defineType } from "sanity";

/**
 * Sponsors are their own documents rather than fields on an event: the same
 * partner backs several events, and their logo should only ever be uploaded —
 * and corrected — in one place.
 */
export const sponsor = defineType({
  name: "sponsor",
  title: "Sponsor",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      description: "Shown as the logo's alt text and on the sponsor's tooltip.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "logo",
      type: "image",
      options: { hotspot: false },
      description:
        "A transparent PNG or SVG reads best — logos sit on a light band.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "website",
      type: "url",
      description: "Optional. Makes the logo clickable, opening in a new tab.",
    }),
  ],
  preview: { select: { title: "name", subtitle: "website", media: "logo" } },
});

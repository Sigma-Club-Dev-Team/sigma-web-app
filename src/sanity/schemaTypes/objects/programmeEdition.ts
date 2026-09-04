import { defineField, defineType } from "sanity";

export const programmeEdition = defineType({
  name: "programmeEdition",
  title: "Edition",
  type: "object",
  fields: [
    defineField({
      name: "label",
      type: "string",
      description: "e.g. “11th Edition”",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "year",
      type: "string",
      description: "Leave empty when the year isn't confirmed.",
    }),
    defineField({
      name: "theme",
      type: "text",
      rows: 2,
      description: "The edition's theme, where it has one.",
    }),
    defineField({
      name: "highlight",
      type: "string",
      description: "Keynote speaker, winner, or whatever headlines the edition.",
    }),
    defineField({ name: "detail", type: "text", rows: 3 }),
  ],
  preview: {
    select: { title: "label", year: "year", subtitle: "highlight" },
    prepare: ({ title, year, subtitle }) => ({
      title: year ? `${title} — ${year}` : title,
      subtitle,
    }),
  },
});

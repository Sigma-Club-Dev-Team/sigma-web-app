import { defineArrayMember, defineField, defineType } from "sanity";

export const PROGRAMME_CATEGORIES = [
  "Flagship Events",
  "Impact and outreach",
] as const;

export const programme = defineType({
  name: "programme",
  title: "Programme",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      description: "Sets the URL: /programs/<slug>",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      type: "string",
      options: { list: [...PROGRAMME_CATEGORIES], layout: "radio" },
      description: "Drives the filter on the programmes page.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "order",
      title: "Sort order",
      type: "number",
      description: "Lower numbers come first on the home page and grid.",
      validation: (rule) => rule.required().integer().min(0),
    }),
    defineField({
      name: "desc",
      title: "Card summary",
      type: "text",
      rows: 3,
      description: "One line, used on cards and as the page meta description.",
      validation: (rule) => rule.required().max(300),
    }),
    defineField({
      name: "photo",
      title: "Card image",
      type: "image",
      options: { hotspot: true },
      description: "Square image on the home page and programmes grid.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heroPhoto",
      title: "Hero image",
      type: "image",
      options: { hotspot: true },
      description: "Wide image behind the detail page title.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "summary",
      type: "programmeSummary",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "blocks",
      title: "Page content",
      type: "array",
      of: [
        defineArrayMember({ type: "sectionBlock" }),
        defineArrayMember({ type: "imageBlock" }),
        defineArrayMember({ type: "factsBlock" }),
        defineArrayMember({ type: "editionsBlock" }),
      ],
      description: "Renders top to bottom in this order.",
      validation: (rule) => rule.required().min(1),
    }),
  ],
  orderings: [
    {
      title: "Sort order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "category", media: "photo" },
  },
});

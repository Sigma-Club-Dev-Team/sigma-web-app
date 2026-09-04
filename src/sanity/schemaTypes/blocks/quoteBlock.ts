import { defineField, defineType } from "sanity";

export const quoteBlock = defineType({
  name: "quoteBlock",
  title: "Pull quote",
  type: "object",
  fields: [
    defineField({
      name: "quote",
      type: "text",
      rows: 3,
      description: "Type the words only — the quote marks are added for you.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "attribution",
      title: "Said by",
      type: "string",
      description: "Optional. Leave empty for an unattributed line.",
    }),
    defineField({
      name: "role",
      title: "Their role",
      type: "string",
      description: "Optional. e.g. “Chief Sigmite, 2024/2025”.",
    }),
  ],
  preview: {
    select: { title: "quote", subtitle: "attribution" },
  },
});

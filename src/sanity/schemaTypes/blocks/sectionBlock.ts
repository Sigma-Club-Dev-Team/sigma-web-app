import { defineArrayMember, defineField, defineType } from "sanity";

export const sectionBlock = defineType({
  name: "sectionBlock",
  title: "Text section",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      type: "string",
      description: "e.g. “Overview”, “History & Inception”",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "body",
      title: "Paragraphs",
      type: "array",
      of: [defineArrayMember({ type: "text", rows: 5 })],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: {
    select: { title: "heading", body: "body" },
    prepare: ({ title, body }) => ({
      title,
      subtitle: Array.isArray(body) ? body[0] : undefined,
    }),
  },
});

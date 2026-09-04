import { defineArrayMember, defineField, defineType } from "sanity";

export const sectionBlock = defineType({
  name: "sectionBlock",
  title: "Text section",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      type: "string",
      description:
        "e.g. “Overview”, “History & Inception”. Optional — leave it empty to carry on under the heading above.",
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
    prepare: ({ title, body }) => {
      const first = Array.isArray(body) ? body[0] : undefined;
      return {
        // Headingless sections still need something to identify them in the list.
        title: title || first,
        subtitle: title ? first : "No heading",
      };
    },
  },
});

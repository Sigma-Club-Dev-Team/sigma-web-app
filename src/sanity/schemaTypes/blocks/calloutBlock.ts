import { defineArrayMember, defineField, defineType } from "sanity";

/** Set apart from the running text — deadlines, venues, how to take part. */
export const calloutBlock = defineType({
  name: "calloutBlock",
  title: "Callout",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      type: "string",
      description: "e.g. “Key dates”, “How to apply”",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "body",
      title: "Paragraphs",
      type: "array",
      of: [defineArrayMember({ type: "text", rows: 4 })],
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

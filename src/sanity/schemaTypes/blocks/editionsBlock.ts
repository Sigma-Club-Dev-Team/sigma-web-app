import { defineArrayMember, defineField, defineType } from "sanity";

export const editionsBlock = defineType({
  name: "editionsBlock",
  title: "Past editions",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      type: "string",
      initialValue: "Past editions",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "editions",
      type: "array",
      of: [defineArrayMember({ type: "programmeEdition" })],
      description: "Newest first — they render in this order.",
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: {
    select: { title: "heading", editions: "editions" },
    prepare: ({ title, editions }) => ({
      title,
      subtitle: `${editions?.length ?? 0} edition(s)`,
    }),
  },
});

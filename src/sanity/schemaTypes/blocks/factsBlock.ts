import { defineArrayMember, defineField, defineType } from "sanity";

export const factsBlock = defineType({
  name: "factsBlock",
  title: "Key facts",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      type: "string",
      initialValue: "At a glance",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "facts",
      type: "array",
      of: [defineArrayMember({ type: "programmeFact" })],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: {
    select: { title: "heading", facts: "facts" },
    prepare: ({ title, facts }) => ({
      title,
      subtitle: `${facts?.length ?? 0} fact(s)`,
    }),
  },
});

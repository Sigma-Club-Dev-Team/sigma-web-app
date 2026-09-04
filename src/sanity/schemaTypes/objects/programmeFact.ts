import { defineField, defineType } from "sanity";

export const programmeFact = defineType({
  name: "programmeFact",
  title: "Fact",
  type: "object",
  fields: [
    defineField({
      name: "label",
      type: "string",
      description: "e.g. “Inaugurated”, “Top prize (2026)”",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "value",
      type: "string",
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: { title: "label", subtitle: "value" },
  },
});

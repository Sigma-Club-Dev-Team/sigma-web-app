import { defineField, defineType } from "sanity";

/** The purple card pinned beside the body copy on the detail page. */
export const programmeSummary = defineType({
  name: "programmeSummary",
  title: "Summary card",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "body",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
  ],
});

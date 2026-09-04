import { defineArrayMember, defineField, defineType } from "sanity";

export const listBlock = defineType({
  name: "listBlock",
  title: "List",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      type: "string",
      description: "Optional. e.g. “What to bring”.",
    }),
    defineField({
      name: "ordered",
      title: "Numbered",
      type: "boolean",
      description: "On for steps that run in order, off for a plain list.",
      initialValue: false,
    }),
    defineField({
      name: "items",
      type: "array",
      of: [defineArrayMember({ type: "text", rows: 2 })],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: {
    select: { title: "heading", items: "items", ordered: "ordered" },
    prepare: ({ title, items, ordered }) => ({
      title: title || (Array.isArray(items) ? items[0] : "List"),
      subtitle: `${ordered ? "Numbered" : "Bulleted"} — ${items?.length ?? 0} item(s)`,
    }),
  },
});

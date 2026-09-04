import { defineArrayMember, defineField, defineType } from "sanity";

export const agendaBlock = defineType({
  name: "agendaBlock",
  title: "Run of show",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      type: "string",
      initialValue: "Run of show",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "agenda",
      title: "Items",
      type: "array",
      of: [defineArrayMember({ type: "agendaItem" })],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: {
    select: { title: "heading", agenda: "agenda" },
    prepare: ({ title, agenda }) => ({
      title,
      subtitle: `${agenda?.length ?? 0} item(s)`,
    }),
  },
});

import { defineField, defineType } from "sanity";

/** One line in an event's run of show. */
export const agendaItem = defineType({
  name: "agendaItem",
  title: "Agenda item",
  type: "object",
  fields: [
    defineField({
      name: "time",
      type: "string",
      description: "Optional, free-form. e.g. “10:00 AM” or “Day 2”.",
    }),
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "detail",
      type: "text",
      rows: 2,
      description: "Optional. A line of context — who is speaking, what happens.",
    }),
  ],
  preview: { select: { title: "title", subtitle: "time" } },
});

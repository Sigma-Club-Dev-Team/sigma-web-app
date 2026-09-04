import { defineField, defineType } from "sanity";

export const eventLocation = defineType({
  name: "eventLocation",
  title: "Location",
  type: "object",
  fields: [
    defineField({
      name: "name",
      title: "Venue",
      type: "string",
      description: "e.g. “Trenchard Hall, University of Ibadan”. Use “Online” for virtual events.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "address",
      type: "string",
      description: "Optional. The street or campus address, printed under the venue.",
    }),
    defineField({
      name: "mapUrl",
      title: "Map link",
      type: "url",
      description: "Optional. Turns the venue into a link — a Google Maps pin, usually.",
    }),
  ],
  preview: { select: { title: "name", subtitle: "address" } },
});

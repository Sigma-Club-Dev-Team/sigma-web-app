import { defineField, defineType } from "sanity";

export const SPONSOR_TIERS = ["Headline", "Partner", "Supporter"] as const;

/** Ties a sponsor document to one event, at the tier it backed that event. */
export const eventSponsor = defineType({
  name: "eventSponsor",
  title: "Event sponsor",
  type: "object",
  fields: [
    defineField({
      name: "sponsor",
      type: "reference",
      to: [{ type: "sponsor" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tier",
      type: "string",
      options: { list: [...SPONSOR_TIERS], layout: "radio" },
      initialValue: "Partner",
      description:
        "Headline sponsors are set larger, above the scrolling marquee.",
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: { title: "sponsor.name", subtitle: "tier", media: "sponsor.logo" },
  },
});

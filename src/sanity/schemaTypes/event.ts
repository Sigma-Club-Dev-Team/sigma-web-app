import { defineArrayMember, defineField, defineType } from "sanity";

export const EVENT_CATEGORIES = [
  "Flagship Events",
  "Impact and outreach",
  "Social & Cultural",
  "Alumni & Networking",
] as const;

export const event = defineType({
  name: "event",
  title: "Event",
  type: "document",
  groups: [
    { name: "details", title: "Details", default: true },
    { name: "content", title: "Page content" },
    { name: "sponsors", title: "Sponsors" },
  ],
  fields: [
    defineField({
      name: "title",
      type: "string",
      group: "details",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      description: "Sets the URL: /events/<slug>",
      group: "details",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      type: "string",
      options: { list: [...EVENT_CATEGORIES] },
      description: "Drives the filter on the events page.",
      group: "details",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Card summary",
      type: "text",
      rows: 3,
      description: "One line, used on cards and as the page meta description.",
      group: "details",
      validation: (rule) => rule.required().max(300),
    }),
    defineField({
      name: "startsAt",
      title: "Starts",
      type: "datetime",
      options: { timeStep: 15 },
      description:
        "Times are entered and shown in West Africa Time. An event moves to the archive by itself the day after it ends.",
      group: "details",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "endsAt",
      title: "Ends",
      type: "datetime",
      options: { timeStep: 15 },
      description: "Optional. Set it for events that run past one day.",
      group: "details",
      validation: (rule) =>
        rule.min(rule.valueOfField("startsAt")).warning(
          "An event cannot end before it starts.",
        ),
    }),
    defineField({
      name: "hideTime",
      title: "Hide the clock time",
      type: "boolean",
      initialValue: false,
      description: "Show the date alone, for events whose time isn't fixed yet.",
      group: "details",
    }),
    defineField({
      name: "location",
      type: "eventLocation",
      group: "details",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "photo",
      title: "Card image",
      type: "image",
      options: { hotspot: true },
      description: "Shown on the home page and the events grid.",
      group: "details",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heroPhoto",
      title: "Hero image",
      type: "image",
      options: { hotspot: true },
      description: "Wide image behind the detail page title.",
      group: "details",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "registration",
      type: "eventRegistration",
      description: "Optional. Leave it empty and no button is shown.",
      group: "details",
    }),
    defineField({
      name: "programme",
      title: "Part of programme",
      type: "reference",
      to: [{ type: "programme" }],
      description:
        "Optional. Links the event back to its series, e.g. an edition of the Quiz Competition.",
      group: "details",
    }),
    defineField({
      name: "blocks",
      title: "Page content",
      type: "array",
      of: [
        defineArrayMember({ type: "sectionBlock" }),
        defineArrayMember({ type: "imageBlock" }),
        defineArrayMember({ type: "agendaBlock" }),
        defineArrayMember({ type: "factsBlock" }),
        defineArrayMember({ type: "listBlock" }),
        defineArrayMember({ type: "quoteBlock" }),
        defineArrayMember({ type: "calloutBlock" }),
      ],
      description: "Renders top to bottom in this order.",
      group: "content",
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: "sponsorsHeading",
      title: "Sponsors heading",
      type: "string",
      description: "Optional. Defaults to “Sponsors & Partners”.",
      group: "sponsors",
    }),
    defineField({
      name: "sponsors",
      type: "array",
      of: [defineArrayMember({ type: "eventSponsor" })],
      description:
        "The marquee under the page content. Add a sponsor once here and it scrolls with the rest.",
      group: "sponsors",
    }),
  ],
  orderings: [
    {
      title: "Date, soonest first",
      name: "startsAtAsc",
      by: [{ field: "startsAt", direction: "asc" }],
    },
    {
      title: "Date, latest first",
      name: "startsAtDesc",
      by: [{ field: "startsAt", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      startsAt: "startsAt",
      venue: "location.name",
      media: "photo",
    },
    prepare: ({ title, startsAt, venue, media }) => {
      const date = startsAt
        ? new Intl.DateTimeFormat("en-GB", {
            dateStyle: "medium",
            timeZone: "Africa/Lagos",
          }).format(new Date(startsAt))
        : "No date";

      return { title, subtitle: [date, venue].filter(Boolean).join(" — "), media };
    },
  },
});

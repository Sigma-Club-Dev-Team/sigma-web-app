import { defineField, defineType } from "sanity";

export const imageBlock = defineType({
  name: "imageBlock",
  title: "Image",
  type: "object",
  fields: [
    defineField({
      name: "image",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "alt",
      title: "Alt text",
      type: "string",
      description:
        "Describes the image for screen readers and search engines. Not shown on the page.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "caption",
      title: "Description",
      type: "string",
      description:
        "Optional. Printed in italics beneath the image. Leave empty and no caption is shown.",
    }),
  ],
  preview: {
    select: { title: "caption", subtitle: "alt", media: "image" },
    prepare: ({ title, subtitle, media }) => ({
      // Falls back to the alt text so uncaptioned images still read properly.
      title: title || subtitle,
      subtitle: title ? subtitle : "No description",
      media,
    }),
  },
});

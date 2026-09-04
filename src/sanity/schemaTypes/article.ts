import { defineArrayMember, defineField, defineType } from "sanity";

export const ARTICLE_CATEGORIES = [
  "Announcements",
  "Alumni Spotlight",
  "Events",
  "Press",
] as const;

export const article = defineType({
  name: "article",
  title: "News & Publication",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      description: "Sets the URL: /news/<slug>",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      type: "string",
      options: { list: [...ARTICLE_CATEGORIES], layout: "radio" },
      description: "Drives the filter on the news page.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "author",
      type: "string",
      initialValue: "Sigma Club",
      description: "Shown in the byline.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Published",
      type: "datetime",
      description: "Orders the news page — newest first.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "updatedAt",
      title: "Last updated",
      type: "datetime",
      description:
        "Optional. Set it only when a published story is revised; it prints under the byline.",
    }),
    defineField({
      name: "excerpt",
      title: "Standfirst",
      type: "text",
      rows: 3,
      description:
        "One or two sentences. Opens the article, and doubles as the card summary and meta description.",
      validation: (rule) => rule.required().max(300),
    }),
    defineField({
      name: "coverImage",
      title: "Cover image",
      type: "image",
      options: { hotspot: true },
      description:
        "The card thumbnail. Also washes faintly behind the article title.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tags",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      options: { layout: "tags" },
      description: "Optional. A few keywords, printed at the foot of the story.",
    }),
    defineField({
      name: "blocks",
      title: "Article content",
      type: "array",
      of: [
        defineArrayMember({ type: "sectionBlock" }),
        defineArrayMember({ type: "imageBlock" }),
        defineArrayMember({ type: "quoteBlock" }),
        defineArrayMember({ type: "listBlock" }),
        defineArrayMember({ type: "calloutBlock" }),
        defineArrayMember({ type: "factsBlock" }),
      ],
      description: "Renders top to bottom in this order.",
      validation: (rule) => rule.required().min(1),
    }),
  ],
  orderings: [
    {
      title: "Newest first",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      category: "category",
      publishedAt: "publishedAt",
      media: "coverImage",
    },
    prepare: ({ title, category, publishedAt, media }) => ({
      title,
      subtitle: [category, publishedAt?.slice(0, 10)].filter(Boolean).join(" — "),
      media,
    }),
  },
});

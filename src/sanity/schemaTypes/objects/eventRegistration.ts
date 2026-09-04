import { defineField, defineType } from "sanity";

/** The call to action in the details rail. Leave the URL empty to hide it. */
export const eventRegistration = defineType({
  name: "eventRegistration",
  title: "Registration",
  type: "object",
  fields: [
    defineField({
      name: "label",
      title: "Button label",
      type: "string",
      initialValue: "Register to attend",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "url",
      title: "Link",
      type: "url",
      description: "Where the button goes — a form, a ticketing page, a WhatsApp invite.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "note",
      type: "string",
      description: "Optional small print under the button — deadline, price, who may attend.",
    }),
  ],
  preview: { select: { title: "label", subtitle: "url" } },
});

import { defineType, defineField } from "sanity"

export const portfolio = defineType({
  name: "portfolio",
  title: "Portfolio",
  type: "document",
  fields: [

    defineField({
      name: "title",
      title: "Judul Proyek",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "coverImage",
      title: "Gambar",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "featured",
      title: "Tampilkan di Beranda (Highlight)",
      type: "boolean",
      initialValue: false,
    }),
  ],

  preview: {
    select: {
      title: "title",
      media: "coverImage",
      subtitle: "category",
    },
  },
})
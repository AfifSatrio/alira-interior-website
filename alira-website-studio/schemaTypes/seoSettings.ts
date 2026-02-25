import { defineField, defineType } from "sanity";

export const seoSettings = defineType({
    name: "seoSettings",
    title: "Pengaturan SEO",
    type: "document",
    fields: [
        defineField({
        name: "seoTitle",
        title: "Judul SEO",
        type: "string",
        validation: (Rule) => Rule.required(),
        }),

        defineField({
        name: "seoDesc",
        title: "Deskripsi SEO",
        type: "text",
        rows: 3,
        validation: (Rule) => Rule.required(),
        }),

        defineField({
        name: "seoImage",
        title: "Logo SEO",
        type: "image",
        options: {hotspot:true},
        validation: (Rule) => Rule.required(),
        }),
    ]
})
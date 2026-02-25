import { defineField, defineType } from "sanity"

export const siteSettings = defineType({
    name: "siteSettings",
    title: "Pengaturan Beranda",
    type: "document",
    fields: [
        
        defineField({
        name: "tagline",
        title: "Tagline",
        type: "string",
        validation: (Rule) => Rule.required(),
       }),

       defineField({
        name: "subtagline",
        title: "Sub-Tagline",
        type: "string",
        validation: (Rule) => Rule.required(),
       }),

       defineField({
        name: "backgroundImage",
        title: "Background",
        type: "image",
        options: {
            hotspot: true,
        },
        validation: (Rule) => Rule.required(),
       }),

       defineField({
        name: "whatsappNumber",
        title: "No Whatsapp",
        type: "string",
        validation: (Rule) => Rule.required(),
       }),

       defineField({
        name: "email",
        title: "Email",
        type: "string",
        validation: (Rule) => Rule.required(),
       }),

       defineField({
        name: "address",
        title: "Alamat",
        type: "string",
        validation: (Rule) => Rule.required(),
       }),

       defineField({
        name: "socialMedia",
        title: "Link Socmed",
        type: "url"
       }),
    ]
})
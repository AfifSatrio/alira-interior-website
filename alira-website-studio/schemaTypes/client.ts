import { defineField, defineType } from "sanity";

export const clients = defineType({
    name: "clients",
    title: "Client Alira",
    type: "document",
    fields: [

        defineField({
            name: "clientName",
            title: "Nama Client",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: "clientLogo",
            title: "Logo Client",
            type: "image",
            validation: (Rule) => Rule.required(),
        })
    ]
})
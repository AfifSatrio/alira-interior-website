import { title } from "node:process";
import { defineField, defineType } from "sanity";

export const blog = defineType ({
    name: "blog",
    title: "Blog",
    type: "document",
    fields: [

        defineField ({
            name: "title",
            title: "Judul",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),

        defineField ({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),

        defineField ({
            name: "mainImage",
            title: "Thumbnail",
            type: "image",
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        }),

        defineField ({
            name: "author",
            title: "Penulis",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),

        defineField ({
            name: "content",
            title: "Isi Artikel",
            type: "array",
            of: [{ type: "block" }],
            validation: (Rule) => Rule.required(),
        }),

        defineField ({
            name: "publishedAt",
            title: "Tanggal Upload",
            type: "datetime",
            validation: (Rule) => Rule.required(),
        }),

        defineField ({
            name: "featured",
            title: "Tampilkan di Beranda",
            type: "boolean",
            initialValue: false,
        }),
    ],

    preview: {
        select: {
            title: "title",
            media: "mainImage",
            subtitle: "publishedAt",
        },
    },
})
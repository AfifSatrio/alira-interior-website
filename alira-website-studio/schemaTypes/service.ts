import { defineField, defineType } from "sanity"

const layananOptions = [
  { title: "Kantor dan Corporate Space", value: "kantor-corporate" },
  { title: "Apartemen dan Hunian", value: "apartemen-hunian" },
  { title: "Toko dan Retail", value: "toko-retail" },
  { title: "Mall dan Commercial Area", value: "mall-commercial" },
  { title: "Hotel dan Hospitality", value: "hotel-hospitality" },
  { title: "Sekolah dan Instansi Pendidikan", value: "sekolah-pendidikan" },
  { title: "Hospital dan Fasilitas Kesehatan", value: "hospital-kesehatan" },
  { title: "Rumah dan Villa", value: "rumah-villa" },
  { title: "Cafe dan Coffee Shop", value: "cafe-coffee" },
]

export default defineType({
  name: "service",
  title: "Layanan",
  type: "document",
  fields: [
    defineField({
      name: "item",
      title: "Nama Layanan",
      type: "string",
      options: {
        list: layananOptions,
        layout: "dropdown",
      },
      validation: (Rule) =>
        Rule.required().custom(async (value, context) => {
          if (!value) return true

          const client = context.getClient({ apiVersion: "2024-01-01" })
          const existing = await client.fetch(
            `count(*[_type == "service" && item == $value && _id != $id])`,
            { value, id: context.document?._id ?? "" }
          )

          if (existing > 0) return "Layanan ini sudah digunakan di dokumen lain."
          return true
        }),
    }),
    defineField({
      name: "image",
      title: "Gambar",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
  ],
 
  preview: {
    select: {
      item: "item",
      media: "image",
    },
    prepare({ item, media }) {
      const label = layananOptions.find((o) => o.value === item)?.title ?? item
      return {
        title: label,
        media,
      }
    },
  },
})
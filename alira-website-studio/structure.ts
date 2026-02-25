import { StructureBuilder } from "sanity/structure"

export const structure = (S: StructureBuilder) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Pengaturan Beranda")
        .id("siteSettings")
        .child(
          S.document()
            .schemaType("siteSettings")
            .documentId("siteSettings")
        ),

      S.listItem()
        .title("Pengaturan SEO")
        .id("seoSettings")
        .child(
          S.document()
            .schemaType("seoSettings")
            .documentId("seoSettings")
        ),

      S.divider(),

      ...S.documentTypeListItems().filter(
        (item) => item.getId() !== "siteSettings" && (item).getId() !== "seoSettings"
      ),
    ])
import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://www.alirainterior.com", lastModified: new Date() },
    { url: "https://www.alirainterior.com/about", lastModified: new Date() },
    { url: "https://www.alirainterior.com/project", lastModified: new Date() },
    { url: "https://www.alirainterior.com/blog", lastModified: new Date() },
    { url: "https://www.alirainterior.com/contact", lastModified: new Date() },
  ]
}
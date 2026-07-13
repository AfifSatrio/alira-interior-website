"use server"

import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { auth } from "@/auth"

function createSlug(title: string) {
  const slug = title
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")

  return slug || "blog-post"
}

async function createUniqueSlug(title: string, currentId?: string) {
  const baseSlug = createSlug(title)
  let slug = baseSlug
  let suffix = 2

  while (true) {
    const existing = await prisma.blog.findUnique({ where: { slug } })
    if (!existing || existing.id === currentId) return slug

    slug = `${baseSlug}-${suffix}`
    suffix += 1
  }
}

function parseContent(contentString: string) {
  try {
    const content = JSON.parse(contentString)
    return Array.isArray(content) ? content : []
  } catch {
    return [
      {
        _type: "block",
        style: "normal",
        children: [{ _type: "span", text: contentString }],
      },
    ]
  }
}

function revalidateBlogPaths() {
  revalidatePath("/admin/blog")
  revalidatePath("/")
  revalidatePath("/landing")
  revalidatePath("/blog")
}

export async function createBlog(formData: FormData) {
  const session = await auth()
  if (!session) throw new Error("Unauthorized")

  const title = ((formData.get("title") as string) || "").trim()
  const slug = await createUniqueSlug(title)
  const author = formData.get("author") as string
  const mainImage = formData.get("mainImage") as string
  const publishedAt = new Date()
  const contentString = formData.get("content") as string
  const content = parseContent(contentString)

  await prisma.blog.create({ data: { title, slug, author, mainImage, publishedAt, content } })
  revalidateBlogPaths()
}

export async function toggleBlogFeatured(id: string, featured: boolean) {
  const session = await auth()
  if (!session) throw new Error("Unauthorized")

  await prisma.blog.update({ where: { id }, data: { featured } })
  revalidateBlogPaths()
}

export async function deleteBlog(id: string) {
  const session = await auth()
  if (!session) throw new Error("Unauthorized")

  await prisma.blog.delete({ where: { id } })
  revalidateBlogPaths()
}

export async function updateBlog(id: string, formData: FormData) {
  const session = await auth()
  if (!session) throw new Error("Unauthorized")

  const title = ((formData.get("title") as string) || "").trim()
  const slug = await createUniqueSlug(title, id)
  const author = formData.get("author") as string
  const mainImage = formData.get("mainImage") as string
  const contentString = formData.get("content") as string
  const content = parseContent(contentString)

  await prisma.blog.update({
    where: { id },
    data: { title, slug, author, mainImage, content }
  })
  
  revalidateBlogPaths()
}

"use server"

import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { auth } from "@/auth"

export async function createPortfolio(formData: FormData) {
  const session = await auth()
  if (!session) throw new Error("Unauthorized")

  const title = formData.get("title") as string
  const coverImage = formData.get("coverImage") as string
  const featured = formData.get("featured") === "true"

  await prisma.portfolio.create({ data: { title, coverImage, featured } })
  revalidatePath("/admin/portfolio")
  revalidatePath("/")
  revalidatePath("/landing")
  revalidatePath("/projects")
}

export async function togglePortfolioFeatured(id: string, featured: boolean) {
  const session = await auth()
  if (!session) throw new Error("Unauthorized")

  await prisma.portfolio.update({ where: { id }, data: { featured } })
  revalidatePath("/admin/portfolio")
  revalidatePath("/")
  revalidatePath("/landing")
  revalidatePath("/projects")
}

export async function deletePortfolio(id: string) {
  const session = await auth()
  if (!session) throw new Error("Unauthorized")

  await prisma.portfolio.delete({ where: { id } })
  revalidatePath("/admin/portfolio")
  revalidatePath("/")
  revalidatePath("/landing")
  revalidatePath("/projects")
}

export async function updatePortfolio(id: string, formData: FormData) {
  const session = await auth()
  if (!session) throw new Error("Unauthorized")

  const title = formData.get("title") as string
  const coverImage = formData.get("coverImage") as string
  const featured = formData.get("featured") === "true"

  await prisma.portfolio.update({
    where: { id },
    data: { title, coverImage, featured }
  })
  
  revalidatePath("/admin/portfolio")
  revalidatePath("/")
  revalidatePath("/landing")
  revalidatePath("/projects")
}

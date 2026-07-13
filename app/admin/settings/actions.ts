"use server"

import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { auth } from "@/auth"

export async function updateSettings(formData: FormData) {
  const session = await auth()
  if (!session) throw new Error("Unauthorized")

  const tagline = formData.get("tagline") as string
  const subtagline = formData.get("subtagline") as string
  const whatsappNumber = formData.get("whatsappNumber") as string
  const email = formData.get("email") as string
  const address = formData.get("address") as string
  const mapUrl = formData.get("mapUrl") as string
  const backgroundImage = formData.get("backgroundImage") as string

  const seoTitle = formData.get("seoTitle") as string
  const seoDesc = formData.get("seoDesc") as string
  const seoImage = formData.get("seoImage") as string

  await prisma.siteSettings.upsert({
    where: { id: 1 },
    update: { tagline, subtagline, whatsappNumber, email, address, mapUrl, backgroundImage },
    create: { id: 1, tagline, subtagline, whatsappNumber, email, address, mapUrl, backgroundImage }
  })

  await prisma.seoSettings.upsert({
    where: { id: 1 },
    update: { seoTitle, seoDesc, seoImage },
    create: { id: 1, seoTitle, seoDesc, seoImage }
  })

  revalidatePath("/")
  revalidatePath("/landing")
  revalidatePath("/admin/settings")
  
  return { success: true }
}

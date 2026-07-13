"use server"

import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { auth } from "@/auth"

export async function createService(formData: FormData) {
  const session = await auth()
  if (!session) throw new Error("Unauthorized")

  const item = formData.get("item") as string
  const image = formData.get("image") as string

  await prisma.service.create({ data: { item, image } })
  revalidatePath("/admin/service")
  revalidatePath("/")
  revalidatePath("/landing")
}

export async function deleteService(id: string) {
  const session = await auth()
  if (!session) throw new Error("Unauthorized")

  await prisma.service.delete({ where: { id } })
  revalidatePath("/admin/service")
  revalidatePath("/")
  revalidatePath("/landing")
}

export async function updateService(id: string, formData: FormData) {
  const session = await auth()
  if (!session) throw new Error("Unauthorized")

  const item = formData.get("item") as string
  const image = formData.get("image") as string

  await prisma.service.update({
    where: { id },
    data: { item, image }
  })
  
  revalidatePath("/admin/service")
  revalidatePath("/")
  revalidatePath("/landing")
}

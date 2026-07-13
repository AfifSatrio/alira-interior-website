"use server"

import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { auth } from "@/auth"

export async function createClient(formData: FormData) {
  const session = await auth()
  if (!session) throw new Error("Unauthorized")

  const clientName = formData.get("clientName") as string
  const clientLogo = formData.get("clientLogo") as string

  await prisma.client.create({ data: { clientName, clientLogo } })
  revalidatePath("/admin/client")
  revalidatePath("/")
  revalidatePath("/landing")
}

export async function deleteClient(id: string) {
  const session = await auth()
  if (!session) throw new Error("Unauthorized")

  await prisma.client.delete({ where: { id } })
  revalidatePath("/admin/client")
  revalidatePath("/")
  revalidatePath("/landing")
}

export async function updateClient(id: string, formData: FormData) {
  const session = await auth()
  if (!session) throw new Error("Unauthorized")

  const clientName = formData.get("clientName") as string
  const clientLogo = formData.get("clientLogo") as string

  await prisma.client.update({
    where: { id },
    data: { clientName, clientLogo }
  })
  
  revalidatePath("/admin/client")
  revalidatePath("/")
  revalidatePath("/landing")
}

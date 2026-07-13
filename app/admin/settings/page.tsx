import prisma from "@/lib/prisma"
import SettingsForm from "./SettingsForm"

export default async function SettingsPage() {
  const site = await prisma.siteSettings.findUnique({ where: { id: 1 } })
  const seo = await prisma.seoSettings.findUnique({ where: { id: 1 } })

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Website Settings</h1>
      <SettingsForm site={site} seo={seo} />
    </div>
  )
}

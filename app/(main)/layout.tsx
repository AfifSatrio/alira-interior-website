import Navbar from "@/components/header/Navbar"
import Footer from "@/components/footer/Footer"
import WhatsappFloat from "@/components/WhatsappFloat"
import { sanityClient } from "@/lib/sanity.client"
import { siteSettingsQuery } from "@/lib/queries"

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const settings = await sanityClient.fetch(siteSettingsQuery)
  return (
    <>
      <Navbar />
      {children}
      <Footer settings={settings} />
      <WhatsappFloat phone={"6282326931783"} />
    </>
  )
}

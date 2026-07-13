import Navbar from "@/components/header/Navbar"
import Footer from "@/components/footer/Footer"
import WhatsappFloat from "@/components/WhatsappFloat"
import prisma from "@/lib/prisma"

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const settings = await prisma.siteSettings.findUnique({
    where: { id: 1 },
  })
  return (
    <>
      <Navbar />
      {children}
      <Footer settings={settings!} />
      <WhatsappFloat phone={"6282326931783"} />
    </>
  )
}

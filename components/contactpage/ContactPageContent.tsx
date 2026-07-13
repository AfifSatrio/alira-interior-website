import ContactPageClient from "./ContactPageClient"
import prisma from "@/lib/prisma"

const ContactPageContent = async () => {
    const contact = await prisma.siteSettings.findUnique({ where: { id: 1 } })
  return <ContactPageClient contact = {contact} />
}

export default ContactPageContent
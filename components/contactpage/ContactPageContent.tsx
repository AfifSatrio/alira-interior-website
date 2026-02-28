import { siteSettingsQuery } from "@/lib/queries"
import { sanityClient } from "@/lib/sanity.client"
import ContactPageClient from "./ContactPageClient"

const ContactPageContent = async () => {
    const contact = await sanityClient.fetch(siteSettingsQuery)
  return <ContactPageClient contact = {contact} />
}

export default ContactPageContent
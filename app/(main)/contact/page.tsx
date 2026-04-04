import type { Metadata } from 'next'
import ContactPageContent from "@/components/contactpage/ContactPageContent"
import ContactPageHeader from "@/components/contactpage/ContactPageHeader"

export const metadata: Metadata = {
  title: 'Kontak - Alira Interior',
}

const page = () => {
  return (
    <div>
        <ContactPageHeader />
        <ContactPageContent />
    </div>
  )
}

export default page

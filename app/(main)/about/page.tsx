import type { Metadata } from 'next'

import AboutPageContent from '@/components/aboutpage/AboutPageContent'
import ValueSection from '@/components/value-section/ValueSection'
import AboutPageHeader from '@/components/aboutpage/AboutPageHeader'
import VisiMisiSection from '@/components/aboutpage/VisiMisiSection'
import ClosingStatement from '@/components/aboutpage/ClosingStatement'
import JasaAlira from '@/components/aboutpage/JasaAlira'
import JasaLanjutan from '@/components/aboutpage/JasaLanjutan'

export const metadata: Metadata = {
  title: 'Tentang - Alira Interior'
}

const page = () => {
  return (
    <div>
        <AboutPageHeader />
        <AboutPageContent />
        <VisiMisiSection />
        <JasaAlira />
        <JasaLanjutan />
        <ValueSection />
        <ClosingStatement />
    </div>
  )
}

export default page

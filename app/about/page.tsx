import type { Metadata } from 'next'

import AboutPageContent from '@/components/aboutpage/AboutPageContent'
import ValueSection from '@/components/value-section/ValueSection'
import AboutPageHeader from '@/components/aboutpage/AboutPageHeader'

export const metadata: Metadata = {
  title: 'Tentang - Alira Interior'
}

const page = () => {
  return (
    <div>
        <AboutPageHeader />
        <AboutPageContent />
        <ValueSection />
    </div>
  )
}

export default page
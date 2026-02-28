import AboutPageContent from '@/components/aboutpage/AboutPageContent'
import ValueSection from '@/components/value-section/ValueSection'
import AboutPageHeader from '@/components/aboutpage/AboutPageHeader'

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
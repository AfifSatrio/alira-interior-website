import Hero from "@/components/hero-section/Hero"
import Jasa from "@/components/jasa-section/Jasa"
import ProcessSection from "@/components/process-section/ProcessSection"
import ProjectSection from "@/components/project-section/ProjectSection"
import ValueSection from "@/components/value-section/ValueSection"
import AliraClient from "@/components/client-section/AliraClient"

const page = () => {
  return (
    <div className="">
      <Hero />
      <Jasa />
      <ProjectSection />
      <ValueSection />
      <ProcessSection />
      <AliraClient />
    </div>
  )
}

export default page
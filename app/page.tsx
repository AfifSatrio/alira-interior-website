import Hero from "@/components/hero-section/Hero"
import Jasa from "@/components/jasa-section/Jasa"
import ProjectSection from "@/components/project-section/ProjectSection"
import ValueSection from "@/components/value-section/ValueSection"

const page = () => {
  return (
    <div className="">
      <Hero />
      <Jasa />
      <ProjectSection />
      <ValueSection />
    </div>
  )
}

export default page
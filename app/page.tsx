import Hero from "@/components/hero-section/Hero"
import Jasa from "@/components/jasa-section/Jasa"
import ProcessSection from "@/components/process-section/ProcessSection"
import ProjectSection from "@/components/project-section/ProjectSection"
import ValueSection from "@/components/value-section/ValueSection"
import ClientSection from "@/components/client-section/ClientSection"
import BlogSection from "@/components/blog-section/BlogSection"

const page = () => {
  return (
    <div>
      <Hero />
      <Jasa />  
      <ProjectSection />
      <ValueSection />
      <ProcessSection />
      <ClientSection />
      <BlogSection />
    </div>
  )
}

export default page
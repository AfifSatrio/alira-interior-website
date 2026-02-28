import Hero from "@/components/hero-section/Hero"
import Jasa from "@/components/jasa-section/Jasa"
import ProcessSection from "@/components/process-section/ProcessSection"
import ProjectSection from "@/components/project-section/ProjectSection"
import ValueSection from "@/components/value-section/ValueSection"
import ClientSection from "@/components/client-section/ClientSection"
import BlogSection from "@/components/blog-section/BlogSection"
import { sanityClient } from "@/lib/sanity.client"
import { highlightPortfolioQuery, siteSettingsQuery } from "@/lib/queries"

export default async function page() {
  const projects = await sanityClient.fetch(highlightPortfolioQuery)
  const settings =  await sanityClient.fetch(siteSettingsQuery)

  if (!settings) return null

  return (
    <>
      <Hero projects={projects} settings={settings}/>
      <Jasa />  
      <ProjectSection />
      <ValueSection />
      <ProcessSection />
      <ClientSection />
      <BlogSection />
    </>
  )
}
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import ProjectsSection from "@/components/projects-section"
import ExperienceSection from "@/components/experience-section"
import CreativeWorksSection from "@/components/creative-works-section"
import OpensourceSection from "@/components/opensource-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectsSection />
      <ExperienceSection />
      <OpensourceSection />
      <ContactSection />
      {/* <CreativeWorksSection /> */}
    </>
  )
}

import ProjectCard from "@/components/project-card"
import ProjectSlider from "@/components/project-slider"
import { ProjectsRegistryKey, projectsRegistry, ProjectData } from "@/data/projects-registry"
import { projectsList } from "@/data/projects-registry"
import Link from "next/link"
import { ProjectPopover } from "./project-popover"

export default async function ProjectsSection() {

  return (
    <>
      <section id="projects" className="content-max-width px-4 py-20 max-md:py-15 border-t border-foreground">
        <h2 className="brutalist-heading mb-12">PROJECTS</h2>

        <div className="space-y-4">
          {projectsList.map((project) => (
            project.detailsFileMdx ?
              <ProjectPopover key={project.id} projectId={project.id}>
                <Link href={`/projects/${project.id}`} key={project.id} className="block" style={{textDecoration: "none"}}>
                  <ProjectCard key={project.id} projectId={project.id} clickable={project.detailsFileMdx !== null} />
                </Link>
              </ProjectPopover>
              :
              <ProjectCard key={project.id} projectId={project.id} clickable={project.detailsFileMdx !== null} />
          ))}
        </div>
      </section>
    </>
  )
}

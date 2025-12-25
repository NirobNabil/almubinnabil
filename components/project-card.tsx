import Image from "next/image"
import { ProjectId, projectsList } from "@/data/projects-registry"

export default function ProjectCard({ projectId, clickable }: { projectId: string, clickable: boolean }) {

    const project = projectsList.find(p => p.id === projectId)

    if (!project) {
        return <></>
    }

    return (
        <div
            className={`flex max-md:flex-col brutalist-border p-6 cursor-pointer hover:bg-foreground hover:text-background transition-colors group gap-x-6`}
        >
            {project.hasThumbnail &&
                <div className="max-w-60 min-w-60 max-md:max-w-full max-md:min-w-full max-md:w-full flex" >
                    <Image
                        src={`/content/projects/${project.id}/thumbnail.png`}
                        alt={project.title}
                        width={800} height={600}
                        className="mb-4 w-full h-auto object-contain border border-foreground"
                    />
                </div>
            }

            <div className="grow" >
                <div className="mb-3">
                    <div className="flex justify-between items-start " >
                        <h3 className={`brutalist-heading ${clickable ? 'group-hover:tracking-wider' : ''} transition-all`}>{project.title}</h3>
                        <span className="brutalist-label text-xs">{project.year}</span>
                    </div>
                </div>

                <p className="text-sm mb-4 leading-relaxed">{project.description}</p>

                <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag) => (
                        <span key={tag} className="brutalist-label text-xs border border-foreground px-2 py-1">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="mt-4 text-xs">CLICK TO EXPAND →</div>
            </div>
        </div>
    )
}

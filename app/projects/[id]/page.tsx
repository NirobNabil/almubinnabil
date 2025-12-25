"use server"

import { RenderMdx } from "@/components/render-mdx";
import { projectsList } from "@/data/projects-registry";


export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {

    const {id} = await params;

    const project = projectsList.find(p => p.id === id);

    if ( !project ) {
        return <div className="content-max-width px-4 pt-10 pb-40" >Project not found</div>;
    }

    return (
    <div className="content-max-width px-4 pt-10 pb-40" >
        <RenderMdx loader={project.detailsFileMdx} />
    </div>
  )
}
import { useState, useEffect, memo } from "react"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { type ProjectData } from "@/data/projects-registry"
import dynamic from "next/dynamic"


function ProjectSlider({ project, isOpen, onClose }: { project: ProjectData; isOpen: boolean; onClose: () => void }) {

  if (!project.detailsFileMdx) {
    return null;
  }

  const detailsMdxImportFn = project.detailsFileMdx;
  const Details = dynamic(detailsMdxImportFn, {
    ssr: true,
  });

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="sm:max-w-1/2 bg-white border-l border-black overflow-y-auto">
        <SheetHeader className="border-b border-black pb-4 mb-8">
          <SheetTitle className="brutalist-heading text-left">{project.title}</SheetTitle>
        </SheetHeader>

        <div className="space-y-12 px-4">
          <Details />
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default memo(ProjectSlider);
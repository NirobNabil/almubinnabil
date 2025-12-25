"use client"

import { Popover } from "@/components/ui/popover";
import { projectsList } from "@/data/projects-registry";
import { PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import Image from "next/image";
import { useState } from "react";


export function ProjectPopover({ projectId, children }: { projectId: string, children: React.ReactNode }) {
    const [open, setOpen] = useState(false);
    const project = projectsList.find(p => p.id === projectId);

    // if ( !project ) {
    //     return <></>;
    // }
    

    return (
        <Popover modal={false} open={open} onOpenChange={setOpen} >
            <PopoverTrigger asChild className="text-left focus:outline-none" onMouseMove={() => setOpen(true)} onClick={() => setOpen(true)} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} >
                {children}
            </PopoverTrigger>
            <PopoverContent 
                className="focus:outline-none z-50 min-w-60 max-w-60 h-[var(--radix-popover-trigger-height)] pl-2" 
                side="right" 
                onMouseEnter={() => setOpen(true)} 
                onMouseLeave={() => setOpen(false)} 
                avoidCollisions={false}
                onOpenAutoFocus={(e) => e.preventDefault()}
                onCloseAutoFocus={(e) => e.preventDefault()}
            >
                <div className="pl-4 pt-6" >
                    {project?.extra}               
                </div>
            </PopoverContent>
        </Popover>
    )
}
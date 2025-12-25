"use client"

import * as React from "react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

type HoverPopoverProps = {
  children: React.ReactNode
  content: React.ReactNode
  side?: "top" | "right" | "bottom" | "left"
  align?: "start" | "center" | "end"
  openDelay?: number
  closeDelay?: number
}

export function HoverPopover({
  children,
  content,
  side = "top",
  align = "center",
  openDelay = 0,
  closeDelay = 100,
}: HoverPopoverProps) {
  const [open, setOpen] = React.useState(false)
  const openTimeout = React.useRef<NodeJS.Timeout | null>(null)
  const closeTimeout = React.useRef<NodeJS.Timeout | null>(null)

  const handleOpen = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current)
    openTimeout.current = setTimeout(() => setOpen(true), openDelay)
  }

  const handleClose = () => {
    if (openTimeout.current) clearTimeout(openTimeout.current)
    closeTimeout.current = setTimeout(() => setOpen(false), closeDelay)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <span
          onMouseEnter={handleOpen}
          onMouseLeave={handleClose}
          className="inline-flex"
        >
          {children}
        </span>
      </PopoverTrigger>

      <PopoverContent
        side={side}
        align={align}
        onMouseEnter={handleOpen}
        onMouseLeave={handleClose}
        className="w-auto"
      >
        {content}
      </PopoverContent>
    </Popover>
  )
}

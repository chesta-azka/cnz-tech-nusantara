"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface GlowOrbProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl"
  color?: "primary" | "accent" | "secondary"
  blur?: boolean
  animate?: boolean
}

const sizeMap = {
  sm: "w-32 h-32",
  md: "w-64 h-64",
  lg: "w-96 h-96",
  xl: "w-[500px] h-[500px]",
}

const colorMap = {
  primary: "bg-primary/30",
  accent: "bg-accent/30",
  secondary: "bg-secondary/50",
}

const GlowOrb = React.forwardRef<HTMLDivElement, GlowOrbProps>(
  ({ className, size = "md", color = "primary", blur = true, animate = true, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "absolute rounded-full pointer-events-none",
          sizeMap[size],
          colorMap[color],
          blur && "blur-3xl",
          animate && "animate-pulse-glow",
          className
        )}
        {...props}
      />
    )
  }
)
GlowOrb.displayName = "GlowOrb"

export { GlowOrb }

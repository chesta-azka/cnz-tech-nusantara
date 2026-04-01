"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface FloatingBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  delay?: number
}

const FloatingBadge = React.forwardRef<HTMLDivElement, FloatingBadgeProps>(
  ({ className, delay = 0, children, style, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "glass rounded-xl px-4 py-2 text-sm font-medium animate-float",
          className
        )}
        style={{
          animationDelay: `${delay}s`,
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    )
  }
)
FloatingBadge.displayName = "FloatingBadge"

export { FloatingBadge }

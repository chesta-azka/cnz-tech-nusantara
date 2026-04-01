"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useCountUp } from "@/hooks/use-count-up"

interface StatsCardProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number
  suffix?: string
  label: string
  icon?: React.ReactNode
  delay?: number
}

const StatsCard = React.forwardRef<HTMLDivElement, StatsCardProps>(
  ({ className, value, suffix = "", label, icon, delay = 0, ...props }, ref) => {
    const { count, ref: countRef } = useCountUp({ 
      end: value, 
      duration: 2500, 
      delay: delay * 1000 
    })

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true }}
        className={cn(
          "glass rounded-2xl p-6 text-center transition-all duration-300 hover:glow-sm",
          className
        )}
        {...props}
      >
        <div ref={countRef}>
          {icon && (
            <div className="mb-3 flex justify-center text-primary">{icon}</div>
          )}
          <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">
            {count}{suffix}
          </div>
          <div className="text-sm text-muted-foreground">{label}</div>
        </div>
      </motion.div>
    )
  }
)
StatsCard.displayName = "StatsCard"

export { StatsCard }

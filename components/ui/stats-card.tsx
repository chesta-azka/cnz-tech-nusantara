"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface StatsCardProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
  label: string
  icon?: React.ReactNode
  delay?: number
}

const StatsCard = React.forwardRef<HTMLDivElement, StatsCardProps>(
  ({ className, value, label, icon, delay = 0, ...props }, ref) => {
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
        {icon && (
          <div className="mb-3 flex justify-center text-primary">{icon}</div>
        )}
        <div className="text-3xl font-bold gradient-text mb-1">{value}</div>
        <div className="text-sm text-muted-foreground">{label}</div>
      </motion.div>
    )
  }
)
StatsCard.displayName = "StatsCard"

export { StatsCard }

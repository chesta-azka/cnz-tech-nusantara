"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Quote } from "lucide-react"

interface TestimonialCardProps extends React.HTMLAttributes<HTMLDivElement> {
  quote: string
  name: string
  role: string
  company: string
  avatarUrl?: string
  delay?: number
}

const TestimonialCard = React.forwardRef<HTMLDivElement, TestimonialCardProps>(
  ({ className, quote, name, role, company, avatarUrl, delay = 0, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true }}
        className={cn(
          "glass rounded-3xl p-8 relative transition-all duration-300 hover:glow-sm",
          className
        )}
        {...props}
      >
        <Quote className="w-10 h-10 text-primary/30 absolute top-6 right-6" />
        <p className="text-foreground leading-relaxed mb-6 text-lg">&quot;{quote}&quot;</p>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center overflow-hidden">
            {avatarUrl ? (
              <img src={avatarUrl} alt={name} className="w-full h-full object-cover" />
            ) : (
              <span className="text-primary-foreground font-semibold text-lg">
                {name.charAt(0)}
              </span>
            )}
          </div>
          <div>
            <div className="font-semibold text-foreground">{name}</div>
            <div className="text-sm text-muted-foreground">{role}, {company}</div>
          </div>
        </div>
      </motion.div>
    )
  }
)
TestimonialCard.displayName = "TestimonialCard"

export { TestimonialCard }

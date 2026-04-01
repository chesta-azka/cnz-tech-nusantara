"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { ArrowUpRight } from "lucide-react"

interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  category: string
  description: string
  techStack: string[]
  imageUrl?: string
  delay?: number
}

const ProjectCard = React.forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ className, title, category, description, techStack, imageUrl, delay = 0, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true }}
        className={cn(
          "glass rounded-3xl overflow-hidden group cursor-pointer transition-all duration-300 hover:glow",
          className
        )}
        {...props}
      >
        {/* Image area */}
        <div className="relative h-56 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
          {imageUrl ? (
            <img 
              src={imageUrl} 
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-24 h-24 rounded-2xl glass flex items-center justify-center">
                <span className="text-3xl font-bold gradient-text">{title.charAt(0)}</span>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <div className="text-sm text-primary font-medium mb-2">{category}</div>
          <h3 className="text-xl font-semibold mb-3 text-foreground">{title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    )
  }
)
ProjectCard.displayName = "ProjectCard"

export { ProjectCard }

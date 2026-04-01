"use client"

import * as React from "react"
import { SectionHeader } from "@/components/ui/section-header"
import { ProjectCard } from "@/components/ui/project-card"
import { GlowOrb } from "@/components/ui/glow-orb"

const projects = [
  {
    title: "FinanceFlow",
    category: "SaaS Platform",
    description: "A comprehensive financial management platform with real-time analytics, automated reporting, and seamless integrations for modern businesses.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
  },
  {
    title: "MedConnect",
    category: "Healthcare App",
    description: "Patient-doctor communication platform with secure video consultations, appointment scheduling, and medical record management.",
    techStack: ["React Native", "Node.js", "MongoDB", "WebRTC"],
  },
  {
    title: "EcoTrack",
    category: "Enterprise Solution",
    description: "Sustainability tracking and reporting system for corporations to monitor their environmental impact and compliance.",
    techStack: ["Vue.js", "Python", "AWS", "GraphQL"],
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <GlowOrb className="top-1/3 -right-32" size="lg" color="primary" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="Our Work"
          title="Selected work that delivers real impact"
          description="Explore some of our recent projects that showcase our expertise in building premium digital products."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              category={project.category}
              description={project.description}
              techStack={project.techStack}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import * as React from "react"
import { SectionHeader } from "@/components/ui/section-header"
import { ProjectCard } from "@/components/ui/project-card"
import { GlowOrb } from "@/components/ui/glow-orb"

const projects = [
  {
    title: "FinanceFlow",
    category: "Platform SaaS",
    description: "Platform manajemen keuangan komprehensif dengan analitik real-time, pelaporan otomatis, dan integrasi mulus untuk bisnis modern.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
  },
  {
    title: "MedConnect",
    category: "Aplikasi Kesehatan",
    description: "Platform komunikasi pasien-dokter dengan konsultasi video aman, penjadwalan janji temu, dan manajemen rekam medis.",
    techStack: ["React Native", "Node.js", "MongoDB", "WebRTC"],
  },
  {
    title: "EcoTrack",
    category: "Solusi Enterprise",
    description: "Sistem pelacakan dan pelaporan keberlanjutan untuk perusahaan guna memantau dampak lingkungan dan kepatuhan mereka.",
    techStack: ["Vue.js", "Python", "AWS", "GraphQL"],
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <GlowOrb className="top-1/3 -right-32" size="lg" color="primary" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="Karya Kami"
          title="Proyek terpilih yang memberikan dampak nyata"
          description="Jelajahi beberapa proyek terbaru kami yang menunjukkan keahlian kami dalam membangun produk digital premium."
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

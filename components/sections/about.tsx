"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { SectionHeader } from "@/components/ui/section-header"
import { GlowOrb } from "@/components/ui/glow-orb"
import { Target, Layers, Palette, LineChart } from "lucide-react"

const features = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Partner Digital Strategis",
    description: "Kami menyelaraskan teknologi dengan tujuan bisnis Anda untuk menciptakan dampak nyata.",
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Pemikiran Sistem Skalabel",
    description: "Arsitektur yang dirancang untuk tumbuh bersama bisnis Anda, bukan menghalanginya.",
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Desain Pengalaman Premium",
    description: "Antarmuka yang mengkomunikasikan kepercayaan dan meningkatkan persepsi merek.",
  },
  {
    icon: <LineChart className="w-6 h-6" />,
    title: "Eksekusi Fokus Bisnis",
    description: "Setiap keputusan didorong oleh hasil terukur dan dampak dunia nyata.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <GlowOrb className="-top-32 right-0" size="lg" color="accent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="Tentang Kami"
          title="Kami membangun sistem, bukan sekadar website."
          description="CNZ Tech Nusantara mengubah ide menjadi produk digital yang skalabel. Kami menggabungkan desain, engineering, dan strategi untuk membangun solusi yang bekerja di lingkungan bisnis nyata."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-6 group hover:glow-sm transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

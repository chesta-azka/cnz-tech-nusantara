"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { SectionHeader } from "@/components/ui/section-header"
import { GlowOrb } from "@/components/ui/glow-orb"
import { Target, Layers, Palette, LineChart } from "lucide-react"

const features = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Strategic Digital Partner",
    description: "We align technology with your business goals to create meaningful impact.",
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Scalable Systems Thinking",
    description: "Architecture designed to grow with your business, not against it.",
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Premium Experience Design",
    description: "Interfaces that communicate trust and elevate brand perception.",
  },
  {
    icon: <LineChart className="w-6 h-6" />,
    title: "Business-Focused Execution",
    description: "Every decision driven by measurable outcomes and real-world results.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <GlowOrb className="-top-32 right-0" size="lg" color="accent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="About Us"
          title="We build systems, not just websites."
          description="CNZ Tech Nusantara transforms ideas into scalable digital products. We combine design, engineering, and strategy to build solutions that perform in real business environments."
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

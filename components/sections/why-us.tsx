"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { SectionHeader } from "@/components/ui/section-header"
import { GlowOrb } from "@/components/ui/glow-orb"
import { Boxes, Shield, Scale, Target, CheckCircle2 } from "lucide-react"

const reasons = [
  {
    icon: <Boxes className="w-8 h-8" />,
    title: "We think in systems, not pages",
    description: "Every element is part of a larger ecosystem designed to work together seamlessly.",
    points: ["Modular architecture", "Scalable infrastructure", "Future-proof design"],
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "We design for trust",
    description: "Premium visual language that establishes credibility and strengthens brand perception.",
    points: ["Professional aesthetics", "Consistent branding", "Quality assurance"],
  },
  {
    icon: <Scale className="w-8 h-8" />,
    title: "We build for scale",
    description: "Architecture that grows with your business without compromising performance.",
    points: ["Cloud-ready solutions", "Performance optimized", "Enterprise security"],
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "We focus on outcomes",
    description: "Every decision is driven by measurable business results and real-world impact.",
    points: ["Data-driven approach", "ROI focused", "Continuous improvement"],
  },
]

export function WhyUsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <GlowOrb className="bottom-0 right-0" size="xl" color="accent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="What makes CNZ Tech Nusantara different"
          description="We combine strategic thinking with technical excellence to deliver solutions that truly matter."
        />

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-8 hover:glow-sm transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary shrink-0">
                  {reason.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{reason.description}</p>
                  <ul className="space-y-2">
                    {reason.points.map((point, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

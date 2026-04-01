"use client"

import * as React from "react"
import { SectionHeader } from "@/components/ui/section-header"
import { TestimonialCard } from "@/components/ui/testimonial-card"
import { GlowOrb } from "@/components/ui/glow-orb"

const testimonials = [
  {
    quote: "CNZ Tech Nusantara benar-benar mengubah kehadiran digital kami. Pendekatan strategis dan perhatian terhadap detail mereka menghasilkan platform yang melampaui ekspektasi kami dan secara signifikan meningkatkan tingkat konversi kami.",
    name: "Sarah Chen",
    role: "CEO",
    company: "TechVentures Inc.",
  },
  {
    quote: "Bekerja dengan tim CNZ adalah pengalaman luar biasa. Mereka memahami visi kami sejak hari pertama dan memberikan solusi yang menyeimbangkan estetika dengan fungsionalitas dengan sempurna. Sangat direkomendasikan untuk bisnis serius manapun.",
    name: "Michael Rodriguez",
    role: "Founder",
    company: "InnovateLab",
  },
  {
    quote: "Tim di CNZ tidak hanya membangun produk, mereka membangun kemitraan. Komitmen mereka terhadap kualitas dan peningkatan berkelanjutan telah menjadikan mereka perpanjangan yang tak ternilai dari tim kami.",
    name: "Amanda Foster",
    role: "CTO",
    company: "GlobalScale Solutions",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <GlowOrb className="top-0 left-1/4" size="lg" color="accent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="Testimoni"
          title="Dipercaya oleh tim modern"
          description="Dengarkan dari para pemimpin yang telah bermitra dengan kami untuk mengubah kehadiran digital mereka."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              company={testimonial.company}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

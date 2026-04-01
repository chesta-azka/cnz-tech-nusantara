"use client"

import * as React from "react"
import { SectionHeader } from "@/components/ui/section-header"
import { TestimonialCard } from "@/components/ui/testimonial-card"
import { GlowOrb } from "@/components/ui/glow-orb"

const testimonials = [
  {
    quote: "CNZ Tech Nusantara transformed our digital presence completely. Their strategic approach and attention to detail resulted in a platform that exceeded our expectations and significantly improved our conversion rates.",
    name: "Sarah Chen",
    role: "CEO",
    company: "TechVentures Inc.",
  },
  {
    quote: "Working with the CNZ team was an exceptional experience. They understood our vision from day one and delivered a solution that perfectly balances aesthetics with functionality. Highly recommended for any serious business.",
    name: "Michael Rodriguez",
    role: "Founder",
    company: "InnovateLab",
  },
  {
    quote: "The team at CNZ doesn&apos;t just build products, they build partnerships. Their commitment to quality and continuous improvement has made them an invaluable extension of our team.",
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
          eyebrow="Testimonials"
          title="Trusted by modern teams"
          description="Hear from the leaders who have partnered with us to transform their digital presence."
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

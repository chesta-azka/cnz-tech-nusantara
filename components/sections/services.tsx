"use client"

import * as React from "react"
import { SectionHeader } from "@/components/ui/section-header"
import { ServiceCard } from "@/components/ui/service-card"
import { GlowOrb } from "@/components/ui/glow-orb"
import { Globe, Paintbrush, Smartphone, Sparkles, Server, Rocket } from "lucide-react"

const services = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Web Development",
    description: "Custom web applications built with modern technologies for optimal performance, security, and scalability.",
  },
  {
    icon: <Paintbrush className="w-6 h-6" />,
    title: "UI/UX Design",
    description: "User-centered design that balances aesthetics with functionality to create memorable digital experiences.",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver seamless experiences across all devices.",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Product Branding",
    description: "Strategic brand identity systems that communicate your values and differentiate you from competitors.",
  },
  {
    icon: <Server className="w-6 h-6" />,
    title: "SaaS Platform Development",
    description: "End-to-end SaaS solutions with robust architecture, subscription management, and analytics.",
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Digital Transformation",
    description: "Comprehensive digital strategy and implementation to modernize your business operations.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <GlowOrb className="top-1/2 -left-32" size="xl" color="primary" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="Our Services"
          title="Solutions designed for modern businesses"
          description="We offer a comprehensive suite of digital services to help you build, grow, and scale your business."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

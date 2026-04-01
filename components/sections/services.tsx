"use client"

import * as React from "react"
import { SectionHeader } from "@/components/ui/section-header"
import { ServiceCard } from "@/components/ui/service-card"
import { GlowOrb } from "@/components/ui/glow-orb"
import { Globe, Paintbrush, Smartphone, Sparkles, Server, Rocket } from "lucide-react"

const services = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Pengembangan Web",
    description: "Aplikasi web kustom dibangun dengan teknologi modern untuk performa optimal, keamanan, dan skalabilitas.",
  },
  {
    icon: <Paintbrush className="w-6 h-6" />,
    title: "Desain UI/UX",
    description: "Desain berpusat pada pengguna yang menyeimbangkan estetika dengan fungsionalitas untuk pengalaman digital yang berkesan.",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Pengembangan Aplikasi Mobile",
    description: "Aplikasi mobile native dan cross-platform yang memberikan pengalaman mulus di semua perangkat.",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Branding Produk",
    description: "Sistem identitas merek strategis yang mengkomunikasikan nilai Anda dan membedakan Anda dari kompetitor.",
  },
  {
    icon: <Server className="w-6 h-6" />,
    title: "Pengembangan Platform SaaS",
    description: "Solusi SaaS end-to-end dengan arsitektur robust, manajemen langganan, dan analitik.",
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Transformasi Digital",
    description: "Strategi dan implementasi digital komprehensif untuk memodernisasi operasi bisnis Anda.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <GlowOrb className="top-1/2 -left-32" size="xl" color="primary" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="Layanan Kami"
          title="Solusi yang dirancang untuk bisnis modern"
          description="Kami menawarkan rangkaian layanan digital komprehensif untuk membantu Anda membangun, berkembang, dan memperbesar skala bisnis Anda."
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

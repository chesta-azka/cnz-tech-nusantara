"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { StatsCard } from "@/components/ui/stats-card"
import { Briefcase, Users, ThumbsUp, Clock } from "lucide-react"

const stats = [
  { icon: <Briefcase className="w-6 h-6" />, value: 150, suffix: "+", label: "Proyek Selesai" },
  { icon: <Users className="w-6 h-6" />, value: 80, suffix: "+", label: "Klien Dilayani" },
  { icon: <ThumbsUp className="w-6 h-6" />, value: 99, suffix: "%", label: "Tingkat Kepuasan" },
  { icon: <Clock className="w-6 h-6" />, value: 5, suffix: "+", label: "Tahun Pengalaman" },
]

export function TrustSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          Dibangun untuk membantu perusahaan bergerak lebih cepat, tampil lebih kuat, dan berkembang dengan percaya diri.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <StatsCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

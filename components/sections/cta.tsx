"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { GlowOrb } from "@/components/ui/glow-orb"
import { ArrowRight, Calendar } from "lucide-react"

export function CTASection() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <GlowOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" size="xl" color="primary" />
      <GlowOrb className="bottom-0 right-0" size="lg" color="accent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 md:p-16 text-center glow"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            Siap Memulai?
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance"
          >
            Mari bangun sesuatu yang benar-benar berarti.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty"
          >
            Jika Anda serius ingin membangun produk digital premium, kita harus berbicara. Mari diskusikan bagaimana kami dapat membantu mewujudkan visi Anda.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 shadow-lg hover:shadow-xl transition-all text-base px-8"
            >
              Mulai Proyek
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-xl glass border-border hover:bg-secondary/50 text-base px-8"
            >
              <Calendar className="mr-2 w-5 h-5" />
              Jadwalkan Konsultasi
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

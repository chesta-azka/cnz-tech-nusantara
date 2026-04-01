"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { GlowOrb } from "@/components/ui/glow-orb"
import { FloatingBadge } from "@/components/ui/floating-badge"
import { useCountUp } from "@/hooks/use-count-up"
import { ArrowRight, Sparkles, TrendingUp, Zap, Users, CheckCircle2 } from "lucide-react"

function CountUpStat({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
  const { count, ref } = useCountUp({ end: value, duration: 2500, delay: delay * 1000 })
  return (
    <div ref={ref} className="text-center sm:text-left">
      <div className="text-2xl sm:text-3xl font-bold gradient-text">{count}{suffix}</div>
      <div className="text-xs sm:text-sm text-muted-foreground">{label}</div>
    </div>
  )
}

export function HeroSection() {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 })

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 dark:animated-gradient animated-gradient-light" />
      
      {/* Spotlight effect */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, var(--glow), transparent 40%)`,
        }}
      />
      
      {/* Glow orbs */}
      <GlowOrb className="top-20 -left-32" size="xl" color="primary" />
      <GlowOrb className="bottom-20 -right-32" size="lg" color="accent" />
      <GlowOrb className="top-1/2 left-1/3" size="md" color="secondary" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary"
            >
              <Sparkles className="w-4 h-4" />
              Solusi Digital Premium untuk Perusahaan Modern
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance"
            >
              <span className="text-foreground">CNZ Tech Nusantara membangun produk digital yang </span>
              <span className="gradient-text">mendorong pertumbuhan perusahaan modern.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed max-w-xl text-pretty"
            >
              Kami bermitra dengan bisnis ambisius untuk merancang dan membangun pengalaman digital yang meningkatkan performa, memperkuat citra merek, dan mendorong pertumbuhan nyata.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
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
                Jelajahi Layanan
              </Button>
            </motion.div>

            {/* Trust row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-6"
            >
              <p className="text-sm text-muted-foreground mb-4">Dipercaya oleh startup, agensi, dan tim bisnis modern</p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/80 to-accent/80 border-2 border-background flex items-center justify-center text-primary-foreground text-sm font-medium"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <span className="font-semibold text-foreground">80+</span>
                  <span className="text-muted-foreground ml-1">Klien Puas</span>
                </div>
              </div>
            </motion.div>

            {/* Stats with count animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-3 gap-4 pt-4"
            >
              <CountUpStat value={150} suffix="+" label="Proyek Selesai" delay={0.6} />
              <CountUpStat value={80} suffix="+" label="Klien Puas" delay={0.8} />
              <CountUpStat value={99} suffix="%" label="Kepuasan Klien" delay={1.0} />
            </motion.div>
          </div>

          {/* Right visual - Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Main dashboard */}
            <div className="glass rounded-3xl p-6 glow">
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent" />
                    <div>
                      <div className="font-semibold text-foreground">Dashboard Analitik</div>
                      <div className="text-sm text-muted-foreground">Metrik real-time</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-destructive/50" />
                    <div className="w-3 h-3 rounded-full bg-chart-4/50" />
                    <div className="w-3 h-3 rounded-full bg-chart-2/50" />
                  </div>
                </div>

                {/* Chart area */}
                <div className="h-40 rounded-2xl bg-secondary/30 relative overflow-hidden">
                  <svg className="w-full h-full" viewBox="0 0 400 160" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,120 Q50,100 100,80 T200,60 T300,40 T400,30 L400,160 L0,160 Z"
                      fill="url(#chartGradient)"
                    />
                    <path
                      d="M0,120 Q50,100 100,80 T200,60 T300,40 T400,30"
                      fill="none"
                      stroke="var(--primary)"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-chart-2/20 text-chart-2 text-sm font-medium">
                    +38%
                  </div>
                </div>

                {/* Metric cards */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: Zap, label: "Otomatisasi AI", value: "93%", color: "text-chart-1" },
                    { icon: TrendingUp, label: "Performa Cloud", value: "99.9%", color: "text-chart-2" },
                    { icon: Sparkles, label: "Kecepatan Rilis", value: "2.4x", color: "text-chart-4" },
                    { icon: Users, label: "Engagement", value: "+38%", color: "text-chart-3" },
                  ].map((metric, i) => (
                    <div key={i} className="glass rounded-xl p-4">
                      <metric.icon className={`w-5 h-5 ${metric.color} mb-2`} />
                      <div className="text-xs text-muted-foreground">{metric.label}</div>
                      <div className={`text-xl font-bold ${metric.color}`}>{metric.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <FloatingBadge className="absolute -top-4 -right-4 flex items-center gap-2" delay={0}>
              <CheckCircle2 className="w-4 h-4 text-chart-2" />
              <span>Siap Enterprise</span>
            </FloatingBadge>
            
            <FloatingBadge className="absolute bottom-20 -left-8 flex items-center gap-2" delay={1}>
              <Zap className="w-4 h-4 text-chart-4" />
              <span>Deploy Cepat</span>
            </FloatingBadge>

            <FloatingBadge className="absolute -bottom-4 right-10 flex items-center gap-2" delay={2}>
              <Sparkles className="w-4 h-4 text-primary" />
              <span>Bertenaga AI</span>
            </FloatingBadge>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

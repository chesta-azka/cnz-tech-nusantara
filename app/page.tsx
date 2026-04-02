"use client"

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { 
  Check, 
  Zap, 
  Palette, 
  Code2, 
  Smartphone, 
  Globe, 
  Headphones,
  Shield,
  Clock,
  RefreshCcw,
  ArrowRight,
  MessageCircle,
  Star,
  Sparkles,
  ExternalLink,
  Play,
  ChevronRight
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'

const Robot3D = dynamic(() => import('@/components/robot-3d'), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center">
      <div className="w-12 h-12 border-3 border-primary/30 border-t-primary rounded-full animate-spin" />
    </div>
  )
})

function useCountUp(end: number, start: boolean, duration: number = 2000): number {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    if (!start) return
    
    let startTime: number
    let animationFrame: number
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }
    
    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, start, duration])
  
  return count
}

function AnimatedStat({ value, suffix = "", label }: { value: number; suffix?: string; label: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const count = useCountUp(value, isInView, 2000)
  
  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-1">
        {count}{suffix}
      </div>
      <div className="text-muted-foreground text-sm">{label}</div>
    </div>
  )
}

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const benefits = [
  { icon: Palette, title: "Desain Premium", desc: "Tampilan modern dan elegan" },
  { icon: Smartphone, title: "100% Responsif", desc: "Tampil sempurna di semua perangkat" },
  { icon: Zap, title: "Super Cepat", desc: "Loading dibawah 2 detik" },
  { icon: Globe, title: "SEO Optimized", desc: "Mudah ditemukan di Google" },
  { icon: Shield, title: "SSL Gratis", desc: "Website aman dan terpercaya" },
  { icon: Headphones, title: "Support 24/7", desc: "Tim siap membantu kapanpun" },
  { icon: Clock, title: "Cepat Selesai", desc: "Hanya 3-7 hari kerja" },
  { icon: RefreshCcw, title: "Revisi Gratis", desc: "Hingga hasil memuaskan" },
  { icon: Code2, title: "Tech Modern", desc: "Teknologi terkini & terbaik" },
]

const testimonials = [
  { name: "Budi Santoso", role: "Owner Toko Elektronik", text: "Website yang dibuat sangat profesional. Sekarang toko saya lebih mudah ditemukan pelanggan online!" },
  { name: "Siti Rahayu", role: "Freelance Designer", text: "Proses pengerjaan cepat dan hasilnya sesuai ekspektasi. Support-nya juga sangat responsif!" },
  { name: "Ahmad Fauzi", role: "CEO Startup", text: "Harga sangat terjangkau untuk kualitas yang diberikan. Website kami terlihat sangat profesional." },
]

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      {/* Animated Grid Background */}
      <div className="fixed inset-0 grid-bg animate-grid opacity-50 pointer-events-none" />
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
      
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 rounded-2xl glass">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center glow-sm">
                <span className="text-primary-foreground font-bold text-sm">C</span>
              </div>
              <span className="font-semibold text-foreground hidden sm:block">CNZ Tech</span>
            </div>
            
            <div className="flex items-center gap-2 sm:gap-3">
              <Link href="#harga" className="text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 hidden md:block">
                Harga
              </Link>
              <Link href="#keunggulan" className="text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 hidden md:block">
                Keunggulan
              </Link>
              <ThemeToggle />
              <Button size="sm" className="rounded-xl text-xs sm:text-sm">
                <MessageCircle className="w-3.5 h-3.5 sm:mr-1.5" />
                <span className="hidden sm:inline">Hubungi</span>
              </Button>
            </div>
          </div>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-28 pb-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-4 items-center">
            {/* Left Content */}
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm"
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-foreground font-medium">Promo Terbatas</span>
                <span className="px-2 py-0.5 rounded-full bg-primary text-primary-foreground text-xs font-medium">-73%</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight"
              >
                <span className="text-foreground">Website Impian</span>
                <br />
                <span className="gradient-text">Cuma Rp 400K</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-base sm:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed"
              >
                Dapatkan website profesional dengan desain modern, responsif, dan super cepat. 
                Tingkatkan kredibilitas bisnis Anda sekarang!
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
              >
                 <a href="https://wa.me/6282125447232?text=Halo%20CNZ,%20saya%20mau%20pesan%20website" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="rounded-xl text-base h-12 px-8 group glow">
                  Pesan Sekarang
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                 </a>
                <Link href="/demo">
                  <Button size="lg" variant="outline" className="rounded-xl text-base h-12 px-8 w-full sm:w-auto group">
                    <Play className="w-4 h-4 mr-2" />
                    Lihat Demo
                    <ExternalLink className="w-3.5 h-3.5 ml-2 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </Button>
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-4 justify-center lg:justify-start pt-2"
              >
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i} 
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/80 to-accent/80 border-2 border-background"
                    />
                  ))}
                </div>
                <div className="text-sm text-left">
                  <div className="flex items-center gap-1 mb-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                    ))}
                    <span className="text-foreground font-medium ml-1">4.9</span>
                  </div>
                  <span className="text-muted-foreground text-xs">150+ klien puas</span>
                </div>
              </motion.div>
            </div>
            
            {/* Right Content - 3D Robot */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="h-[320px] sm:h-[400px] lg:h-[500px] order-first lg:order-last"
            >
              <Robot3D />
            </motion.div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground">Scroll</span>
          <div className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-1.5">
            <motion.div 
              className="w-1 h-1.5 rounded-full bg-muted-foreground"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 relative">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              <AnimatedStat value={150} suffix="+" label="Proyek Selesai" />
              <AnimatedStat value={99} suffix="%" label="Klien Puas" />
              <AnimatedStat value={5} suffix="+" label="Tahun Pengalaman" />
              <AnimatedStat value={24} suffix="h" label="Response Time" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="harga" className="py-16 lg:py-24 px-4 sm:px-6 relative">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Harga Spesial</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
              <span className="text-foreground">Investasi Kecil,</span>
              <br />
              <span className="gradient-text">Hasil Maksimal</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Dengan hanya Rp 400.000, dapatkan website profesional lengkap dengan hosting dan domain
            </p>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <div className="relative max-w-md mx-auto">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-90" />
              
              <div className="relative p-8 sm:p-10 rounded-3xl glass glow">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                  Paling Populer
                </div>
                
                <div className="text-center pt-4">
                  <div className="text-sm text-muted-foreground line-through mb-1">Rp 1.500.000</div>
                  <div className="text-5xl sm:text-6xl font-bold gradient-text mb-1">Rp 400K</div>
                  <div className="text-sm text-muted-foreground mb-8">Sekali bayar, tanpa biaya bulanan</div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {[
                    "Desain Modern & Responsif",
                    "5 Halaman Website",
                    "Hosting 1 Tahun GRATIS",
                    "Domain .com/.id GRATIS",
                    "SSL Certificate GRATIS",
                    "Optimasi SEO Dasar",
                    "3x Revisi GRATIS",
                    "Support WhatsApp 24/7",
                    "Loading Super Cepat",
                    "Mobile Friendly 100%"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                 <a href="https://wa.me/6282125447232?text=Halo%20CNZ,%20saya%20mau%20pesan%20website" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="w-full rounded-xl text-base h-12">
                  Pesan Sekarang
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                 </a>
                <p className="text-center text-xs text-muted-foreground mt-4">
                  Garansi uang kembali 100% jika tidak puas
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="keunggulan" className="py-16 lg:py-24 px-4 sm:px-6 relative">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Keunggulan</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
              <span className="text-foreground">Kenapa Pilih</span>{" "}
              <span className="gradient-text">CNZ Tech?</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Layanan terbaik dengan harga terjangkau dan kualitas premium
            </p>
          </FadeIn>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {benefits.map((benefit, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="p-6 rounded-2xl glass hover:glow-sm transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Preview Section */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 relative">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <Play className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Preview Interaktif</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
              <span className="text-foreground">Lihat Contoh</span>{" "}
              <span className="gradient-text">Website Kamu</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Coba demo interaktif dan ubah konten sesuai keinginan
            </p>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-3xl" />
              <div className="relative rounded-2xl glass overflow-hidden">
                {/* Browser Header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-muted/50 rounded-lg px-3 py-1.5 text-xs text-muted-foreground text-center">
                      www.bisnis-kamu.com
                    </div>
                  </div>
                </div>
                
                {/* Preview Content */}
                <div className="aspect-video bg-gradient-to-br from-primary/5 via-background to-accent/5 flex flex-col items-center justify-center p-8 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 glow">
                    <Globe className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Website Bisnis Anda</h3>
                  <p className="text-muted-foreground mb-6 max-w-md">
                    Preview interaktif website yang bisa Anda kustomisasi sesuai kebutuhan bisnis
                  </p>
                  <Link href="/demo">
                    <Button className="rounded-xl group">
                      Coba Demo Interaktif
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 relative">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <Star className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Testimoni</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
              <span className="text-foreground">Apa Kata</span>{" "}
              <span className="gradient-text">Klien Kami?</span>
            </h2>
          </FadeIn>
          
          <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
            {testimonials.map((t, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="p-6 rounded-2xl glass h-full flex flex-col">
                  <div className="flex gap-0.5 mb-4">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-foreground text-sm leading-relaxed flex-1 mb-4">&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent" />
                    <div>
                      <div className="font-medium text-sm text-foreground">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.role}</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 relative">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="relative p-8 sm:p-12 rounded-3xl glass glow text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-3xl" />
              <div className="relative">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 tracking-tight">
                  <span className="text-foreground">Siap Punya Website</span>
                  <br />
                  <span className="gradient-text">Profesional?</span>
                </h2>
                <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                  Konsultasi gratis! Ceritakan kebutuhan Anda dan dapatkan website impian dengan harga terjangkau.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a href = "https://wa.me/6282125447232">
                  <Button size="lg" className="rounded-xl text-base h-12 px-8">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat WhatsApp
                  </Button>
                    </a>

                  <a href="https://wa.me/6282125447232?text=Halo%20CNZ,%20saya%20mau%20pesan%20website" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="rounded-xl text-base h-12 px-8">
                    Pesan Sekarang
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                    </a>
                  
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 border-t border-border/50">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xs">C</span>
            </div>
            <span className="font-semibold text-foreground text-sm">CNZ Tech Nusantara</span>
          </div>
          <p className="text-sm text-muted-foreground">
            2024 CNZ Tech. Hak cipta dilindungi.
          </p>
        </div>
      </footer>
    </main>
  )
}

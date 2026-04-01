"use client"

import dynamic from 'next/dynamic'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
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
  Sparkles
} from 'lucide-react'
import { useCountUp } from '@/hooks/use-count-up'
import { Button } from '@/components/ui/button'

const Robot3D = dynamic(() => import('@/components/robot-3d'), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
    </div>
  )
})

function AnimatedStat({ value, suffix = "", label }: { value: number; suffix?: string; label: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const count = useCountUp(value, isInView, 2000)
  
  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
        {count}{suffix}
      </div>
      <div className="text-muted-foreground text-sm">{label}</div>
    </div>
  )
}

function Section({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  )
}

function BenefitCard({ icon: Icon, title, description, delay = 0 }: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
  delay?: number;
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="group p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 hover:bg-card/80 transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-lg font-semibold mb-2 text-foreground">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </motion.div>
  )
}

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">C</span>
            </div>
            <span className="font-bold text-xl text-foreground">CNZ Tech</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4"
          >
            <a href="#harga" className="text-sm text-muted-foreground hover:text-foreground transition-colors hidden sm:block">
              Harga
            </a>
            <a href="#keunggulan" className="text-sm text-muted-foreground hover:text-foreground transition-colors hidden sm:block">
              Keunggulan
            </a>
            <Button size="sm" className="rounded-full">
              <MessageCircle className="w-4 h-4 mr-2" />
              Hubungi
            </Button>
          </motion.div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-24 pb-12">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 lg:space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">Promo Spesial Terbatas</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
              >
                Website Premium
                <br />
                <span className="gradient-text">Hanya Rp 400K</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-muted-foreground max-w-md leading-relaxed"
              >
                Dapatkan website profesional dengan desain modern, responsif, dan super cepat untuk bisnis Anda.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button size="lg" className="rounded-full text-base px-8 group">
                  Pesan Sekarang
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full text-base px-8">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat WhatsApp
                </Button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-6 pt-4"
              >
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div 
                      key={i} 
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-background"
                    />
                  ))}
                </div>
                <div className="text-sm">
                  <span className="font-semibold text-foreground">150+ Klien Puas</span>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                    <span>Rating 4.9/5</span>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="h-[350px] lg:h-[500px] order-first lg:order-last"
            >
              <Robot3D />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <Section className="py-16 lg:py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedStat value={150} suffix="+" label="Proyek Selesai" />
            <AnimatedStat value={99} suffix="%" label="Klien Puas" />
            <AnimatedStat value={5} suffix="+" label="Tahun Pengalaman" />
            <AnimatedStat value={24} suffix="/7" label="Support" />
          </div>
        </div>
      </Section>

      {/* Pricing */}
      <Section className="py-16 lg:py-20 px-6" id="harga">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Harga Terbaik</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Investasi Kecil, <span className="gradient-text">Hasil Maksimal</span>
          </h2>
          
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            Dengan hanya Rp 400.000, dapatkan website profesional yang meningkatkan kredibilitas bisnis Anda
          </p>
          
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="relative max-w-md mx-auto"
          >
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
            <div className="relative p-8 rounded-3xl bg-card border border-primary/30">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                Paling Populer
              </div>
              
              <div className="text-sm text-muted-foreground line-through mb-2 mt-2">Rp 1.500.000</div>
              <div className="text-5xl md:text-6xl font-bold gradient-text mb-2">Rp 400K</div>
              <div className="text-sm text-muted-foreground mb-8">Sekali bayar, tanpa biaya bulanan</div>
              
              <ul className="text-left space-y-3 mb-8">
                {[
                  "Desain Modern & Responsif",
                  "5 Halaman Website",
                  "Optimasi SEO Dasar",
                  "SSL Certificate Gratis",
                  "Hosting 1 Tahun Gratis",
                  "Domain .com/.id Gratis",
                  "3x Revisi Gratis",
                  "Support WhatsApp 24/7",
                  "Loading Super Cepat",
                  "Mobile Friendly"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Button size="lg" className="w-full rounded-full text-base">
                Pesan Sekarang
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Benefits */}
      <Section className="py-16 lg:py-20 px-6" id="keunggulan">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Keunggulan Kami</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Kenapa Pilih <span className="gradient-text">CNZ Tech?</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Layanan terbaik dengan harga terjangkau dan kualitas premium
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <BenefitCard
              icon={Palette}
              title="Desain Premium"
              description="Tampilan modern dan elegan sesuai identitas brand bisnis Anda"
              delay={0}
            />
            <BenefitCard
              icon={Smartphone}
              title="100% Responsif"
              description="Tampil sempurna di semua perangkat, HP hingga desktop"
              delay={0.1}
            />
            <BenefitCard
              icon={Zap}
              title="Loading Super Cepat"
              description="Optimasi performa maksimal, pengunjung tidak kabur"
              delay={0.2}
            />
            <BenefitCard
              icon={Globe}
              title="SEO Friendly"
              description="Mudah ditemukan di Google dengan optimasi SEO"
              delay={0.3}
            />
            <BenefitCard
              icon={Shield}
              title="Aman & Terpercaya"
              description="SSL certificate gratis untuk keamanan data"
              delay={0.4}
            />
            <BenefitCard
              icon={Headphones}
              title="Support 24/7"
              description="Tim support siap membantu kapan saja via WhatsApp"
              delay={0.5}
            />
            <BenefitCard
              icon={Clock}
              title="Pengerjaan Cepat"
              description="Website selesai dalam 3-7 hari kerja"
              delay={0.6}
            />
            <BenefitCard
              icon={RefreshCcw}
              title="Revisi Gratis"
              description="3x revisi untuk memastikan hasil sesuai keinginan"
              delay={0.7}
            />
            <BenefitCard
              icon={Code2}
              title="Teknologi Modern"
              description="Dibangun dengan teknologi terkini dan terbaik"
              delay={0.8}
            />
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section className="py-16 lg:py-20 px-6" id="layanan">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Code2 className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Layanan</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Jenis Website yang <span className="gradient-text">Bisa Kami Buat</span>
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Globe, title: "Company Profile", desc: "Website profesional untuk perusahaan" },
              { icon: Zap, title: "Landing Page", desc: "Halaman promosi produk atau jasa" },
              { icon: Palette, title: "Portfolio", desc: "Showcase karya dan keahlian Anda" },
              { icon: Smartphone, title: "Toko Online", desc: "E-commerce untuk jualan online" },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 hover:bg-card/80 transition-all text-center group"
              >
                <div className="w-14 h-14 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="py-16 lg:py-20 px-6" id="testimoni">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Star className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Testimoni</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Apa Kata <span className="gradient-text">Klien Kami?</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: "Budi Santoso",
                role: "Owner, Toko Elektronik",
                text: "Website yang dibuat sangat bagus dan profesional. Sekarang toko saya lebih mudah ditemukan pelanggan online. Sangat recommended!"
              },
              {
                name: "Siti Rahayu",
                role: "Freelance Designer",
                text: "Proses pengerjaan cepat dan hasilnya sesuai ekspektasi. Support-nya juga sangat responsif. Terima kasih CNZ Tech!"
              },
              {
                name: "Ahmad Fauzi",
                role: "CEO, Startup Tech",
                text: "Harga sangat terjangkau untuk kualitas yang diberikan. Website kami sekarang terlihat sangat profesional dan modern."
              },
              {
                name: "Dewi Lestari",
                role: "Owner, Butik Fashion",
                text: "Sangat puas dengan hasil website-nya. Desainnya cantik dan sesuai dengan brand butik saya. Customer service-nya juga ramah!"
              },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-card/50 border border-border/50"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-foreground mb-4 leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent" />
                  <div>
                    <div className="font-semibold text-foreground text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-16 lg:py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full" />
            <div className="relative p-8 lg:p-12 rounded-3xl bg-card border border-border">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Siap Punya Website <span className="gradient-text">Profesional?</span>
              </h2>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                Jangan tunda lagi! Hubungi kami sekarang dan dapatkan website impian Anda dengan harga spesial
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="rounded-full text-base px-8">
                  Pesan Sekarang
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full text-base px-8">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  0812-3456-7890
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-8 lg:py-12 px-6 border-t border-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-primary-foreground font-bold">C</span>
              </div>
              <span className="font-semibold text-foreground">CNZ Tech Nusantara</span>
            </div>
            <p className="text-sm text-muted-foreground">
              2024 CNZ Tech Nusantara. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}

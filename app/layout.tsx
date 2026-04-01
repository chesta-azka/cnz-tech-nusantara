import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const geistMono = Geist_Mono({ 
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'CNZ Tech Nusantara | Jasa Pembuatan Website Profesional Murah',
  description: 'Jasa pembuatan website profesional hanya Rp 400.000. Desain modern, responsif, SEO friendly. Cocok untuk bisnis, portfolio, dan toko online. Gratis hosting & domain!',
  keywords: ['jasa pembuatan website', 'jasa website murah', 'website profesional', 'landing page', 'toko online', 'web developer indonesia'],
  authors: [{ name: 'CNZ Tech Nusantara' }],
  openGraph: {
    title: 'CNZ Tech Nusantara | Website Premium Hanya Rp 400K',
    description: 'Dapatkan website profesional dengan harga terjangkau. Desain modern, responsif, dan SEO friendly.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5f3ff' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1625' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}

import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { generateMetadata as genMeta, siteConfig } from '@/lib/seo'
import StructuredData from '@/components/StructuredData'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  ...genMeta({
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    path: '',
  }),
  icons: {
    icon: [
      { url: '/assets/oxford-mechanical-logo.webp', type: 'image/webp' },
      { url: '/assets/oxford-mechanical-logo.webp', type: 'image/webp', sizes: '32x32' },
      { url: '/assets/oxford-mechanical-logo.webp', type: 'image/webp', sizes: '16x16' },
    ],
    apple: [
      { url: '/assets/oxford-mechanical-logo.webp', type: 'image/webp' },
    ],
    shortcut: '/assets/oxford-mechanical-logo.webp',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0037ff',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StructuredData type="LocalBusiness" />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}

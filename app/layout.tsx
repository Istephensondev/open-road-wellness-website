import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { getLocalBusinessJsonLd } from '@/lib/seo'
import { SITE_URL } from '@/lib/site'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif"
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Chair Yoga & Senior Wellness in Sanford, FL | Open Road Wellness',
    template: '%s | Open Road Wellness',
  },
  description: 'Certified chair yoga, gentle movement, hypnosis, group guided meditations, and sound baths in Sanford, FL. Serving DeLand, Daytona Beach, Orlando, and Central Florida senior living communities.',
  keywords: [
    'chair yoga Sanford FL',
    'chair yoga for seniors Central Florida',
    'senior yoga instructor Sanford',
    'chair yoga assisted living Orlando',
    'hypnosis Sanford FL',
    'group guided meditation Sanford',
    'sound bath Central Florida',
    'gentle movement for seniors',
    'retirement community yoga instructor Florida',
    'activity director wellness classes',
  ],
  authors: [{ name: 'Ivy', url: SITE_URL }],
  creator: 'Open Road Wellness LLC',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Open Road Wellness',
    title: 'Chair Yoga & Senior Wellness in Sanford, FL | Open Road Wellness',
    description: 'Chair yoga, hypnosis, group guided meditations, and sound baths for seniors and individuals across Sanford, DeLand, Daytona Beach, and Orlando.',
    images: [
      {
        url: '/images/ivy-headshot.png',
        alt: 'Ivy, certified yoga instructor and hypnosis practitioner at Open Road Wellness',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chair Yoga & Senior Wellness in Sanford, FL | Open Road Wellness',
    description: 'Chair yoga, hypnosis, group guided meditations, and sound baths serving Central Florida senior communities.',
    images: ['/images/ivy-headshot.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  other: {
    'geo.region': 'US-FL',
    'geo.placename': 'Sanford',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = getLocalBusinessJsonLd()

  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}

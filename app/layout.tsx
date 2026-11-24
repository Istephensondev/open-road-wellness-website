import type { Metadata, Viewport } from 'next'
import { Fredoka, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { getLocalBusinessJsonLd } from '@/lib/seo'
import { OG_IMAGE, SITE_NAME, SITE_TAGLINE, SITE_URL } from '@/lib/site'
import { MobileCta } from '@/components/mobile-cta'
import './globals.css'

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans"
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#0b0620',
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `Hypnosis, Meditation & Sound Baths | ${SITE_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: `${SITE_NAME} — ${SITE_TAGLINE}. Certified hypnosis, group guided meditations, and sound baths in Sanford, FL and virtually worldwide.`,
  keywords: [
    '5D Unleashed',
    'hypnosis Sanford FL',
    'higher self hypnosis',
    'group guided meditation Sanford',
    'sound bath Central Florida',
    'hypnosis for anxiety Orlando',
    'guided meditation Florida',
    'sound healing Sanford FL',
  ],
  authors: [{ name: 'Ivy', url: SITE_URL }],
  creator: SITE_NAME,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | ${SITE_TAGLINE}`,
    description: `Certified hypnosis, group guided meditations, and sound baths to awaken your higher self. Based in Sanford, FL with virtual sessions worldwide.`,
    images: [
      {
        url: OG_IMAGE,
        alt: `${SITE_NAME} logo`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | ${SITE_TAGLINE}`,
    description: `Hypnosis, group guided meditations, and sound baths to awaken your higher self.`,
    images: [OG_IMAGE],
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
      <body className={`${inter.variable} ${fredoka.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <MobileCta />
        <Analytics />
      </body>
    </html>
  )
}

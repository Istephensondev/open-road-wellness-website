import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SITE_NAME, SITE_URL } from "@/lib/site"
import { getSeoPage, getServiceJsonLd, seoPages } from "@/lib/seo"

export const dynamicParams = false

export function generateStaticParams() {
  return seoPages.map((page) => ({ slug: page.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const page = getSeoPage(slug)
  if (!page) {
    return { title: SITE_NAME }
  }

  const url = `${SITE_URL}/${page.slug}`
  return {
    title: page.title,
    description: page.description,
    keywords: [...page.keywords],
    alternates: { canonical: url },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      type: "website",
    },
  }
}

export default async function SeoServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const page = getSeoPage(slug)

  if (!page) {
    notFound()
  }

  const jsonLd = getServiceJsonLd(page)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main id="main-content" className="pt-24 sm:pt-28 pb-24 sm:pb-20 px-4 bg-white">
        <article className="max-w-3xl mx-auto">
          <p className="text-fuchsia-600 text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4 font-sans font-medium">
            {SITE_NAME}
          </p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#0b0620] mb-6 leading-tight text-balance">
            {page.h1}
          </h1>
          <p className="text-[#0b0620]/75 text-lg leading-relaxed mb-6">
            {page.intro}
          </p>
          {page.body.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="text-[#0b0620]/75 text-lg leading-relaxed mb-6">
              {paragraph}
            </p>
          ))}
          <p className="text-[#0b0620]/75 text-lg leading-relaxed mb-10">
            Based in Sanford, FL — serving Sanford, DeLand, Daytona Beach, Orlando, and Central Florida, plus virtual sessions worldwide.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center justify-center bg-fuchsia-600 text-white hover:bg-fuchsia-700 px-8 py-4 rounded-full text-base font-medium shadow-lg shadow-fuchsia-600/25 w-full sm:w-auto min-h-12"
          >
            Get in Touch
          </a>
        </article>
      </main>
      <Footer />
    </>
  )
}

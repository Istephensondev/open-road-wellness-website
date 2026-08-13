import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SITE_URL } from "@/lib/site"
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
    return { title: "Open Road Wellness" }
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
      <main id="main-content" className="pt-28 pb-20 px-4 bg-white">
        <article className="max-w-3xl mx-auto">
          <p className="text-amber-600 text-sm tracking-[0.3em] uppercase mb-4 font-sans font-medium">
            Open Road Wellness
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-amber-950 mb-6 leading-tight">
            {page.h1}
          </h1>
          <p className="text-amber-800/80 text-lg leading-relaxed mb-6">
            {page.intro}
          </p>
          {page.body.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="text-amber-800/80 text-lg leading-relaxed mb-6">
              {paragraph}
            </p>
          ))}
          <p className="text-amber-800/80 text-lg leading-relaxed mb-10">
            Based in Sanford, FL — serving Sanford, DeLand, Daytona Beach, Orlando, and Central Florida, plus virtual sessions worldwide.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center justify-center bg-purple-600 text-white hover:bg-purple-700 px-8 py-4 rounded-full text-base font-medium shadow-lg shadow-purple-600/25"
          >
            Get in Touch
          </a>
        </article>
      </main>
      <Footer />
    </>
  )
}

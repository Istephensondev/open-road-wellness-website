"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { LOGO_SRC, SITE_EMAIL, SITE_NAME, SITE_PHONE, SITE_PHONE_E164, SITE_TAGLINE, SOCIAL } from "@/lib/site"
import { useEffect, useState } from "react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(true)
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      try {
        const response = await fetch('/api/newsletter', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        })
        if (response.ok) {
          setStatus("success")
          setEmail("")
          setTimeout(() => setStatus("idle"), 3000)
        } else {
          setStatus("error")
          setTimeout(() => setStatus("idle"), 5000)
        }
      } catch (error) {
        console.error('Newsletter signup error:', error)
        setStatus("error")
        setTimeout(() => setStatus("idle"), 5000)
      }
    }
  }

  return (
    <section className="relative overflow-hidden bg-sunburst">
      <div className="relative z-10 max-w-5xl mx-auto px-3 sm:px-4 pt-24 sm:pt-28 md:pt-32 pb-24 sm:pb-16 md:pb-16 sm:min-h-[80vh] flex items-center justify-center">
        <div className={`w-full max-w-3xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="brand-pill rounded-[2rem] md:rounded-full px-4 py-6 sm:px-6 sm:py-10 md:px-12 md:py-8 shadow-2xl shadow-black/40 flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-8">
            <img
              src={LOGO_SRC}
              alt={`${SITE_NAME} logo`}
              className="h-24 w-24 sm:h-28 sm:w-28 md:h-36 md:w-36 rounded-full ring-4 ring-yellow-300 shrink-0"
            />
            <div className="text-center md:text-left min-w-0">
              <h1 className="font-display brand-wordmark text-[1.85rem] sm:text-4xl md:text-6xl leading-none text-yellow-300 text-balance">
                {SITE_NAME}
              </h1>
              <p className="mt-2 sm:mt-3 text-fuchsia-400 font-display text-sm sm:text-lg md:text-xl tracking-normal sm:tracking-wide">
                ✦ {SITE_TAGLINE} ✦
              </p>
              <p className="mt-2 sm:mt-3 text-white/80 text-sm sm:text-base md:text-lg leading-relaxed">
                Hypnosis · Meditation · Sound Bath
              </p>
            </div>
          </div>

          <div className="mt-5 sm:mt-8 bg-white/85 backdrop-blur-md border border-yellow-300/70 rounded-3xl p-4 sm:p-6 md:p-8 text-center shadow-xl">
            <p className="text-[#0b0620]/85 text-base sm:text-lg md:text-xl mb-5 sm:mb-6 max-w-2xl mx-auto leading-relaxed">
              Hypnosis, meditation, and sound to help you awaken your higher self — in Nashville, TN and virtually worldwide.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mb-5 sm:mb-6">
              <a
                href={`tel:${SITE_PHONE_E164}`}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-yellow-300 px-6 text-base font-semibold text-[#0b0620] hover:bg-yellow-200 transition-colors"
              >
                Call {SITE_PHONE}
              </a>
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500 to-orange-400 px-6 text-base font-semibold text-white hover:from-fuchsia-600 hover:to-orange-500 transition-colors"
              >
                Book a Session
              </a>
            </div>
            <a href={`mailto:${SITE_EMAIL}`} className="text-fuchsia-600 font-medium hover:text-fuchsia-700 transition-colors text-sm sm:text-base break-all min-h-11 inline-flex items-center justify-center mb-5 sm:mb-6">
              {SITE_EMAIL}
            </a>
            <p className="text-[#0b0620]/55 text-sm sm:text-base mb-3 font-sans">Subscribe to our newsletter</p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
              <label htmlFor="hero-email" className="sr-only">Email address</label>
              <Input
                id="hero-email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-white text-[#0b0620] placeholder:text-violet-400 border-yellow-300 focus-visible:ring-2 focus-visible:ring-fuchsia-500 py-6 px-5 rounded-full shadow-lg text-base"
              />
              <Button
                type="submit"
                className="bg-fuchsia-500 text-white hover:bg-fuchsia-600 font-sans px-8 py-6 rounded-full shadow-lg shadow-fuchsia-500/30 hover:shadow-xl hover:scale-105 transition-all text-base whitespace-nowrap font-medium"
              >
                Subscribe
              </Button>
            </form>

            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4">
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center text-white hover:scale-110 hover:shadow-lg transition-all"
                aria-label="Follow us on Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={SOCIAL.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 sm:w-10 sm:h-10 rounded-full bg-black flex items-center justify-center text-white hover:scale-110 hover:shadow-lg transition-all"
                aria-label="Follow us on TikTok"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a
                href={SOCIAL.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 sm:w-10 sm:h-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:scale-110 hover:shadow-lg transition-all"
                aria-label="Follow us on Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href={SOCIAL.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 sm:w-10 sm:h-10 rounded-full bg-red-600 flex items-center justify-center text-white hover:scale-110 hover:shadow-lg transition-all"
                aria-label="Subscribe on YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>

            {status === "success" && (
              <div
                className="inline-flex items-center gap-2 bg-green-100 backdrop-blur-sm rounded-full px-5 py-2 animate-scale-in"
                role="status"
                aria-live="polite"
              >
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-green-700 text-sm font-sans">Thank you for subscribing!</span>
              </div>
            )}
            {status === "error" && (
              <div
                className="inline-flex items-center gap-2 bg-red-100 backdrop-blur-sm rounded-full px-5 py-2 animate-scale-in"
                role="alert"
                aria-live="polite"
              >
                <span className="text-red-700 text-sm font-sans">Something went wrong. Please try again.</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

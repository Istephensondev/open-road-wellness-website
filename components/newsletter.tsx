"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [isVisible, setIsVisible] = useState(true)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      try {
        const response = await fetch('/api/newsletter', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email })
        })
        
        if (response.ok) {
          setStatus("success")
          setEmail("")
          setTimeout(() => setStatus("idle"), 5000)
        } else {
          setStatus("error")
          setTimeout(() => setStatus("idle"), 5000)
        }
      } catch {
        setStatus("error")
        setTimeout(() => setStatus("idle"), 5000)
      }
    }
  }

  return (
    <section 
      id="newsletter" 
      ref={sectionRef}
      className="py-14 sm:py-24 px-4 bg-white relative overflow-hidden" 
      aria-labelledby="newsletter-heading"
    >
      <div
        className="absolute inset-3 sm:inset-8 md:inset-12 lg:inset-16 rounded-[2rem] shadow-2xl bg-rainbow-flow"
        aria-hidden="true"
      >
        {/* Ambient glows inside */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-48 h-48 rounded-full bg-yellow-400/30 blur-3xl animate-float" />
          <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-purple-400/30 blur-3xl animate-float animation-delay-200" />
        </div>
      </div>

      <div className={`max-w-3xl mx-auto text-center relative z-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
          <div className="w-2 h-2 rounded-full bg-fuchsia-500 animate-pulse" />
          <span className="text-fuchsia-700 text-sm tracking-wide font-sans">Stay Connected</span>
        </div>
        
        <h2 id="newsletter-heading" className="font-display text-3xl sm:text-4xl md:text-6xl text-[#0b0620] mb-6 text-balance">
          Join Our Newsletter
        </h2>
        <p className="text-[#0b0620]/75 mb-8 sm:mb-10 leading-relaxed text-base sm:text-lg max-w-xl mx-auto px-1">
          Receive monthly insights on hypnosis, meditation, sound healing, and exclusive offers from 5D Unleashed.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
          <label htmlFor="email-input" className="sr-only">
            Email address
          </label>
          <div className="flex-1 relative">
            <Input
              id="email-input"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-white/95 text-[#0b0620] placeholder:text-violet-400 border-0 focus-visible:ring-2 focus-visible:ring-fuchsia-400 py-6 px-6 rounded-full shadow-lg text-base"
              aria-describedby={status !== "idle" ? "newsletter-status" : undefined}
            />
          </div>
          <Button 
            type="submit" 
            className="bg-fuchsia-600 text-white hover:bg-fuchsia-700 font-sans px-8 py-6 rounded-full shadow-lg shadow-fuchsia-600/25 hover:shadow-xl hover:scale-105 transition-all text-base"
          >
            Subscribe
          </Button>
        </form>

        {status === "success" && (
          <div 
            id="newsletter-status" 
            className="mt-6 inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 animate-scale-in" 
            role="status" 
            aria-live="polite"
          >
            <svg className="w-5 h-5 text-fuchsia-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-[#0b0620] font-sans">Thank you for subscribing!</span>
          </div>
        )}

        {status === "error" && (
          <div 
            id="newsletter-status" 
            className="mt-6 inline-flex items-center gap-2 bg-red-500/20 backdrop-blur-sm rounded-full px-6 py-3 animate-scale-in" 
            role="alert" 
            aria-live="polite"
          >
            <svg className="w-5 h-5 text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span className="text-[#0b0620] font-sans">Something went wrong. Please try again.</span>
          </div>
        )}
        
        <p className="text-[#0b0620]/55 text-sm mt-6 font-sans">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  )
}

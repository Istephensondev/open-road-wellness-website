"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AnimatedRoad } from "@/components/animated-road"
import { useEffect, useState } from "react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "success">("idle")

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
        }
      } catch (error) {
        console.error('Newsletter signup error:', error)
      }
    }
  }

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-[70vh] overflow-hidden bg-white">
      {/* Floating gradient box behind content */}
      <div 
        className="absolute top-24 bottom-24 left-24 right-24 md:top-32 md:bottom-32 md:left-32 md:right-32 lg:top-36 lg:bottom-36 lg:left-40 lg:right-40 shadow-2xl animate-gradient-box" 
        style={{
          background: 'linear-gradient(-45deg, #fde047, #fb923c, #f97316, #a855f7, #7c3aed, #f97316, #fde047)',
          backgroundSize: '400% 400%',
        }}
        aria-hidden="true"
      >
        {/* Uplifting ambient glows inside the gradient box */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-48 h-48 rounded-full bg-yellow-400/40 blur-3xl animate-float" />
          <div className="absolute top-1/4 right-1/4 w-40 h-40 rounded-full bg-purple-400/40 blur-3xl animate-float animation-delay-200" />
          <div className="absolute bottom-10 left-1/3 w-44 h-44 rounded-full bg-orange-400/40 blur-3xl animate-float" />
          <div className="absolute top-1/3 right-10 w-48 h-48 rounded-full bg-purple-500/35 blur-3xl animate-float animation-delay-300" />
          <div className="absolute bottom-10 right-1/4 w-52 h-52 rounded-full bg-purple-500/35 blur-3xl animate-float animation-delay-200" />
        </div>
      </div>
      
      {/* Centered layout */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-24 md:pt-28 pb-12 min-h-[70vh] flex items-center justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
          
          {/* Content - Left Side */}
          <div className={`flex-1 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-white/90 backdrop-blur-md border border-amber-200/50 rounded-2xl p-8 md:p-10 shadow-2xl shadow-amber-200/30">
          <p className="text-amber-600 text-sm tracking-[0.3em] uppercase mb-6 font-sans font-medium whitespace-nowrap">
            Holistic Healing & Transformation
          </p>
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-medium text-amber-950 mb-2 leading-none tracking-tight whitespace-nowrap">
            Open Road <span className="text-amber-600">Wellness</span>
          </h1>
          <p className="text-amber-700/80 text-sm md:text-base tracking-wide mb-6 font-sans">
            Hypnosis · Intuitive Readings · Sound Bath
          </p>
          <p className="text-amber-900/70 text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed font-sans">
            Guiding you toward balance, clarity, and renewal through the power of mind, energy, and sound.
          </p>
          {/* Newsletter Signup */}
          <p className="text-amber-800/60 text-sm mb-3 font-sans">Subscribe to our newsletter</p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
            <label htmlFor="hero-email" className="sr-only">Email address</label>
            <Input
              id="hero-email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-white text-amber-950 placeholder:text-amber-400 border-amber-200 focus-visible:ring-2 focus-visible:ring-amber-500 py-6 px-5 rounded-full shadow-lg text-base"
            />
            <Button 
              type="submit" 
              className="bg-amber-500 text-white hover:bg-amber-600 font-sans px-8 py-6 rounded-full shadow-lg shadow-amber-500/30 hover:shadow-xl hover:scale-105 transition-all text-base whitespace-nowrap font-medium"
            >
              Subscribe
            </Button>
          </form>

          {/* Social Media Icons */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center text-white hover:scale-110 hover:shadow-lg transition-all"
              aria-label="Follow us on Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a 
              href="https://tiktok.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white hover:scale-110 hover:shadow-lg transition-all"
              aria-label="Follow us on TikTok"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:scale-110 hover:shadow-lg transition-all"
              aria-label="Follow us on Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white hover:scale-110 hover:shadow-lg transition-all"
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
            </div>
          </div>
          
          {/* Cloud-shaped Animated Road - Right Side */}
          <div className={`flex-1 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative w-full max-w-[380px] h-[220px] md:h-[280px] mx-auto">
              <div 
                className="relative w-full h-full overflow-hidden shadow-2xl shadow-purple-300/40"
                style={{
                  borderRadius: '60% 70% 55% 65% / 55% 60% 70% 50%',
                }}
              >
                <AnimatedRoad />
              </div>
            </div>
          </div>
          
        </div>
      </div>

      {/* Decorative lines */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent" aria-hidden="true" />
    </section>
  )
}

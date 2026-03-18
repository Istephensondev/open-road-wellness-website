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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setStatus("success")
      setEmail("")
      setTimeout(() => setStatus("idle"), 3000)
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

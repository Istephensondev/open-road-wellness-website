"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SITE_EMAIL, SITE_PHONE, SITE_PHONE_E164 } from "@/lib/site"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: ""
  })
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

  const consultationUrl = "https://calendly.com/wildeasewellness/consultation"
  const bookSessionUrl = "https://calendly.com/wildeasewellness/new-meeting"

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.message) {
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        })
        
        if (response.ok) {
          setStatus("success")
          setFormData({ name: "", email: "", service: "", message: "" })
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-14 sm:py-24 px-4 bg-white relative overflow-hidden" 
      aria-labelledby="contact-heading"
    >
      <div
        className="absolute inset-3 sm:inset-8 md:inset-12 lg:inset-16 rounded-[2rem] shadow-2xl bg-rainbow-flow"
        aria-hidden="true"
      >
        {/* Ambient glows inside */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-48 h-48 rounded-full bg-purple-400/30 blur-3xl" />
          <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-yellow-400/30 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-orange-400/20 blur-3xl" />
        </div>
      </div>

      <div className={`max-w-4xl mx-auto relative z-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-fuchsia-500 animate-pulse" />
            <span className="text-fuchsia-700 text-base tracking-wide font-sans">Get Started</span>
          </div>
          
          <h2 id="contact-heading" className="font-display text-3xl sm:text-4xl md:text-6xl text-[#0b0620] mb-6">
            Let&apos;s Connect
          </h2>
          <p className="text-[#0b0620]/75 leading-relaxed text-base sm:text-lg md:text-xl max-w-xl mx-auto px-1">
            Schedule a consultation, book a session, or ask about hypnosis, meditation, or a sound bath.
          </p>
          
          {/* Two Calendly Options */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            {/* Consultation Option */}
            <a 
              href={consultationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white text-fuchsia-700 hover:bg-fuchsia-50 font-sans px-6 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all text-base font-semibold w-full sm:w-auto min-h-12"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Schedule a Consultation
            </a>
            
            {/* Book Session Option */}
            <a 
              href={bookSessionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-fuchsia-600 text-white hover:bg-fuchsia-700 font-sans px-6 py-4 rounded-full shadow-lg shadow-fuchsia-600/30 hover:shadow-xl hover:scale-105 transition-all text-base font-semibold w-full sm:w-auto min-h-12"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book a Session
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 max-w-2xl mx-auto my-10">
          <div className="flex-1 h-px bg-[#0b0620]/20" />
          <span className="text-[#0b0620]/60 text-sm font-sans">or send a message</span>
          <div className="flex-1 h-px bg-[#0b0620]/20" />
        </div>

        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 sm:p-8 md:p-10 shadow-2xl max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-[#0b0620] text-base font-medium mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Jane Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-fuchsia-50/50 text-[#0b0620] placeholder:text-violet-400 border border-fuchsia-200 focus-visible:ring-2 focus-visible:ring-fuchsia-400 py-5 px-4 rounded-xl text-base"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[#0b0620] text-base font-medium mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="jane@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-fuchsia-50/50 text-[#0b0620] placeholder:text-violet-400 border border-fuchsia-200 focus-visible:ring-2 focus-visible:ring-fuchsia-400 py-5 px-4 rounded-xl text-base"
                />
              </div>
            </div>

            <div>
              <label htmlFor="service" className="block text-[#0b0620] text-base font-medium mb-2">
                Service Interest
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full min-h-12 bg-fuchsia-50/50 text-[#0b0620] border border-fuchsia-200 focus-visible:ring-2 focus-visible:ring-fuchsia-400 py-3 px-4 rounded-xl text-base appearance-none cursor-pointer"
              >
                <option value="">Select a service...</option>
                
                <optgroup label="Single Sessions">
                  <option value="hypnosis">Hypnosis - Mind Reset ($70)</option>
                  <option value="guided-meditation">Group Guided Meditations (rates negotiable)</option>
                  <option value="sound-bath">Sound Bath - Vibrational Reset ($50)</option>
                </optgroup>
                
                <optgroup label="Specialty Programs">
                  <option value="smoke-free">Smoke-Free Transformation ($175)</option>
                  <option value="weight-loss">Weight Loss & Healthy Habits ($175)</option>
                  <option value="anxiety-relief">Anxiety & Stress Relief ($175)</option>
                  <option value="confidence">Confidence & Self-Esteem ($175)</option>
                </optgroup>
                
                <option value="other">Other / Not Sure</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-[#0b0620] text-base font-medium mb-2">
                Your Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell me a little about what you're hoping to achieve..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full bg-fuchsia-50/50 text-[#0b0620] placeholder:text-violet-400 border border-fuchsia-200 focus-visible:ring-2 focus-visible:ring-fuchsia-400 px-4 py-3 rounded-xl text-base resize-none"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-fuchsia-600 text-white hover:bg-fuchsia-700 font-sans py-6 rounded-xl shadow-lg shadow-fuchsia-600/25 hover:shadow-xl hover:scale-[1.02] transition-all text-base font-medium"
            >
              Send Message
            </Button>
          </form>

          {status === "success" && (
            <div 
              className="mt-6 flex items-center justify-center gap-2 bg-green-100 rounded-xl px-6 py-4 animate-scale-in" 
              role="status" 
              aria-live="polite"
            >
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-green-700 font-sans">Thank you! I&apos;ll be in touch soon.</span>
            </div>
          )}

          {status === "error" && (
            <div 
              className="mt-6 flex items-center justify-center gap-2 bg-red-100 rounded-xl px-6 py-4 animate-scale-in" 
              role="alert" 
              aria-live="polite"
            >
              <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span className="text-red-700 font-sans">Something went wrong. Please try again.</span>
            </div>
          )}
        </div>

        <div className="mt-8 text-center space-y-3 px-1">
          <p className="block bg-white rounded-2xl sm:rounded-full px-4 sm:px-6 py-3 text-fuchsia-700 text-sm sm:text-base font-sans shadow-lg leading-relaxed">
            <strong>Based in Nashville, TN</strong> — Serving Nashville and Middle Tennessee, plus virtual sessions worldwide
          </p>
          <p className="block bg-white rounded-2xl sm:rounded-full px-4 sm:px-6 py-3 text-fuchsia-700 text-sm sm:text-base font-sans shadow-lg leading-relaxed break-words">
            <strong>Prefer to reach out directly?</strong> Call <a href={`tel:${SITE_PHONE_E164}`} className="font-bold underline hover:text-fuchsia-900 transition-colors">{SITE_PHONE}</a> or email <a href={`mailto:${SITE_EMAIL}`} className="font-bold underline hover:text-fuchsia-900 transition-colors break-all">{SITE_EMAIL}</a>
          </p>
        </div>
      </div>
    </section>
  )
}

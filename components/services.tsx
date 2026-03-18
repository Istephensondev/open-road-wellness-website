"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"

const services = [
  {
    title: "Hypnosis",
    description: "Unlock your subconscious mind to release limiting beliefs, overcome anxiety, and create lasting positive change through guided therapeutic hypnosis sessions.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10" aria-hidden="true">
        <circle cx="12" cy="12" r="10" className="opacity-30" />
        <circle cx="12" cy="12" r="6" className="opacity-60" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    title: "Intuitive Readings",
    description: "Gain clarity and insight into your life's path through personalized intuitive readings that connect you with your inner wisdom and higher guidance.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10" aria-hidden="true">
        <path d="M12 3L15 9L21 10L16.5 15L18 21L12 18L6 21L7.5 15L3 10L9 9L12 3Z" />
      </svg>
    ),
  },
  {
    title: "Sound Baths",
    description: "Immerse yourself in healing vibrations through crystal singing bowls and other instruments, promoting deep relaxation and energetic balance.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10" aria-hidden="true">
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    ),
  },
]

export function Services() {
  const [isVisible, setIsVisible] = useState(false)
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

  return (
    <section id="services" ref={sectionRef} className="py-24 px-4 bg-white relative overflow-hidden">
      {/* Animated gradient background box */}
      <div 
        className="absolute top-8 bottom-8 left-8 right-8 md:top-12 md:bottom-12 md:left-12 md:right-12 lg:top-16 lg:bottom-16 lg:left-16 lg:right-16 shadow-2xl animate-gradient-box"
        style={{
          background: 'linear-gradient(-45deg, #fde047, #fb923c, #f97316, #a855f7, #7c3aed, #f97316, #fde047)',
          backgroundSize: '400% 400%',
        }}
        aria-hidden="true"
      >
        {/* Ambient glows inside */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-48 h-48 rounded-full bg-yellow-400/30 blur-3xl animate-float" />
          <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-purple-400/30 blur-3xl animate-float animation-delay-200" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-amber-800 text-sm tracking-[0.3em] uppercase mb-4 font-sans font-medium">
            What We Offer
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-white mb-6 drop-shadow-lg">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-300 to-purple-500 mx-auto rounded-full mb-6" />
          <p className="text-white/90 max-w-2xl mx-auto leading-relaxed text-lg drop-shadow">
            Each service is designed to support your unique journey toward wholeness and well-being.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className={`border border-white/20 bg-white/90 backdrop-blur-sm overflow-hidden group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 hover:border-purple-400/50 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative">
                <CardHeader className="text-center pb-4 pt-8">
                  <div className="mx-auto mb-6 p-5 rounded-2xl bg-gradient-to-br from-orange-400 to-purple-500 text-white shadow-lg shadow-purple-500/30 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="font-serif text-2xl md:text-3xl text-amber-950 group-hover:text-purple-600 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pb-8">
                  <CardDescription className="text-center text-amber-800/70 leading-relaxed text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </div>
              {/* Hover line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

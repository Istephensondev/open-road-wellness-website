"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedRoad } from "@/components/animated-road"
import { useEffect, useRef, useState } from "react"

const services = [
  {
    title: "Hypnosis",
    description: "Unlock your subconscious mind to release limiting beliefs and create lasting positive change.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8" aria-hidden="true">
        <circle cx="12" cy="12" r="10" className="opacity-30" />
        <circle cx="12" cy="12" r="6" className="opacity-60" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    title: "Intuitive Readings",
    description: "Gain clarity and insight into your life's path through personalized intuitive readings.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8" aria-hidden="true">
        <path d="M12 3L15 9L21 10L16.5 15L18 21L12 18L6 21L7.5 15L3 10L9 9L12 3Z" />
      </svg>
    ),
  },
  {
    title: "Sound Baths",
    description: "Immerse yourself in healing vibrations promoting deep relaxation and energetic balance.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8" aria-hidden="true">
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    ),
  },
]

export function AboutServices() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-24 px-4 bg-white relative overflow-hidden">
      {/* Static gradient blob background - same shape as other sections */}
      <div 
        className="absolute top-8 bottom-8 left-8 right-8 md:top-12 md:bottom-12 md:left-12 md:right-12 lg:top-16 lg:bottom-16 lg:left-16 lg:right-16 shadow-2xl overflow-hidden"
        style={{
          background: 'linear-gradient(-45deg, #fde047, #fb923c, #f97316, #a855f7, #7c3aed, #f97316, #fde047)',
          backgroundSize: '400% 400%',
          backgroundPosition: '50% 50%',
          borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
        }}
        aria-hidden="true"
      >
        {/* Road animation on left side with organic fade */}
        <div className="absolute left-0 top-0 bottom-0 w-2/5 overflow-hidden">
          <AnimatedRoad />
          {/* Multi-layer fade to blend organically into gradient */}
          <div 
            className="absolute inset-0" 
            style={{
              background: 'linear-gradient(to right, transparent 0%, transparent 20%, rgba(253,224,71,0.3) 40%, rgba(251,146,60,0.6) 60%, rgba(168,85,247,0.7) 80%, rgba(124,58,237,0.9) 100%)',
            }}
          />
          {/* Soft feathered edge */}
          <div 
            className="absolute top-0 bottom-0 right-0 w-1/2"
            style={{
              background: 'radial-gradient(ellipse at right center, rgba(168,85,247,0.8) 0%, transparent 70%)',
            }}
          />
        </div>
        
        {/* Ambient glows inside */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 w-48 h-48 rounded-full bg-yellow-400/30 blur-3xl" />
          <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-purple-400/30 blur-3xl" />
          <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full bg-orange-400/20 blur-3xl" />
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* About Me Column */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-xl border border-purple-200/50 h-full overflow-y-auto max-h-[80vh]">
              <p className="text-amber-600 text-sm tracking-[0.3em] uppercase mb-4 font-sans font-medium">
                About Me
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-amber-950 mb-6 leading-tight">
                Hi, I'm <span className="text-purple-600">Ivy</span>
              </h2>
              
              <div className="space-y-4 text-amber-800/80 leading-relaxed mb-8">
                <p>
                  I'm a certified hypnosis practitioner, intuitive, and musician, and the owner of Open Road Wellness. I believe that healing is not a destination, but a journey—one that opens new roads, pathways, and beginnings unique to each person who chooses to embark upon it.
                </p>
                <p>
                  I've created a safe, nurturing space where transformation can naturally unfold, whether you join me in my mobile wellness van, attend a guided sound bath, or connect virtually. My goal is to make your experience personal, accessible, and deeply restorative.
                </p>
                <p className="font-medium text-amber-950">
                  Here's how my services support real, measurable healing—through hypnosis, intuitive reading, or sound bath:
                </p>

                {/* Hypnosis */}
                <div className="bg-purple-50/80 rounded-xl p-4 border border-purple-200/50">
                  <h3 className="font-serif text-lg text-amber-950 mb-2">Hypnosis</h3>
                  <p className="text-sm mb-2">
                    As a certified hypnosis practitioner, I guide clients into a deeply relaxed, focused state where the subconscious mind can reframe limiting beliefs, reduce anxiety, and support lasting behavior change. Research shows that hypnosis can:
                  </p>
                  <ul className="list-disc list-inside text-sm space-y-1 ml-1 mb-2">
                    <li>Reduce stress, anxiety, and chronic pain</li>
                    <li>Improve sleep quality and insomnia</li>
                    <li>Help break habits, including smoking and overeating</li>
                    <li>Increase confidence, motivation, and performance</li>
                  </ul>
                </div>

                {/* Intuitive Reading */}
                <div className="bg-purple-50/80 rounded-xl p-4 border border-purple-200/50">
                  <h3 className="font-serif text-lg text-amber-950 mb-2">Intuitive Reading</h3>
                  <p className="text-sm">
                    Through intuitive guidance, I help clients gain insight into patterns, challenges, and opportunities they may not see on their own. This clarity can lead to better decision-making, increased self-awareness, and emotional alignment, supporting long-term mental and emotional health.
                  </p>
                </div>

                {/* Sound Bath */}
                <div className="bg-purple-50/80 rounded-xl p-4 border border-purple-200/50">
                  <h3 className="font-serif text-lg text-amber-950 mb-2">Sound Bath</h3>
                  <p className="text-sm">
                    Using the power of music and vibration, sound baths entrain brainwaves into calm, restorative states, lower cortisol, and activate the parasympathetic nervous system. Sessions can promote relaxation, release tension, and refresh mental clarity, helping the body and mind reset naturally.
                  </p>
                </div>

                <p>
                  Clients can choose hypnosis, intuitive reading, or sound bath individually, or combine them for a deeper, multi-layered experience. Each session is designed to meet your unique needs, support personal transformation, and open doors to new possibilities and fresh beginnings.
                </p>
                <p className="font-medium text-amber-950 italic">
                  Your journey is uniquely yours—and I'm here to walk with you as you explore new pathways and embrace the possibilities ahead.
                </p>
              </div>

              <Button 
                asChild
                className="bg-purple-600 text-white hover:bg-purple-700 px-8 py-6 rounded-full text-base transition-all hover:scale-105 shadow-lg shadow-purple-600/25"
              >
                <a href="#contact">
                  Get in Touch
                </a>
              </Button>
            </div>
          </div>

          {/* Services Column */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-xl border border-purple-200/50 h-full">
              <p className="text-amber-600 text-sm tracking-[0.3em] uppercase mb-4 font-sans font-medium">
                What We Offer
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-amber-950 mb-8 leading-tight">
                Our <span className="text-purple-600">Services</span>
              </h2>

              <div className="space-y-6">
                {services.map((service, index) => (
                  <Card 
                    key={service.title} 
                    className={`border border-purple-200/50 bg-gradient-to-br from-white/80 to-purple-50/80 backdrop-blur-sm overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-1 hover:border-purple-300 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${(index + 2) * 150}ms` }}
                  >
                    <div className="flex items-start gap-4 p-5">
                      <div className="shrink-0 p-3 rounded-xl bg-gradient-to-br from-orange-400 to-purple-500 text-white shadow-md group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <div>
                        <CardTitle className="font-serif text-xl text-amber-950 mb-2 group-hover:text-purple-600 transition-colors">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="text-amber-800/70 leading-relaxed text-sm">
                          {service.description}
                        </CardDescription>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"

export function About() {
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
    <section id="about" ref={sectionRef} className="py-24 px-4 bg-gradient-to-br from-secondary/30 via-background to-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className={`relative order-2 md:order-1 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-muted shadow-2xl shadow-primary/10">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
                style={{ 
                  backgroundImage: "url('/images/open-road.jpg')",
                }}
                role="img"
                aria-label="Peaceful open road representing the journey to wellness"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-primary/20 rounded-2xl -z-10" aria-hidden="true" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-accent/30 to-primary/30 rounded-full blur-2xl -z-10 animate-glow" aria-hidden="true" />
            
            {/* Floating badge */}
            <div className="absolute -right-4 top-1/4 glass rounded-xl p-4 shadow-xl animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Healing Touch</p>
                  <p className="text-xs text-muted-foreground">Certified Care</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div className={`order-1 md:order-2 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4 font-sans font-medium">
              About Me
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 leading-tight">
              Hi, I'm <span className="gradient-text">Ivy</span>
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed mb-10 text-lg">
              <p>
                I'm a certified hypnosis practitioner, intuitive, and musician, and the owner of Open Road Wellness. I believe that healing is not a destination, but a journey—one that opens new roads, pathways, and beginnings unique to each person who chooses to embark upon it.
              </p>
              <p>
                I've created a safe, nurturing space where transformation can naturally unfold, whether you join me in my mobile wellness van, attend a guided sound bath, or connect virtually. My goal is to make your experience personal, accessible, and deeply restorative.
              </p>
              <p className="font-medium text-foreground">
                Here's how my services support real, measurable healing:
              </p>

              {/* Hypnosis Section */}
              <div className="bg-card/50 rounded-xl p-5 border border-border/50">
                <h3 className="font-serif text-xl text-foreground mb-3">Hypnosis</h3>
                <p className="mb-3">
                  As a certified hypnosis practitioner, I guide clients into a deeply relaxed, focused state where the subconscious mind can reframe limiting beliefs, reduce anxiety, and support lasting behavior change. Research shows that hypnosis can:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-2 mb-3">
                  <li>Reduce stress, anxiety, and chronic pain</li>
                  <li>Improve sleep quality and insomnia</li>
                  <li>Help break habits, including smoking and overeating</li>
                  <li>Increase confidence, motivation, and performance in personal or professional areas</li>
                </ul>
                <p className="text-sm italic">
                  Studies show hypnosis has a success rate of 60–80% for behavior change goals when combined with supportive guidance.
                </p>
              </div>

              {/* Intuitive Reading Section */}
              <div className="bg-card/50 rounded-xl p-5 border border-border/50">
                <h3 className="font-serif text-xl text-foreground mb-3">Intuitive Reading</h3>
                <p>
                  Through intuitive guidance, I help clients gain insight into patterns, challenges, and opportunities they may not see on their own. This clarity can lead to better decision-making, increased self-awareness, and emotional alignment, supporting long-term mental and emotional health.
                </p>
              </div>

              {/* Sound Bath Section */}
              <div className="bg-card/50 rounded-xl p-5 border border-border/50">
                <h3 className="font-serif text-xl text-foreground mb-3">Sound Bath</h3>
                <p>
                  Using the power of music and vibration, sound baths entrain brainwaves into calm, restorative states, lower cortisol, and activate the parasympathetic nervous system. Sessions can promote relaxation, release tension, and refresh mental clarity, helping the body and mind reset naturally.
                </p>
              </div>

              <p>
                Clients can choose hypnosis, intuitive reading, or sound bath individually, or combine them for a deeper, multi-layered experience. Each session is designed to meet your unique needs, support personal transformation, and open doors to new possibilities and fresh beginnings.
              </p>
              <p className="font-medium text-foreground italic">
                Your journey is uniquely yours—and I'm here to walk with you as you explore new pathways and embrace the possibilities ahead.
              </p>
            </div>

            <Button 
              asChild
              className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground hover:shadow-lg hover:shadow-primary/25 px-8 py-6 rounded-full text-base transition-all hover:scale-105"
            >
              <a href="#contact">
                Get in Touch
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

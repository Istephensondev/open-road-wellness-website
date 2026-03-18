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
              Your Guide on the Path to{" "}
              <span className="gradient-text">Wellness</span>
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed mb-10 text-lg">
              <p>
                Welcome to Open Road Wellness. I believe that healing is not a destination but a 
                journey—one that unfolds uniquely for each person who embarks upon it.
              </p>
              <p>
                With years of experience in hypnotherapy, intuitive guidance, and sound healing, 
                I have dedicated my practice to creating a safe, nurturing space where transformation 
                can naturally occur.
              </p>
            </div>

            {/* Credentials/highlights */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="text-center p-6 bg-gradient-to-br from-card to-secondary rounded-2xl border border-border/50 shadow-lg group hover:shadow-xl transition-all hover:-translate-y-1">
                <p className="font-serif text-3xl gradient-text mb-2 group-hover:scale-110 transition-transform inline-block">100%</p>
                <p className="text-sm text-muted-foreground">Certified Practitioner</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-card to-secondary rounded-2xl border border-border/50 shadow-lg group hover:shadow-xl transition-all hover:-translate-y-1">
                <p className="font-serif text-3xl gradient-text mb-2 group-hover:scale-110 transition-transform inline-block">Countless</p>
                <p className="text-sm text-muted-foreground">Guided on Their Path</p>
              </div>
            </div>

            <Button 
              asChild
              className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground hover:shadow-lg hover:shadow-primary/25 px-8 py-6 rounded-full text-base transition-all hover:scale-105"
            >
              <a href="#newsletter">
                Get in Touch
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

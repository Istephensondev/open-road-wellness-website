"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"

const packages = [
  {
    name: "Discovery Session",
    price: "$75",
    description: "Perfect for first-time visitors wanting to explore our offerings.",
    features: [
      "30-minute consultation",
      "Choose one service",
      "Personalized guidance",
      "Take-home resources",
    ],
    popular: false,
  },
  {
    name: "Journey Package",
    price: "$195",
    description: "Our most popular offering for those ready for deeper transformation.",
    features: [
      "90-minute session",
      "Combination of two services",
      "Follow-up email support",
      "Guided meditation recording",
    ],
    popular: true,
  },
  {
    name: "Full Immersion",
    price: "$350",
    description: "A comprehensive experience for profound healing and growth.",
    features: [
      "Full day retreat (4 hours)",
      "All three services included",
      "Private sound bath session",
      "30-day integration support",
    ],
    popular: false,
  },
]

export function Packages() {
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
    <section id="packages" ref={sectionRef} className="py-24 px-4 bg-white relative overflow-hidden">
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-orange-400/20 blur-3xl animate-float animation-delay-300" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-amber-800 text-sm tracking-[0.3em] uppercase mb-4 font-sans font-medium">
            Investment in Yourself
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-white mb-6 drop-shadow-lg">
            Packages
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-300 to-purple-500 mx-auto rounded-full mb-6" />
          <p className="text-white/90 max-w-2xl mx-auto leading-relaxed text-lg drop-shadow">
            Choose the experience that resonates with where you are on your journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {packages.map((pkg, index) => (
            <Card 
              key={pkg.name} 
              className={`relative border border-white/20 bg-white/90 backdrop-blur-sm flex flex-col overflow-hidden transition-all duration-500 ${
                pkg.popular 
                  ? "shadow-2xl shadow-purple-500/20 md:-mt-4 md:mb-4" 
                  : "shadow-lg hover:shadow-xl"
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {pkg.popular && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary animate-shimmer" />
                  <div className="absolute -top-px left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary to-accent text-primary-foreground text-xs font-sans px-6 py-2 rounded-b-full shadow-lg">
                      Most Popular
                    </span>
                  </div>
                </>
              )}
              <div className="relative">
                <CardHeader className="text-center pt-10 pb-4">
                  <CardTitle className="font-serif text-2xl text-card-foreground mb-2">
                    {pkg.name}
                  </CardTitle>
                  <div className="mt-4">
                    <span className="font-serif text-5xl md:text-6xl gradient-text font-medium">{pkg.price}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 px-8">
                  <CardDescription className="text-center text-muted-foreground mb-8">
                    {pkg.description}
                  </CardDescription>
                  <ul className="space-y-4" role="list">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-card-foreground">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                          <svg 
                            className="w-3.5 h-3.5 text-primary-foreground" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-6 pb-8 px-8">
                  <Button 
                    className={`w-full font-sans py-6 rounded-full transition-all duration-300 ${
                      pkg.popular 
                        ? "bg-gradient-to-r from-primary to-primary/90 text-primary-foreground hover:shadow-lg hover:shadow-primary/25 hover:scale-105" 
                        : "bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground"
                    }`}
                  >
                    Book Now
                  </Button>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

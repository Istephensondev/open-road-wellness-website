"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"

const singleSessions = [
  {
    name: "Hypnosis - Mind Reset",
    duration: "60 min",
    price: "$70",
    description: "Reduce stress, shift limiting beliefs, improve focus & confidence",
  },
  {
    name: "Group Guided Meditations",
    duration: "45 or 60 min",
    price: "Rates negotiable",
    description: "Shared, calming meditation sessions to ease stress, quiet the mind, and support deeper rest. Pricing is arranged based on group size and session length.",
  },
  {
    name: "Sound Bath - Vibrational Reset",
    duration: "30-45 min",
    price: "$50",
    description: "Deep relaxation, nervous system reset, emotional release",
  },
]

const specialtyPrograms = [
  {
    name: "Smoke-Free Transformation",
    duration: "3 weeks",
    price: "$175",
    sessions: [
      "2 Hypnosis Sessions",
      "1 Follow-Up Session",
    ],
    extras: [
      "Personalized notes after each session",
      "Take-home strategies for cravings",
      "Optional hypnosis audio for home",
      "1-2 check-ins for support",
    ],
    benefits: [
      "Targets subconscious smoking patterns",
      "Reduces cravings and triggers",
      "Builds identity as a non-smoker",
      "Accountability and support for lasting results",
    ],
    addOn: "Sound Bath Session (+$40) for relaxation and stress relief",
  },
  {
    name: "Weight Loss & Healthy Habits",
    duration: "3 weeks",
    price: "$175",
    sessions: [
      "2 Hypnosis Sessions",
      "1 Follow-Up Session",
    ],
    extras: [
      "Personalized notes after each session",
      "Take-home strategies for cravings",
      "Optional hypnosis audio for home",
      "1-2 check-ins for support",
    ],
    benefits: [
      "Addresses root causes of overeating",
      "Reduces cravings and emotional triggers",
      "Builds a healthier self-image",
      "Sustainable habits for long-term success",
    ],
    addOn: "Sound Bath Session (+$40) for relaxation and stress relief",
  },
  {
    name: "Anxiety & Stress Relief",
    duration: "3 weeks",
    price: "$175",
    sessions: [
      "2 Hypnosis Sessions",
      "1 Follow-Up Session",
    ],
    extras: [
      "Personalized notes after each session",
      "Take-home relaxation techniques",
      "Optional hypnosis audio for home",
      "1-2 check-ins for support",
    ],
    benefits: [
      "Reduces anxiety and stress responses",
      "Improves sleep and relaxation",
      "Builds coping strategies",
      "Greater peace and emotional balance",
    ],
    addOn: "Sound Bath Session (+$40) for deep relaxation",
  },
  {
    name: "Confidence & Self-Esteem",
    duration: "3 weeks",
    price: "$175",
    sessions: [
      "2 Hypnosis Sessions",
      "1 Follow-Up Session",
    ],
    extras: [
      "Personalized notes after each session",
      "Affirmation exercises",
      "Optional hypnosis audio for home",
      "1-2 check-ins for support",
    ],
    benefits: [
      "Overcomes self-doubt and fear",
      "Builds authentic confidence",
      "Improves performance in work and life",
      "Lasting positive self-image",
    ],
    addOn: "Sound Bath Session (+$40) for deeper relaxation",
  },
]

export function Packages() {
  const [isVisible, setIsVisible] = useState(true)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.05, rootMargin: '100px' }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      observer.disconnect()
      clearTimeout(timer)
    }
  }, [])

  return (
    <section id="packages" ref={sectionRef} className="py-14 sm:py-24 px-4 bg-white relative overflow-hidden">
      <div
        className="absolute inset-3 sm:inset-8 md:inset-12 lg:inset-16 rounded-[2rem] shadow-2xl bg-rainbow-flow"
        aria-hidden="true"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-48 h-48 rounded-full bg-yellow-400/30 blur-3xl animate-float" />
          <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-fuchsia-400/30 blur-3xl animate-float animation-delay-200" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-fuchsia-700 text-sm sm:text-base md:text-lg tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4 font-sans font-medium">
            Investment in Yourself
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl text-[#0b0620] mb-6 text-balance">
            Packages & Pricing
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-300 to-fuchsia-500 mx-auto rounded-full mb-6" />
          <p className="text-[#0b0620]/75 max-w-2xl mx-auto leading-relaxed text-lg md:text-xl">
            Choose the experience that resonates with where you are on your journey.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-[#0b0620] text-center mb-6">Single-Session Packages</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {singleSessions.map((session, index) => (
              <Card key={session.name} className={`bg-white/95 backdrop-blur-sm border-0 shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-1 flex flex-col ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                <CardHeader className="pb-2">
                  <CardTitle className="font-display text-xl text-[#0b0620]">{session.name}</CardTitle>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-display text-fuchsia-600">{session.price}</span>
                    <span className="text-base text-violet-700">{session.duration}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-base text-[#0b0620]/80">{session.description}</p>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button asChild className="w-full min-h-12 bg-fuchsia-600 hover:bg-fuchsia-700 text-white rounded-full">
                    <a href="#contact">Book</a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-[#0b0620] text-center mb-6 text-balance">Specialty Programs - Focused Transformation</h3>
          <p className="text-[#0b0620]/75 text-center mb-8 max-w-2xl mx-auto text-base md:text-lg">Each 3-week program includes 2 hypnosis sessions + 1 follow-up, personalized notes, and ongoing support.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {specialtyPrograms.map((program, index) => (
              <Card key={program.name} className={`bg-white/95 backdrop-blur-sm border-0 shadow-xl transition-all duration-500 hover:shadow-2xl flex flex-col ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                <CardHeader className="pb-2">
                  <CardTitle className="font-display text-2xl text-[#0b0620]">{program.name}</CardTitle>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-display text-fuchsia-600">{program.price}</span>
                    <span className="text-base text-violet-700">{program.duration}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="font-medium text-[#0b0620] text-base mb-2">Sessions:</p>
                      <ul className="space-y-1">
                        {program.sessions.map(s => (
                          <li key={s} className="text-sm text-[#0b0620]/80 flex items-start gap-1">
                            <span className="text-fuchsia-500">•</span>{s}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-[#0b0620] text-base mb-2">Benefits:</p>
                      <ul className="space-y-1">
                        {program.benefits.map(b => (
                          <li key={b} className="text-sm text-[#0b0620]/80 flex items-start gap-1">
                            <span className="text-green-500">✓</span>{b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <p className="text-sm text-center bg-fuchsia-50 p-2 rounded-lg text-fuchsia-700">
                    <strong>Add-On:</strong> {program.addOn}
                  </p>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button asChild className="w-full min-h-12 bg-fuchsia-600 hover:bg-fuchsia-700 text-white rounded-full">
                    <a href="#contact">Book</a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        <div className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Button
            asChild
            className="bg-fuchsia-600 text-white hover:bg-fuchsia-700 px-10 py-6 rounded-full text-lg font-medium shadow-xl hover:shadow-2xl transition-all hover:scale-105"
          >
            <a href="#contact">Book Your Session</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

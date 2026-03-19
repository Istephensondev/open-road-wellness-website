"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"

const singleSessions = [
  {
    name: "Hypnosis - Mind Reset",
    duration: "60 min",
    price: "$70",
    description: "Reduce stress, shift limiting beliefs, improve focus & confidence",
  },
  {
    name: "Intuitive Reading - Clarity Session",
    duration: "15 min / 30 min",
    price: "$15 / $30",
    description: "Gain insight, clarity, and guidance for next steps",
  },
  {
    name: "Sound Bath - Vibrational Reset",
    duration: "30-45 min",
    price: "$50",
    description: "Deep relaxation, nervous system reset, emotional release",
  },
]

const dualSession = {
  name: "Mini Transformation",
  duration: "80 min",
  price: "$85",
  options: [
    "Hypnosis + Intuitive Reading",
    "Hypnosis + Sound Bath",
    "Intuitive Reading + Sound Bath",
  ],
  benefit: "Deeper reset, clarity, and relaxation in one session",
}

const multiSessionPrograms = [
  {
    name: "Pathway to Transformation",
    duration: "2-4 weeks",
    price: "$270",
    includes: "3 Hypnosis + 2 Intuitive Readings",
    features: [
      "Step-by-step mindset and habit support",
      "Personalized notes to take home",
      "Follow-up guidance between sessions",
      "Increased clarity, confidence, and alignment",
    ],
  },
  {
    name: "Clarity & Confidence",
    duration: "2-4 weeks",
    price: "$260",
    includes: "3 Hypnosis + 1 Intuitive Reading + 1 Sound Bath",
    features: [
      "Structured transformation approach",
      "Notes + reflection tools",
      "Ongoing check-ins for support",
      "Reduced stress, improved focus, stronger confidence",
    ],
  },
]

const fullImmersionPrograms = [
  {
    name: "Mind-Body-Soul Immersion",
    duration: "4-6 weeks",
    price: "$620",
    includes: "5-6 Hypnosis + 3 Intuitive Readings + 3 Sound Baths",
    features: [
      "Complete transformation experience",
      "Session notes + insight tracking",
      "Home resources (audio/recordings)",
      "Ongoing follow-up support",
      "Deep alignment and lasting change",
    ],
    popular: true,
  },
  {
    name: "Mind & Intuition Immersion",
    duration: "4-6 weeks",
    price: "$590",
    includes: "5 Hypnosis + 3 Intuitive Readings + optional recordings",
    features: [
      "Focus on mindset + intuitive alignment",
      "Personalized notes + exercises",
      "Follow-up check-ins",
      "Reprogram patterns and gain clarity",
    ],
  },
]

const mobileVanPackages = [
  {
    name: "Van Escape",
    duration: "45 min",
    price: "$65",
    includes: "1 Hypnosis OR 1 Intuitive Reading",
    extra: "Optional 20-min Sound Bath",
    benefit: "Private, convenient, relaxing experience",
  },
  {
    name: "On-the-Go Transformation",
    duration: "2-3 weeks",
    price: "$270",
    includes: "3 sessions (Hypnosis + Intuitive Reading) + 1 Sound Bath",
    benefit: "Flexible guided experience with clarity and stress relief",
  },
]

const specialtyPrograms = [
  {
    name: "Smoke-Free Transformation",
    duration: "3 weeks",
    price: "$175",
    sessions: [
      "Break habit",
      "Eliminate cravings",
      "Reinforce long-term change",
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
      "Shift relationship with food",
      "Release emotional eating patterns",
      "Build healthy habits",
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
      "Calm the nervous system",
      "Release anxious thought patterns",
      "Build inner resilience",
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
      "Release limiting beliefs",
      "Build self-worth",
      "Strengthen inner confidence",
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
    addOn: "Intuitive Reading (+$30) for deeper clarity",
  },
]

const addOns = [
  { name: "Home hypnosis recording", price: "$20" },
  { name: "Mini sound bath audio", price: "$15" },
  { name: "Follow-up intuitive reading (15–20 min)", price: "$25–30" },
]

export function Packages() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Show immediately on mobile or after a short delay as fallback
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
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-48 h-48 rounded-full bg-yellow-400/30 blur-3xl animate-float" />
          <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-purple-400/30 blur-3xl animate-float animation-delay-200" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-amber-800 text-base md:text-lg tracking-[0.3em] uppercase mb-4 font-sans font-medium">
            Investment in Yourself
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-white mb-6 drop-shadow-lg">
            Packages & Pricing
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-300 to-purple-500 mx-auto rounded-full mb-6" />
          <p className="text-white/90 max-w-2xl mx-auto leading-relaxed text-lg md:text-xl drop-shadow">
            Choose the experience that resonates with where you are on your journey.
          </p>
        </div>

        {/* Single Sessions */}
        <div className="mb-12">
          <h3 className="font-serif text-2xl md:text-3xl text-white text-center mb-6 drop-shadow">Single-Session Packages</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {singleSessions.map((session, index) => (
              <Card key={session.name} className={`bg-white/95 backdrop-blur-sm border-0 shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-1 flex flex-col ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                <CardHeader className="pb-2">
                  <CardTitle className="font-serif text-xl text-amber-950">{session.name}</CardTitle>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-serif text-purple-600">{session.price}</span>
                    <span className="text-base text-amber-700">{session.duration}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-base text-amber-800/80">{session.description}</p>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button asChild className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-full">
                    <a href="#contact">Book</a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Dual Session */}
        <div className="mb-12">
          <h3 className="font-serif text-2xl md:text-3xl text-white text-center mb-6 drop-shadow">Dual-Session Package</h3>
          <Card className={`bg-white/95 backdrop-blur-sm border-0 shadow-lg max-w-2xl mx-auto transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <CardHeader className="text-center pb-2">
              <CardTitle className="font-serif text-2xl text-amber-950">{dualSession.name}</CardTitle>
              <div className="flex items-center justify-center gap-2">
                <span className="text-3xl font-serif text-purple-600">{dualSession.price}</span>
                <span className="text-base text-amber-700">{dualSession.duration}</span>
              </div>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-base font-medium text-amber-950 mb-2">Choose any 2:</p>
              <div className="flex flex-wrap justify-center gap-2 mb-3">
                {dualSession.options.map(opt => (
                  <span key={opt} className="text-sm bg-purple-100 text-purple-700 px-3 py-1 rounded-full">{opt}</span>
                ))}
              </div>
              <p className="text-base text-amber-800/80 italic mb-4">{dualSession.benefit}</p>
              <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8">
                <a href="#contact">Book</a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Specialty Programs */}
        <div className="mb-12">
          <h3 className="font-serif text-2xl md:text-3xl text-white text-center mb-6 drop-shadow">Specialty Programs - Focused Transformation</h3>
          <p className="text-white/80 text-center mb-8 max-w-2xl mx-auto text-base md:text-lg">Each 3-week program includes 3 hypnosis sessions + 1 follow-up, personalized notes, and ongoing support.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {specialtyPrograms.map((program, index) => (
              <Card key={program.name} className={`bg-white/95 backdrop-blur-sm border-0 shadow-xl transition-all duration-500 hover:shadow-2xl flex flex-col ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                <CardHeader className="pb-2">
                  <CardTitle className="font-serif text-2xl text-amber-950">{program.name}</CardTitle>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-serif text-purple-600">{program.price}</span>
                    <span className="text-base text-amber-700">{program.duration}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="font-medium text-amber-950 text-base mb-2">Sessions:</p>
                      <ul className="space-y-1">
                        {program.sessions.map(s => (
                          <li key={s} className="text-sm text-amber-800/80 flex items-start gap-1">
                            <span className="text-purple-500">•</span>{s}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-amber-950 text-base mb-2">Benefits:</p>
                      <ul className="space-y-1">
                        {program.benefits.map(b => (
                          <li key={b} className="text-sm text-amber-800/80 flex items-start gap-1">
                            <span className="text-green-500">✓</span>{b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <p className="text-sm text-center bg-purple-50 p-2 rounded-lg text-purple-700">
                    <strong>Add-On:</strong> {program.addOn}
                  </p>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button asChild className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-full">
                    <a href="#contact">Book</a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Multi-Session Programs */}
        <div className="mb-12">
          <h3 className="font-serif text-2xl md:text-3xl text-white text-center mb-6 drop-shadow">Multi-Session Programs</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {multiSessionPrograms.map((program, index) => (
              <Card key={program.name} className={`bg-white/95 backdrop-blur-sm border-0 shadow-lg transition-all duration-500 hover:shadow-xl flex flex-col ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                <CardHeader className="pb-2">
                  <CardTitle className="font-serif text-2xl text-amber-950">{program.name}</CardTitle>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-serif text-purple-600">{program.price}</span>
                    <span className="text-base text-amber-700">{program.duration}</span>
                  </div>
                  <p className="text-base text-purple-600 font-medium mt-1">{program.includes}</p>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-1">
                    {program.features.map(feature => (
                      <li key={feature} className="text-base text-amber-800/80 flex items-start gap-2">
                        <span className="text-purple-500 mt-1">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button asChild className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-full">
                    <a href="#contact">Book</a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Full Immersion Programs */}
        <div className="mb-12">
          <h3 className="font-serif text-2xl md:text-3xl text-white text-center mb-6 drop-shadow">Full Immersion Programs <span className="text-yellow-300">(Premium)</span></h3>
          <div className="grid md:grid-cols-2 gap-6">
            {fullImmersionPrograms.map((program, index) => (
              <Card key={program.name} className={`bg-white/95 backdrop-blur-sm border-0 shadow-xl relative overflow-hidden transition-all duration-500 hover:shadow-2xl flex flex-col ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                {program.popular && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-orange-400 to-purple-500" />
                )}
                <CardHeader className="pb-2">
                  <CardTitle className="font-serif text-2xl text-amber-950">{program.name}</CardTitle>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-serif text-purple-600">{program.price}</span>
                    <span className="text-base text-amber-700">{program.duration}</span>
                  </div>
                  <p className="text-base text-purple-600 font-medium mt-1">{program.includes}</p>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-1">
                    {program.features.map(feature => (
                      <li key={feature} className="text-base text-amber-800/80 flex items-start gap-2">
                        <span className="text-purple-500 mt-1">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button asChild className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-full">
                    <a href="#contact">Book</a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Mobile Van Packages */}
        <div className="mb-12">
          <h3 className="font-serif text-2xl md:text-3xl text-white text-center mb-6 drop-shadow">Mobile Van Packages</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {mobileVanPackages.map((pkg, index) => (
              <Card key={pkg.name} className={`bg-white/95 backdrop-blur-sm border-0 shadow-lg transition-all duration-500 hover:shadow-xl flex flex-col ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                <CardHeader className="pb-2">
                  <CardTitle className="font-serif text-2xl text-amber-950">{pkg.name}</CardTitle>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-serif text-purple-600">{pkg.price}</span>
                    <span className="text-base text-amber-700">{pkg.duration}</span>
                  </div>
                  <p className="text-base text-purple-600 font-medium mt-1">{pkg.includes}</p>
                </CardHeader>
                <CardContent className="flex-1">
                  {pkg.extra && <p className="text-base text-orange-600 mb-2">{pkg.extra}</p>}
                  <p className="text-base text-amber-800/80 italic">{pkg.benefit}</p>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button asChild className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-full">
                    <a href="#contact">Book</a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Add-Ons */}
        <div className="mb-8">
          <h3 className="font-serif text-2xl md:text-3xl text-white text-center mb-6 drop-shadow">Add-Ons</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {addOns.map(addon => (
              <div key={addon.name} className={`bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg transition-all duration-500 hover:shadow-xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <span className="text-amber-950 font-medium text-base">{addon.name}</span>
                <span className="text-purple-600 font-serif ml-2 text-base">{addon.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Button 
            asChild
            className="bg-white text-purple-600 hover:bg-purple-50 px-10 py-6 rounded-full text-lg font-medium shadow-xl hover:shadow-2xl transition-all hover:scale-105"
          >
            <a href="#contact">Book Your Session</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

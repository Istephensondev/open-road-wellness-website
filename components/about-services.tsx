"use client"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { LOGO_SRC, SITE_NAME } from "@/lib/site"
import { useEffect, useRef, useState } from "react"

const services = [
  {
    title: "Hypnosis",
    href: "/hypnosis",
    description: "Unlock your subconscious mind to release limiting beliefs and awaken the version of you that already knows the way forward.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8" aria-hidden="true">
        <circle cx="12" cy="12" r="10" className="opacity-30" />
        <circle cx="12" cy="12" r="6" className="opacity-60" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    title: "Group Guided Meditations",
    href: "/group-guided-meditation",
    description: "Shared, calming meditation sessions that help quiet the mind, ease stress, and open space for your higher self to come through.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8" aria-hidden="true">
        <path d="M12 3c2.5 3 4 5.5 4 8a4 4 0 11-8 0c0-2.5 1.5-5 4-8z" />
        <path d="M8 19c1.5-1 2.5-1.5 4-1.5s2.5.5 4 1.5" />
        <path d="M6 21c2-1.2 4-1.8 6-1.8s4 .6 6 1.8" />
      </svg>
    ),
  },
  {
    title: "Sound Baths",
    href: "/sound-bath",
    description: "Immerse yourself in healing vibrations that promote deep relaxation, energetic reset, and a clearer connection inward.",
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
  const [isVisible, setIsVisible] = useState(true)
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
    <section id="about" ref={sectionRef} className="py-14 sm:py-24 px-4 bg-white relative overflow-hidden">
      <div
        className="absolute inset-3 sm:inset-8 md:inset-12 lg:inset-16 rounded-[2rem] shadow-2xl overflow-hidden bg-rainbow-flow"
        aria-hidden="true"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 w-48 h-48 rounded-full bg-yellow-400/30 blur-3xl" />
          <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-fuchsia-400/30 blur-3xl" />
          <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full bg-cyan-400/20 blur-3xl" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 sm:p-8 md:p-10 shadow-xl border border-fuchsia-200/50 h-full">
              <div className="flex items-center gap-3 sm:gap-5 mb-6">
                <div className="shrink-0 w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full overflow-hidden shadow-lg ring-4 ring-yellow-300/80">
                  <img
                    src={LOGO_SRC}
                    alt={`Ivy, owner of ${SITE_NAME}`}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-fuchsia-600 text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-2 font-sans font-medium">
                    About Me
                  </p>
                  <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#0b0620] leading-tight">
                    Hi, I&apos;m <span className="text-fuchsia-600">Ivy</span>
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-[#0b0620]/75 leading-relaxed mb-8 text-base md:text-lg">
                <p>
                  I&apos;m a certified hypnosis practitioner, and the owner of {SITE_NAME}. I created this work for people who are ready to remember who they are — to quiet the noise, release what no longer belongs, and awaken the higher self that has been waiting underneath.
                </p>
                <p>
                  Sessions are available in Nashville, TN and virtually worldwide. Whether you come for a private hypnosis session, a group meditation, or a sound bath, my goal is the same: to make the experience personal, safe, and genuinely transformative.
                </p>
                <p className="font-medium text-[#0b0620]">
                  Here&apos;s how we work together:
                </p>

                <div className="bg-fuchsia-50/80 rounded-xl p-5 border border-fuchsia-200/50">
                  <h3 className="font-display text-xl text-[#0b0620] mb-2">Hypnosis</h3>
                  <p className="text-base mb-2">
                    As a certified hypnosis practitioner, I guide clients into a deeply relaxed, focused state where the subconscious can reframe limiting beliefs, reduce anxiety, and support lasting change. Hypnosis can help:
                  </p>
                  <ul className="list-disc list-inside text-base space-y-1 ml-1 mb-2">
                    <li>Reduce stress, anxiety, and chronic pain</li>
                    <li>Improve sleep quality and insomnia</li>
                    <li>Help break habits, including smoking and overeating</li>
                    <li>Increase confidence, motivation, and self-trust</li>
                  </ul>
                </div>

                <div className="bg-fuchsia-50/80 rounded-xl p-5 border border-fuchsia-200/50">
                  <h3 className="font-display text-xl text-[#0b0620] mb-2">Group Guided Meditations</h3>
                  <p className="text-base">
                    Group guided meditations are a gentle, restorative practice that helps quiet mental chatter, ease anxiety, and invite the body into a deeper state of calm — the kind of stillness where your higher self can actually be heard. Sessions are tailored to your group, and rates are negotiable.
                  </p>
                </div>

                <div className="bg-fuchsia-50/80 rounded-xl p-5 border border-fuchsia-200/50">
                  <h3 className="font-display text-xl text-[#0b0620] mb-2">Sound Bath</h3>
                  <p className="text-base">
                    Using the power of music and vibration, sound baths entrain brainwaves into calm, restorative states, lower cortisol, and activate the parasympathetic nervous system. Sessions can promote relaxation, release tension, and refresh mental clarity so the body and mind can reset.
                  </p>
                </div>

                <p className="font-medium text-[#0b0620] italic">
                  Your journey is uniquely yours — and I&apos;m here to walk with you as you awaken what has always been inside.
                </p>
              </div>

              <Button
                asChild
                className="w-full sm:w-auto bg-fuchsia-600 text-white hover:bg-fuchsia-700 px-8 py-6 min-h-12 rounded-full text-base transition-all hover:scale-105 shadow-lg shadow-fuchsia-600/25"
              >
                <a href="#contact">
                  Get in Touch
                </a>
              </Button>
            </div>
          </div>

          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div id="services" className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 sm:p-8 md:p-10 shadow-xl border border-fuchsia-200/50 h-full">
              <p className="text-fuchsia-600 text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4 font-sans font-medium">
                What We Offer
              </p>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#0b0620] mb-6 sm:mb-8 leading-tight">
                Our <span className="text-fuchsia-600">Services</span>
              </h2>

              <div className="space-y-6">
                {services.map((service, index) => (
                  <a key={service.title} href={service.href} className="block">
                    <Card
                      className={`border border-fuchsia-200/50 bg-gradient-to-br from-white/80 to-fuchsia-50/80 backdrop-blur-sm overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-fuchsia-500/20 hover:-translate-y-1 hover:border-fuchsia-300 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                      }`}
                      style={{ transitionDelay: `${(index + 2) * 150}ms` }}
                    >
                      <div className="flex items-start gap-4 p-5">
                        <div className="shrink-0 p-3 rounded-xl bg-gradient-to-br from-yellow-400 to-fuchsia-500 text-white shadow-md group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                          {service.icon}
                        </div>
                        <div>
                          <CardTitle className="font-display text-xl text-[#0b0620] mb-2 group-hover:text-fuchsia-600 transition-colors">
                            {service.title}
                          </CardTitle>
                          <CardDescription className="text-[#0b0620]/70 leading-relaxed text-base">
                            {service.description}
                          </CardDescription>
                        </div>
                      </div>
                    </Card>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

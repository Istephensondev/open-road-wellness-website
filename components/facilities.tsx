"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"

const partnershipPoints = [
  "Certified yoga instruction with senior-specific training",
  "Full liability insurance",
  "Background screening available",
  "Flexible scheduling to fit your activity calendar",
  "Classes adapted for all mobility and cognitive levels",
]

export function Facilities() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.15 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="communities"
      ref={sectionRef}
      className="py-24 px-4 bg-white relative overflow-hidden"
      aria-labelledby="communities-heading"
    >
      <div
        className="absolute top-8 bottom-8 left-8 right-8 md:top-12 md:bottom-12 md:left-12 md:right-12 lg:top-16 lg:bottom-16 lg:left-16 lg:right-16 shadow-2xl"
        style={{
          background: "linear-gradient(-45deg, #a855f7, #7c3aed, #f97316, #fb923c, #fde047, #a855f7)",
          backgroundSize: "400% 400%",
          backgroundPosition: "50% 50%",
          borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
        }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-48 h-48 rounded-full bg-purple-400/30 blur-3xl" />
          <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-yellow-400/30 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-orange-400/20 blur-3xl" />
        </div>
      </div>

      <div className={`max-w-4xl mx-auto relative z-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border border-purple-200/50">
          <p className="text-amber-600 text-sm tracking-[0.3em] uppercase mb-4 font-sans font-medium">
            For Senior Living Communities & Facilities
          </p>
          <h2 id="communities-heading" className="font-serif text-3xl md:text-5xl text-amber-950 mb-6 leading-tight">
            Bring Wellness to Your <span className="text-purple-600">Residents</span>
          </h2>
          <p className="text-amber-800/80 leading-relaxed text-base md:text-lg mb-8">
            I partner with assisted living communities, retirement homes, and senior centers across Sanford, DeLand, Daytona Beach, and Orlando to offer chair yoga and gentle movement classes your residents will look forward to every week.
          </p>

          <p className="font-medium text-amber-950 text-base md:text-lg mb-4">
            What I bring to every facility partnership:
          </p>
          <ul className="space-y-3 mb-10">
            {partnershipPoints.map((point) => (
              <li key={point} className="flex items-start gap-3 text-amber-800/80 text-base md:text-lg">
                <span className="mt-1 shrink-0 w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-sm font-medium" aria-hidden="true">
                  ✓
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <p className="text-amber-900 text-base md:text-lg mb-6">
            <strong>Interested in bringing a class to your residents?</strong> I&apos;d love to schedule a session for your community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              className="bg-purple-600 text-white hover:bg-purple-700 px-8 py-6 rounded-full text-base transition-all hover:scale-105 shadow-lg shadow-purple-600/25"
            >
              <a href="#contact">Contact me to schedule</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-purple-300 text-purple-700 hover:bg-purple-50 px-8 py-6 rounded-full text-base"
            >
              <a href="/senior-living-wellness">Learn more about community classes</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

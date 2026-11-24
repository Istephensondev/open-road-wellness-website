"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { LOGO_SRC, SITE_NAME } from "@/lib/site"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  const navItems = [
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Packages", id: "packages" },
  ]

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false)
    if (window.location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
      return
    }
    window.location.href = `/#${id}`
  }

  return (
    <>
      {isMenuOpen && (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          aria-label="Close menu"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      <header
        className={`fixed top-[max(0.75rem,env(safe-area-inset-top))] left-3 right-3 sm:top-4 sm:left-4 sm:right-4 z-50 max-w-5xl mx-auto border-2 border-yellow-300/80 rounded-full transition-[background-color,box-shadow,padding] duration-300 ${
          isScrolled
            ? "bg-[#0b0620]/95 backdrop-blur-md shadow-xl shadow-fuchsia-900/20 py-1.5 px-3 sm:px-4"
            : "bg-[#0b0620]/85 backdrop-blur-md shadow-lg shadow-fuchsia-900/20 py-2 px-3 sm:px-5"
        }`}
      >
        <nav aria-label="Main navigation">
          <div className="flex items-center justify-between">
            <a
              href="/"
              className="flex items-center gap-2 min-w-0 text-white hover:text-yellow-300 transition-colors"
              onClick={(e) => {
                if (window.location.pathname === "/") {
                  e.preventDefault()
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
              }}
            >
              <img
                src={LOGO_SRC}
                alt=""
                className="h-10 w-10 sm:h-10 sm:w-10 rounded-full ring-2 ring-yellow-300 shrink-0"
              />
              <span className="font-display brand-wordmark text-lg sm:text-lg leading-none truncate">
                {SITE_NAME}
              </span>
            </a>

            <ul className="hidden md:flex items-center gap-1" role="list">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-sm font-sans font-medium px-4 py-2 rounded-full text-white/85 hover:text-yellow-300 hover:bg-white/10 transition-all"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li className="ml-2">
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-fuchsia-500 to-orange-400 text-white hover:from-fuchsia-600 hover:to-orange-500 hover:shadow-lg hover:shadow-fuchsia-500/30 font-sans font-medium rounded-full px-6 py-2 transition-all hover:scale-105"
                  onClick={() => scrollToSection("contact")}
                >
                  Let&apos;s Connect
                </Button>
              </li>
            </ul>

            <button
              className="md:hidden min-h-11 min-w-11 p-2 rounded-full text-white hover:bg-white/10 transition-colors inline-flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="fixed left-3 right-3 z-50 md:hidden rounded-2xl border-2 border-yellow-300/80 bg-[#0b0620]/95 backdrop-blur-md shadow-2xl p-3 animate-scale-in"
          style={{ top: "calc(max(0.75rem, env(safe-area-inset-top)) + 4.25rem)" }}
        >
          <ul className="flex flex-col gap-1" role="list">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-3.5 px-4 min-h-12 rounded-xl transition-colors font-sans text-white/90 hover:text-yellow-300 hover:bg-white/10"
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li className="pt-1">
              <Button
                className="w-full bg-gradient-to-r from-fuchsia-500 to-orange-400 text-white hover:shadow-lg font-sans font-medium rounded-full min-h-12 py-6"
                onClick={() => scrollToSection("contact")}
              >
                Let&apos;s Connect
              </Button>
            </li>
          </ul>
        </div>
      )}
    </>
  )
}

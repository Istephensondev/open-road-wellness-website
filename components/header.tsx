"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

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

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <header 
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500 max-w-5xl mx-auto rounded-full ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-xl shadow-amber-900/10 py-2 px-6" 
          : "bg-white/80 backdrop-blur-md shadow-lg shadow-amber-900/10 py-3 px-6"
      }`}
    >
      <nav aria-label="Main navigation">
        <div className="flex items-center justify-between">
          <a 
            href="#" 
            className="font-serif text-xl text-amber-900 hover:text-amber-600 transition-colors"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
          >
            <span className="font-semibold">Open Road Wellness</span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {["About", "Services", "Packages"].map((item) => (
              <li key={item}>
                <button 
                  onClick={() => scrollToSection(item.toLowerCase())} 
                  className="text-sm font-sans font-medium px-4 py-2 rounded-full text-amber-800 hover:text-amber-950 hover:bg-amber-100 transition-all"
                >
                  {item}
                </button>
              </li>
            ))}
            <li className="ml-2">
              <Button 
                size="sm" 
                className="bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 hover:shadow-lg hover:shadow-amber-500/30 font-sans font-medium rounded-full px-6 py-2 transition-all hover:scale-105"
                onClick={() => scrollToSection("packages")}
              >
                Book a Session
              </Button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-full text-amber-800 hover:bg-amber-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg 
              className="w-6 h-6 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
              style={{ transform: isMenuOpen ? "rotate(90deg)" : "rotate(0deg)" }}
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          id="mobile-menu" 
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-80 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pb-4 pt-4">
            <ul className="flex flex-col gap-1" role="list">
              {["About", "Services", "Packages"].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => scrollToSection(item.toLowerCase())} 
                    className="block w-full text-left py-3 px-4 rounded-xl transition-colors font-sans text-amber-800 hover:text-amber-950 hover:bg-amber-100"
                  >
                    {item}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <Button 
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:shadow-lg font-sans font-medium rounded-full py-6"
                  onClick={() => scrollToSection("packages")}
                >
                  Book a Session
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

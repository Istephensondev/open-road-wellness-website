"use client"

import { useEffect, useState } from "react"
import { SITE_PHONE, SITE_PHONE_E164 } from "@/lib/site"

export function MobileCta() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 280)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 md:hidden border-t border-yellow-300/50 bg-[#0b0620]/95 backdrop-blur-md pb-[env(safe-area-inset-bottom)]">
      <div className="grid grid-cols-2 gap-2 p-2">
        <a
          href={`tel:${SITE_PHONE_E164}`}
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-yellow-300 px-3 text-sm font-semibold text-[#0b0620] active:scale-[0.98]"
        >
          Call {SITE_PHONE}
        </a>
        <a
          href="/#contact"
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500 to-orange-400 px-3 text-sm font-semibold text-white active:scale-[0.98]"
        >
          Book a Session
        </a>
      </div>
    </div>
  )
}

import { LOGO_SRC, SITE_EMAIL, SITE_LEGAL_NAME, SITE_NAME, SITE_PHONE, SITE_PHONE_E164, SITE_TAGLINE, SOCIAL } from "@/lib/site"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="pt-10 sm:pt-12 px-4 bg-[#0b0620] text-white pb-[calc(6.5rem+env(safe-area-inset-bottom))] md:pb-12">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={LOGO_SRC} alt="" className="h-12 w-12 rounded-full ring-2 ring-yellow-300" />
              <h3 className="font-display brand-wordmark text-xl sm:text-2xl leading-none">{SITE_NAME}</h3>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              ✦ {SITE_TAGLINE} ✦
            </p>
            <p className="text-white/70 text-sm leading-relaxed mt-2">
              Hypnosis, guided meditation, and sound baths for awakening your higher self.
            </p>
          </div>

          <div>
            <h4 className="font-sans text-sm uppercase tracking-wider mb-4 text-yellow-300/90">
              Services
            </h4>
            <ul className="text-sm text-white/70 space-y-2">
              <li><a href="/hypnosis" className="hover:text-yellow-300 transition-colors">Hypnosis</a></li>
              <li><a href="/group-guided-meditation" className="hover:text-yellow-300 transition-colors">Group Guided Meditations</a></li>
              <li><a href="/sound-bath" className="hover:text-yellow-300 transition-colors">Sound Baths</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-sm uppercase tracking-wider mb-4 text-yellow-300/90">
              Contact
            </h4>
            <address className="not-italic text-sm text-white/70 space-y-2">
              <p>
                <a href={`mailto:${SITE_EMAIL}`} className="hover:text-yellow-300 transition-colors break-all">
                  {SITE_EMAIL}
                </a>
              </p>
              <p>
                <a href={`tel:${SITE_PHONE_E164}`} className="hover:text-yellow-300 transition-colors">
                  {SITE_PHONE}
                </a>
              </p>
              <p>Nashville, TN</p>
            </address>
          </div>

          <div>
            <h4 className="font-sans text-sm uppercase tracking-wider mb-4 text-yellow-300/90">
              Follow Along
            </h4>
            <ul className="flex gap-3" role="list">
              <li>
                <a
                  href={SOCIAL.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 min-w-11 items-center justify-center text-white/70 hover:text-yellow-300 transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 min-w-11 items-center justify-center text-white/70 hover:text-yellow-300 transition-colors"
                  aria-label="Follow us on TikTok"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 min-w-11 items-center justify-center text-white/70 hover:text-yellow-300 transition-colors"
                  aria-label="Connect with us on Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 min-w-11 items-center justify-center text-white/70 hover:text-yellow-300 transition-colors"
                  aria-label="Subscribe on YouTube"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/15 pt-8 text-center">
          <p className="text-white/60 text-sm font-sans">
            {currentYear} {SITE_NAME}. A DBA of {SITE_LEGAL_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

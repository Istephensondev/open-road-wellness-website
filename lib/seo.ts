import { SITE_EMAIL, SITE_LEGAL_NAME, SITE_NAME, SITE_PHONE_E164, SITE_URL, AREAS_SERVED, OG_IMAGE, SOCIAL } from "@/lib/site"

export const seoPages = [
  {
    slug: "hypnosis",
    title: "Hypnosis in Sanford, FL",
    description:
      "Certified hypnosis with 5D Unleashed in Sanford, FL and online. Sessions support stress relief, better sleep, habit change, confidence, and awakening your higher self.",
    h1: "Hypnosis to Awaken Your Higher Self",
    intro:
      "As a certified hypnosis practitioner, I guide clients into a deeply relaxed, focused state where the subconscious mind can reframe limiting beliefs, reduce anxiety, and support lasting change.",
    body: [
      "Hypnosis can help reduce stress, anxiety, and chronic pain; improve sleep; support habit change such as smoking or overeating; and increase confidence and motivation. It is also a powerful way to reconnect with the part of you that already knows who you are becoming.",
      "The Mind Reset session is 60 minutes. Specialty programs are also available for smoke-free transformation, weight loss and healthy habits, anxiety and stress relief, and confidence. Private sessions are offered in Central Florida and virtually worldwide.",
    ],
    keywords: [
      "hypnosis Sanford FL",
      "hypnotherapy Central Florida",
      "hypnosis for anxiety Orlando",
      "quit smoking hypnosis Florida",
      "higher self hypnosis",
    ],
  },
  {
    slug: "group-guided-meditation",
    title: "Group Guided Meditations in Sanford, FL",
    description:
      "Group guided meditation with 5D Unleashed in Sanford and Central Florida. Calming 45- or 60-minute sessions for private groups. Rates negotiable.",
    h1: "Group Guided Meditations",
    intro:
      "Group guided meditations offer a gentle way to quiet mental chatter, ease anxiety, and invite the body into a deeper state of calm — the stillness where your higher self can be heard. Sessions are tailored to your group.",
    body: [
      "Classes are offered in 45-minute or one-hour formats. They work well for private groups, gatherings, and anyone looking for a restorative, shared practice.",
      "Rates are negotiable based on group size, session length, and location throughout Sanford, DeLand, Daytona Beach, Orlando, and Central Florida. Virtual groups are available worldwide.",
    ],
    keywords: [
      "group guided meditation Sanford FL",
      "guided meditation Central Florida",
      "meditation class Orlando",
    ],
  },
  {
    slug: "sound-bath",
    title: "Sound Baths in Sanford, FL",
    description:
      "Sound bath sessions with 5D Unleashed in Sanford, FL and Central Florida. Healing vibration for deep relaxation, nervous system reset, and energetic release. 30–45 minutes.",
    h1: "Sound Baths in Sanford & Central Florida",
    intro:
      "Sound baths use music and vibration to help the body and mind settle. Sessions can promote relaxation, release tension, and refresh mental clarity so you can reconnect inward.",
    body: [
      "A Vibrational Reset sound bath is 30–45 minutes. Sound work can lower stress responses and support a calm, restorative state, making it a strong fit for private clients and small groups.",
      "Sound baths are available to individuals in Central Florida and can be added to a hypnosis specialty program as an optional add-on.",
    ],
    keywords: [
      "sound bath Sanford FL",
      "sound healing Central Florida",
      "sound bath Orlando",
    ],
  },
] as const

export type SeoPage = (typeof seoPages)[number]

export function getSeoPage(slug: string) {
  return seoPages.find((page) => page.slug === slug)
}

export function getServiceJsonLd(page: SeoPage) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.h1,
    description: page.description,
    url: `${SITE_URL}/${page.slug}`,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}#business`,
      name: SITE_NAME,
    },
    areaServed: AREAS_SERVED.map((name) => ({
      "@type": "Place",
      name,
    })),
  }
}

export function getLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HealthAndBeautyBusiness"],
    "@id": `${SITE_URL}#business`,
    name: SITE_NAME,
    legalName: SITE_LEGAL_NAME,
    alternateName: SITE_NAME,
    url: SITE_URL,
    image: `${SITE_URL}${OG_IMAGE}`,
    telephone: SITE_PHONE_E164,
    email: SITE_EMAIL,
    description:
      "Hypnosis, group guided meditations, and sound baths to awaken your higher self. Based in Sanford, FL with virtual sessions worldwide.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sanford",
      addressRegion: "FL",
      addressCountry: "US",
    },
    areaServed: AREAS_SERVED.map((name) => ({
      "@type": "Place",
      name,
    })),
    founder: {
      "@type": "Person",
      name: "Ivy",
      jobTitle: "Certified Hypnosis Practitioner",
      image: `${SITE_URL}/images/ivy-headshot.png`,
    },
    knowsAbout: [
      "Hypnosis",
      "Group guided meditation",
      "Sound bath",
      "Higher self work",
      "Stress and anxiety relief",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Wellness Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hypnosis" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Group Guided Meditations" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sound Bath" } },
      ],
    },
    sameAs: [SOCIAL.instagram, SOCIAL.tiktok, SOCIAL.youtube],
  }
}

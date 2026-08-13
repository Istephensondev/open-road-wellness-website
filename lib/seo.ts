import { SITE_EMAIL, SITE_NAME, SITE_PHONE_E164, SITE_URL, AREAS_SERVED } from "@/lib/site"

export const seoPages = [
  {
    slug: "chair-yoga",
    title: "Chair Yoga for Seniors in Sanford, FL",
    description:
      "Chair yoga classes for seniors and limited-mobility adults in Sanford, DeLand, Daytona Beach, and Orlando. Private, small-group, and on-site senior living classes. Rates negotiable.",
    h1: "Chair Yoga for Seniors in Central Florida",
    intro:
      "Open Road Wellness offers accessible chair yoga in Sanford, FL and across Central Florida. Classes are designed for seniors and anyone with limited mobility, whether in a private session, a small group, or an on-site class at a senior living community.",
    body: [
      "Chair yoga builds strength, flexibility, balance, and calm without getting down on the floor. Every pose can be done seated or with a chair for support, so residents and private clients can participate at their own ability level.",
      "I offer 45-minute and one-hour classes. Pricing is negotiable based on session type, group size, and location. On-site classes are available for assisted living communities, retirement homes, and senior centers in Sanford, DeLand, Daytona Beach, Orlando, and nearby Central Florida.",
    ],
    keywords: [
      "chair yoga Sanford FL",
      "chair yoga for seniors Central Florida",
      "senior yoga instructor Sanford",
      "chair yoga assisted living Orlando",
    ],
  },
  {
    slug: "gentle-movement",
    title: "Gentle Dance & Movement for Seniors in Sanford, FL",
    description:
      "Low-impact gentle dance and movement classes for seniors in Sanford and Central Florida. Adapted for all mobility levels, including assisted living and retirement communities.",
    h1: "Gentle Dance & Movement for Seniors",
    intro:
      "Fun, low-impact movement sessions that get bodies moving and spirits lifted. Classes are adapted for all mobility levels and work well in senior living communities across Central Florida.",
    body: [
      "Gentle dance and movement can support mood, circulation, coordination, and social connection. I keep the pace comfortable and adjust movements so everyone in the room can join in.",
      "These classes pair well with chair yoga for weekly activity calendars at assisted living communities, retirement homes, and senior centers in Sanford, DeLand, Daytona Beach, and Orlando.",
    ],
    keywords: [
      "gentle movement for seniors Sanford FL",
      "senior dance class Central Florida",
      "low impact movement assisted living",
    ],
  },
  {
    slug: "hypnosis",
    title: "Hypnosis in Sanford, FL",
    description:
      "Certified hypnosis in Sanford, FL and online. Sessions support stress relief, better sleep, habit change, and confidence. Serving Central Florida and virtual clients worldwide.",
    h1: "Hypnosis in Sanford, FL",
    intro:
      "As a certified hypnosis practitioner, I guide clients into a deeply relaxed, focused state where the subconscious mind can reframe limiting beliefs, reduce anxiety, and support lasting change.",
    body: [
      "Hypnosis can help reduce stress, anxiety, and chronic pain; improve sleep; support habit change such as smoking or overeating; and increase confidence and motivation.",
      "The Mind Reset session is 60 minutes. Specialty programs are also available for smoke-free transformation, weight loss and healthy habits, anxiety and stress relief, and confidence. Private sessions are offered in Central Florida and virtually worldwide.",
    ],
    keywords: [
      "hypnosis Sanford FL",
      "hypnotherapy Central Florida",
      "hypnosis for anxiety Orlando",
      "quit smoking hypnosis Florida",
    ],
  },
  {
    slug: "group-guided-meditation",
    title: "Group Guided Meditations in Sanford, FL",
    description:
      "Group guided meditation classes in Sanford and Central Florida. Calming 45- or 60-minute sessions for seniors, private groups, and senior living communities. Rates negotiable.",
    h1: "Group Guided Meditations in Central Florida",
    intro:
      "Group guided meditations offer a gentle way to quiet mental chatter, ease anxiety, and invite the body into a deeper state of calm. Sessions are tailored to your group.",
    body: [
      "Classes are offered in 45-minute or one-hour formats. They work well for senior living communities, small private groups, and wellness calendars that need a restorative, seated option.",
      "Rates are negotiable based on group size, session length, and location throughout Sanford, DeLand, Daytona Beach, Orlando, and Central Florida.",
    ],
    keywords: [
      "group guided meditation Sanford FL",
      "meditation class for seniors Central Florida",
      "guided meditation assisted living Orlando",
    ],
  },
  {
    slug: "sound-bath",
    title: "Sound Baths in Sanford, FL",
    description:
      "Sound bath sessions in Sanford, FL and Central Florida. Healing vibration for deep relaxation, nervous system reset, and stress relief. 30–45 minutes.",
    h1: "Sound Baths in Sanford & Central Florida",
    intro:
      "Sound baths use music and vibration to help the body and mind settle. Sessions can promote relaxation, release tension, and refresh mental clarity.",
    body: [
      "A Vibrational Reset sound bath is 30–45 minutes. Sound work can lower stress responses and support a calm, restorative state, making it a strong fit for private clients and community wellness programs.",
      "Sound baths are available to individuals in Central Florida and can be added to senior living activity programming by request.",
    ],
    keywords: [
      "sound bath Sanford FL",
      "sound healing Central Florida",
      "sound bath Orlando",
    ],
  },
  {
    slug: "senior-living-wellness",
    title: "Chair Yoga for Assisted Living & Senior Communities",
    description:
      "On-site chair yoga and gentle movement for assisted living, retirement homes, and senior centers in Sanford, DeLand, Daytona Beach, and Orlando. Certified instruction, insurance, and background screening available.",
    h1: "Wellness Classes for Senior Living Communities",
    intro:
      "I partner with assisted living communities, retirement homes, and senior centers across Sanford, DeLand, Daytona Beach, and Orlando to offer chair yoga, gentle movement, and group guided meditation classes residents can look forward to each week.",
    body: [
      "Facility partners receive certified yoga instruction with senior-specific training, full liability insurance, background screening available, flexible scheduling, and classes adapted for all mobility and cognitive levels.",
      "On-site chair yoga is offered as 45-minute or one-hour classes. Rates are negotiable based on group size, schedule, and location. Contact Open Road Wellness to discuss bringing classes to your community.",
    ],
    keywords: [
      "chair yoga assisted living Central Florida",
      "senior living yoga instructor Sanford FL",
      "retirement community wellness Orlando",
      "activity director chair yoga Florida",
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
    legalName: "Open Road Wellness LLC",
    url: SITE_URL,
    image: `${SITE_URL}/images/ivy-headshot.png`,
    telephone: SITE_PHONE_E164,
    email: SITE_EMAIL,
    description:
      "Chair yoga, gentle movement, hypnosis, group guided meditations, and sound baths for seniors and individuals in Sanford, FL and Central Florida.",
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
      jobTitle: "Certified Yoga Instructor and Hypnosis Practitioner",
      image: `${SITE_URL}/images/ivy-headshot.png`,
    },
    knowsAbout: [
      "Chair yoga",
      "Senior yoga",
      "Gentle movement for seniors",
      "Hypnosis",
      "Group guided meditation",
      "Sound bath",
      "Assisted living wellness programs",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Wellness Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Chair Yoga", areaServed: "Central Florida" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gentle Dance and Movement" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hypnosis" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Group Guided Meditations" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sound Bath" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "On-site Senior Living Wellness Classes" } },
      ],
    },
    sameAs: [
      "https://instagram.com/openroadwellness",
      "https://tiktok.com/@openroadwellness",
      "https://youtube.com/@openroadwellness",
    ],
  }
}

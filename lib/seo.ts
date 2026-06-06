import { SITE } from "@/lib/site";
import { SERVICES } from "@/lib/services";
import type { Lang } from "@/lib/i18n";

// Houston, TX 77030 area (Texas Medical Center generalized — no specific street)
export const GEO = {
  latitude: 29.7110,
  longitude: -95.3990,
  region: "US-TX",
  placename: "Houston",
  zip: "77030"
} as const;

export const KEYWORDS = {
  es: [
    "agencia de marketing Houston",
    "agencia de marketing digital Houston",
    "agencia bilingue Houston",
    "branding Houston",
    "marca personal Houston",
    "publicidad Meta Ads Houston",
    "Google Ads Houston",
    "diseno web Houston",
    "SEO Houston",
    "marketing para emprendedores",
    "agencia digital Texas"
  ],
  en: [
    "Houston marketing agency",
    "digital marketing agency Houston",
    "bilingual marketing Houston",
    "branding agency Houston",
    "personal branding Houston",
    "Meta Ads agency Houston",
    "Google Ads agency Houston",
    "web design Houston",
    "SEO Houston",
    "marketing for entrepreneurs",
    "Texas digital agency"
  ]
} as const;

export function buildLocalBusinessJsonLd(lang: Lang) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE.url}/#business`,
    name: SITE.name,
    legalName: "Cohete Studio LLC",
    url: SITE.url,
    image: `${SITE.url}/opengraph-image`,
    logo: `${SITE.url}/logo.svg`,
    telephone: `+1${SITE.phone}`,
    email: SITE.email,
    priceRange: "$$",
    description:
      lang === "es"
        ? "Agencia full-service de marketing digital y comercial en Houston, TX. Branding, diseno web, publicidad pagada, SEO, redes sociales, marca personal y estrategia."
        : "Full-service digital and commercial marketing agency in Houston, TX. Branding, web design, paid ads, SEO, social media, personal branding, and strategy.",
    knowsLanguage: ["es", "en"],
    // Service-area business — no streetAddress published. City + region + zip is enough for local SEO.
    address: {
      "@type": "PostalAddress",
      addressLocality: "Houston",
      addressRegion: "TX",
      postalCode: GEO.zip,
      addressCountry: "US"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: GEO.latitude,
      longitude: GEO.longitude
    },
    hasMap: `https://www.google.com/maps?q=Houston%2C+TX+${GEO.zip}`,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00"
      }
    ],
    areaServed: [
      { "@type": "City",  name: "Houston" },
      { "@type": "State", name: "Texas" },
      { "@type": "Country", name: "United States" },
      { "@type": "AdministrativeArea", name: "Latin America" }
    ],
    serviceType: SERVICES.map((s) => s.i18n[lang].name),
    sameAs: [
      `https://instagram.com/${SITE.instagram}`
    ]
  };
}

export function buildWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    publisher: { "@id": `${SITE.url}/#business` },
    inLanguage: ["es", "en"]
  };
}

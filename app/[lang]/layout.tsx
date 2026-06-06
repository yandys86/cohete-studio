import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadChatWizard from "@/components/LeadChatWizard";
import { DICT } from "@/lib/dictionaries";
import { LANGS, isLang, type Lang } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import { GEO, KEYWORDS, buildLocalBusinessJsonLd, buildWebSiteJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  if (!isLang(params.lang)) return {};
  const t = DICT[params.lang];
  const lang: Lang = params.lang;
  const localeMap = { es: "es_US", en: "en_US" } as const;
  const titleBase =
    `${SITE.name} — ${t.heroTitle1} ${t.heroTitleHighlight} ${t.heroTitle2}`
      .replace(/\s+/g, " ")
      .trim();
  const titleWithCity =
    lang === "es"
      ? `${titleBase} | Agencia de marketing en Houston, TX`
      : `${titleBase} | Marketing agency in Houston, TX`;

  return {
    metadataBase: new URL(SITE.url),
    title: { default: titleWithCity, template: `%s | ${SITE.name} · Houston` },
    description: t.heroSubtitle,
    keywords: [...KEYWORDS[lang]],
    authors: [{ name: SITE.name, url: SITE.url }],
    creator: SITE.name,
    publisher: SITE.name,
    category: "marketing",
    applicationName: SITE.name,
    alternates: {
      canonical: `${SITE.url}/${params.lang}`,
      languages: {
        es: `${SITE.url}/es`,
        en: `${SITE.url}/en`,
        "x-default": `${SITE.url}/es`
      }
    },
    openGraph: {
      type: "website",
      url: `${SITE.url}/${params.lang}`,
      siteName: SITE.name,
      title: titleWithCity,
      description: t.heroSubtitle,
      locale: localeMap[lang]
    },
    twitter: {
      card: "summary_large_image",
      title: titleWithCity,
      description: t.heroSubtitle
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1
      }
    },
    verification: { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || undefined },
    other: {
      "geo.region": GEO.region,
      "geo.placename": GEO.placename,
      "geo.position": `${GEO.latitude};${GEO.longitude}`,
      ICBM: `${GEO.latitude}, ${GEO.longitude}`
    },
    formatDetection: { telephone: true, email: true, address: true }
  };
}

export default function LangLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  if (!isLang(params.lang)) notFound();
  const lang: Lang = params.lang;
  const jsonLd = [buildLocalBusinessJsonLd(lang), buildWebSiteJsonLd()];
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header lang={lang} />
      <div>{children}</div>
      <Footer lang={lang} />
      <LeadChatWizard lang={lang} />
    </>
  );
}

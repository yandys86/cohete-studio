import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadChatWizard from "@/components/LeadChatWizard";
import { DICT } from "@/lib/dictionaries";
import { LANGS, isLang } from "@/lib/i18n";
import { SITE } from "@/lib/site";

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  if (!isLang(params.lang)) return {};
  const t = DICT[params.lang];
  const localeMap = { es: "es_US", en: "en_US" } as const;
  const title = `${SITE.name} — ${t.heroTitle1} ${t.heroTitle2}`.replace(/\s+/g, " ").trim();
  return {
    metadataBase: new URL(SITE.url),
    title: { default: title, template: `%s | ${SITE.name}` },
    description: t.heroSubtitle,
    alternates: {
      canonical: `${SITE.url}/${params.lang}`,
      languages: { es: `${SITE.url}/es`, en: `${SITE.url}/en` }
    },
    openGraph: {
      type: "website",
      url: `${SITE.url}/${params.lang}`,
      siteName: SITE.name,
      title,
      description: t.heroSubtitle,
      locale: localeMap[params.lang]
    },
    twitter: { card: "summary_large_image", title, description: t.heroSubtitle }
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
  return (
    <>
      <Header lang={params.lang} />
      <div>{children}</div>
      <Footer lang={params.lang} />
      <LeadChatWizard lang={params.lang} />
    </>
  );
}

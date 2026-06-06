import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceCard from "@/components/ServiceCard";
import { DICT } from "@/lib/dictionaries";
import { isLang } from "@/lib/i18n";
import { SERVICES } from "@/lib/services";
import { SITE } from "@/lib/site";

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  if (!isLang(params.lang)) return {};
  const t = DICT[params.lang];
  return {
    title: t.navServices,
    description: t.servicesSub,
    alternates: {
      canonical: `${SITE.url}/${params.lang}/servicios`,
      languages: { es: `${SITE.url}/es/servicios`, en: `${SITE.url}/en/servicios` }
    }
  };
}

export default function ServicesIndex({ params }: { params: { lang: string } }) {
  if (!isLang(params.lang)) notFound();
  const lang = params.lang;
  const t = DICT[lang];
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <header className="mb-12 max-w-2xl">
        <div className="text-[10px] uppercase tracking-wide3 text-violet-glow mb-3">
          {t.servicesEyebrow}
        </div>
        <h1 className="font-display text-4xl sm:text-6xl text-white leading-tight font-bold">
          {t.servicesHeading}
        </h1>
        <p className="mt-4 text-white/70">{t.servicesSub}</p>
      </header>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {SERVICES.map((s) => (
          <ServiceCard key={s.slug} service={s} lang={lang} />
        ))}
      </div>
    </main>
  );
}

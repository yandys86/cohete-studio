import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Icon from "@/components/Icon";
import { DICT } from "@/lib/dictionaries";
import { isLang } from "@/lib/i18n";
import { SITE } from "@/lib/site";

type Params = { lang: string };

export function generateMetadata({ params }: { params: Params }): Metadata {
  if (!isLang(params.lang)) return {};
  const t = DICT[params.lang];
  return {
    title: t.aboutTitle,
    description: t.aboutLead,
    alternates: {
      canonical: `${SITE.url}/${params.lang}/sobre`,
      languages: { es: `${SITE.url}/es/sobre`, en: `${SITE.url}/en/sobre` }
    }
  };
}

export default function AboutPage({ params }: { params: Params }) {
  if (!isLang(params.lang)) notFound();
  const lang = params.lang;
  const t = DICT[lang];
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <header className="text-center mb-12">
        <div className="text-[10px] uppercase tracking-wide3 text-violet-glow mb-3">
          {SITE.city}
        </div>
        <h1 className="font-display text-4xl sm:text-5xl text-white leading-tight font-bold">
          {t.aboutTitle}
        </h1>
        <p className="mt-4 text-white/70 text-lg max-w-2xl mx-auto">{t.aboutLead}</p>
      </header>

      <article className="space-y-6 text-white/80 text-lg leading-relaxed">
        <p>{t.aboutP1}</p>
        <p>{t.aboutP2}</p>
        <p>{t.aboutP3}</p>
      </article>

      <div className="mt-12 flex flex-wrap justify-center gap-3">
        <Link
          href={`/${lang}/contacto`}
          className="group inline-flex items-center gap-2 rounded-full bg-violet-cyan text-white px-7 py-3.5 text-sm font-semibold uppercase tracking-wide2 hover:scale-[1.02] transition shadow-[0_8px_40px_-12px_rgba(168,85,247,0.6)]"
        >
          {t.ctaStart}
          <Icon name="arrow-right" className="size-4 group-hover:translate-x-0.5 transition" />
        </Link>
        <Link
          href={`/${lang}/servicios`}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 text-white px-7 py-3.5 text-sm uppercase tracking-wide2 hover:border-violet-glow hover:text-violet-glow transition"
        >
          {t.ctaSee}
        </Link>
      </div>
    </main>
  );
}

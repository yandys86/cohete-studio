import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "@/components/Icon";
import { DICT } from "@/lib/dictionaries";
import { isLang } from "@/lib/i18n";
import { SITE } from "@/lib/site";

type Params = { lang: string };

export function generateMetadata({ params }: { params: Params }): Metadata {
  if (!isLang(params.lang)) return {};
  const t = DICT[params.lang];
  return {
    title: t.workTitle,
    description: t.workLead,
    alternates: {
      canonical: `${SITE.url}/${params.lang}/trabajos`,
      languages: { es: `${SITE.url}/es/trabajos`, en: `${SITE.url}/en/trabajos` }
    }
  };
}

export default function WorkPage({ params }: { params: Params }) {
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
          {t.workTitle}
        </h1>
        <p className="mt-4 text-white/70 text-lg">{t.workLead}</p>
      </header>

      <div className="rounded-2xl border border-violet/30 bg-violet-cyan/5 p-8 text-center">
        <div className="mx-auto size-16 rounded-2xl bg-violet-cyan flex items-center justify-center text-white mb-5">
          <Icon name="spark" className="size-8" />
        </div>
        <p className="text-white/85 leading-relaxed">{t.workSoon}</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link
            href={`/${lang}/contacto`}
            className="group inline-flex items-center gap-2 rounded-full bg-violet-cyan text-white px-7 py-3.5 text-sm font-semibold uppercase tracking-wide2 hover:scale-[1.02] transition shadow-[0_8px_40px_-12px_rgba(168,85,247,0.6)]"
          >
            {t.ctaStart}
            <Icon name="arrow-right" className="size-4 group-hover:translate-x-0.5 transition" />
          </Link>
        </div>
      </div>
    </main>
  );
}

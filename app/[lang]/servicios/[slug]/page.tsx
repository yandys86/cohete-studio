import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "@/components/Icon";
import { DICT } from "@/lib/dictionaries";
import { LANGS, isLang } from "@/lib/i18n";
import { SERVICES, getService } from "@/lib/services";
import { SITE } from "@/lib/site";

type Params = { lang: string; slug: string };

export function generateStaticParams() {
  return LANGS.flatMap((lang) =>
    SERVICES.map((s) => ({ lang, slug: s.slug }))
  );
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  if (!isLang(params.lang)) return {};
  const service = getService(params.slug);
  if (!service) return { title: "404" };
  const t = service.i18n[params.lang];
  return {
    title: t.name,
    description: t.short,
    alternates: {
      canonical: `${SITE.url}/${params.lang}/servicios/${service.slug}`,
      languages: {
        es: `${SITE.url}/es/servicios/${service.slug}`,
        en: `${SITE.url}/en/servicios/${service.slug}`
      }
    }
  };
}

export default function ServicePage({ params }: { params: Params }) {
  if (!isLang(params.lang)) notFound();
  const service = getService(params.slug);
  if (!service) notFound();
  const lang = params.lang;
  const dict = DICT[lang];
  const t = service.i18n[lang];

  const otherServices = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <main className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
      <Link
        href={`/${lang}/servicios`}
        className="text-xs uppercase tracking-wide2 text-white/60 hover:text-white"
      >
        ← {dict.serviceBack}
      </Link>

      <header className="mt-8 flex flex-col sm:flex-row sm:items-center gap-6">
        <div className="size-16 rounded-2xl bg-violet-cyan flex items-center justify-center text-white shrink-0">
          <Icon name={service.icon} className="size-8" />
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-wide3 text-violet-glow mb-1">
            {dict.servicesEyebrow}
          </div>
          <h1 className="font-display text-4xl sm:text-5xl text-white leading-tight font-bold">
            {t.name}
          </h1>
          <p className="mt-2 text-white/80">{t.short}</p>
        </div>
      </header>

      <section className="mt-12 grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <p className="text-white/85 leading-relaxed text-lg">{t.long}</p>
          <div className="rounded-2xl border border-white/10 bg-ink-soft/40 p-6">
            <div className="font-display text-xl text-white mb-4 font-semibold">
              {dict.serviceBullets}
            </div>
            <ul className="space-y-2">
              {t.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-white/80">
                  <span className="text-violet-glow mt-1">✓</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="lg:sticky lg:top-28 lg:self-start space-y-4">
          <div className="rounded-2xl border border-violet/40 bg-violet-cyan/10 p-6">
            <div className="font-display text-xl text-white mb-2 font-semibold">
              {dict.serviceQuoteHeading}
            </div>
            <p className="text-sm text-white/70 mb-4">{dict.serviceQuoteCopy}</p>
            <Link
              href={`/${lang}/contacto?servicio=${service.slug}`}
              className="block w-full text-center rounded-full bg-violet-cyan text-white py-3 text-sm font-semibold uppercase tracking-wide2 hover:scale-[1.02] transition"
            >
              {dict.serviceQuoteCta}
            </Link>
          </div>
        </aside>
      </section>

      <section className="mt-16 pt-10 border-t border-white/10">
        <div className="text-[10px] uppercase tracking-wide3 text-violet-glow mb-3">
          {lang === "es" ? "Otros servicios" : "Other services"}
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          {otherServices.map((s) => (
            <Link
              key={s.slug}
              href={`/${lang}/servicios/${s.slug}`}
              className="rounded-xl border border-white/10 bg-ink-soft/40 p-4 hover:border-violet/60 transition"
            >
              <div className="flex items-center gap-3">
                <div className="size-9 rounded-full bg-violet/15 flex items-center justify-center text-violet-glow">
                  <Icon name={s.icon} className="size-4" />
                </div>
                <div className="font-display text-base text-white font-semibold">{s.i18n[lang].name}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

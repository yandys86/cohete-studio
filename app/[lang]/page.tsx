import Link from "next/link";
import { notFound } from "next/navigation";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import Process from "@/components/Process";
import Stats from "@/components/Stats";
import Icon from "@/components/Icon";
import { DICT } from "@/lib/dictionaries";
import { isLang } from "@/lib/i18n";
import { SERVICES } from "@/lib/services";

export default function HomePage({ params }: { params: { lang: string } }) {
  if (!isLang(params.lang)) notFound();
  const lang = params.lang;
  const t = DICT[lang];

  return (
    <main>
      <Hero lang={lang} />

      <section id="servicios" className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <header className="mb-12 max-w-2xl">
          <div className="text-[10px] uppercase tracking-wide3 text-violet-glow mb-3">
            {t.servicesEyebrow}
          </div>
          <h2 className="font-display text-3xl sm:text-5xl text-white leading-tight font-bold">
            {t.servicesHeading}
          </h2>
          <p className="mt-4 text-white/70">{t.servicesSub}</p>
        </header>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s) => (
            <ServiceCard key={s.slug} service={s} lang={lang} />
          ))}
        </div>
      </section>

      <Process lang={lang} />
      <Stats lang={lang} />

      <section className="mx-auto max-w-3xl px-6 py-20 text-center relative">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[480px] rounded-full bg-violet/20 blur-[120px]" />
        </div>
        <div className="relative">
          <div className="text-[10px] uppercase tracking-wide3 text-violet-glow mb-3">
            {t.ctaBlockEyebrow}
          </div>
          <h2 className="font-display text-3xl sm:text-5xl text-white leading-tight font-bold">
            {t.ctaBlockTitle}
          </h2>
          <p className="mt-5 text-white/70">{t.ctaBlockCopy}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href={`/${lang}/contacto`}
              className="group inline-flex items-center gap-2 rounded-full bg-violet-cyan text-white px-7 py-3.5 text-sm font-semibold uppercase tracking-wide2 hover:scale-[1.02] transition shadow-[0_8px_40px_-12px_rgba(168,85,247,0.6)]"
            >
              {t.ctaStart}
              <Icon name="arrow-right" className="size-4 group-hover:translate-x-0.5 transition" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

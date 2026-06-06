import Link from "next/link";
import { DICT } from "@/lib/dictionaries";
import type { Lang } from "@/lib/i18n";
import Icon from "@/components/Icon";

export default function Hero({ lang }: { lang: Lang }) {
  const t = DICT[lang];
  return (
    <section className="relative overflow-hidden border-b border-white/5">
      {/* Animated gradient blobs */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 size-[420px] rounded-full bg-violet/40 blur-[120px] animate-blob-1" />
        <div className="absolute top-40 right-0   size-[360px] rounded-full bg-cyan/30   blur-[120px] animate-blob-2" />
        <div className="absolute bottom-0 left-1/3 size-[420px] rounded-full bg-blue-glow/25 blur-[120px] animate-blob-3" />
      </div>
      {/* dot grid pattern */}
      <div aria-hidden="true" className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle_at_center,#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-28 sm:pt-32 sm:pb-36 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-violet/40 bg-violet/5 px-3 py-1 text-[11px] uppercase tracking-wide3 text-violet-glow mb-8">
          <span className="size-1.5 rounded-full bg-violet-glow animate-pulse" />
          {t.heroBadge}
        </div>
        <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold leading-[1.02] tracking-tight text-white">
          {t.heroTitle1}{" "}
          <span className="bg-violet-cyan bg-clip-text text-transparent">{t.heroTitleHighlight}</span>
          <br />
          {t.heroTitle2}
        </h1>
        <p className="mt-7 max-w-2xl mx-auto text-lg text-white/70 leading-relaxed">
          {t.heroSubtitle}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            href={`/${lang}/contacto`}
            className="group relative inline-flex items-center gap-2 rounded-full bg-violet-cyan text-white px-7 py-3.5 text-sm font-semibold uppercase tracking-wide2 hover:scale-[1.02] transition shadow-[0_8px_40px_-12px_rgba(168,85,247,0.6)]"
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
      </div>
    </section>
  );
}

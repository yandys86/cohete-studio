import { DICT } from "@/lib/dictionaries";
import type { Lang } from "@/lib/i18n";

export default function Process({ lang }: { lang: Lang }) {
  const t = DICT[lang];
  const STEPS = [
    { n: "01", title: t.step1Title, copy: t.step1Copy },
    { n: "02", title: t.step2Title, copy: t.step2Copy },
    { n: "03", title: t.step3Title, copy: t.step3Copy },
    { n: "04", title: t.step4Title, copy: t.step4Copy }
  ];
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
      <header className="mb-12 max-w-2xl">
        <div className="text-[10px] uppercase tracking-wide3 text-violet-glow mb-3">
          {t.processEyebrow}
        </div>
        <h2 className="font-display text-3xl sm:text-5xl text-white leading-tight font-bold">
          {t.processHeading}
        </h2>
      </header>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {STEPS.map((s, i) => (
          <div
            key={s.n}
            className="relative rounded-2xl border border-white/10 bg-ink-soft/40 p-6"
          >
            <div className="flex items-baseline justify-between mb-4">
              <span className="font-display text-3xl font-bold bg-violet-cyan bg-clip-text text-transparent">
                {s.n}
              </span>
              {i < STEPS.length - 1 && (
                <span className="text-white/20 text-xs">→</span>
              )}
            </div>
            <div className="font-display text-lg text-white mb-2 font-semibold">{s.title}</div>
            <p className="text-sm text-white/65 leading-relaxed">{s.copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

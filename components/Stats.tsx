import { DICT } from "@/lib/dictionaries";
import type { Lang } from "@/lib/i18n";

export default function Stats({ lang }: { lang: Lang }) {
  const t = DICT[lang];
  const ITEMS = [
    { value: "25+",  label: t.statClients },
    { value: "60+",  label: t.statProjects },
    { value: "4.2x", label: t.statRoas },
    { value: "8",    label: t.statTeam }
  ];
  return (
    <section className="border-y border-white/5 bg-ink-soft/40">
      <div className="mx-auto max-w-6xl px-6 py-14 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
        {ITEMS.map((s) => (
          <div key={s.label}>
            <div className="font-display text-5xl sm:text-6xl font-bold bg-violet-cyan bg-clip-text text-transparent leading-none">
              {s.value}
            </div>
            <div className="mt-2 text-xs uppercase tracking-wide3 text-white/55">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

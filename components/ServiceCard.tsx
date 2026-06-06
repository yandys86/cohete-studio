import Link from "next/link";
import type { Service } from "@/lib/services";
import type { Lang } from "@/lib/i18n";
import Icon from "@/components/Icon";

export default function ServiceCard({ service, lang }: { service: Service; lang: Lang }) {
  const t = service.i18n[lang];
  return (
    <Link
      href={`/${lang}/servicios/${service.slug}`}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-ink-soft/60 p-6 hover:border-violet/60 hover:bg-ink-soft transition flex flex-col"
    >
      {/* hover glow */}
      <div aria-hidden="true" className="absolute -top-20 -right-20 size-48 rounded-full bg-violet/0 group-hover:bg-violet/20 blur-3xl transition duration-700" />

      <div className="relative">
        <div className="size-12 rounded-xl bg-violet-cyan flex items-center justify-center text-white mb-5">
          <Icon name={service.icon} className="size-6" />
        </div>
        <h3 className="font-display text-xl text-white mb-2 leading-tight font-semibold">{t.name}</h3>
        <p className="text-sm text-white/65 flex-1 leading-relaxed">{t.short}</p>
        <div className="mt-5 text-xs uppercase tracking-wide2 text-violet-glow/85 group-hover:text-violet-glow flex items-center gap-1.5 transition">
          {lang === "es" ? "Ver detalle" : "See detail"}
          <Icon name="arrow-right" className="size-3.5" />
        </div>
      </div>
    </Link>
  );
}

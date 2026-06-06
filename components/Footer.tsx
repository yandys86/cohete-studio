import Link from "next/link";
import Image from "next/image";
import { DICT } from "@/lib/dictionaries";
import type { Lang } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/lib/services";
import { phoneLink } from "@/lib/whatsapp";

export default function Footer({ lang }: { lang: Lang }) {
  const t = DICT[lang];
  return (
    <footer className="mt-24 bg-ink-deep border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6 py-14 grid gap-10 sm:grid-cols-4 text-sm text-white/65">
        <div className="sm:col-span-2">
          <div className="flex items-center gap-3 mb-3">
            <Image src="/logo.svg" alt={SITE.name} width={40} height={40} />
            <div className="font-display text-2xl text-white font-semibold">{SITE.name}</div>
          </div>
          <p className="max-w-sm">{t.footerTagline}</p>
        </div>
        <div>
          <div className="uppercase tracking-wide3 text-xs text-white/40 mb-3">{t.footerServicesTitle}</div>
          <ul className="space-y-1.5">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link href={`/${lang}/servicios/${s.slug}`} className="hover:text-white">
                  {s.i18n[lang].name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="uppercase tracking-wide3 text-xs text-white/40 mb-3">{t.footerContactTitle}</div>
          <ul className="space-y-2">
            <li><a href={phoneLink()} className="hover:text-white">{SITE.phoneDisplay}</a></li>
            <li><a href={`mailto:${SITE.email}`} className="hover:text-white break-all">{SITE.email}</a></li>
            <li className="text-white/55 text-xs pt-1">{SITE.address}</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-white/30 pb-8 border-t border-white/5 pt-6 mx-6">
        © {new Date().getFullYear()} {SITE.name}. {t.footerCopyright}
      </div>
    </footer>
  );
}

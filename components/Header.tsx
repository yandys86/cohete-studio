import Link from "next/link";
import Image from "next/image";
import { DICT } from "@/lib/dictionaries";
import type { Lang } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import LangSwitcher from "@/components/LangSwitcher";
import SideDrawer from "@/components/SideDrawer";

export default function Header({ lang }: { lang: Lang }) {
  const t = DICT[lang];
  return (
    <header className="border-b border-white/5 bg-ink/85 sticky top-0 z-30">
      <div className="mx-auto max-w-6xl px-6 py-3 flex items-center justify-between gap-4">
        <Link href={`/${lang}`} className="flex items-center gap-3 group">
          <Image
            src="/logo.svg"
            alt={SITE.name}
            width={44}
            height={44}
            priority
            className="size-10 sm:size-11 group-hover:rotate-[-12deg] transition duration-500"
          />
          <div className="leading-tight hidden sm:block">
            <div className="font-display text-lg text-white font-semibold">{SITE.name}</div>
            <div className="text-[10px] uppercase tracking-wide3 text-violet-glow/80">
              {SITE.city}
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm tracking-wide2 uppercase text-white/70">
          <Link href={`/${lang}/servicios`} className="hover:text-white transition">{t.navServices}</Link>
          <Link href={`/${lang}/trabajos`}  className="hover:text-white transition">{t.navWork}</Link>
          <Link href={`/${lang}/sobre`}     className="hover:text-white transition">{t.navAbout}</Link>
          <Link href={`/${lang}/contacto`}  className="hover:text-white transition">{t.navContact}</Link>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LangSwitcher current={lang} />
          <SideDrawer lang={lang} />
        </div>
      </div>
    </header>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { DICT } from "@/lib/dictionaries";
import type { Lang } from "@/lib/i18n";
import { SERVICES } from "@/lib/services";
import { SITE } from "@/lib/site";
import { phoneLink } from "@/lib/whatsapp";
import Icon from "@/components/Icon";

export default function SideDrawer({ lang }: { lang: Lang }) {
  const [open, setOpen] = useState(false);
  const t = DICT[lang];

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={lang === "es" ? "Abrir menu" : "Open menu"}
        className="inline-flex items-center justify-center size-10 rounded-full border border-white/15 text-white hover:border-violet hover:text-violet-glow transition"
      >
        <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <path d="M4 7 L20 7 M4 12 L20 12 M4 17 L20 17" />
        </svg>
      </button>

      <div
        onClick={close}
        aria-hidden="true"
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-40 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      />

      <aside
        role="dialog"
        aria-modal="true"
        className={`fixed top-0 right-0 h-full w-[88vw] max-w-sm bg-ink-deep border-l border-white/10 z-50 overflow-y-auto transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="sticky top-0 z-10 bg-ink-deep border-b border-white/10 px-5 py-4 flex items-center justify-between">
          <Link href={`/${lang}`} onClick={close} className="flex items-center gap-3">
            <Image src="/logo.svg" alt={SITE.name} width={36} height={36} />
            <div className="leading-tight">
              <div className="font-display text-base text-white font-semibold">{SITE.name}</div>
              <div className="text-[9px] uppercase tracking-wide3 text-violet-glow/70">{SITE.city}</div>
            </div>
          </Link>
          <button
            type="button"
            onClick={close}
            aria-label={lang === "es" ? "Cerrar menu" : "Close menu"}
            className="size-9 inline-flex items-center justify-center rounded-full border border-white/15 text-white hover:border-violet transition"
          >
            <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6 L18 18 M18 6 L6 18" />
            </svg>
          </button>
        </div>

        <div className="px-5 py-5 space-y-6 text-white/85">
          <nav className="flex flex-col gap-2 pb-5 border-b border-white/10">
            <Link href={`/${lang}`}           onClick={close} className="font-display text-xl hover:text-white transition">{lang === "es" ? "Inicio" : "Home"}</Link>
            <Link href={`/${lang}/servicios`} onClick={close} className="font-display text-xl hover:text-white transition">{t.navServices}</Link>
            <Link href={`/${lang}/trabajos`}  onClick={close} className="font-display text-xl hover:text-white transition">{t.navWork}</Link>
            <Link href={`/${lang}/sobre`}     onClick={close} className="font-display text-xl hover:text-white transition">{t.navAbout}</Link>
            <Link href={`/${lang}/contacto`}  onClick={close} className="font-display text-xl hover:text-white transition">{t.navContact}</Link>
          </nav>

          <div>
            <div className="text-[10px] uppercase tracking-wide3 text-violet-glow mb-3">
              {t.navServices}
            </div>
            <ul className="space-y-1.5">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/${lang}/servicios/${s.slug}`}
                    onClick={close}
                    className="flex items-center gap-2 text-sm text-white/70 hover:text-white group"
                  >
                    <span className="size-6 rounded-full bg-violet/15 flex items-center justify-center text-violet-glow shrink-0 group-hover:bg-violet/25 transition">
                      <Icon name={s.icon} className="size-3" />
                    </span>
                    <span>{s.i18n[lang].name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-5 border-t border-white/10 space-y-2 text-sm text-white/75">
            <a href={phoneLink()} className="block hover:text-white">{SITE.phoneDisplay}</a>
            <a href={`mailto:${SITE.email}`} className="block hover:text-white">{SITE.email}</a>
            <div className="text-white/55 text-xs pt-1">{SITE.address}</div>
          </div>
        </div>
      </aside>
    </>
  );
}

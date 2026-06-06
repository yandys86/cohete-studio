"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LANGS, otherLang, type Lang } from "@/lib/i18n";

export default function LangSwitcher({ current }: { current: Lang }) {
  const pathname = usePathname() || `/${current}`;
  const other = otherLang(current);
  const replaced =
    LANGS.reduce<string | null>((acc, l) => {
      if (acc) return acc;
      if (pathname === `/${l}`) return `/${other}`;
      if (pathname.startsWith(`/${l}/`)) return `/${other}${pathname.slice(3)}`;
      return null;
    }, null) || `/${other}`;
  return (
    <Link
      href={replaced}
      className="inline-flex items-center gap-1 rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-wide2 text-white/75 hover:border-violet hover:text-white transition"
      aria-label={`Switch to ${other.toUpperCase()}`}
    >
      <span className={current === "es" ? "text-white" : "text-white/40"}>ES</span>
      <span className="text-white/30">/</span>
      <span className={current === "en" ? "text-white" : "text-white/40"}>EN</span>
    </Link>
  );
}

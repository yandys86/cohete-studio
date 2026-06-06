import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Icon from "@/components/Icon";
import { DICT } from "@/lib/dictionaries";
import { isLang } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import { phoneLink } from "@/lib/whatsapp";

type Params = { lang: string };

export function generateMetadata({ params }: { params: Params }): Metadata {
  if (!isLang(params.lang)) return {};
  const t = DICT[params.lang];
  return {
    title: t.contactTitle,
    description: t.contactLead,
    alternates: {
      canonical: `${SITE.url}/${params.lang}/contacto`,
      languages: { es: `${SITE.url}/es/contacto`, en: `${SITE.url}/en/contacto` }
    }
  };
}

export default function ContactPage({ params }: { params: Params }) {
  if (!isLang(params.lang)) notFound();
  const lang = params.lang;
  const t = DICT[lang];

  return (
    <main className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <header className="text-center mb-12">
        <div className="text-[10px] uppercase tracking-wide3 text-violet-glow mb-3">
          {SITE.city}
        </div>
        <h1 className="font-display text-4xl sm:text-5xl text-white leading-tight font-bold">
          {t.contactTitle}
        </h1>
        <p className="mt-4 text-white/70 text-lg max-w-xl mx-auto">{t.contactLead}</p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        <a
          href={`mailto:${SITE.email}`}
          className="group rounded-2xl border border-white/10 bg-ink-soft/40 p-6 hover:border-violet/60 transition"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="size-11 rounded-full bg-violet/15 flex items-center justify-center text-violet-glow">
              <Icon name="mail" className="size-5" />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-wide3 text-white/50">{t.contactEmailLabel}</div>
              <div className="font-display text-lg text-white font-semibold">{SITE.email}</div>
            </div>
          </div>
          <p className="text-sm text-white/55">Respondemos en menos de 24h.</p>
        </a>

        <a
          href={phoneLink()}
          className="group rounded-2xl border border-white/10 bg-ink-soft/40 p-6 hover:border-violet/60 transition"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="size-11 rounded-full bg-violet/15 flex items-center justify-center text-violet-glow">
              <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M5 4 L9 4 L11 9 L9 11 C 10 14 14 17 16 18 L 18 16 L 22 18 L 22 22 C 14 22 4 14 4 6 Z" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-wide3 text-white/50">{t.contactPhoneLabel}</div>
              <div className="font-display text-lg text-white font-semibold">{SITE.phoneDisplay}</div>
            </div>
          </div>
          <p className="text-sm text-white/55">{t.contactHoursCopy}</p>
        </a>

        <div className="sm:col-span-2 rounded-2xl border border-white/10 bg-ink-soft/40 p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="size-11 rounded-full bg-violet/15 flex items-center justify-center text-violet-glow">
              <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M12 2 C 8 2 5 5 5 9 C 5 14 12 22 12 22 C 12 22 19 14 19 9 C 19 5 16 2 12 2 Z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-wide3 text-white/50">{t.contactAddressLabel}</div>
              <div className="font-display text-lg text-white font-semibold">{SITE.address}</div>
            </div>
          </div>
          <p className="text-sm text-white/55 mb-4">
            {lang === "es"
              ? "Atendemos clientes en Houston, USA y LATAM remoto."
              : "We serve clients in Houston, the US, and remotely across LATAM."}
          </p>
          <div className="rounded-xl overflow-hidden border border-white/10 aspect-[16/9] bg-ink-deep">
            <iframe
              title={lang === "es" ? "Ubicacion en Houston" : "Houston location"}
              src={`https://www.google.com/maps?q=${encodeURIComponent(SITE.address)}&output=embed`}
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "invert(0.92) hue-rotate(180deg) brightness(0.85) contrast(0.95)"
              }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <a
            href={`https://www.google.com/maps?q=${encodeURIComponent(SITE.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-xs uppercase tracking-wide2 text-violet-glow hover:text-violet-glow/80"
          >
            {lang === "es" ? "Abrir en Google Maps →" : "Open in Google Maps →"}
          </a>
        </div>
      </div>
    </main>
  );
}

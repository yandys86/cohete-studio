"use client";

import { useEffect, useRef, useState } from "react";
import type { Lang } from "@/lib/i18n";
import { SERVICES } from "@/lib/services";
import { SITE } from "@/lib/site";

const STRINGS = {
  es: {
    open: "Empezar mi proyecto",
    title: "Asistente Cohete",
    subtitle: "Te respondo en menos de 24h",
    close: "Cerrar",
    botGreet:
      "Hola! Te ayudo a armar tu proyecto en 4 pasos. ¿Que servicio te interesa primero?",
    botBudget:
      "Perfecto. ¿Que rango de presupuesto manejas? Esto nos ayuda a proponer el alcance correcto.",
    botStatus: "¿Donde esta tu marca hoy?",
    botContact: "Por ultimo, dejame tu nombre y telefono para coordinar.",
    namePlaceholder: "Tu nombre completo",
    phonePlaceholder: "+1 713 ...",
    botReady:
      "Listo! Te respondemos en menos de 24h con una propuesta concreta. Tocas el boton y enviamos por WhatsApp.",
    submit: "Continuar",
    sendWhatsApp: "Enviar por WhatsApp",
    startOver: "Empezar de nuevo",
    budgets: [
      { v: "0-1k",   l: "Menos de $1,000 / mes" },
      { v: "1-3k",   l: "$1,000 - $3,000 / mes" },
      { v: "3-10k",  l: "$3,000 - $10,000 / mes" },
      { v: "10k+",   l: "Mas de $10,000 / mes" },
      { v: "una vez",l: "Un proyecto unico" }
    ],
    statuses: [
      { v: "cero",     l: "Empezando desde cero" },
      { v: "marca",    l: "Tengo marca, no resultados" },
      { v: "creciendo",l: "Ya tengo traccion, quiero escalar" },
      { v: "rebrand",  l: "Necesito relanzar / rebrand" }
    ],
    wa: {
      prefix: "🚀 NUEVO PROYECTO COHETE",
      service: "Servicio",
      budget: "Presupuesto",
      status: "Etapa",
      name: "Nombre",
      phone: "Telefono"
    }
  },
  en: {
    open: "Start my project",
    title: "Cohete Assistant",
    subtitle: "We reply within 24h",
    close: "Close",
    botGreet:
      "Hi! I'll help you frame your project in 4 quick steps. Which service are you most interested in?",
    botBudget:
      "Perfect. What budget range are you working with? This helps us scope the right proposal.",
    botStatus: "Where is your brand today?",
    botContact: "Lastly, leave your name and phone so we can coordinate.",
    namePlaceholder: "Your full name",
    phonePlaceholder: "+1 713 ...",
    botReady:
      "All set! We reply within 24h with a concrete proposal. Tap the button to send it via WhatsApp.",
    submit: "Continue",
    sendWhatsApp: "Send via WhatsApp",
    startOver: "Start over",
    budgets: [
      { v: "0-1k",    l: "Under $1,000 / month" },
      { v: "1-3k",    l: "$1,000 - $3,000 / month" },
      { v: "3-10k",   l: "$3,000 - $10,000 / month" },
      { v: "10k+",    l: "Over $10,000 / month" },
      { v: "one-off", l: "One-off project" }
    ],
    statuses: [
      { v: "zero",    l: "Starting from zero" },
      { v: "brand",   l: "Brand exists, no results yet" },
      { v: "growing", l: "Have traction, want to scale" },
      { v: "rebrand", l: "Need a rebrand / relaunch" }
    ],
    wa: {
      prefix: "🚀 NEW COHETE PROJECT",
      service: "Service",
      budget: "Budget",
      status: "Stage",
      name: "Name",
      phone: "Phone"
    }
  }
} as const;

function ChatIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function WhatsAppIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M20.52 3.48A11.85 11.85 0 0 0 12.05 0C5.5 0 .17 5.32.17 11.87c0 2.09.55 4.13 1.59 5.93L.07 24l6.36-1.66a11.87 11.87 0 0 0 5.62 1.43h.01c6.55 0 11.88-5.32 11.88-11.87a11.8 11.8 0 0 0-3.42-8.42zM12.06 21.78h-.01a9.86 9.86 0 0 1-5.02-1.37l-.36-.21-3.77.99 1-3.67-.23-.38a9.84 9.84 0 0 1-1.51-5.27c0-5.45 4.43-9.88 9.9-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.9 6.99c0 5.45-4.44 9.9-9.89 9.9z" />
    </svg>
  );
}

function BotMessage({ text }: { text: string }) {
  return (
    <div className="flex gap-2 items-end">
      <div className="size-7 rounded-full bg-violet-cyan flex items-center justify-center text-white shrink-0">
        <ChatIcon className="size-3.5" />
      </div>
      <div className="rounded-2xl rounded-bl-sm bg-white/5 border border-white/10 px-3.5 py-2.5 text-sm text-white max-w-[82%] leading-snug">
        {text}
      </div>
    </div>
  );
}

function UserMessage({ text }: { text: string }) {
  return (
    <div className="flex justify-end">
      <div className="rounded-2xl rounded-br-sm bg-violet/15 border border-violet/30 px-3.5 py-2.5 text-sm text-white max-w-[82%] leading-snug whitespace-pre-wrap">
        {text}
      </div>
    </div>
  );
}

type Option = { value: string; label: string };

function QuickReplies({ options, onPick }: { options: Option[]; onPick: (v: string) => void }) {
  return (
    <div className="flex flex-wrap gap-2 ml-9 mr-2">
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          onClick={() => onPick(o.value)}
          className="rounded-full border border-violet/40 bg-violet/5 hover:bg-violet/15 hover:border-violet text-violet-glow text-xs px-3 py-1.5 transition"
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

export default function LeadChatWizard({ lang }: { lang: Lang }) {
  const [open, setOpen] = useState(false);
  const [serviceSlug, setServiceSlug] = useState<string | null>(null);
  const [budget, setBudget] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [nameDraft, setNameDraft] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneDraft, setPhoneDraft] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  const s = STRINGS[lang];

  function reset() {
    setServiceSlug(null);
    setBudget(null);
    setStatus(null);
    setName("");
    setNameDraft("");
    setPhone("");
    setPhoneDraft("");
  }

  useEffect(() => {
    if (open && window.innerWidth < 640) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [open, serviceSlug, budget, status, name, phone]);

  const chosenService = serviceSlug ? SERVICES.find((sv) => sv.slug === serviceSlug) : null;
  const chosenBudget = budget ? s.budgets.find((b) => b.v === budget) : null;
  const chosenStatus = status ? s.statuses.find((st) => st.v === status) : null;
  const contactComplete = name.trim() !== "" && phone.trim() !== "";
  const allComplete = !!serviceSlug && !!budget && !!status && contactComplete;

  function buildHref(): string {
    const lines = [
      s.wa.prefix,
      "",
      `${s.wa.service}: ${chosenService?.i18n[lang].name || ""}`,
      `${s.wa.budget}: ${chosenBudget?.l || ""}`,
      `${s.wa.status}: ${chosenStatus?.l || ""}`,
      "",
      `${s.wa.name}: ${name.trim()}`,
      `${s.wa.phone}: ${phone.trim()}`
    ];
    return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
  }

  return (
    <>
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={s.open}
          className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-violet-cyan text-white px-5 py-3 text-sm font-semibold shadow-[0_10px_40px_-10px_rgba(168,85,247,0.7)] hover:scale-105 transition"
        >
          <ChatIcon className="size-5" />
          <span className="hidden sm:inline">{s.open}</span>
        </button>
      )}

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={s.title}
          className="fixed inset-0 z-50 sm:inset-auto sm:bottom-5 sm:right-5 sm:w-[400px] sm:max-h-[80vh] sm:rounded-2xl overflow-hidden bg-ink-deep border border-white/10 shadow-2xl flex flex-col"
        >
          <header className="px-4 py-3 bg-ink-deep border-b border-white/10 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-violet-cyan flex items-center justify-center text-white">
                <ChatIcon className="size-5" />
              </div>
              <div className="leading-tight">
                <div className="font-display text-white text-base font-semibold">{s.title}</div>
                <div className="text-[10px] uppercase tracking-wide3 text-violet-glow/70">{s.subtitle}</div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={s.close}
              className="size-9 inline-flex items-center justify-center rounded-full border border-white/15 text-white hover:border-violet transition"
            >
              <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M6 6 L18 18 M18 6 L6 18" />
              </svg>
            </button>
          </header>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 bg-ink">
            <BotMessage text={s.botGreet} />
            {serviceSlug ? (
              <UserMessage text={chosenService!.i18n[lang].name} />
            ) : (
              <QuickReplies
                options={SERVICES.map((sv) => ({ value: sv.slug, label: sv.i18n[lang].name }))}
                onPick={(v) => setServiceSlug(v)}
              />
            )}

            {serviceSlug && (
              <>
                <BotMessage text={s.botBudget} />
                {budget ? (
                  <UserMessage text={chosenBudget!.l} />
                ) : (
                  <QuickReplies options={s.budgets.map((b) => ({ value: b.v, label: b.l }))} onPick={(v) => setBudget(v)} />
                )}
              </>
            )}

            {budget && (
              <>
                <BotMessage text={s.botStatus} />
                {status ? (
                  <UserMessage text={chosenStatus!.l} />
                ) : (
                  <QuickReplies options={s.statuses.map((st) => ({ value: st.v, label: st.l }))} onPick={(v) => setStatus(v)} />
                )}
              </>
            )}

            {status && (
              <>
                <BotMessage text={s.botContact} />
                {contactComplete ? (
                  <UserMessage text={`${name}\n${phone}`} />
                ) : (
                  <div className="ml-9 mr-2 space-y-2">
                    <input
                      type="text"
                      value={nameDraft}
                      onChange={(e) => setNameDraft(e.target.value)}
                      placeholder={s.namePlaceholder}
                      className="w-full rounded-xl bg-ink-soft border border-white/10 text-sm text-white p-3 placeholder:text-white/30 focus:outline-none focus:border-violet transition"
                    />
                    <input
                      type="tel"
                      value={phoneDraft}
                      onChange={(e) => setPhoneDraft(e.target.value)}
                      placeholder={s.phonePlaceholder}
                      className="w-full rounded-xl bg-ink-soft border border-white/10 text-sm text-white p-3 placeholder:text-white/30 focus:outline-none focus:border-violet transition"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        if (nameDraft.trim() && phoneDraft.trim()) {
                          setName(nameDraft.trim());
                          setPhone(phoneDraft.trim());
                        }
                      }}
                      disabled={!nameDraft.trim() || !phoneDraft.trim()}
                      className="rounded-full bg-violet-cyan text-white text-xs font-semibold uppercase tracking-wide2 px-4 py-2 disabled:opacity-40 disabled:cursor-not-allowed hover:scale-[1.02] transition"
                    >
                      {s.submit} →
                    </button>
                  </div>
                )}
              </>
            )}

            {allComplete && (
              <>
                <BotMessage text={s.botReady} />
                <div className="ml-9 mr-2 flex flex-col gap-2 pt-1">
                  <a
                    href={buildHref()}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-white py-3 text-sm font-semibold uppercase tracking-wide2 hover:bg-[#1ebe5b] transition"
                  >
                    <WhatsAppIcon className="size-5" />
                    {s.sendWhatsApp}
                  </a>
                  <button type="button" onClick={reset} className="text-xs text-white/55 hover:text-white/90 self-center">
                    ← {s.startOver}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

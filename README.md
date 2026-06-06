# Cohete Studio

Sitio bilingue (ES/EN) para **Cohete Studio**, una agencia full-service de marketing digital y comercial con base en Houston, TX.

Stack: **Next.js 14 (App Router) + TypeScript + Tailwind**. Vibe dark tech (deep ink + violet/cyan gradients + animated blobs).

## Setup

Requisitos: **Node.js >= 18**.

```bash
cd cohete_studio
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) → redirige automaticamente a `/es`.

## Configuracion

Editar [lib/site.ts](lib/site.ts) con los datos reales:

```ts
export const SITE = {
  name: "Cohete Studio",
  url: "https://cohete.studio",
  city: "Houston, TX",
  address: "7500 Kirby Dr, Houston, TX 77030",
  phone: "7130000000",            // raw digits
  phoneDisplay: "(713) 000-0000",
  whatsapp: "17130000000",         // E.164 sin +
  email: "hola@cohete.studio",
  instagram: "cohete.studio",
  defaultLang: "es"
};
```

## Estructura

```
app/
  page.tsx                       # redirect a /es
  robots.ts, sitemap.ts          # SEO
  [lang]/
    layout.tsx                   # header + footer + LeadChatWizard
    page.tsx                     # home: hero + servicios + proceso + stats + CTA
    servicios/page.tsx           # listado de servicios
    servicios/[slug]/page.tsx    # ficha de servicio
    trabajos/page.tsx            # portfolio (placeholder)
    sobre/page.tsx
    contacto/page.tsx
components/
  Header.tsx, Footer.tsx
  Hero.tsx                       # con blobs animados violeta/cyan
  ServiceCard.tsx, Process.tsx, Stats.tsx
  SideDrawer.tsx, LangSwitcher.tsx
  LeadChatWizard.tsx             # chat wizard 4-pasos → WhatsApp
  Icon.tsx                       # set de iconos SVG
lib/
  site.ts                        # config global (dominio, contacto, address)
  i18n.ts, dictionaries.ts       # strings ES + EN
  services.ts                    # 8 servicios full-service bilingues
  whatsapp.ts                    # builder de wa.me
public/
  logo.svg                       # cohete con gradiente violeta + cyan
```

## LeadChatWizard

El boton flotante violeta en bottom-right abre un chat de 4 pasos:
1. **Servicio**: cual de los 8 servicios necesitas
2. **Presupuesto**: rango mensual (5 opciones: <$1k, $1-3k, $3-10k, $10k+, un proyecto unico)
3. **Etapa**: en que estado esta tu marca (desde cero, marca-sin-resultados, ya-creciendo, rebrand)
4. **Datos**: nombre + telefono

El boton final abre WhatsApp con un mensaje formateado:
```
🚀 NUEVO PROYECTO COHETE

Servicio: Branding e identidad visual
Presupuesto: $3,000 - $10,000 / mes
Etapa: Empezando desde cero

Nombre: ...
Telefono: ...
```

## Build de produccion

```bash
npm run build
npm run start
```

## Roadmap

- Agregar OG image dinamica (next/og)
- Favicon + apple-touch-icon
- Pagina de casos de exito real con cifras
- Blog (SEO content)
- Calendly o booking integrado
- Form de contacto con backend (Resend / Formspree)

import type { Lang } from "@/lib/i18n";

export type Service = {
  slug: string;
  icon: string;
  i18n: Record<Lang, {
    name: string;
    short: string;
    long: string;
    bullets: string[];
  }>;
};

export const SERVICES: Service[] = [
  {
    slug: "branding",
    icon: "spark",
    i18n: {
      es: {
        name: "Branding e identidad visual",
        short: "Marca, logo, manual y todo el sistema visual para que destaques desde el día 1.",
        long: "Construimos la identidad completa de tu marca: estrategia de posicionamiento, naming si lo necesitas, logo, paleta, tipografía, sistema visual y aplicaciones. Te entregamos un manual de marca que sirve para que cualquier proveedor futuro mantenga la coherencia.",
        bullets: [
          "Estrategia de marca y posicionamiento",
          "Naming (opcional)",
          "Logo y sistema visual completo",
          "Manual de marca (PDF + Figma)",
          "Aplicaciones (papelería, redes, web)"
        ]
      },
      en: {
        name: "Branding and visual identity",
        short: "Brand, logo, guidelines and the full visual system so you stand out from day one.",
        long: "We build your complete brand identity: positioning strategy, naming if needed, logo, palette, typography, visual system, and applications. We deliver brand guidelines that any future vendor can follow to keep consistency.",
        bullets: [
          "Brand strategy and positioning",
          "Naming (optional)",
          "Logo and full visual system",
          "Brand guidelines (PDF + Figma)",
          "Applications (stationery, social, web)"
        ]
      }
    }
  },
  {
    slug: "desarrollo-web",
    icon: "monitor",
    i18n: {
      es: {
        name: "Diseño y desarrollo web",
        short: "Sites, landings y tiendas online que cargan rápido y convierten.",
        long: "Diseñamos y desarrollamos sitios web a medida: landing pages de alta conversión, sitios corporativos, ecommerce y plataformas a medida. Stack moderno (Next.js, Tailwind), enfoque en performance, SEO técnico y experiencia mobile-first.",
        bullets: [
          "Landing pages de alta conversión",
          "Sitios corporativos a medida",
          "Ecommerce (Shopify / a medida)",
          "Performance y SEO técnico",
          "Integraciones con CRM y analytics"
        ]
      },
      en: {
        name: "Web design and development",
        short: "Sites, landings, and online stores that load fast and convert.",
        long: "We design and develop custom websites: high-conversion landing pages, corporate sites, ecommerce, and custom platforms. Modern stack (Next.js, Tailwind), focus on performance, technical SEO, and mobile-first experience.",
        bullets: [
          "High-conversion landing pages",
          "Custom corporate websites",
          "Ecommerce (Shopify / custom)",
          "Performance and technical SEO",
          "CRM and analytics integrations"
        ]
      }
    }
  },
  {
    slug: "publicidad-pagada",
    icon: "target",
    i18n: {
      es: {
        name: "Publicidad pagada (Meta, Google, TikTok)",
        short: "Campañas de performance en Meta, Google y TikTok optimizadas para ROAS.",
        long: "Gestionamos campañas pagas con foco en resultados medibles: estructura de cuenta, públicos, creativos, pixels, conversiones offline y optimización continua. Reportes claros, no impresiones vacías.",
        bullets: [
          "Meta Ads (Facebook, Instagram)",
          "Google Ads (Search, Display, YouTube)",
          "TikTok Ads y otras redes emergentes",
          "Setup de pixels, eventos y CAPI",
          "Reporting semanal con métricas accionables"
        ]
      },
      en: {
        name: "Paid advertising (Meta, Google, TikTok)",
        short: "Performance campaigns on Meta, Google, and TikTok optimized for ROAS.",
        long: "We run paid campaigns focused on measurable results: account structure, audiences, creatives, pixels, offline conversions, and continuous optimization. Clear reports, no empty impressions.",
        bullets: [
          "Meta Ads (Facebook, Instagram)",
          "Google Ads (Search, Display, YouTube)",
          "TikTok Ads and emerging networks",
          "Pixel, events, and CAPI setup",
          "Weekly reporting with actionable metrics"
        ]
      }
    }
  },
  {
    slug: "seo-contenido",
    icon: "search",
    i18n: {
      es: {
        name: "SEO y contenido orgánico",
        short: "Posicionamiento orgánico y estrategia de contenidos que atraen clientes calificados.",
        long: "Auditoría técnica, estrategia de keywords, optimización on-page, link building ético y producción de contenidos (blog, recursos descargables). Nos enfocamos en intención de búsqueda y tráfico que convierte.",
        bullets: [
          "Auditoría técnica completa",
          "Estrategia de keywords e intención",
          "Optimización on-page",
          "Producción de contenido (blog, recursos)",
          "Link building ético"
        ]
      },
      en: {
        name: "SEO and organic content",
        short: "Organic positioning and content strategy that attracts qualified leads.",
        long: "Technical audit, keyword strategy, on-page optimization, ethical link building, and content production (blog, downloadable resources). We focus on search intent and traffic that converts.",
        bullets: [
          "Complete technical audit",
          "Keyword and intent strategy",
          "On-page optimization",
          "Content production (blog, resources)",
          "Ethical link building"
        ]
      }
    }
  },
  {
    slug: "redes-sociales",
    icon: "share",
    i18n: {
      es: {
        name: "Redes sociales y contenido",
        short: "Estrategia, creación y publicación de contenido en redes que conecta de verdad.",
        long: "Manejamos tus redes sociales con calendarios estratégicos, producción de contenido visual y audiovisual, community management y análisis de performance. Foco en construir comunidad y autoridad de marca.",
        bullets: [
          "Estrategia de contenido por canal",
          "Producción visual y audiovisual",
          "Calendario y publicación",
          "Community management",
          "Reportes mensuales con insights"
        ]
      },
      en: {
        name: "Social media and content",
        short: "Strategy, creation, and publishing of social content that actually connects.",
        long: "We manage your social media with strategic calendars, visual and audio-visual content production, community management, and performance analysis. Focus on building community and brand authority.",
        bullets: [
          "Per-channel content strategy",
          "Visual and audio-visual production",
          "Calendar and publishing",
          "Community management",
          "Monthly reports with insights"
        ]
      }
    }
  },
  {
    slug: "email-marketing",
    icon: "mail",
    i18n: {
      es: {
        name: "Email marketing y automatización",
        short: "Newsletters, flujos automáticos y CRM para que tus contactos se vuelvan clientes.",
        long: "Diseñamos e implementamos estrategias de email marketing y automatización: segmentación, flows automáticos (bienvenida, abandono de carrito, post-compra), newsletters editoriales y reporting de revenue por email.",
        bullets: [
          "Setup de plataforma (Klaviyo, Mailchimp, etc)",
          "Segmentación y CRM",
          "Flows automáticos (welcome, cart, post-buy)",
          "Newsletters editoriales",
          "Atribución de revenue por email"
        ]
      },
      en: {
        name: "Email marketing and automation",
        short: "Newsletters, automated flows, and CRM that turn contacts into customers.",
        long: "We design and implement email marketing and automation strategies: segmentation, automated flows (welcome, cart abandonment, post-purchase), editorial newsletters, and email-attributed revenue reporting.",
        bullets: [
          "Platform setup (Klaviyo, Mailchimp, etc)",
          "Segmentation and CRM",
          "Automated flows (welcome, cart, post-buy)",
          "Editorial newsletters",
          "Email revenue attribution"
        ]
      }
    }
  },
  {
    slug: "marca-personal",
    icon: "user",
    i18n: {
      es: {
        name: "Marca personal",
        short: "Para founders, consultores y profesionales que quieren posicionarse como referentes.",
        long: "Construimos la marca personal de fundadores y profesionales: estrategia de posicionamiento, identidad visual, presencia digital (LinkedIn, web personal), producción de contenido en tu voz y crecimiento de autoridad.",
        bullets: [
          "Estrategia de posicionamiento personal",
          "Identidad visual (logo personal opcional)",
          "Web personal / portfolio",
          "Estrategia de contenido en LinkedIn",
          "Producción de contenido en tu voz"
        ]
      },
      en: {
        name: "Personal branding",
        short: "For founders, consultants, and professionals who want to position themselves as authorities.",
        long: "We build the personal brand of founders and professionals: positioning strategy, visual identity, digital presence (LinkedIn, personal site), content production in your voice, and authority growth.",
        bullets: [
          "Personal positioning strategy",
          "Visual identity (optional personal logo)",
          "Personal site / portfolio",
          "LinkedIn content strategy",
          "Content production in your voice"
        ]
      }
    }
  },
  {
    slug: "estrategia",
    icon: "compass",
    i18n: {
      es: {
        name: "Estrategia y consultoría",
        short: "Plan de marketing integral para que dejes de gastar en pruebas y errores.",
        long: "Consultoría estratégica para definir o reordenar tu plan de marketing: análisis de mercado, posicionamiento, mix de canales, presupuesto, objetivos medibles y roadmap trimestral. Para empresas que necesitan dirección antes de ejecutar.",
        bullets: [
          "Análisis de mercado y competencia",
          "Posicionamiento y propuesta de valor",
          "Mix de canales y presupuestos",
          "OKRs y métricas trimestrales",
          "Roadmap accionable a 12 meses"
        ]
      },
      en: {
        name: "Strategy and consulting",
        short: "Comprehensive marketing plan so you stop spending on trial and error.",
        long: "Strategic consulting to define or reorganize your marketing plan: market analysis, positioning, channel mix, budget, measurable objectives, and quarterly roadmap. For companies that need direction before execution.",
        bullets: [
          "Market and competitor analysis",
          "Positioning and value proposition",
          "Channel mix and budgets",
          "OKRs and quarterly metrics",
          "Actionable 12-month roadmap"
        ]
      }
    }
  }
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

import type { Lang } from "@/lib/i18n";

type Dict = {
  // Nav
  navServices: string;
  navWork: string;
  navAbout: string;
  navContact: string;

  // Hero
  heroBadge: string;
  heroTitle1: string;
  heroTitle2: string;
  heroTitleHighlight: string;
  heroSubtitle: string;
  ctaStart: string;
  ctaSee: string;

  // Services section
  servicesEyebrow: string;
  servicesHeading: string;
  servicesSub: string;

  // Process
  processEyebrow: string;
  processHeading: string;
  step1Title: string;
  step1Copy: string;
  step2Title: string;
  step2Copy: string;
  step3Title: string;
  step3Copy: string;
  step4Title: string;
  step4Copy: string;

  // Stats
  statClients: string;
  statProjects: string;
  statRoas: string;
  statTeam: string;

  // CTA block
  ctaBlockEyebrow: string;
  ctaBlockTitle: string;
  ctaBlockCopy: string;

  // About
  aboutTitle: string;
  aboutLead: string;
  aboutP1: string;
  aboutP2: string;
  aboutP3: string;

  // Contact
  contactTitle: string;
  contactLead: string;
  contactAddressLabel: string;
  contactPhoneLabel: string;
  contactEmailLabel: string;
  contactHoursLabel: string;
  contactHoursCopy: string;

  // Work / portfolio
  workTitle: string;
  workLead: string;
  workSoon: string;

  // Service page
  serviceBack: string;
  serviceQuoteHeading: string;
  serviceQuoteCopy: string;
  serviceQuoteCta: string;
  serviceBullets: string;

  // Footer
  footerTagline: string;
  footerNavTitle: string;
  footerServicesTitle: string;
  footerContactTitle: string;
  footerCopyright: string;
};

export const DICT: Record<Lang, Dict> = {
  es: {
    navServices: "Servicios",
    navWork: "Trabajos",
    navAbout: "Sobre",
    navContact: "Contacto",

    heroBadge: "Houston, TX · Marketing digital + comercial",
    heroTitle1: "Lanzamos marcas",
    heroTitle2: "al estratosfera.",
    heroTitleHighlight: "marcas",
    heroSubtitle:
      "Desde la idea hasta el despegue. Branding, web, publicidad, contenido y estrategia para fundadores, emprendedores y empresas que quieren crecer en serio.",
    ctaStart: "Empezar mi proyecto",
    ctaSee: "Ver servicios",

    servicesEyebrow: "Lo que hacemos",
    servicesHeading: "Todo lo que tu marca necesita para despegar.",
    servicesSub:
      "Servicios integrales de marketing digital y comercial. Desde el branding inicial hasta campañas de performance optimizadas con datos.",

    processEyebrow: "Nuestro proceso",
    processHeading: "De idea a resultados en 4 fases.",
    step1Title: "Descubrimiento",
    step1Copy:
      "Conocemos tu negocio, tu mercado, tu competencia y tus objetivos. Definimos qué moverá la aguja.",
    step2Title: "Estrategia",
    step2Copy:
      "Diseñamos el plan: posicionamiento, canales, mensajes, presupuestos y métricas que vamos a perseguir.",
    step3Title: "Ejecución",
    step3Copy:
      "Creamos, publicamos, optimizamos. Iteramos rápido en función de los datos reales.",
    step4Title: "Crecimiento",
    step4Copy:
      "Escalamos lo que funciona, paramos lo que no. Reportes mensuales claros, sin humo.",

    statClients: "Clientes activos",
    statProjects: "Proyectos lanzados",
    statRoas: "ROAS promedio",
    statTeam: "Profesionales en el equipo",

    ctaBlockEyebrow: "Listos para despegar",
    ctaBlockTitle: "Contanos qué necesitas.",
    ctaBlockCopy:
      "Te respondemos en menos de 24 horas con una propuesta clara. Sin compromisos, sin costo de consulta.",

    aboutTitle: "Sobre Cohete Studio",
    aboutLead:
      "Una agencia full-service en Houston que trabaja con marcas que recién empiezan y con empresas que quieren acelerar.",
    aboutP1:
      "Nacimos en Houston con una idea simple: que cualquier persona con una buena idea pueda construir una marca real, sin pelearse con 5 freelancers distintos ni pagar precios de agencia tradicional inflados.",
    aboutP2:
      "Trabajamos con dos tipos de clientes: el que está arrancando de cero y necesita branding, web y primeras campañas para entrar al mercado; y el que ya tiene tracción y quiere escalar con performance ads, contenido y SEO bien hechos.",
    aboutP3:
      "Somos bilingües (ES/EN), reportamos en métricas que importan (no impresiones vacías), y trabajamos con un equipo chico pero con mucha experiencia técnica y creativa.",

    contactTitle: "Hablemos",
    contactLead:
      "Contanos qué necesitas y te respondemos en menos de 24 horas con una propuesta concreta.",
    contactAddressLabel: "Oficina",
    contactPhoneLabel: "Teléfono",
    contactEmailLabel: "Email",
    contactHoursLabel: "Horario",
    contactHoursCopy: "Lunes a viernes, 9:00 - 18:00 CT.",

    workTitle: "Trabajos",
    workLead: "Una selección de proyectos recientes que despegaron con nosotros.",
    workSoon:
      "Estamos preparando los casos de éxito. Mientras tanto, contanos qué buscas y conversamos sobre proyectos similares.",

    serviceBack: "Volver a servicios",
    serviceQuoteHeading: "¿Necesitas este servicio?",
    serviceQuoteCopy: "Te respondemos hoy con un plan claro.",
    serviceQuoteCta: "Pedir propuesta",
    serviceBullets: "Lo que incluye",

    footerTagline:
      "Agencia full-service en Houston. Branding, web, publicidad, contenido y estrategia para marcas que quieren crecer.",
    footerNavTitle: "Navegación",
    footerServicesTitle: "Servicios",
    footerContactTitle: "Contacto",
    footerCopyright: "Todos los derechos reservados."
  },
  en: {
    navServices: "Services",
    navWork: "Work",
    navAbout: "About",
    navContact: "Contact",

    heroBadge: "Houston, TX · Digital + commercial marketing",
    heroTitle1: "We launch brands",
    heroTitle2: "into orbit.",
    heroTitleHighlight: "brands",
    heroSubtitle:
      "From idea to liftoff. Branding, web, ads, content, and strategy for founders, entrepreneurs, and companies that want to grow for real.",
    ctaStart: "Start my project",
    ctaSee: "See services",

    servicesEyebrow: "What we do",
    servicesHeading: "Everything your brand needs to take off.",
    servicesSub:
      "Full-service digital and commercial marketing. From initial branding to data-optimized performance campaigns.",

    processEyebrow: "Our process",
    processHeading: "From idea to results in 4 stages.",
    step1Title: "Discovery",
    step1Copy:
      "We get to know your business, your market, your competition, and your goals. We define what will move the needle.",
    step2Title: "Strategy",
    step2Copy:
      "We design the plan: positioning, channels, messages, budgets, and metrics we'll chase.",
    step3Title: "Execution",
    step3Copy:
      "We create, publish, optimize. We iterate fast based on real data.",
    step4Title: "Growth",
    step4Copy:
      "We scale what works and stop what doesn't. Clear monthly reports, no fluff.",

    statClients: "Active clients",
    statProjects: "Projects launched",
    statRoas: "Average ROAS",
    statTeam: "Professionals on the team",

    ctaBlockEyebrow: "Ready for liftoff",
    ctaBlockTitle: "Tell us what you need.",
    ctaBlockCopy:
      "We reply within 24 hours with a clear proposal. No commitment, no consultation fee.",

    aboutTitle: "About Cohete Studio",
    aboutLead:
      "A full-service agency in Houston that works with brands just starting out and companies that want to accelerate.",
    aboutP1:
      "We were born in Houston with a simple idea: that anyone with a good idea should be able to build a real brand, without juggling 5 different freelancers or paying inflated traditional-agency prices.",
    aboutP2:
      "We work with two types of clients: the one starting from zero who needs branding, web, and first campaigns to enter the market; and the one with traction who wants to scale with performance ads, content, and SEO done right.",
    aboutP3:
      "We are bilingual (ES/EN), we report on metrics that matter (not empty impressions), and we work with a small team that brings serious technical and creative experience.",

    contactTitle: "Let's talk",
    contactLead:
      "Tell us what you need and we'll reply within 24 hours with a concrete proposal.",
    contactAddressLabel: "Office",
    contactPhoneLabel: "Phone",
    contactEmailLabel: "Email",
    contactHoursLabel: "Hours",
    contactHoursCopy: "Monday to Friday, 9:00 AM - 6:00 PM CT.",

    workTitle: "Work",
    workLead: "A selection of recent projects that took off with us.",
    workSoon:
      "We're preparing the case studies. In the meantime, tell us what you're looking for and we'll chat about similar projects.",

    serviceBack: "Back to services",
    serviceQuoteHeading: "Need this service?",
    serviceQuoteCopy: "We'll reply today with a clear plan.",
    serviceQuoteCta: "Request a proposal",
    serviceBullets: "What's included",

    footerTagline:
      "Full-service agency in Houston. Branding, web, ads, content, and strategy for brands that want to grow.",
    footerNavTitle: "Navigation",
    footerServicesTitle: "Services",
    footerContactTitle: "Contact",
    footerCopyright: "All rights reserved."
  }
};

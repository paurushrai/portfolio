import type { Locale } from "./en";

export const es: Locale = {
  nav: {
    about: "Sobre mí",
    projects: "Proyectos",
    services: "Servicios",
    contact: "Contacto",
  },
  home: {
    tagline:
      "Ingeniero de Software Senior — construyo productos, herramientas e integraciones que se lanzan rápido y duran mucho.",
    openToWork: "Disponible para proyectos",
  },
  projects: {
    title: "Proyectos",
    subtitle: "Algunos proyectos son del trabajo y otros de mi tiempo libre.",
    readMore: "Leer más",
    empty: "No se encontraron proyectos.",
    independent: "Independiente",
  },
  services: {
    badge: "Disponible como freelance",
    title: "Servicios",
    intro:
      "Acepto un número limitado de proyectos freelance cada trimestre. Todo lo que desarrollo es de nivel producción, eficiente y entregado con un handoff limpio. Sin agencias, sin subcontratación — trabajas directamente conmigo.",
    pricing: {
      startingAt: "Desde",
      fixedPrice: "Precio fijo",
      perProject: "por proyecto",
      perTool: "por herramienta",
      perIntegration: "por integración",
      perSite: "por sitio",
      auditNote: "auditoría + recomendaciones",
    },
    cta: {
      startProject: "Iniciar proyecto",
      discussIdea: "Discutir tu idea",
      buildTool: "Crear tu herramienta",
      integrateLms: "Integrar tu LMS",
      auditSite: "Auditar mi sitio",
      moderniseSite: "Modernizar mi sitio",
    },
    retainer: {
      label: "Trabajo continuo",
      title: "Retainer Mensual",
      description:
        "¿Necesitas un ingeniero dedicado disponible cuando lo necesites? Ofrezco acuerdos de retainer para equipos que necesitan desarrollo continuo, corrección de bugs o un socio técnico — sin los costos de una contratación a tiempo completo.",
      hours: "hasta 40 hrs/mes",
      cta: "Hablemos",
    },
    faq: {
      title: "Preguntas frecuentes",
      items: [
        {
          q: "¿Cómo empezamos?",
          a: "Contáctame por email o LinkedIn con una breve descripción de tu proyecto. Te responderé en 24 horas para agendar una llamada de alcance de 30 minutos — sin compromiso.",
        },
        {
          q: "¿Trabajas con clientes internacionales?",
          a: "Sí. La mayoría de mis clientes están en EE.UU., Reino Unido y la UE. Trabajo principalmente de forma asíncrona con disponibilidad para llamadas en horarios compatibles.",
        },
        {
          q: "¿Cuál es tu plazo de entrega habitual?",
          a: "Herramientas pequeñas y auditorías: 1–2 semanas. Apps full-stack e integraciones: 4–10 semanas según el alcance. Te daré una estimación detallada después de la llamada.",
        },
        {
          q: "¿Ofreces retainers?",
          a: "Sí — para trabajo continuo, ofrezco retainers mensuales desde $2,000/mes por hasta 40 horas.",
        },
      ],
    },
    finalCta: {
      text: "¿Listo para construir algo?",
      link: "Ponerse en contacto",
    },
  },
  about: {
    title: "Sobre mí",
    subtitle: "Un poco sobre quién soy y qué hago.",
    bio: [
      "Soy Paurush Rai — un ingeniero full-stack orientado al frontend, con sede en India, con casi 5 años de experiencia arquitectando plataformas web empresariales, aplicaciones impulsadas por IA y herramientas de productividad para desarrolladores. Mi trabajo abarca dashboards B2B complejos, integraciones LMS robustas, plugins personalizados para Jira y VS Code, y mucho más.",
      "Me importa profundamente el rendimiento, la arquitectura limpia y entregar cosas que realmente importan. Ya sea construyendo un portal de franquicias desde cero, desarrollando flujos de trabajo de entrevistas con IA en tiempo real o creando herramientas internas que ahorran miles de dólares al año, mi enfoque siempre está en trabajo que mueve la aguja de forma medible.",
      "Fuera del trabajo suelo estar lanzando un proyecto paralelo, automatizando un proceso tedioso o explorando una librería que nunca he usado — me gusta la fricción de aprender nuevas herramientas en contextos reales.",
    ],
    whatIBuild: "Lo que construyo",
    technicalSkills: "Habilidades técnicas",
    viewFullStack: "Ver stack completo en StackShare",
    workHistory: "Experiencia laboral",
    buildItems: [
      "Plataformas empresariales B2B",
      "Aplicaciones y flujos de trabajo de IA",
      "Paneles de administración y franquicias",
      "Integraciones LMS/LTI",
      "CMS sin cabeza y Jamstack",
      "Herramientas internas para desarrolladores",
      "Complementos de código VS y Jira",
      "Canalizaciones de datos y automatización",
      "Bibliotecas de componentes personalizados",
      "Aplicaciones web progresivas",
      "Extensiones del navegador",
    ],
    skills: {
      "Idiomas": ["HTML", "CSS", "JavaScript", "TypeScript", "Handlebars", "MDX"],
      "Marcos": ["React.js", "Next.js", "Vue.js", "Nuxt.js", "Astro.js", "Electron.js", "React Native"],
      "Bibliotecas": ["Tailwind", "DaisyUI", "Shadcn", "Element Plus", "Chart.js", "Pinia", "Recoil", "Clerk", "Stripe"],
      "Base de datos": ["PostgreSQL", "MongoDB"],
      "Parte trasera": ["Node.js", "Express.js", "Hasura", "Directus", "RESTful APIs", "GraphQL APIs"],
      "Control de versiones": ["Git", "GitLab", "GitHub"],
      "Plataformas y herramientas": ["Docker", "Firebase", "Datagrip", "Pipedream", "Vercel", "Apify", "Figma", "AdobeXD"],
      "Otra": ["Chrome Plugin", "VS Code Extension", "LTI Plugin", "Jira Plugin", "CI/CD", "Shell Scripting"],
    },
    experience: [
      {
        company: "Testlify",
        role: "Ingeniero de software sénior",
        location: "Bombay, India",
        period: "Enero 2025 – Presente",
        highlights: [
          "Diseñé un complemento compatible con LTI que integra Testlify con las principales plataformas LMS, contribuyendo a un crecimiento del 20 al 30 % en la adopción empresarial.",
          "Creó MetaNotes, un anotador de reuniones de IA con grabación, transcripción y resúmenes automatizados, lo que le permitió ahorrar 24,000 al año.",
          "Lideré la optimización del rendimiento del frontend en el sitio de marketing, elevando las puntuaciones de Lighthouse de 49/53 a 87/91 en dispositivos móviles/escritorio.",
          "Diseñé una extensión de VS Code para realizar un seguimiento automático del tiempo de codificación mediante la rama Git y registrarlo en Jira, lo que redujo el seguimiento manual entre un 60 % y un 70 %.",
          "Creé un complemento interno de Jira para hojas de horas y asignación de costos, ahorrando más de $9,000 al año.",
          "Implementé flujos de trabajo de entrevistas basados ​​en IA (chat, voz, video AI), lo que redujo el esfuerzo de los entrevistadores en más de un 40 % e impulsó un crecimiento de los ingresos de entre un 20 % y un 30 %.",
        ],
      },
      {
        company: "FuelBuddy",
        role: "Ingeniera de software",
        location: "Gurugram, India",
        period: "Septiembre 2023 – Diciembre 2024",
        highlights: [
          "Construí un frontend de aplicación de kiosco desde cero, reduciendo el tiempo de despacho de combustible en un 60%.",
          "Desarrollé y escalé 6 aplicaciones web de producción para clientes, administradores, franquicias y conductores.",
          "Diseñé 8 paneles de administración para la validación de datos y la resolución de discrepancias, reduciendo el tiempo de resolución entre un 60% y un 70%.",
          "Fui mentor de 3 desarrolladores y 5 pasantes, estableciendo prácticas de revisión de código que mejoraron la calidad y la velocidad de incorporación.",
          "Se entregaron más de 100 funciones de un extremo a otro en múltiples plataformas.",
          "Sentry y Clarity integrados, lo que reduce el tiempo de resolución de problemas en un 30 % y aumenta la información procesable de los usuarios en un 20 %.",
        ],
      },
      {
        company: "Modocosm",
        role: "Ingeniera de software",
        location: "Ciudad de Nueva York, EE. UU. (Remoto)",
        period: "Julio 2021 – Octubre 2023",
        highlights: [
          "Diseñé y mantuve 4 sitios web responsivos impulsados ​​por CMS que respaldan el crecimiento sostenido del tráfico.",
          "CMS Directus deconstruido y configuración de esquema optimizada con consultas PostgreSQL, lo que reduce el tiempo de arranque en más de un 70 %.",
          "Diseñé un sistema de proyección de apuestas automatizado utilizando Google Sheets y Python scraping, mejorando la precisión entre un 15% y un 20%.",
          "Creé más de 100 componentes de interfaz de usuario y sistemas de diseño reutilizables, acelerando la entrega.",
          "Modernicé 7 sitios web heredados migrando a Astro.js Jamstack + CMS headless, reduciendo el tiempo de lanzamiento de contenido en un 50%.",
        ],
      },
    ],

  },
  contact: {
    title: "Contacto",
  },
};

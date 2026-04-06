import type { Locale } from "./en";

export const de: Locale = {
  nav: {
    about: "Über mich",
    projects: "Projekte",
    services: "Leistungen",
    contact: "Kontakt",
  },
  home: {
    tagline:
      "Senior Software Engineer — ich entwickle Produkte, Tools und Integrationen, die schnell liefern und lange halten.",
    openToWork: "Offen für Aufträge",
  },
  projects: {
    title: "Projekte",
    subtitle: "Einige Projekte entstanden im Arbeitsumfeld, andere in meiner Freizeit.",
    readMore: "Mehr lesen",
    empty: "Keine Projekte gefunden.",
    independent: "Unabhängig",
  },
  services: {
    badge: "Verfügbar für Freelance",
    title: "Leistungen",
    intro:
      "Ich nehme pro Quartal eine begrenzte Anzahl von Freelance-Projekten an. Alles, was ich entwickle, ist produktionsreif, performant und wird mit sauberem Handoff übergeben. Keine Agenturen, kein Outsourcing — Sie arbeiten direkt mit mir.",
    pricing: {
      startingAt: "Ab",
      fixedPrice: "Festpreis",
      perProject: "pro Projekt",
      perTool: "pro Tool",
      perIntegration: "pro Integration",
      perSite: "pro Website",
      auditNote: "Audit + Empfehlungen",
    },
    cta: {
      startProject: "Projekt starten",
      discussIdea: "Idee besprechen",
      buildTool: "Tool entwickeln",
      integrateLms: "LMS integrieren",
      auditSite: "Website prüfen",
      moderniseSite: "Website modernisieren",
    },
    retainer: {
      label: "Laufende Zusammenarbeit",
      title: "Monatliches Retainer",
      description:
        "Benötigen Sie einen dedizierten Ingenieur auf Abruf? Ich biete Retainer-Vereinbarungen für Teams an, die laufende Feature-Arbeit, Bugfixes oder einen technischen Partner benötigen — ohne den Overhead einer Vollzeitstelle.",
      hours: "bis zu 40 Std./Monat",
      cta: "Gespräch vereinbaren",
    },
    faq: {
      title: "Häufige Fragen",
      items: [
        {
          q: "Wie starte ich?",
          a: "Schreiben Sie mir per E-Mail oder LinkedIn mit einer kurzen Projektbeschreibung. Ich melde mich innerhalb von 24 Stunden für ein 30-minütiges Erstgespräch — unverbindlich.",
        },
        {
          q: "Arbeiten Sie auch mit internationalen Kunden?",
          a: "Ja. Die meisten meiner Kunden kommen aus den USA, UK und der EU. Ich arbeite primär asynchron, bin aber für überlappende Calls verfügbar.",
        },
        {
          q: "Wie lang ist Ihre typische Projektlaufzeit?",
          a: "Kleine Tools & Audits: 1–2 Wochen. Full-Stack-Apps & Integrationen: 4–10 Wochen je nach Umfang. Nach dem Erstgespräch erhalten Sie eine detaillierte Schätzung.",
        },
        {
          q: "Bieten Sie Retainer an?",
          a: "Ja — für laufende Projekte biete ich monatliche Retainer-Vereinbarungen ab $2.000/Monat für bis zu 40 Stunden an.",
        },
      ],
    },
    finalCta: {
      text: "Bereit, etwas aufzubauen?",
      link: "Kontakt aufnehmen",
    },
  },
  about: {
    title: "Über mich",
    subtitle: "Ein bisschen Hintergrund darüber, wer ich bin und was ich tue.",
    bio: [
      "Ich bin Paurush Rai — ein full-stack Ingenieur mit Fokus auf Frontend, ansässig in Indien, mit fast 5 Jahren Erfahrung in der Entwicklung von Enterprise-Webplattformen, KI-gesteuerten Anwendungen und Developer-Productivity-Tools. Mein Spektrum umfasst komplexe B2B-Dashboards, robuste LMS-Integrationen, maßgeschneiderte Jira- und VS Code-Plugins und vieles mehr.",
      "Mir ist Performance, saubere Architektur und das Liefern von Dingen, die wirklich zählen, sehr wichtig. Ob es darum geht, ein Franchise-Portal von Grund auf neu zu bauen, KI-gesteuerte Interview-Workflows zu entwickeln oder interne Tools zu erstellen, die dem Unternehmen jährlich tausende Dollar sparen — mein Fokus liegt immer auf Arbeit, die messbar etwas bewegt.",
      "Außerhalb der Arbeit bastle ich meistens an einem Nebenprojekt, automatisiere einen lästigen Workflow oder greife nach einer Bibliothek, die ich noch nie benutzt habe — ich schätze die Reibung, neue Tools in echten Kontexten zu erlernen.",
    ],
    whatIBuild: "Was ich entwickle",
    technicalSkills: "Technische Fähigkeiten",
    viewFullStack: "Vollständigen Stack auf StackShare ansehen",
    workHistory: "Berufserfahrung",
    buildItems: [
      "Unternehmens-B2B-Plattformen",
      "KI-Anwendungen und Workflows",
      "Admin- und Franchise-Dashboards",
      "LMS/LTI-Integrationen",
      "Headless CMS und Jamstack",
      "Interne Entwicklertools",
      "VS Code- und Jira-Plugins",
      "Datenpipelines und Automatisierung",
      "Benutzerdefinierte Komponentenbibliotheken",
      "Progressive Web-Apps",
      "Browsererweiterungen",
    ],
    skills: {
      "Sprachen": ["HTML", "CSS", "JavaScript", "TypeScript", "Handlebars", "MDX"],
      "Rahmenwerke": ["React.js", "Next.js", "Vue.js", "Nuxt.js", "Astro.js", "Electron.js", "React Native"],
      "Bibliotheken": ["Tailwind", "DaisyUI", "Shadcn", "Element Plus", "Chart.js", "Pinia", "Recoil", "Clerk", "Stripe"],
      "Datenbank": ["PostgreSQL", "MongoDB"],
      "Back-End": ["Node.js", "Express.js", "Hasura", "Directus", "RESTful APIs", "GraphQL APIs"],
      "Versionskontrolle": ["Git", "GitLab", "GitHub"],
      "Plattformen und Tools": ["Docker", "Firebase", "Datagrip", "Pipedream", "Vercel", "Apify", "Figma", "AdobeXD"],
      "Andere": ["Chrome Plugin", "VS Code Extension", "LTI Plugin", "Jira Plugin", "CI/CD", "Shell Scripting"],
    },
    experience: [
      {
        company: "Testlify",
        role: "Leitender Software-Ingenieur",
        location: "Mumbai, Indien",
        period: "Januar 2025 – Heute",
        highlights: [
          "Entwicklung eines LTI-kompatiblen Plugins, das Testlify in die wichtigsten LMS-Plattformen integriert und so zu einem Wachstum der Unternehmensakzeptanz um 20–30 % beiträgt.",
          "Entwickelte MetaNotes, einen KI-Meeting-Notizierer mit automatischer Aufzeichnung, Transkription und Zusammenfassungen – wodurch jährlich 24.000 US-Dollar eingespart werden.",
          "Leitete die Optimierung der Frontend-Leistung auf der Marketing-Website und steigerte die Lighthouse-Bewertung von 49/53 auf 87/91 auf Mobilgeräten/Desktops.",
          "Entwickelte eine VS-Code-Erweiterung zur automatischen Verfolgung der Codierungszeit durch Git-Zweig und Protokollierung in Jira, wodurch die manuelle Nachverfolgung um 60–70 % reduziert wurde.",
          "Es wurde ein internes Jira-Plugin für Arbeitszeittabellen und Kostenzuordnung erstellt, das jährlich über 9.000 US-Dollar einspart.",
          "Implementierung von KI-gesteuerten Interview-Workflows (Chat, Sprache, Video-KI), wodurch der Aufwand der Interviewer um mehr als 40 % reduziert und ein Umsatzwachstum von 20–30 % erzielt wurde.",
        ],
      },
      {
        company: "FuelBuddy",
        role: "Software-Ingenieur",
        location: "Gurugram, Indien",
        period: "September 2023 – Dezember 2024",
        highlights: [
          "Von Grund auf ein Kiosk-Anwendungs-Frontend entwickelt, das die Zeit für die Kraftstoffausgabe um 60 % verkürzt.",
          "Entwickelte und skalierte 6 Produktions-Webanwendungen für Kunden, Administratoren, Franchise-Unternehmen und Fahrer.",
          "Entwickelte 8 Admin-Dashboards zur Datenvalidierung und Lösung von Diskrepanzen, wodurch die Lösungszeit um 60–70 % verkürzt wurde.",
          "Betreuung von drei Entwicklern und fünf Praktikanten, Einführung von Code-Review-Praktiken, die die Qualität und die Onboarding-Geschwindigkeit verbesserten.",
          "Über 100 End-to-End-Funktionen auf mehreren Plattformen bereitgestellt.",
          "Integrierte Sentry- und Clarity-Lösungen reduzieren die Problemlösungszeit um 30 % und erhöhen die umsetzbaren Benutzereinblicke um 20 %.",
        ],
      },
      {
        company: "Modocosm",
        role: "Software-Ingenieur",
        location: "New York City, USA (Remote)",
        period: "Juli 2021 – Oktober 2023",
        highlights: [
          "Entworfen und gepflegt von 4 CMS-gesteuerten responsiven Websites, die ein nachhaltiges Traffic-Wachstum unterstützen.",
          "Dekonstruiertes Directus CMS und optimiertes Schema-Setup mit PostgreSQL-Abfragen, wodurch die Bootstrapping-Zeit um mehr als 70 % reduziert wird.",
          "Entwickelte ein automatisiertes Wettprojektionssystem mit Google Sheets und Python-Scraping, das die Genauigkeit um 15–20 % verbesserte.",
          "Über 100 wiederverwendbare UI-Komponenten und Designsysteme wurden erstellt, um die Bereitstellung zu beschleunigen.",
          "Modernisierung von 7 älteren Websites durch Migration auf Astro.js Jamstack + Headless CMS, wodurch die Zeit für die Veröffentlichung von Inhalten um 50 % verkürzt wurde.",
        ],
      },
    ],

  },
  contact: {
    title: "Kontakt",
  },
};

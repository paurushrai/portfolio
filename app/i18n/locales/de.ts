import type { Locale } from "./en";

export const de: Locale = {
  nav: {
    about: "Um",
    projects: "Projekte",
    articles: "Artikel",
    services: "Dienstleistungen",
    contact: "Kontakt"
  },
  home: {
    tagline: "Senior Software Engineer – Entwicklung von Produkten, Tools und Integrationen, die schnell geliefert werden und lange halten.",
    openToWork: "Offen für Zusammenarbeit",
    resume: "Lebenslauf"
  },
  projects: {
    title: "Projekte",
    subtitle: "Einige der Projekte entstehen bei der Arbeit, andere in meiner Freizeit.",
    readMore: "Mehr lesen",
    empty: "Keine Projekte gefunden.",
    independent: "Unabhängig",
    personalProject: "Persönliches Projekt",
    associatedWith: "Assoziiert mit"
  },
  articles: {
    title: "Artikel",
    subtitle:
      "Gedanken über Engineering, Tools und Produktentwicklung — veröffentlicht auf Medium.",
    viewAll: "Alle auf Medium ansehen",
    empty: "Noch keine Artikel — schau bald wieder vorbei.",
  },
  services: {
    badge: "Verfügbar für Freiberufler",
    title: "Dienstleistungen",
    intro: "Ich übernehme jedes Quartal eine begrenzte Anzahl freiberuflicher Projekte. Alles, was ich baue, ist produktionstauglich, leistungsstark und wird mit sauberer Übergabe ausgeliefert. Keine Agenturen, keine Unterauftragsvergabe – Sie arbeiten direkt mit mir zusammen.",
    pricing: {
      startingAt: "Beginnend bei",
      fixedPrice: "Festpreis",
      perProject: "pro Projekt",
      perTool: "pro Werkzeug",
      perIntegration: "pro Integration",
      perSite: "pro Standort",
      auditNote: "Audit + Empfehlungen"
    },
    cta: {
      startProject: "Starten Sie ein Projekt",
      discussIdea: "Besprechen Sie Ihre Idee",
      buildTool: "Bauen Sie Ihr Werkzeug",
      integrateLms: "Integrieren Sie Ihr LMS",
      auditSite: "Überprüfen Sie meine Website",
      moderniseSite: "Modernisieren Sie meine Website"
    },
    retainer: {
      label: "Laufende Arbeit",
      title: "Monatlicher Vorschuss",
      description: "Benötigen Sie einen engagierten Techniker auf Abruf? Ich biete Honorarvereinbarungen für Teams an, die laufende Funktionsarbeit, Fehlerbehebungen oder einen technischen Partner benötigen – ohne den Aufwand einer Vollzeitbeschäftigung.",
      hours: "bis zu 40 Std./Monat",
      cta: "Lass uns reden"
    },
    faq: {
      title: "FAQ",
      items: [
        {
          q: "Wie fange ich an?",
          a: "Kontaktieren Sie uns per E-Mail oder LinkedIn mit einer kurzen Beschreibung Ihres Projekts. Ich werde innerhalb von 24 Stunden antworten und einen Termin für ein 30-minütiges Scoping-Gespräch vereinbaren – keine Verpflichtung erforderlich."
        },
        {
          q: "Arbeiten Sie mit internationalen Kunden?",
          a: "Ja. Die meisten meiner Kunden haben ihren Sitz in den USA, Großbritannien und der EU. Ich arbeite zuerst asynchron und mit Verfügbarkeit für überlappende Anrufe."
        },
        {
          q: "Wie sieht Ihr typischer Zeitplan aus?",
          a: "Kleine Tools und Audits: 1–2 Wochen. Full-Stack-Apps und Integrationen: 4–10 Wochen, je nach Umfang. Nach dem Scoping-Gespräch erstelle ich Ihnen einen detaillierten Kostenvoranschlag."
        },
        {
          q: "Bieten Sie Retainer an?",
          a: "Ja – für laufende Arbeiten biete ich monatliche Honorarvereinbarungen ab 2.000 $/Monat für bis zu 40 Stunden an."
        }
      ]
    },
    finalCta: {
      text: "Bereit, etwas zu bauen?",
      link: "Nehmen Sie Kontakt auf"
    },
    servicesList: [
      {
        id: "fullstack-web",
        ctaKey: "startProject",
        title: "Full-Stack-Webentwicklung",
        tagline: "Produktionstaugliche Apps, schnell erstellt.",
        description: "End-to-End-Entwicklung von Webanwendungen – von der Architektur und dem API-Design bis zum ausgefeilten Frontend. Ich habe B2B-SaaS-Plattformen, mandantenfähige Dashboards und kundenorientierte Apps entwickelt, die Zehntausende von Benutzern bedienen.",
        stack: [
          "React / Next.js",
          "Vue / Nuxt.js",
          "Node.js / Express",
          "PostgreSQL / MongoDB",
          "REST & GraphQL APIs"
        ],
        deliverables: [
          "Reaktionsfähige, zugängliche Benutzeroberfläche",
          "Authentifizierte Benutzerflüsse",
          "API-Design und -Integration",
          "Bereitstellungsbereite Codebasis",
          "Dokumentation und Übergabe"
        ],
        pricingKey: "startingAt",
        amount: "$2,500",
        noteKey: "perProject"
      },
      {
        id: "ai-integration",
        ctaKey: "discussIdea",
        title: "KI-Workflow-Integration",
        tagline: "Versenden Sie KI-gestützte Funktionen, die tatsächlich funktionieren.",
        description: "Ich integriere LLMs, Sprach-KI und Automatisierungsworkflows in reale Produkte. Entwickelte MetaNotes – einen KI-Notizblock für Besprechungen, der 24.000 US-Dollar pro Jahr einsparte – und KI-gesteuerte Interview-Workflows (Chat, Sprache, Video), die den Aufwand für Interviewer um 40 % reduzierten.",
        stack: [
          "OpenAI / Claude / Whisper",
          "LangChain",
          "Pipedream / n8n",
          "Webhooks & event pipelines",
          "Vector DBs"
        ],
        deliverables: [
          "Umfang und Design der KI-Funktionen",
          "LLM-Prompt-Engineering",
          "Einrichtung der Backend-Pipeline",
          "Frontend AI UX",
          "Kosten- und Latenzoptimierung"
        ],
        pricingKey: "startingAt",
        amount: "$3,000",
        noteKey: "perProject"
      },
      {
        id: "internal-tooling",
        ctaKey: "buildTool",
        title: "Interne Tools und Plugins",
        tagline: "Tools, die Ihr Team tatsächlich verwenden wird.",
        description: "Benutzerdefinierte Entwicklertools, Jira-Plugins, VS-Code-Erweiterungen und Browser-Erweiterungen. Mein Jira-Timesheet-Plugin spart über 9.000 $/Jahr; Meine VS-Code-Erweiterung machte die manuelle Zeiterfassung für ein Ingenieurteam überflüssig.",
        stack: [
          "VS Code Extension API",
          "Jira Forge / Connect",
          "Chrome Extensions",
          "Node.js",
          "Shell scripting"
        ],
        deliverables: [
          "Umfangreiche Anforderungen und Spezifikationen",
          "Funktionierendes Plugin/Erweiterung",
          "Admin-Konfigurationsfenster",
          "Team-Rollout-Unterstützung"
        ],
        pricingKey: "startingAt",
        amount: "$1,500",
        noteKey: "perTool"
      },
      {
        id: "lms-lti",
        ctaKey: "integrateLms",
        title: "LMS/LTI-Integration",
        tagline: "Verbinden Sie Ihre Plattform mit jedem LMS.",
        description: "LTI 1.3-kompatible Plugin-Entwicklung für Moodle, Canvas, Blackboard und mehr. Ich habe das LTI-Plugin von Testlify von Grund auf entwickelt – eine benutzerdefinierte kryptografische Implementierung, die zu einem Wachstum der Unternehmensakzeptanz von 20–30 % führte.",
        stack: [
          "LTI 1.3 / LTI Advantage",
          "Moodle / Canvas / Blackboard",
          "OAuth 2.0 / JWKS",
          "Node.js",
          "Deep Linking & AGS"
        ],
        deliverables: [
          "LTI 1.3-konforme Integration",
          "Deep Linking-Unterstützung",
          "Notenrückgabe (AGS)",
          "Multi-LMS-Kompatibilität",
          "Sicherheit und Token-Handling"
        ],
        pricingKey: "startingAt",
        amount: "$4,000",
        noteKey: "perIntegration"
      },
      {
        id: "performance-audit",
        ctaKey: "auditSite",
        title: "Frontend-Leistungsprüfung",
        tagline: "Schnelle Websites konvertieren. Lassen Sie uns Ihr Problem beheben.",
        description: "Umfassende Lighthouse-, Core Web Vitals- und Bundle-Analyse mit einer priorisierten Fixliste. Ich habe eine Produktionsmarketing-Website von 49/53 → 87/91 auf Mobilgeräten/Desktops verbessert – Verbesserungen, die sich direkt auf SEO und Conversions auswirken.",
        stack: [
          "Lighthouse / PageSpeed",
          "WebPageTest",
          "Chrome DevTools",
          "Next.js / Vite optimisation",
          "Image & font pipeline"
        ],
        deliverables: [
          "Vollständiger Lighthouse-Auditbericht",
          "Priorisierte Problemliste",
          "Bündel- und Asset-Analyse",
          "Konkrete Korrekturen auf Codeebene",
          "Vorher/Nachher-Benchmark"
        ],
        pricingKey: "fixedPrice",
        amount: "$800",
        noteKey: "auditNote"
      },
      {
        id: "cms-jamstack",
        ctaKey: "moderniseSite",
        title: "Headless CMS und Jamstack",
        tagline: "Inhalt zuerst. Launch-optimiert.",
        description: "Migrieren Sie alte Websites auf moderne Jamstack-Stacks oder erstellen Sie neue von Grund auf. Ich habe 7 ältere Websites auf Astro.js + Headless CMS migriert, wodurch die Startzeit für Inhalte um 50 % verkürzt wurde, und 4 CMS-gesteuerte Websites erstellt, die mit dem Datenverkehr skalieren.",
        stack: [
          "Astro.js / Next.js",
          "Directus / Contentful / Sanity",
          "PostgreSQL",
          "Vercel / Netlify",
          "MDX / Contentlayer"
        ],
        deliverables: [
          "CMS-Setup und Schema-Design",
          "Inhaltsmodellierung",
          "Statische Site-Generierung",
          "Editorfreundliches Authoring",
          "CI/CD-Bereitstellungspipeline"
        ],
        pricingKey: "startingAt",
        amount: "$2,000",
        noteKey: "perSite"
      }
    ]
  },
  about: {
    title: "Über mich",
    subtitle: "Ein kleiner Hintergrund darüber, wer ich bin und was ich tue.",
    bio: [
      "Ich bin Paurush Rai – ein Frontend-orientierter Full-Stack-Ingenieur mit Sitz in Indien und fast fünf Jahren Erfahrung in der Architektur von Unternehmens-Webplattformen, KI-gesteuerten Anwendungen und Entwicklerproduktivitätstools. Meine Arbeit umfasst komplexe B2B-Dashboards, robuste LMS-Integrationen, benutzerdefinierte Jira- und VS-Code-Plugins und alles dazwischen.",
      "Ich lege großen Wert auf Leistung, saubere Architektur und den Versand von Dingen, die wirklich wichtig sind. Ganz gleich, ob es darum geht, ein Greenfield-Franchise-Portal von Grund auf aufzubauen, KI-Interview-Workflows in Echtzeit zu entwickeln oder interne Tools zu entwickeln, die dem Unternehmen jährlich Tausende von Dollar einsparen, mein Fokus liegt immer auf der Arbeit, die messbar etwas bewegt.",
      "Außerhalb der Arbeit starte ich normalerweise ein Nebenprojekt, automatisiere einen mühsamen Arbeitsablauf oder greife nach einer Bibliothek, die ich noch nie zuvor berührt habe – ich mag die Reibung, neue Tools in realen Kontexten zu lernen."
    ],
    whatIBuild: "Was ich baue",
    technicalSkills: "Technische Fähigkeiten",
    viewFullStack: "Vollständigen Stack auf StackShare anzeigen",
    workHistory: "Arbeitsgeschichte",
    downloadResume: "Lebenslauf herunterladen",
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
      "Browsererweiterungen"
    ],
    skills: {
      Sprachen: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "Handlebars",
        "MDX"
      ],
      Rahmenwerke: [
        "React.js",
        "Next.js",
        "Vue.js",
        "Nuxt.js",
        "Astro.js",
        "Electron.js",
        "React Native"
      ],
      Bibliotheken: [
        "Tailwind",
        "DaisyUI",
        "Shadcn",
        "Element Plus",
        "Chart.js",
        "Pinia",
        "Recoil",
        "Clerk",
        "Stripe"
      ],
      Datenbank: [
        "PostgreSQL",
        "MongoDB"
      ],
      "Back-End": [
        "Node.js",
        "Express.js",
        "Hasura",
        "Directus",
        "RESTful APIs",
        "GraphQL APIs"
      ],
      Versionskontrolle: [
        "Git",
        "GitLab",
        "GitHub"
      ],
      "Plattformen und Tools": [
        "Docker",
        "Firebase",
        "Datagrip",
        "Pipedream",
        "Vercel",
        "Apify",
        "Figma",
        "AdobeXD"
      ],
      Andere: [
        "Chrome Plugin",
        "VS Code Extension",
        "LTI Plugin",
        "Jira Plugin",
        "CI/CD",
        "Shell Scripting"
      ]
    },
    experience: [
      {
        company: "Testen Sie",
        role: "Leitender Software-Ingenieur",
        location: "Mumbai, Indien",
        period: "Januar 2025 – Heute",
        highlights: [
          "Entwicklung eines LTI-kompatiblen Plugins, das Testlify in die wichtigsten LMS-Plattformen integriert und so zu einem Wachstum der Unternehmensakzeptanz um 20–30 % beiträgt.",
          "Eine private npm-Komponentenbibliothek bereitgestellt, die in über 6 Testlify-Repositorys übernommen wurde, doppelten UI-Code eliminiert und die Feature-Auslieferung um 30 % beschleunigt.",
          "Entwickelte MetaNotes, einen KI-Meeting-Notizierer mit automatischer Aufzeichnung, Transkription und Zusammenfassungen – wodurch jährlich 24.000 US-Dollar eingespart werden.",
          "Leitete die Optimierung der Frontend-Leistung auf der Marketing-Website und steigerte die Lighthouse-Bewertung von 49/53 auf 87/91 auf Mobilgeräten/Desktops.",
          "Entwickelte eine VS-Code-Erweiterung zur automatischen Verfolgung der Codierungszeit durch Git-Zweig und Protokollierung in Jira, wodurch die manuelle Nachverfolgung um 60–70 % reduziert wurde.",
          "Es wurde ein internes Jira-Plugin für Arbeitszeittabellen und Kostenzuordnung erstellt, das jährlich über 9.000 US-Dollar einspart.",
          "Implementierung von KI-gesteuerten Interview-Workflows (Chat, Sprache, Video-KI), wodurch der Aufwand der Interviewer um mehr als 40 % reduziert und ein Umsatzwachstum von 20–30 % erzielt wurde."
        ]
      },
      {
        company: "FuelBuddy",
        role: "Softwareentwickler",
        location: "Gurugram, Indien",
        period: "September 2023 – Dezember 2024",
        highlights: [
          "Von Grund auf ein Kiosk-Anwendungs-Frontend entwickelt, das die Zeit für die Kraftstoffausgabe um 60 % verkürzt.",
          "Entwickelte und skalierte 6 Produktions-Webanwendungen für Kunden, Administratoren, Franchise-Unternehmen und Fahrer.",
          "Entwickelte 8 Admin-Dashboards zur Datenvalidierung und Lösung von Diskrepanzen, wodurch die Lösungszeit um 60–70 % verkürzt wurde.",
          "Betreuung von drei Entwicklern und fünf Praktikanten, Einführung von Code-Review-Praktiken, die die Qualität und die Onboarding-Geschwindigkeit verbesserten.",
          "Über 100 End-to-End-Funktionen auf mehreren Plattformen bereitgestellt.",
          "Integrierte Sentry- und Clarity-Lösungen reduzieren die Problemlösungszeit um 30 % und erhöhen die umsetzbaren Benutzereinblicke um 20 %."
        ]
      },
      {
        company: "Modokosmos",
        role: "Softwareentwickler",
        location: "New York City, USA (Remote)",
        period: "Juli 2021 – Oktober 2023",
        highlights: [
          "Entworfen und gepflegt von 4 CMS-gesteuerten responsiven Websites, die ein nachhaltiges Traffic-Wachstum unterstützen.",
          "Dekonstruiertes Directus CMS und optimiertes Schema-Setup mit PostgreSQL-Abfragen, wodurch die Bootstrapping-Zeit um mehr als 70 % reduziert wird.",
          "Entwickelte ein automatisiertes Wettprojektionssystem mit Google Sheets und Python-Scraping, das die Genauigkeit um 15–20 % verbesserte.",
          "Über 100 wiederverwendbare UI-Komponenten und Designsysteme wurden erstellt, um die Bereitstellung zu beschleunigen.",
          "Modernisierung von 7 älteren Websites durch Migration auf Astro.js Jamstack + Headless CMS, wodurch die Zeit für die Veröffentlichung von Inhalten um 50 % verkürzt wurde."
        ]
      }
    ]
  },
  contact: {
    title: "Kontakt",
    heading: "Kontakt aufnehmen",
    subtitle: "Haben Sie ein Projekt, eine Frage oder möchten Sie einfach Hallo sagen? Schreiben Sie mir eine Nachricht — ich antworte innerhalb eines Tages.",
    form: {
      name: "Name",
      email: "E-Mail",
      message: "Nachricht",
      namePlaceholder: "Max Mustermann",
      emailPlaceholder: "max@firma.de",
      messagePlaceholder: "Erzählen Sie mir von Ihrem Projekt oder was Sie besprechen möchten...",
      submit: "Nachricht senden",
      sending: "Wird gesendet…",
    },
    success: {
      title: "Nachricht gesendet",
      body: "Danke für Ihre Nachricht — ich antworte innerhalb von 24 Stunden.",
      again: "Weitere Nachricht senden",
    },
    error: {
      network: "Netzwerkfehler. Bitte überprüfen Sie Ihre Verbindung.",
      generic: "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.",
    },
    socials: "Oder finden Sie mich auf",
  },
};

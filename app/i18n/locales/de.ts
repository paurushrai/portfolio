import type { Locale } from "./en";

export const de: Locale = {
  nav: {
    about: "Um",
    projects: "Projekte",
    articles: "Artikel",
    services: "Dienstleistungen",
    contact: "Kontakt",
    privacy: "Datenschutz",
  },
  home: {
    tagline: "Senior Product Engineer – Entwicklung von Produkten, Tools und Integrationen, die schnell geliefert werden und lange halten.",
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
    associatedWith: "Assoziiert mit",
    inProgress: "In Arbeit",
    all: "Alle",
    personal: "PersÃ¶nlich"
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
      moderniseSite: "Modernisieren Sie meine Website",
      buildDesktop: "Meine Desktop-App entwickeln",
      buildMobile: "Meine mobile App entwickeln"
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
        id: "desktop-apps",
        ctaKey: "buildDesktop",
        title: "Entwicklung von Desktop-Anwendungen",
        tagline: "Apps mit nativem Gefühl für Mac, Windows & Linux.",
        description: "Plattformübergreifende Desktop-Anwendungen, entwickelt mit Electron und Tauri – eine Codebasis, drei Betriebssysteme. Von Offline-First-Produktivitätstools bis hin zu datenintensiven internen Apps liefere ich signierte, sich automatisch aktualisierende Builds mit nativen Menüs, System-Tray und Betriebssystemintegrationen, die sich auf jeder Plattform wie zu Hause anfühlen.",
        stack: [
          "Electron",
          "Tauri (Rust)",
          "React / TypeScript",
          "Native OS APIs",
          "Auto-update & code signing"
        ],
        deliverables: [
          "Plattformübergreifender Build (Mac/Win/Linux)",
          "Native Menüs & System-Tray",
          "Auto-Update-Pipeline",
          "Codesignierung & Notarisierung",
          "Installer & Distribution"
        ],
        pricingKey: "startingAt",
        amount: "$4,500",
        noteKey: "perProject"
      },
      {
        id: "mobile-apps",
        ctaKey: "buildMobile",
        title: "Entwicklung mobiler Apps",
        tagline: "iOS & Android aus einer einzigen Codebasis.",
        description: "Plattformübergreifende mobile Apps mit React Native und Expo – native Leistung, ohne zwei Codebasen pflegen zu müssen. Ich übernehme den gesamten Weg von der Architektur bis zur Store-Freigabe: Push-Benachrichtigungen, Deep Links, Offline-Synchronisierung und native Geräteintegrationen, ausgeliefert an den App Store und den Play Store.",
        stack: [
          "React Native / Expo",
          "TypeScript",
          "Native modules (iOS/Android)",
          "Push notifications",
          "App Store / Play Store"
        ],
        deliverables: [
          "iOS + Android aus einer Codebasis",
          "Einreichung im App Store & Play Store",
          "Push-Benachrichtigungen & Deep Links",
          "Offline-First-Datensynchronisierung",
          "Native Geräteintegrationen"
        ],
        pricingKey: "startingAt",
        amount: "$4,000",
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
      "Ich bin Paurush Rai – ein Senior Product Engineer mit Sitz in Indien: ein Frontend-Kern mit Full-Stack-Reichweite und 5+ Jahren Erfahrung im Aufbau von Unternehmens-Webplattformen, KI-gesteuerten Anwendungen und Tools zur Entwicklerproduktivität. Meine Arbeit umfasst komplexe B2B-Dashboards, eine 1EdTech-zertifizierte LMS-Integration sowie benutzerdefinierte Jira- und VS-Code-Plugins.",
      "Ich lege großen Wert auf Leistung, saubere Architektur und das Ausliefern von Dingen, die wirklich wichtig sind. Ganz gleich, ob es darum geht, ein Greenfield-Franchise-Portal von Grund auf aufzubauen, KI-Interview-Workflows in Echtzeit zu entwickeln oder interne Tools zu entwickeln, die dem Unternehmen jährlich Tausende von Dollar einsparen – mein Fokus liegt immer auf Arbeit, die messbar etwas bewegt.",
      "Außerhalb der Arbeit starte ich meist ein Nebenprojekt, automatisiere einen mühsamen Arbeitsablauf oder greife nach einer Bibliothek, die ich noch nie zuvor angefasst habe – ich mag die Reibung, neue Tools in realen Kontexten zu erlernen."
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
      Sprachen: ["JavaScript", "TypeScript"],
      Frameworks: ["React.js", "Next.js", "React Native", "Node.js", "Express.js"],
      Frontend: ["Tailwind CSS", "Shadcn", "HTML/CSS", "Vue.js", "Nuxt.js", "Astro.js"],
      Bibliotheken: ["Zod", "Clerk", "Stripe"],
      "KI, Cloud & Automatisierung": ["OpenAI API", "LLM Integration", "MCP", "AWS", "n8n"],
      Daten: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "GraphQL", "REST APIs"],
      Infrastruktur: ["Hasura", "Directus", "Payload", "BullMQ", "WebSocket"],
      Testen: ["Vitest", "Playwright"],
      "DevOps & Monitoring": ["Docker", "GitHub Actions", "Git", "GitHub", "GitLab", "Vercel", "Turborepo", "Sentry"],
      "Erweiterungen & Plugins": ["VS Code Extension", "Chrome Extension", "LTI 1.3 Plugin", "Jira Plugin"]
    },
    experience: [
      {
        company: "Testlify",
        role: "Leitender Software-Ingenieur",
        location: "Mumbai, Indien (Remote)",
        period: "Januar 2025 – Heute",
        highlights: [
          "Entschied mich für eine Jamstack-Architektur anstelle von WordPress für eine Marketing-Website mit über 11.000 Seiten, um durch schnellere Ladezeiten die Absprungrate zu senken und die Inhaltsauslieferung über das CMS zu beschleunigen; voraussichtliche Reduzierung der Seitenladezeiten um 60 %.",
          "Konzipierte und entwickelte eine 1EdTech-zertifizierte LTI 1.3-Integration, die Testlify mit LMS-Plattformen wie Canvas und Moodle verbindet und es Dozenten ermöglicht, Assessments zuzuweisen und Noten zurück in das Notenbuch zu synchronisieren.",
          "Konzipierte das Frontend für einen KI-gestützten Meeting-Notizierer in Zusammenarbeit mit KI-Ingenieuren und Designern und eliminierte damit jährliche Betriebskosten in Höhe von 24.000 US-Dollar.",
          "Lieferte eine unternehmensweit und von externen Kunden genutzte Zeiterfassungsplattform aus, die ein Drittanbieter-Tool ersetzte und jährliche Lizenzkosten von über 9.000 US-Dollar einsparte.",
          "Entwickelte eine teamweite VS-Code-Erweiterung, die Jira-Zeiten aus Git-Branches automatisch in Appforest Timesheets protokolliert und den manuellen Erfassungsaufwand um 70 % reduziert.",
          "Entschied mich für eine zustandslose Komponentenbibliothek anstelle von Duplizierung pro App, um eine konsistente, wiederverwendbare Benutzeroberfläche über eine Suite von 4 Anwendungen hinweg zu gewährleisten; als privates npm-Paket veröffentlicht, wodurch die Feature-Auslieferung um 30 % verkürzt wurde."
        ]
      },
      {
        company: "FuelBuddy",
        role: "Softwareentwickler",
        location: "Gurugram, Indien",
        period: "September 2023 – Dezember 2024",
        highlights: [
          "Entwickelte von Grund auf eine Kiosk-Anwendung gemeinsam mit den Embedded-, Backend- und Ops-Teams und verkürzte die Zeit für die Kraftstoffausgabe um 60 %.",
          "Migrierte eine Progressive Web App zu React Native und erreichte in 8 Wochen 100 % Funktionsparität über 14 Benutzerflüsse hinweg.",
          "Standardisierte TanStack Query über mehrere Produkte hinweg, brachte die Frontend-Teams auf eine einheitliche Server-State-Architektur und reduzierte Fehler durch veraltete Daten um 50 %.",
          "Etablierte Playwright als E2E-Framework des Teams und senkte den manuellen QA-Aufwand um 40 %.",
          "Betreute sieben Entwickler durch Code-Reviews und Pair-Programming und verkürzte die Einarbeitungszeit neuer Mitarbeiter um 25 %."
        ]
      },
      {
        company: "Modocosm",
        role: "Softwareentwickler",
        location: "New York City, USA (Remote)",
        period: "Juli 2021 – August 2023",
        highlights: [
          "Analysierte die Interna von Directus durch Reverse Engineering, um die Bereitstellung von PostgreSQL-Schemata zu optimieren, und verkürzte die Bootstrap-Zeit für neue Projekte um über 70 %.",
          "Entwickelte ein Social-Analytics-Dashboard, das plattformübergreifende Videometriken für einen Nachrichtenmedienkunden konsolidierte und den Reporting-Aufwand um 60 % reduzierte.",
          "Modernisierte 7 ältere Websites mit Astro.js und einem Headless CMS und verdoppelte die Geschwindigkeit der Inhaltsveröffentlichung.",
          "Lieferte und optimierte 4 CMS-gesteuerte responsive Websites, die in Produktion gingen und bis heute live sind."
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

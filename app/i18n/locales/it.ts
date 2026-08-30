import type { Locale } from "./en";

export const it: Locale = {
  nav: {
    about: "Di",
    projects: "Progetti",
    blogs: "Blog",
    services: "Servizi",
    contact: "Contatto",
    privacy: "Privacy",
  },
  home: {
    tagline: {
      role: "Senior Frontend Engineer",
      detail: "crea prodotti, strumenti e integrazioni che vengono spediti velocemente e durano a lungo.",
    },
    openToWork: "Aperto a collaborazioni",
    resume: "Curriculum"
  },
  projects: {
    title: "Progetti",
    subtitle: "Alcuni progetti provengono dal lavoro e altri riguardano il mio tempo libero.",
    readMore: "Per saperne di più",
    empty: "Nessun progetto trovato.",
    independent: "Indipendente",
    personalProject: "Progetto Personale",
    associatedWith: "Associato a",
    inProgress: "In corso",
    all: "Tutti",
    personal: "Personale",
    moreTitle: "Altri progetti",
    viewAll: "Vedi tutto",
  },
  blogs: {
    title: "Blog",
    subtitle: "Note su ingegneria, strumenti e come costruire cose che durano.",
    empty: "Ancora nessun articolo, torna presto.",
    minRead: "min di lettura",
    moreTitle: "Altro dal blog",
    viewAll: "Vedi tutto",
  },
  services: {
    badge: "Disponibile per freelance",
    title: "Servizi",
    intro: "Ogni trimestre svolgo un numero limitato di progetti freelance. Tutto ciò che costruisco è di livello produttivo, performante e spedito con un passaggio pulito. Nessuna agenzia, nessun subappalto: lavori direttamente con me.",
    pricing: {
      startingAt: "A partire da",
      fixedPrice: "Prezzo fisso",
      perProject: "per progetto",
      perTool: "per strumento",
      perIntegration: "per integrazione",
      perSite: "per sito",
      auditNote: "audit + raccomandazioni"
    },
    cta: {
      startProject: "Avvia un progetto",
      discussIdea: "Discuti la tua idea",
      buildTool: "Costruisci il tuo strumento",
      integrateLms: "Integra il tuo LMS",
      auditSite: "Controlla il mio sito",
      moderniseSite: "Modernizza il mio sito",
      buildDesktop: "Crea la mia app desktop",
      buildMobile: "Crea la mia app mobile"
    },
    retainer: {
      label: "Lavoro in corso",
      title: "Acconto mensile",
      description: "Hai bisogno di un tecnico dedicato a disposizione? Offro accordi di fidelizzazione per i team che necessitano di lavoro continuo sulle funzionalità, correzioni di bug o di un partner tecnico, senza il sovraccarico di un'assunzione a tempo pieno.",
      hours: "fino a 40 ore/mese",
      cta: "Parliamo"
    },
    faq: {
      title: "Domande frequenti",
      items: [
        {
          q: "Come posso iniziare?",
          a: "Contattaci via e-mail o LinkedIn con una breve descrizione del tuo progetto. Risponderò entro 24 ore per programmare una chiamata esplorativa di 30 minuti, senza impegno."
        },
        {
          q: "Lavori con clienti internazionali?",
          a: "SÌ. La maggior parte dei miei clienti ha sede negli Stati Uniti, nel Regno Unito e nell'UE. Lavoro prima in modo asincrono con disponibilità per chiamate sovrapposte."
        },
        {
          q: "Qual è la tua sequenza temporale tipica?",
          a: "Piccoli strumenti e audit: 1–2 settimane. App e integrazioni full-stack: 4-10 settimane a seconda dell'ambito. Ti darò un preventivo dettagliato dopo la visita esplorativa."
        },
        {
          q: "Offrite conservi?",
          a: "Sì, per il lavoro in corso offro accordi di trattenuta mensile a partire da $ 2.000 al mese per un massimo di 40 ore."
        }
      ]
    },
    finalCta: {
      text: "Pronto a costruire qualcosa?",
      link: "Mettiti in contatto"
    },
    servicesList: [
      {
        id: "fullstack-web",
        ctaKey: "startProject",
        title: "Sviluppo Web full-stack",
        tagline: "App di livello produttivo, realizzate velocemente.",
        description: "Sviluppo end-to-end di applicazioni web: dall'architettura e dalla progettazione API al frontend raffinato. Ho creato piattaforme SaaS B2B, dashboard multi-tenant e app rivolte ai clienti che servono decine di migliaia di utenti.",
        stack: [
          "React / Next.js",
          "Vue / Nuxt.js",
          "Node.js / Express",
          "PostgreSQL / MongoDB",
          "REST & GraphQL APIs"
        ],
        deliverables: [
          "Interfaccia utente reattiva e accessibile",
          "Flussi di utenti autenticati",
          "Progettazione e integrazione API",
          "Base di codice pronta per la distribuzione",
          "Documentazione e consegna"
        ],
        pricingKey: "startingAt",
        amount: "$2,500",
        noteKey: "perProject"
      },
      {
        id: "ai-integration",
        ctaKey: "discussIdea",
        title: "Integrazione del flusso di lavoro AI",
        tagline: "Fornisci funzionalità basate sull'intelligenza artificiale che funzionano davvero.",
        description: "Integro LLM, intelligenza artificiale vocale e flussi di lavoro di automazione in prodotti reali. Ho creato MetaNotes, un strumento per prendere appunti con intelligenza artificiale che ha risparmiato $ 24.000 all'anno, e flussi di lavoro per interviste basati sull'intelligenza artificiale (chat, voce, video) che hanno ridotto l'impegno dell'intervistatore del 40%.",
        stack: [
          "OpenAI / Claude / Whisper",
          "LangChain",
          "Pipedream / n8n",
          "Webhooks & event pipelines",
          "Vector DBs"
        ],
        deliverables: [
          "Ambito e progettazione delle funzionalità AI",
          "LLM ingegneria tempestiva",
          "Configurazione della pipeline di backend",
          "UX AI frontend",
          "Ottimizzazione dei costi e della latenza"
        ],
        pricingKey: "startingAt",
        amount: "$3,000",
        noteKey: "perProject"
      },
      {
        id: "desktop-apps",
        ctaKey: "buildDesktop",
        title: "Sviluppo di applicazioni desktop",
        tagline: "App dal feeling nativo per Mac, Windows e Linux.",
        description: "Applicazioni desktop multipiattaforma realizzate con Electron e Tauri: un'unica base di codice, tre sistemi operativi. Dagli strumenti di produttività offline-first alle app interne ad alta intensità di dati, spedisco build firmate, con aggiornamento automatico, menu nativi, system tray e integrazioni con il sistema operativo che risultano a proprio agio su ogni piattaforma.",
        stack: [
          "Electron",
          "Tauri (Rust)",
          "React / TypeScript",
          "Native OS APIs",
          "Auto-update & code signing"
        ],
        deliverables: [
          "Build multipiattaforma (Mac/Win/Linux)",
          "Menu nativi e system tray",
          "Pipeline di aggiornamento automatico",
          "Firma del codice e notarizzazione",
          "Installer e distribuzione"
        ],
        pricingKey: "startingAt",
        amount: "$4,500",
        noteKey: "perProject"
      },
      {
        id: "mobile-apps",
        ctaKey: "buildMobile",
        title: "Sviluppo di app mobili",
        tagline: "iOS e Android da un'unica base di codice.",
        description: "App mobili multipiattaforma con React Native ed Expo: prestazioni native senza dover mantenere due basi di codice. Gestisco l'intero percorso dall'architettura all'approvazione sullo store: notifiche push, deep link, sincronizzazione offline e integrazioni native con i dispositivi, spedite sia sull'App Store che sul Play Store.",
        stack: [
          "React Native / Expo",
          "TypeScript",
          "Native modules (iOS/Android)",
          "Push notifications",
          "App Store / Play Store"
        ],
        deliverables: [
          "iOS + Android da un'unica base di codice",
          "Pubblicazione su App Store e Play Store",
          "Notifiche push e deep link",
          "Sincronizzazione dei dati offline-first",
          "Integrazioni native con i dispositivi"
        ],
        pricingKey: "startingAt",
        amount: "$4,000",
        noteKey: "perProject"
      },
      {
        id: "internal-tooling",
        ctaKey: "buildTool",
        title: "Strumenti interni e plugin",
        tagline: "Strumenti che il tuo team utilizzerà effettivamente.",
        description: "Strumenti per sviluppatori personalizzati, plug-in Jira, estensioni VS Code ed estensioni del browser. Il plug-in della scheda attività Jira consente di risparmiare oltre $ 9.000 all'anno; la mia estensione VS Code ha eliminato il monitoraggio manuale del tempo per un team di ingegneri.",
        stack: [
          "VS Code Extension API",
          "Jira Forge / Connect",
          "Chrome Extensions",
          "Node.js",
          "Shell scripting"
        ],
        deliverables: [
          "Requisiti e specifiche di ambito",
          "Plugin/estensione funzionante",
          "Pannello di configurazione dell'amministratore",
          "Supporto al lancio del team"
        ],
        pricingKey: "startingAt",
        amount: "$1,500",
        noteKey: "perTool"
      },
      {
        id: "lms-lti",
        ctaKey: "integrateLms",
        title: "Integrazione LMS/LTI",
        tagline: "Collega la tua piattaforma a qualsiasi LMS.",
        description: "Sviluppo di plug-in conformi a LTI 1.3 per Moodle, Canvas, Blackboard e altro ancora. Ho progettato da zero il plug-in LTI di Testlify, un'implementazione crittografica personalizzata che ha favorito una crescita dell'adozione aziendale del 20-30%.",
        stack: [
          "LTI 1.3 / LTI Advantage",
          "Moodle / Canvas / Blackboard",
          "OAuth 2.0 / JWKS",
          "Node.js",
          "Deep Linking & AGS"
        ],
        deliverables: [
          "Integrazione conforme a LTI 1.3",
          "Supporto per collegamenti profondi",
          "Passaggio del voto (AGS)",
          "Compatibilità multi-LMS",
          "Sicurezza e gestione dei token"
        ],
        pricingKey: "startingAt",
        amount: "$4,000",
        noteKey: "perIntegration"
      },
      {
        id: "performance-audit",
        ctaKey: "auditSite",
        title: "Controllo delle prestazioni del frontend",
        tagline: "I siti veloci convertono. Sistemiamo il tuo.",
        description: "Lighthouse completo, Core Web Vitals e analisi dei bundle con un elenco di correzioni in ordine di priorità. Ho migliorato un sito di marketing di produzione dal 49/53 → 87/91 su dispositivi mobili/desktop: miglioramenti che influiscono direttamente sulla SEO e sulle conversioni.",
        stack: [
          "Lighthouse / PageSpeed",
          "WebPageTest",
          "Chrome DevTools",
          "Next.js / Vite optimisation",
          "Image & font pipeline"
        ],
        deliverables: [
          "Rapporto completo di audit del Faro",
          "Elenco dei problemi prioritari",
          "Analisi di pacchetti e risorse",
          "Correzioni concrete a livello di codice",
          "Punto di riferimento prima/dopo"
        ],
        pricingKey: "fixedPrice",
        amount: "$800",
        noteKey: "auditNote"
      },
      {
        id: "cms-jamstack",
        ctaKey: "moderniseSite",
        title: "CMS senza testa e Jamstack",
        tagline: "Il contenuto prima di tutto. Ottimizzato per il lancio.",
        description: "Migra i siti legacy ai moderni stack Jamstack o creane di nuovi da zero. Ho migrato 7 siti Web legacy su Astro.js + CMS headless, riducendo i tempi di lancio dei contenuti del 50% e creato 4 siti basati su CMS che si adattano al traffico.",
        stack: [
          "Astro.js / Next.js",
          "Directus / Contentful / Sanity",
          "PostgreSQL",
          "Vercel / Netlify",
          "MDX / Contentlayer"
        ],
        deliverables: [
          "Configurazione del CMS e progettazione dello schema",
          "Modellazione dei contenuti",
          "Generazione di siti statici",
          "Authoring intuitivo per l'editor",
          "Pipeline di distribuzione CI/CD"
        ],
        pricingKey: "startingAt",
        amount: "$2,000",
        noteKey: "perSite"
      }
    ]
  },
  about: {
    title: "Su di me",
    subtitle: "Un po’ di storia su chi sono e cosa faccio.",
    bio: [
      "Sono Paurush Rai, un Senior Frontend Engineer con sede in India: un nucleo frontend con estensione full-stack e oltre 5 anni di esperienza nella creazione di piattaforme web aziendali, applicazioni basate sull'AI e strumenti per la produttività degli sviluppatori. Il mio lavoro spazia da dashboard B2B complesse a un'integrazione LMS certificata 1EdTech, fino a plugin Jira e VS Code personalizzati.",
      "Mi preoccupo profondamente delle prestazioni, dell'architettura pulita e del rilascio di cose che contano davvero. Che si tratti di costruire da zero un portale di franchising greenfield, di progettare flussi di lavoro per interviste con AI in tempo reale o di sviluppare strumenti interni che fanno risparmiare all'azienda migliaia di dollari all'anno, la mia attenzione è sempre rivolta al lavoro che sposta l'ago in modo misurabile.",
      "Al di fuori del lavoro di solito avvio un progetto parallelo, automatizzo un flusso di lavoro noioso o metto mano a una libreria che non ho mai toccato prima: mi piace la difficoltà di imparare nuovi strumenti in contesti reali."
    ],
    whatIBuild: "Quello che costruisco",
    technicalSkills: "Competenze tecniche",
    viewFullStack: "Visualizza lo stack completo su StackShare",
    workHistory: "Storia del lavoro",
    downloadResume: "Scarica il curriculum",
    buildItems: [
      "Piattaforme B2B aziendali",
      "Applicazioni e flussi di lavoro AI",
      "Dashboard di amministrazione e franchising",
      "Integrazioni LMS/LTI",
      "CMS senza testa e Jamstack",
      "Strumenti per sviluppatori interni",
      "Plugin VS Code e Jira",
      "Pipeline di dati e automazione",
      "Librerie di componenti personalizzati",
      "App Web progressive",
      "Estensioni del browser"
    ],
    skills: {
      Linguaggi: ["JavaScript", "TypeScript"],
      Framework: ["React.js", "Next.js", "React Native", "Node.js", "Express.js"],
      Frontend: ["Tailwind CSS", "Shadcn", "HTML/CSS", "Vue.js", "Nuxt.js", "Astro.js"],
      Librerie: ["Zod", "Clerk", "Stripe"],
      "IA, Cloud e automazione": ["OpenAI API", "LLM Integration", "MCP", "AWS", "n8n"],
      Dati: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "GraphQL", "REST APIs"],
      Infrastruttura: ["Hasura", "Directus", "Payload", "BullMQ", "WebSocket"],
      Test: ["Vitest", "Playwright"],
      "DevOps e monitoraggio": [
        "Docker",
        "GitHub Actions",
        "Git",
        "GitHub",
        "GitLab",
        "Vercel",
        "Turborepo",
        "Sentry"
      ],
      "Estensioni e plugin": ["VS Code Extension", "Chrome Extension", "LTI 1.3 Plugin", "Jira Plugin"]
    },
    experience: [
      {
        company: "Testlify",
        role: "Ingegnere Frontend Senior",
        location: "Mumbai, India (Remoto)",
        period: "Gennaio 2025 – Presente",
        highlights: [
          "Ho guidato la decisione architetturale di sostituire WordPress con Jamstack per un sito di marketing con oltre 11.000 pagine, con l'obiettivo di ridurre i tempi di caricamento delle pagine e le frequenze di rimbalzo grazie a una distribuzione dei contenuti più rapida.",
          "Ho progettato e realizzato un'integrazione LTI 1.3 certificata 1EdTech che collega Testlify a piattaforme LMS come Canvas e Moodle, consentendo ai docenti di assegnare valutazioni e sincronizzare i voti nel registro.",
          "Ho progettato il frontend di uno strumento per prendere appunti nelle riunioni basato sull'AI in collaborazione con ingegneri AI e designer, eliminando 24.000 $ di costi operativi annuali.",
          "Ho rilasciato una piattaforma di schede attività usata in tutta l'azienda e dai clienti esterni, sostituendo uno strumento di terze parti e tagliando oltre 9.000 $ di costi di licenza annuali.",
          "Ho sviluppato un'estensione VS Code che automatizza la registrazione delle ore in Appforest rilevando i ticket Jira dal contesto dei rami Git, riducendo l'impegno di monitoraggio manuale.",
          "Ho introdotto una libreria di componenti stateless condivisa tra 4 applicazioni, pubblicata come pacchetto npm privato, eliminando la duplicazione dell'interfaccia utente per singola app."
        ]
      },
      {
        company: "FuelBuddy",
        role: "Ingegnere Frontend",
        location: "Gurugram, India",
        period: "Settembre 2023 – Dicembre 2024",
        highlights: [
          "Ho sviluppato da zero un'app per chiosco per il nuovo hardware di erogazione carburante, implementata su oltre 50 autocisterne che gestiscono più di 1.000 transazioni giornaliere tramite dati IoT in tempo reale, automatizzando i calcoli di consegna e la fatturazione.",
          "Ho migrato una Progressive Web App a React Native, raggiungendo il 100% di parità funzionale su 14 flussi utente in 8 settimane.",
          "Ho standardizzato TanStack Query su 5 prodotti, allineando 4 team frontend su un'architettura unificata dello stato lato server ed eliminando i difetti da dati obsoleti.",
          "Ho introdotto Vitest per i test unitari e Playwright per i test E2E, automatizzando oltre 16.000 casi di test e riducendo l'impegno di QA manuale per ogni rilascio.",
          "Ho fatto da mentore a 8 ingegneri tramite revisione del codice, pair programming e supporto all'onboarding, favorendo un inserimento più rapido e standard di codice più elevati in tutto il team."
        ]
      },
      {
        company: "Modocosm",
        role: "Ingegnere Frontend",
        location: "New York City, Stati Uniti (Remoto)",
        period: "Luglio 2021 – Agosto 2023",
        highlights: [
          "Ho decodificato il comportamento di scrittura dello schema di Directus e sostituito la configurazione manuale della UI con script SQL, riducendo la configurazione dello schema da 3 ore a 5 minuti.",
          "Ho sviluppato una dashboard di analisi social che automatizza il monitoraggio delle prestazioni video multipiattaforma per un cliente dei media, eliminando oltre 15 report manuali settimanali su fogli di calcolo.",
          "Ho modernizzato 7 siti web legacy con Astro.js e Directus CMS, raddoppiando la velocità di pubblicazione dei contenuti.",
          "Ho consegnato e ottimizzato 4 siti web reattivi basati su CMS che sono andati in produzione e sono ancora online oggi."
        ]
      }
    ]
  },
  contact: {
    title: "Contatto",
    heading: "Contattami",
    subtitle: "Hai un progetto in mente, una domanda o vuoi semplicemente salutare? Mandami un messaggio e ti risponderò entro un giorno.",
    form: {
      name: "Nome",
      email: "Email",
      message: "Messaggio",
      namePlaceholder: "Mario Rossi",
      emailPlaceholder: "mario@azienda.it",
      messagePlaceholder: "Parlami del tuo progetto o di cosa vorresti discutere...",
      submit: "Invia messaggio",
      sending: "Invio in corso…",
    },
    success: {
      title: "Messaggio inviato",
      body: "Grazie per avermi contattato, risponderò alla tua email entro 24 ore.",
      again: "Invia un altro messaggio",
    },
    error: {
      network: "Errore di rete. Controlla la tua connessione.",
      generic: "Qualcosa è andato storto. Riprova.",
    },
    socials: "O trovami su",
  },
};

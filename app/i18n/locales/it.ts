import type { Locale } from "./en";

export const it: Locale = {
  nav: {
    about: "Di",
    projects: "Progetti",
    articles: "Articoli",
    services: "Servizi",
    contact: "Contatto"
  },
  home: {
    tagline: "Senior Software Engineer: crea prodotti, strumenti e integrazioni che vengono spediti velocemente e durano a lungo.",
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
    associatedWith: "Associato a"
  },
  articles: {
    title: "Articoli",
    subtitle:
      "Riflessioni su ingegneria, strumenti e creazione di prodotti — pubblicate su Medium.",
    viewAll: "Vedi tutto su Medium",
    empty: "Ancora nessun articolo — torna presto.",
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
        description: "Applicazioni desktop multipiattaforma realizzate con Electron e Tauri — un'unica base di codice, tre sistemi operativi. Dagli strumenti di produttività offline-first alle app interne ad alta intensità di dati, spedisco build firmate, con aggiornamento automatico, menu nativi, system tray e integrazioni con il sistema operativo che risultano a proprio agio su ogni piattaforma.",
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
        description: "App mobili multipiattaforma con React Native ed Expo — prestazioni native senza dover mantenere due basi di codice. Gestisco l'intero percorso dall'architettura all'approvazione sullo store: notifiche push, deep link, sincronizzazione offline e integrazioni native con i dispositivi, spedite sia sull'App Store che sul Play Store.",
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
      "Sono Paurush Rai, un ingegnere full-stack con orientamento frontend con sede in India, con quasi 5 anni di esperienza nell'architettura di piattaforme web aziendali, applicazioni basate sull'intelligenza artificiale e strumenti di produttività degli sviluppatori. Il mio lavoro spazia da dashboard B2B complesse, solide integrazioni LMS, plug-in Jira e VS Code personalizzati e tutto il resto.",
      "Mi preoccupo profondamente delle prestazioni, dell'architettura pulita e della spedizione di cose che contano davvero. Che si tratti di costruire da zero un portale di franchising greenfield, di progettare flussi di lavoro per interviste con intelligenza artificiale in tempo reale o di sviluppare strumenti interni che facciano risparmiare all'azienda migliaia di dollari all'anno, la mia attenzione è sempre sul lavoro che sposta l'ago in modo misurabile.",
      "Al di fuori del lavoro di solito avvio un progetto parallelo, automatizzo un flusso di lavoro noioso o cerco una libreria che non ho mai toccato prima: mi piace la difficoltà di apprendere nuovi strumenti in contesti reali."
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
      Lingue: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "Handlebars",
        "MDX"
      ],
      Quadri: [
        "React.js",
        "Next.js",
        "Vue.js",
        "Nuxt.js",
        "Astro.js",
        "Electron.js",
        "React Native"
      ],
      Biblioteche: [
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
      "Banca dati": [
        "PostgreSQL",
        "MongoDB"
      ],
      "Fine posteriore": [
        "Node.js",
        "Express.js",
        "Hasura",
        "Directus",
        "RESTful APIs",
        "GraphQL APIs"
      ],
      "Controllo della versione": [
        "Git",
        "GitLab",
        "GitHub"
      ],
      "Piattaforme e strumenti": [
        "Docker",
        "Firebase",
        "Datagrip",
        "Pipedream",
        "Vercel",
        "Apify",
        "Figma",
        "AdobeXD"
      ],
      Altra: [
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
        company: "Testimonia",
        role: "Ingegnere informatico senior",
        location: "Bombay, India",
        period: "Gennaio 2025 – Presente",
        highlights: [
          "Progettato un plug-in conforme a LTI che integra Testlify con le principali piattaforme LMS, contribuendo a una crescita del 20-30% nell'adozione aziendale.",
          "Distribuito una libreria privata di componenti npm adottata in oltre 6 repository di Testlify, eliminando il codice UI duplicato e accelerando il rilascio delle funzionalità del 30%.",
          "Crea MetaNotes, un strumento per prendere appunti per riunioni basato su intelligenza artificiale con registrazione, trascrizione e riepiloghi automatizzati, risparmiando $ 24.000 all'anno.",
          "Ho guidato l'ottimizzazione delle prestazioni del frontend sul sito di marketing, aumentando i punteggi Lighthouse da 49/53 a 87/91 su dispositivi mobili/desktop.",
          "Progettata un'estensione VS Code per monitorare automaticamente il tempo di codifica tramite il ramo Git e accedere a Jira, riducendo il monitoraggio manuale del 60-70%.",
          "Creato un plug-in Jira interno per schede attività e allocazione dei costi, risparmiando oltre $ 9.000 all'anno.",
          "Implementazione di flussi di lavoro per interviste basati sull'intelligenza artificiale (chat, voce, video AI), riducendo lo sforzo dell'intervistatore di oltre il 40% e favorendo una crescita dei ricavi del 20-30%."
        ]
      },
      {
        company: "FuelBuddy",
        role: "Ingegnere del software",
        location: "Gurugram, India",
        period: "Settembre 2023 – dicembre 2024",
        highlights: [
          "Costruito da zero un frontend per l'applicazione kiosk, riducendo i tempi di erogazione del carburante del 60%.",
          "Ho sviluppato e adattato 6 applicazioni Web di produzione per clienti, amministratori, franchising e autisti.",
          "Progettato 8 dashboard di amministrazione per la convalida dei dati e la risoluzione delle discrepanze, riducendo i tempi di risoluzione del 60-70%.",
          "Ho fatto da mentore a 3 sviluppatori e 5 stagisti, stabilendo pratiche di revisione del codice che hanno migliorato la qualità e la velocità di onboarding.",
          "Fornite oltre 100 funzionalità end-to-end su più piattaforme.",
          "Sentry e Clarity integrati, riducono i tempi di risoluzione dei problemi del 30% e aumentano le informazioni utili sugli utenti del 20%."
        ]
      },
      {
        company: "Modocosmo",
        role: "Ingegnere del software",
        location: "New York City, Stati Uniti (remoto)",
        period: "Luglio 2021 – ottobre 2023",
        highlights: [
          "Progettazione e manutenzione di 4 siti Web reattivi basati su CMS che supportano una crescita sostenuta del traffico.",
          "CMS Directus decostruito e configurazione semplificata dello schema con query PostgreSQL, riducendo i tempi di bootstrap di oltre il 70%.",
          "Ho progettato un sistema di proiezione automatizzata delle scommesse utilizzando Fogli Google e scraping Python, migliorando la precisione del 15-20%.",
          "Creato oltre 100 componenti dell'interfaccia utente e sistemi di progettazione riutilizzabili, accelerando la consegna.",
          "Modernizzato 7 siti Web legacy migrando su Astro.js Jamstack + CMS headless, riducendo i tempi di lancio dei contenuti del 50%."
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
      body: "Grazie per avermi contattato — risponderò alla tua email entro 24 ore.",
      again: "Invia un altro messaggio",
    },
    error: {
      network: "Errore di rete. Controlla la tua connessione.",
      generic: "Qualcosa è andato storto. Riprova.",
    },
    socials: "O trovami su",
  },
};

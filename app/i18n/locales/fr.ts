import type { Locale } from "./en";

export const fr: Locale = {
  nav: {
    about: "À propos",
    projects: "Projets",
    articles: "Articles",
    services: "Services",
    contact: "Contact"
  },
  home: {
    tagline: "Ingénieur produit senior – créer des produits, des outils et des intégrations qui sont livrés rapidement et durent longtemps.",
    openToWork: "Ouvert à la collaboration",
    resume: "CV"
  },
  projects: {
    title: "Projets",
    subtitle: "Certains projets sont réalisés dans le cadre du travail et d'autres pendant mon temps libre.",
    readMore: "En savoir plus",
    empty: "Aucun projet trouvé.",
    independent: "Indépendante",
    personalProject: "Projet Personnel",
    associatedWith: "Associé à",
    inProgress: "En cours",
    all: "Tous",
    personal: "Personnel"
  },
  articles: {
    title: "Articles",
    subtitle:
      "Réflexions sur l'ingénierie, les outils et la création de produits — publiées sur Medium.",
    viewAll: "Voir tout sur Medium",
    empty: "Pas encore d'articles — revenez bientôt.",
  },
  services: {
    badge: "Disponible en freelance",
    title: "Services",
    intro: "Je prends en charge un nombre limité de projets indépendants chaque trimestre. Tout ce que je construis est de qualité production, performant et livré avec un transfert propre. Pas d'agence, pas de sous-traitance, vous travaillez directement avec moi.",
    pricing: {
      startingAt: "À partir de",
      fixedPrice: "Prix ​​fixe",
      perProject: "par projet",
      perTool: "par outil",
      perIntegration: "par intégration",
      perSite: "par site",
      auditNote: "audit + recommandations"
    },
    cta: {
      startProject: "Démarrer un projet",
      discussIdea: "Discutez de votre idée",
      buildTool: "Construisez votre outil",
      integrateLms: "Intégrez votre LMS",
      auditSite: "Auditer mon site",
      moderniseSite: "Moderniser mon site",
      buildDesktop: "Développer mon application de bureau",
      buildMobile: "Développer mon application mobile"
    },
    retainer: {
      label: "Travaux en cours",
      title: "Rémunération mensuelle",
      description: "Besoin d'un ingénieur dédié de garde ? Je propose des modalités de rétention pour les équipes qui ont besoin d'un travail continu sur les fonctionnalités, de corrections de bugs ou d'un partenaire technique, sans les frais généraux d'une embauche à temps plein.",
      hours: "jusqu'à 40 heures/mois",
      cta: "Parlons"
    },
    faq: {
      title: "FAQ",
      items: [
        {
          q: "Comment puis-je commencer ?",
          a: "Contactez-nous par e-mail ou LinkedIn avec une brève description de votre projet. Je vous répondrai dans les 24 heures pour planifier un appel de cadrage de 30 minutes – aucun engagement n'est requis."
        },
        {
          q: "Travaillez-vous avec des clients internationaux ?",
          a: "Oui. La plupart de mes clients sont basés aux États-Unis, au Royaume-Uni et dans l'UE. Je travaille d'abord de manière asynchrone avec une disponibilité pour les appels qui se chevauchent."
        },
        {
          q: "Quel est votre calendrier habituel ?",
          a: "Petits outils et audits : 1 à 2 semaines. Applications et intégrations full-stack : 4 à 10 semaines selon la portée. Je vous donnerai une estimation détaillée après l'appel de cadrage."
        },
        {
          q: "Proposez-vous des mandats ?",
          a: "Oui, pour un travail en cours, je propose des forfaits mensuels à partir de 2 000 $/mois pour un maximum de 40 heures."
        }
      ]
    },
    finalCta: {
      text: "Prêt à construire quelque chose ?",
      link: "Entrer en contact"
    },
    servicesList: [
      {
        id: "fullstack-web",
        ctaKey: "startProject",
        title: "Développement Web Full-Stack",
        tagline: "Des applications de qualité production, créées rapidement.",
        description: "Développement de bout en bout d'applications Web, depuis l'architecture et la conception d'API jusqu'à l'interface améliorée. J'ai créé des plates-formes SaaS B2B, des tableaux de bord multi-locataires et des applications destinées aux clients qui servent des dizaines de milliers d'utilisateurs.",
        stack: [
          "React / Next.js",
          "Vue / Nuxt.js",
          "Node.js / Express",
          "PostgreSQL / MongoDB",
          "REST & GraphQL APIs"
        ],
        deliverables: [
          "Interface utilisateur réactive et accessible",
          "Flux d'utilisateurs authentifiés",
          "Conception et intégration d'API",
          "Base de code prête au déploiement",
          "Documentation et transfert"
        ],
        pricingKey: "startingAt",
        amount: "$2,500",
        noteKey: "perProject"
      },
      {
        id: "ai-integration",
        ctaKey: "discussIdea",
        title: "Intégration du flux de travail IA",
        tagline: "Fournissez des fonctionnalités basées sur l’IA qui fonctionnent réellement.",
        description: "J'intègre les LLM, l'IA vocale et les workflows d'automatisation dans des produits réels. Création de MetaNotes – un outil de prise de notes de réunion IA qui a permis d'économiser 24 000 $/an – et de flux de travail d'entretien basés sur l'IA (chat, voix, vidéo) qui ont réduit les efforts de l'intervieweur de 40 %.",
        stack: [
          "OpenAI / Claude / Whisper",
          "LangChain",
          "Pipedream / n8n",
          "Webhooks & event pipelines",
          "Vector DBs"
        ],
        deliverables: [
          "Cadrage et conception des fonctionnalités d'IA",
          "Ingénierie rapide LLM",
          "Configuration du pipeline back-end",
          "UX front-end IA",
          "Optimisation des coûts et de la latence"
        ],
        pricingKey: "startingAt",
        amount: "$3,000",
        noteKey: "perProject"
      },
      {
        id: "desktop-apps",
        ctaKey: "buildDesktop",
        title: "Développement d'applications de bureau",
        tagline: "Des applications au ressenti natif pour Mac, Windows et Linux.",
        description: "Des applications de bureau multiplateformes conçues avec Electron et Tauri — une seule base de code, trois systèmes d'exploitation. Des outils de productivité en mode hors ligne d'abord aux applications internes gourmandes en données, je livre des builds signés et à mise à jour automatique, avec menus natifs, barre d'état système et intégrations à l'OS qui se sentent chez elles sur chaque plateforme.",
        stack: [
          "Electron",
          "Tauri (Rust)",
          "React / TypeScript",
          "Native OS APIs",
          "Auto-update & code signing"
        ],
        deliverables: [
          "Build multiplateforme (Mac/Win/Linux)",
          "Menus natifs et barre d'état système",
          "Pipeline de mise à jour automatique",
          "Signature de code et notarisation",
          "Installateur et distribution"
        ],
        pricingKey: "startingAt",
        amount: "$4,500",
        noteKey: "perProject"
      },
      {
        id: "mobile-apps",
        ctaKey: "buildMobile",
        title: "Développement d'applications mobiles",
        tagline: "iOS et Android à partir d'une seule base de code.",
        description: "Des applications mobiles multiplateformes avec React Native et Expo — des performances natives sans maintenir deux bases de code. Je gère l'ensemble du parcours, de l'architecture à la validation sur les stores : notifications push, deep links, synchronisation hors ligne et intégrations natives aux appareils, livrées sur l'App Store et le Play Store.",
        stack: [
          "React Native / Expo",
          "TypeScript",
          "Native modules (iOS/Android)",
          "Push notifications",
          "App Store / Play Store"
        ],
        deliverables: [
          "iOS + Android à partir d'une seule base de code",
          "Soumission à l'App Store et au Play Store",
          "Notifications push et deep links",
          "Synchronisation des données hors ligne d'abord",
          "Intégrations natives aux appareils"
        ],
        pricingKey: "startingAt",
        amount: "$4,000",
        noteKey: "perProject"
      },
      {
        id: "internal-tooling",
        ctaKey: "buildTool",
        title: "Outils et plugins internes",
        tagline: "Outils que votre équipe utilisera réellement.",
        description: "Outils de développement personnalisés, plugins Jira, extensions VS Code et extensions de navigateur. Mon plugin de feuille de temps Jira permet d'économiser plus de 9 000 $/an ; mon extension VS Code a éliminé le suivi manuel du temps pour une équipe d'ingénierie.",
        stack: [
          "VS Code Extension API",
          "Jira Forge / Connect",
          "Chrome Extensions",
          "Node.js",
          "Shell scripting"
        ],
        deliverables: [
          "Exigences et spécifications étendues",
          "Plugin/extension fonctionnel",
          "Panneau de configuration de l'administrateur",
          "Prise en charge du déploiement en équipe"
        ],
        pricingKey: "startingAt",
        amount: "$1,500",
        noteKey: "perTool"
      },
      {
        id: "lms-lti",
        ctaKey: "integrateLms",
        title: "Intégration LMS/LTI",
        tagline: "Connectez votre plateforme à n'importe quel LMS.",
        description: "Développement de plugins compatibles LTI 1.3 pour Moodle, Canvas, Blackboard et au-delà. J'ai conçu le plugin LTI de Testlify à partir de zéro, une implémentation cryptographique personnalisée qui a entraîné une croissance de 20 à 30 % de l'adoption par les entreprises.",
        stack: [
          "LTI 1.3 / LTI Advantage",
          "Moodle / Canvas / Blackboard",
          "OAuth 2.0 / JWKS",
          "Node.js",
          "Deep Linking & AGS"
        ],
        deliverables: [
          "Intégration conforme LTI 1.3",
          "Prise en charge des liens profonds",
          "Passback de note (AGS)",
          "Compatibilité multi-LMS",
          "Sécurité et gestion des jetons"
        ],
        pricingKey: "startingAt",
        amount: "$4,000",
        noteKey: "perIntegration"
      },
      {
        id: "performance-audit",
        ctaKey: "auditSite",
        title: "Audit de performance front-end",
        tagline: "Conversion rapide des sites. Réparons le vôtre.",
        description: "Lighthouse complet, Core Web Vitals et analyse groupée avec une liste de correctifs prioritaires. J'ai fait passer un site de marketing de production de 49/53 → 87/91 sur mobile/ordinateur de bureau – des améliorations qui ont un impact direct sur le référencement et les conversions.",
        stack: [
          "Lighthouse / PageSpeed",
          "WebPageTest",
          "Chrome DevTools",
          "Next.js / Vite optimisation",
          "Image & font pipeline"
        ],
        deliverables: [
          "Rapport d'audit complet de Lighthouse",
          "Liste des problèmes prioritaires",
          "Analyse des offres groupées et des actifs",
          "Correctifs concrets au niveau du code",
          "Benchmark avant/après"
        ],
        pricingKey: "fixedPrice",
        amount: "$800",
        noteKey: "auditNote"
      },
      {
        id: "cms-jamstack",
        ctaKey: "moderniseSite",
        title: "CMS et Jamstack sans tête",
        tagline: "Le contenu d’abord. Optimisé pour le lancement.",
        description: "Migrez les anciens sites vers des piles Jamstack modernes ou créez-en de nouveaux à partir de zéro. J'ai migré 7 sites Web existants vers Astro.js + CMS sans tête, réduisant le temps de lancement du contenu de 50 %, et créé 4 sites basés sur CMS qui évoluent avec le trafic.",
        stack: [
          "Astro.js / Next.js",
          "Directus / Contentful / Sanity",
          "PostgreSQL",
          "Vercel / Netlify",
          "MDX / Contentlayer"
        ],
        deliverables: [
          "Configuration du CMS et conception de schéma",
          "Modélisation de contenu",
          "Génération de sites statiques",
          "Création conviviale pour l'éditeur",
          "Pipeline de déploiement CI/CD"
        ],
        pricingKey: "startingAt",
        amount: "$2,000",
        noteKey: "perSite"
      }
    ]
  },
  about: {
    title: "Sur moi",
    subtitle: "Un petit aperçu de qui je suis et de ce que je fais.",
    bio: [
      "Je m'appelle Paurush Rai — un Senior Product Engineer basé en Inde : un socle front-end doublé d'une portée full-stack, et plus de 5 ans passés à construire des plates-formes web d'entreprise, des applications pilotées par l'IA et des outils de productivité pour les développeurs. Mon travail couvre des tableaux de bord B2B complexes, une intégration LMS certifiée 1EdTech, ainsi que des plugins Jira et VS Code sur mesure.",
      "J'accorde une grande importance à la performance, à une architecture propre et à la livraison de choses qui comptent réellement. Qu'il s'agisse de créer un portail de franchise de toutes pièces, de concevoir des flux de travail d'entretien IA en temps réel ou de développer des outils internes qui font économiser à l'entreprise des milliers de dollars par an, je me concentre toujours sur un travail qui fait bouger les lignes de façon mesurable.",
      "En dehors du travail, je suis généralement en train de lancer un projet parallèle, d'automatiser un flux de travail fastidieux ou d'essayer une bibliothèque à laquelle je n'avais jamais touché — j'aime la friction de l'apprentissage de nouveaux outils dans des contextes réels."
    ],
    whatIBuild: "Ce que je construis",
    technicalSkills: "Compétences techniques",
    viewFullStack: "Afficher la pile complète sur StackShare",
    workHistory: "Historique de travail",
    downloadResume: "Télécharger le CV",
    buildItems: [
      "Plateformes B2B d'entreprise",
      "Applications et flux de travail d'IA",
      "Tableaux de bord d'administration et de franchise",
      "Intégrations LMS/LTI",
      "CMS et Jamstack sans tête",
      "Outils de développement internes",
      "Plugins VSCode et Jira",
      "Pipelines de données et automatisation",
      "Bibliothèques de composants personnalisés",
      "Applications Web progressives",
      "Extensions de navigateur"
    ],
    skills: {
      Langues: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "Handlebars",
        "MDX"
      ],
      Cadres: [
        "React.js",
        "Next.js",
        "Vue.js",
        "Nuxt.js",
        "Astro.js",
        "Electron.js",
        "React Native"
      ],
      "Bibliothèques": [
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
      "Base de données": [
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
      "Contrôle des versions": [
        "Git",
        "GitLab",
        "GitHub"
      ],
      "Plateformes et outils": [
        "Docker",
        "Firebase",
        "Datagrip",
        "Pipedream",
        "Vercel",
        "Apify",
        "Figma",
        "AdobeXD"
      ],
      Autre: [
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
        company: "Testlify",
        role: "Ingénieur logiciel senior",
        location: "Bombay, Inde (à distance)",
        period: "Janvier 2025 – Aujourd’hui",
        highlights: [
          "Choix d'une architecture Jamstack plutôt que WordPress pour un site marketing de plus de 11 000 pages afin de réduire les taux de rebond grâce à des chargements plus rapides et d'accélérer la diffusion du contenu via le CMS ; réduction projetée de 60 % des temps de chargement des pages.",
          "Conception et développement d'une intégration LTI 1.3 certifiée 1EdTech reliant Testlify à des plates-formes LMS comme Canvas et Moodle, permettant aux formateurs d'attribuer des évaluations et de synchroniser les notes vers le carnet de notes.",
          "Conception de l'architecture frontend d'un outil de prise de notes de réunion propulsé par l'IA, en collaboration avec des ingénieurs IA et des designers, éliminant 24 000 $ de coûts opérationnels annuels.",
          "Livraison d'une plate-forme de feuilles de temps utilisée dans toute l'entreprise et par des clients externes, remplaçant un outil tiers et réduisant de plus de 9 000 $ les coûts de licence annuels.",
          "Développement d'une extension VS Code à l'échelle de l'équipe qui enregistre automatiquement le temps Jira à partir des branches Git dans Appforest Timesheets, réduisant de 70 % l'effort de suivi manuel.",
          "Décision d'opter pour une bibliothèque de composants sans état plutôt que la duplication par application afin d'obtenir une UI cohérente et réutilisable sur une suite de 4 applications ; publiée en tant que package npm privé, raccourcissant la livraison des fonctionnalités de 30 %."
        ]
      },
      {
        company: "FuelBuddy",
        role: "Ingénieur logiciel",
        location: "Gurugram, Inde",
        period: "Septembre 2023 – décembre 2024",
        highlights: [
          "Création d'une application de kiosque de toutes pièces avec les équipes embarquée, back-end et opérations, réduisant le temps de distribution de carburant de 60 %.",
          "Migration d'une application Web progressive vers React Native, atteignant 100 % de parité fonctionnelle sur 14 flux utilisateur en 8 semaines.",
          "Standardisation de TanStack Query sur plusieurs produits, alignant les équipes frontend sur une architecture d'état serveur unifiée et réduisant de 50 % les défauts liés aux données obsolètes.",
          "Établissement de Playwright comme framework E2E de l'équipe, réduisant l'effort de QA manuelle de 40 %.",
          "Encadrement de sept ingénieurs par la revue de code et le pair programming, réduisant de 25 % le temps de montée en compétence des nouvelles recrues."
        ]
      },
      {
        company: "Modocosm",
        role: "Ingénieur logiciel",
        location: "New York, États-Unis (à distance)",
        period: "Juillet 2021 – août 2023",
        highlights: [
          "Rétro-ingénierie des rouages internes de Directus pour rationaliser le provisionnement de schémas PostgreSQL, réduisant de plus de 70 % le temps d'amorçage des nouveaux projets.",
          "Développement d'un tableau de bord d'analyse sociale consolidant les métriques vidéo multi-plateformes pour un client de médias d'information, réduisant l'effort de reporting de 60 %.",
          "Modernisation de 7 sites Web existants avec Astro.js et un CMS sans tête, doublant la vitesse de publication du contenu.",
          "Livraison et optimisation de 4 sites Web réactifs basés sur un CMS, mis en production et toujours en ligne aujourd'hui."
        ]
      }
    ]
  },
  contact: {
    title: "Contact",
    heading: "Prendre contact",
    subtitle: "Vous avez un projet en tête, une question ou vous souhaitez simplement dire bonjour ? Envoyez-moi un message, je vous répondrai dans la journée.",
    form: {
      name: "Nom",
      email: "E-mail",
      message: "Message",
      namePlaceholder: "Jean Dupont",
      emailPlaceholder: "jean@entreprise.fr",
      messagePlaceholder: "Parlez-moi de votre projet ou de ce que vous souhaitez discuter...",
      submit: "Envoyer le message",
      sending: "Envoi en cours…",
    },
    success: {
      title: "Message envoyé",
      body: "Merci de m'avoir contacté — je vous répondrai par e-mail dans les 24 heures.",
      again: "Envoyer un autre message",
    },
    error: {
      network: "Erreur réseau. Veuillez vérifier votre connexion.",
      generic: "Une erreur s'est produite. Veuillez réessayer.",
    },
    socials: "Ou retrouvez-moi sur",
  },
};

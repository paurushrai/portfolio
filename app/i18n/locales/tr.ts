import type { Locale } from "./en";

export const tr: Locale = {
  nav: {
    about: "Hakkında",
    projects: "Projeler",
    blogs: "Blog",
    services: "Hizmetler",
    contact: "Temas etmek",
    privacy: "Gizlilik",
  },
  home: {
    tagline: {
      role: "Kıdemli Frontend Mühendisi",
      detail: "hızlı gönderilen ve uzun süre dayanan ürünler, araçlar ve entegrasyonlar oluşturur.",
    },
    openToWork: "İşbirliğine açık",
    resume: "Özgeçmiş"
  },
  projects: {
    title: "Projeler",
    subtitle: "Projelerin bir kısmı işten, bir kısmı da kendi zamanıma ait.",
    readMore: "Devamını oku",
    empty: "Hiçbir proje bulunamadı.",
    independent: "Bağımsız",
    personalProject: "Kişisel Proje",
    associatedWith: "İlişkili",
    inProgress: "Devam ediyor",
    all: "Tümü",
    personal: "Kişisel",
    moreTitle: "Diğer projeler"
  },
  blogs: {
    title: "Blog",
    subtitle: "Mühendislik, araçlar ve kalıcı şeyler inşa etmek üzerine notlar.",
    empty: "Henüz yazı yok — yakında tekrar bakın.",
    minRead: "dk okuma",
    moreTitle: "Blogdan daha fazlası",
    viewAll: "Tümünü gör",
  },
  services: {
    badge: "Serbest çalışma için mevcut",
    title: "Hizmetler",
    intro: "Her üç ayda bir sınırlı sayıda serbest proje üstleniyorum. Yaptığım her şey üretim düzeyinde, performanslı ve temiz aktarımla gönderiliyor. Acente yok, taşeronluk yok; doğrudan benimle çalışıyorsunuz.",
    pricing: {
      startingAt: "Başlangıç ​​tarihi:",
      fixedPrice: "Sabit fiyat",
      perProject: "proje başına",
      perTool: "alet başına",
      perIntegration: "entegrasyon başına",
      perSite: "site başına",
      auditNote: "denetim + öneriler"
    },
    cta: {
      startProject: "Bir proje başlatın",
      discussIdea: "Fikrinizi tartışın",
      buildTool: "Aracınızı oluşturun",
      integrateLms: "ÖYS'nizi entegre edin",
      auditSite: "Sitemi denetle",
      moderniseSite: "Sitemi modernleştir",
      buildDesktop: "Masaüstü uygulamamı oluştur",
      buildMobile: "Mobil uygulamamı oluştur"
    },
    retainer: {
      label: "Devam eden çalışma",
      title: "Aylık Aidat",
      description: "Çağrı için özel bir mühendise mi ihtiyacınız var? Devam eden özellik çalışmasına, hata düzeltmelerine veya teknik bir ortağa ihtiyaç duyan ekipler için, tam zamanlı bir işe alım masrafı olmaksızın, personel tutma düzenlemeleri sunuyorum.",
      hours: "ayda 40 saate kadar",
      cta: "Hadi konuşalım"
    },
    faq: {
      title: "SSS",
      items: [
        {
          q: "Nasıl başlayabilirim?",
          a: "Projenizin kısa bir açıklamasını içeren e-posta veya LinkedIn aracılığıyla bize ulaşın. 30 dakikalık bir kapsam belirleme görüşmesi planlamak için 24 saat içinde yanıt vereceğim; herhangi bir taahhüt gerekmiyor."
        },
        {
          q: "Uluslararası müşterilerle mi çalışıyorsunuz?",
          a: "Evet. Müşterilerimin çoğu ABD, İngiltere ve AB'de bulunuyor. Çakışma çağrıları için uygunluk ile eşzamansız öncelikli olarak çalışıyorum."
        },
        {
          q: "Tipik zaman çizelgeniz nedir?",
          a: "Küçük araçlar ve denetimler: 1–2 hafta. Tam kapsamlı uygulamalar ve entegrasyonlar: Kapsama bağlı olarak 4-10 hafta. Kapsam belirleme görüşmesinin ardından size ayrıntılı bir tahmin vereceğim."
        },
        {
          q: "Hizmetli sunuyor musunuz?",
          a: "Evet — devam eden işler için, 40 saate kadar ayda 2.000 ABD dolarından başlayan aylık ücret düzenlemeleri sunuyorum."
        }
      ]
    },
    finalCta: {
      text: "Bir şeyler inşa etmeye hazır mısınız?",
      link: "İletişime geçin"
    },
    servicesList: [
      {
        id: "fullstack-web",
        ctaKey: "startProject",
        title: "Tam Yığın Web Geliştirme",
        tagline: "Hızlı oluşturulmuş, üretim düzeyinde uygulamalar.",
        description: "Mimari ve API tasarımından gösterişli ön yüze kadar web uygulamalarının uçtan uca geliştirilmesi. On binlerce kullanıcıya hizmet veren B2B SaaS platformları, çok kiracılı kontrol panelleri ve müşteriye yönelik uygulamalar geliştirdim.",
        stack: [
          "React / Next.js",
          "Vue / Nuxt.js",
          "Node.js / Express",
          "PostgreSQL / MongoDB",
          "REST & GraphQL APIs"
        ],
        deliverables: [
          "Duyarlı, erişilebilir kullanıcı arayüzü",
          "Kimliği doğrulanmış kullanıcı akışları",
          "API tasarımı ve entegrasyonu",
          "Dağıtıma hazır kod tabanı",
          "Dokümantasyon ve teslim"
        ],
        pricingKey: "startingAt",
        amount: "$2,500",
        noteKey: "perProject"
      },
      {
        id: "ai-integration",
        ctaKey: "discussIdea",
        title: "Yapay Zeka İş Akışı Entegrasyonu",
        tagline: "Gerçekten işe yarayan yapay zeka destekli özellikler gönderin.",
        description: "Yüksek Lisans'ları, sesli yapay zekayı ve otomasyon iş akışlarını gerçek ürünlere entegre ediyorum. Yılda 24.000 ABD doları tasarruf sağlayan bir yapay zeka toplantı not alıcısı olan MetaNotes ve görüşmecinin çabasını %40 oranında azaltan yapay zeka odaklı röportaj iş akışları (sohbet, ses, video) oluşturuldu.",
        stack: [
          "OpenAI / Claude / Whisper",
          "LangChain",
          "Pipedream / n8n",
          "Webhooks & event pipelines",
          "Vector DBs"
        ],
        deliverables: [
          "Yapay zeka özelliği kapsamı ve tasarımı",
          "LLM istem mühendisliği",
          "Arka uç işlem hattı kurulumu",
          "Ön Uç Yapay Zeka Kullanıcı Deneyimi",
          "Maliyet ve gecikme optimizasyonu"
        ],
        pricingKey: "startingAt",
        amount: "$3,000",
        noteKey: "perProject"
      },
      {
        id: "desktop-apps",
        ctaKey: "buildDesktop",
        title: "Masaüstü Uygulama Geliştirme",
        tagline: "Mac, Windows ve Linux için yerel hissi veren uygulamalar.",
        description: "Electron ve Tauri ile geliştirilen çapraz platform masaüstü uygulamaları — tek kod tabanı, üç işletim sistemi. Önce çevrimdışı çalışan üretkenlik araçlarından veri yoğun dahili uygulamalara kadar; yerel menülere, sistem tepsisine ve her platformda kendini evinde hissettiren işletim sistemi entegrasyonlarına sahip, imzalı ve otomatik güncellenen sürümler gönderiyorum.",
        stack: [
          "Electron",
          "Tauri (Rust)",
          "React / TypeScript",
          "Native OS APIs",
          "Auto-update & code signing"
        ],
        deliverables: [
          "Çapraz platform sürümü (Mac/Win/Linux)",
          "Yerel menüler ve sistem tepsisi",
          "Otomatik güncelleme hattı",
          "Kod imzalama ve noterleştirme",
          "Yükleyici ve dağıtım"
        ],
        pricingKey: "startingAt",
        amount: "$4,500",
        noteKey: "perProject"
      },
      {
        id: "mobile-apps",
        ctaKey: "buildMobile",
        title: "Mobil Uygulama Geliştirme",
        tagline: "Tek bir kod tabanından iOS ve Android.",
        description: "React Native ve Expo ile geliştirilen çapraz platform mobil uygulamalar — iki ayrı kod tabanını sürdürmeden yerel performans. Mimariden mağaza onayına kadar tüm süreci yönetiyorum: anlık bildirimler, derin bağlantılar, çevrimdışı senkronizasyon ve yerel cihaz entegrasyonları; hem App Store'a hem de Play Store'a gönderilir.",
        stack: [
          "React Native / Expo",
          "TypeScript",
          "Native modules (iOS/Android)",
          "Push notifications",
          "App Store / Play Store"
        ],
        deliverables: [
          "Tek kod tabanından iOS + Android",
          "App Store ve Play Store gönderimi",
          "Anlık bildirimler ve derin bağlantılar",
          "Önce çevrimdışı veri senkronizasyonu",
          "Yerel cihaz entegrasyonları"
        ],
        pricingKey: "startingAt",
        amount: "$4,000",
        noteKey: "perProject"
      },
      {
        id: "internal-tooling",
        ctaKey: "buildTool",
        title: "Dahili Araçlar ve Eklentiler",
        tagline: "Ekibinizin gerçekten kullanacağı araçlar.",
        description: "Özel geliştirici araçları, Jira eklentileri, VS Code uzantıları ve tarayıcı uzantıları. Jira zaman çizelgesi eklentim yılda 9.000$'dan fazla tasarruf sağlıyor; VS Code uzantım, bir mühendislik ekibi için manuel zaman takibini ortadan kaldırdı.",
        stack: [
          "VS Code Extension API",
          "Jira Forge / Connect",
          "Chrome Extensions",
          "Node.js",
          "Shell scripting"
        ],
        deliverables: [
          "Kapsamlı gereksinimler ve spesifikasyonlar",
          "Çalışan eklenti/uzantı",
          "Yönetici yapılandırma paneli",
          "Ekip kullanıma sunma desteği"
        ],
        pricingKey: "startingAt",
        amount: "$1,500",
        noteKey: "perTool"
      },
      {
        id: "lms-lti",
        ctaKey: "integrateLms",
        title: "LMS/LTI Entegrasyonu",
        tagline: "Platformunuzu herhangi bir ÖYS/LMS'ye bağlayın.",
        description: "Moodle, Canvas, Blackboard ve diğerleri için LTI 1.3 uyumlu eklenti geliştirme. Testlify'ın LTI eklentisini sıfırdan tasarladım; bu, kurumsal benimseme büyümesini %20-30 artıran özel bir şifreleme uygulamasıydı.",
        stack: [
          "LTI 1.3 / LTI Advantage",
          "Moodle / Canvas / Blackboard",
          "OAuth 2.0 / JWKS",
          "Node.js",
          "Deep Linking & AGS"
        ],
        deliverables: [
          "LTI 1.3 uyumlu entegrasyon",
          "Derin Bağlantı desteği",
          "Notun geri verilmesi (AGS)",
          "Çoklu LMS uyumluluğu",
          "Güvenlik ve jeton yönetimi"
        ],
        pricingKey: "startingAt",
        amount: "$4,000",
        noteKey: "perIntegration"
      },
      {
        id: "performance-audit",
        ctaKey: "auditSite",
        title: "Ön Uç Performans Denetimi",
        tagline: "Hızlı siteler dönüşür. Hadi seninkini düzeltelim.",
        description: "Kapsamlı Lighthouse, Önemli Web Verileri ve öncelikli düzeltme listesiyle paket analizi. Mobil/masaüstünde bir üretim pazarlama sitesini 49/53 → 87/91'den kaldırdım; SEO ve dönüşümleri doğrudan etkileyen iyileştirmeler.",
        stack: [
          "Lighthouse / PageSpeed",
          "WebPageTest",
          "Chrome DevTools",
          "Next.js / Vite optimisation",
          "Image & font pipeline"
        ],
        deliverables: [
          "Tam Lighthouse denetim raporu",
          "Öncelikli sorun listesi",
          "Paket ve varlık analizi",
          "Somut kod düzeyinde düzeltmeler",
          "Karşılaştırmadan önce/sonra"
        ],
        pricingKey: "fixedPrice",
        amount: "$800",
        noteKey: "auditNote"
      },
      {
        id: "cms-jamstack",
        ctaKey: "moderniseSite",
        title: "Başsız CMS ve Jamstack",
        tagline: "Önce içerik. Başlatma için optimize edildi.",
        description: "Eski siteleri modern Jamstack yığınlarına taşıyın veya sıfırdan yenilerini oluşturun. 7 eski web sitesini Astro.js + başlıksız CMS'ye taşıyarak içerik başlatma süresini %50 kısalttım ve trafiğe göre ölçeklenen 4 CMS odaklı site oluşturdum.",
        stack: [
          "Astro.js / Next.js",
          "Directus / Contentful / Sanity",
          "PostgreSQL",
          "Vercel / Netlify",
          "MDX / Contentlayer"
        ],
        deliverables: [
          "CMS kurulumu ve şema tasarımı",
          "İçerik modelleme",
          "Statik site oluşturma",
          "Editör dostu yazma",
          "CI/CD dağıtım hattı"
        ],
        pricingKey: "startingAt",
        amount: "$2,000",
        noteKey: "perSite"
      }
    ]
  },
  about: {
    title: "Hakkımda",
    subtitle: "Kim olduğum ve ne yaptığım hakkında küçük bir arka plan.",
    bio: [
      "Ben Paurush Rai — Hindistan merkezli bir Senior Frontend Engineer: tam yığın kapsamına sahip bir ön uç çekirdeği ve kurumsal web platformları, AI odaklı uygulamalar ile geliştirici üretkenlik araçları geliştiren 5+ yıllık deneyim. Çalışmalarım karmaşık B2B kontrol panellerini, 1EdTech sertifikalı bir LMS entegrasyonunu ve özel Jira ile VS Code eklentilerini kapsıyor.",
      "Performansa, temiz mimariye ve gerçekten önemli olan şeyleri hayata geçirmeye derinden önem veriyorum. İster sıfırdan yepyeni bir franchise portalı oluşturmak, ister gerçek zamanlı AI mülakat iş akışları geliştirmek, ister işletmeye yılda binlerce dolar tasarruf sağlayan dahili araçlar geliştirmek olsun, odak noktam her zaman ibreyi ölçülebilir şekilde hareket ettiren işlerdir.",
      "İş dışında genellikle bir yan proje başlatıyor, sıkıcı bir iş akışını otomatikleştiriyor ya da daha önce hiç dokunmadığım bir kütüphaneye uzanıyorum — gerçek bağlamlarda yeni araçlar öğrenmenin sürtünmesini seviyorum."
    ],
    whatIBuild: "Ne İnşa Ediyorum",
    technicalSkills: "Teknik Beceriler",
    viewFullStack: "StackShare'de tüm yığını görüntüleyin",
    workHistory: "Çalışma Geçmişi",
    downloadResume: "Özgeçmişi indir",
    buildItems: [
      "Kurumsal B2B Platformları",
      "Yapay Zeka Uygulamaları ve İş Akışları",
      "Yönetici ve Franchise Kontrol Panelleri",
      "LMS/LTI Entegrasyonları",
      "Başsız CMS ve Jamstack",
      "Dahili Geliştirici Araçları",
      "VS Kodu ve Jira Eklentileri",
      "Veri Boru Hatları ve Otomasyonu",
      "Özel Bileşen Kitaplıkları",
      "Aşamalı Web Uygulamaları",
      "Tarayıcı Uzantıları"
    ],
    skills: {
      Diller: ["JavaScript", "TypeScript"],
      "Çerçeveler": ["React.js", "Next.js", "React Native", "Node.js", "Express.js"],
      "Ön Uç": ["Tailwind CSS", "Shadcn", "HTML/CSS", "Vue.js", "Nuxt.js", "Astro.js"],
      "Kütüphaneler": ["Zod", "Clerk", "Stripe"],
      "Yapay Zekâ, Bulut ve Otomasyon": ["OpenAI API", "LLM Integration", "MCP", "AWS", "n8n"],
      Veri: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "GraphQL", "REST APIs"],
      "Altyapı": ["Hasura", "Directus", "Payload", "BullMQ", "WebSocket"],
      Test: ["Vitest", "Playwright"],
      "DevOps ve İzleme": [
        "Docker",
        "GitHub Actions",
        "Git",
        "GitHub",
        "GitLab",
        "Vercel",
        "Turborepo",
        "Sentry"
      ],
      "Uzantılar ve Eklentiler": [
        "VS Code Extension",
        "Chrome Extension",
        "LTI 1.3 Plugin",
        "Jira Plugin"
      ]
    },
    experience: [
      {
        company: "Testlify",
        role: "Kıdemli Frontend Mühendisi",
        location: "Mumbai, Hindistan (Uzaktan)",
        period: "Ocak 2025 – Şu Anda",
        highlights: [
          "11.000'den fazla sayfalık bir pazarlama sitesi için WordPress yerine Jamstack mimarisini seçerek daha hızlı yüklemelerle hemen çıkma oranlarını düşürmeyi ve içerik sunumunu CMS üzerinden hızlandırmayı hedefledim; sayfa yükleme sürelerini %60 azaltması öngörülüyor.",
          "Testlify'ı Canvas ve Moodle gibi LMS platformlarına bağlayan 1EdTech sertifikalı bir LTI 1.3 entegrasyonu tasarlayıp geliştirdim; eğitmenlerin değerlendirme atamasına ve notları not defterine geri senkronize etmesine olanak tanıdım.",
          "AI mühendisleri ve tasarımcılarla iş birliği içinde, AI destekli bir toplantı not alma aracının ön ucunu tasarlayarak yıllık 24.000 $ operasyonel maliyeti ortadan kaldırdım.",
          "Şirket genelinde ve dış müşteriler tarafından kullanılan bir zaman çizelgesi platformunu hayata geçirerek üçüncü taraf bir aracın yerini aldım ve yıllık 9.000 $'ın üzerinde lisans maliyetini azalttım.",
          "Git dallarından gelen Jira sürelerini Appforest Timesheets'e otomatik kaydeden, ekip genelinde bir VS Code uzantısı geliştirerek manuel takip çabasını %70 azalttım.",
          "4 uygulamadan oluşan bir pakette tutarlı, yeniden kullanılabilir bir kullanıcı arayüzü için uygulama başına yinelemeye karşı durumsuz bir bileşen kütüphanesine karar verdim; özel bir npm paketi olarak yayımlayarak özellik teslimatını %30 kısalttım."
        ]
      },
      {
        company: "FuelBuddy",
        role: "Frontend Mühendisi",
        location: "Gurugram, Hindistan",
        period: "Eylül 2023 – Aralık 2024",
        highlights: [
          "Gömülü, arka uç ve operasyon ekipleriyle sıfırdan bir kiosk uygulaması geliştirerek yakıt dağıtım süresini %60 azalttım.",
          "Bir Progressive Web App'i React Native'e taşıyarak 8 haftada 14 kullanıcı akışında %100 özellik eşitliğine ulaştım.",
          "Birden fazla üründe TanStack Query'yi standartlaştırarak ön uç ekiplerini birleşik bir sunucu-durumu mimarisinde hizaladım ve eski veri hatalarını %50 azalttım.",
          "Playwright'ı ekibin E2E çerçevesi olarak belirleyerek manuel QA çabasını %40 azalttım.",
          "Kod incelemesi ve eşli programlama yoluyla yedi mühendise mentorluk yaparak yeni işe alımların uyum süresini %25 azalttım."
        ]
      },
      {
        company: "Modocosm",
        role: "Frontend Mühendisi",
        location: "New York City, ABD (Uzaktan)",
        period: "Temmuz 2021 – Ağustos 2023",
        highlights: [
          "PostgreSQL şema sağlamayı kolaylaştırmak için Directus'un iç yapısını tersine mühendislik yaparak yeni proje önyükleme süresini %70'in üzerinde azalttım.",
          "Bir haber medyası müşterisi için çapraz platform video metriklerini birleştiren bir sosyal analitik kontrol paneli geliştirerek raporlama çabasını %60 azalttım.",
          "7 eski web sitesini Astro.js ve başsız bir CMS ile modernleştirerek içerik yayınlama hızını iki katına çıkardım.",
          "Üretime gönderilen ve bugün hâlâ yayında olan 4 CMS odaklı duyarlı web sitesini teslim edip optimize ettim."
        ]
      }
    ]
  },
  contact: {
    title: "Temas etmek",
    heading: "İletişime geçin",
    subtitle: "Aklınızda bir proje mi var, bir sorunuz mu var, yoksa sadece merhaba mı demek istiyorsunuz? Bana bir mesaj gönderin, bir gün içinde yanıt vereceğim.",
    form: {
      name: "Ad",
      email: "E-posta",
      message: "Mesaj",
      namePlaceholder: "Ali Yılmaz",
      emailPlaceholder: "ali@sirket.com",
      messagePlaceholder: "Projeniz veya tartışmak istediğiniz konular hakkında bilgi verin...",
      submit: "Mesaj gönder",
      sending: "Gönderiliyor…",
    },
    success: {
      title: "Mesaj gönderildi",
      body: "Ulaştığınız için teşekkürler — 24 saat içinde e-postanıza yanıt vereceğim.",
      again: "Başka bir mesaj gönder",
    },
    error: {
      network: "Ağ hatası. Lütfen bağlantınızı kontrol edin.",
      generic: "Bir şeyler ters gitti. Lütfen tekrar deneyin.",
    },
    socials: "Veya beni şurada bulun",
  },
};

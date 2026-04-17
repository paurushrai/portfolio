import type { Locale } from "./en";

export const tr: Locale = {
  nav: {
    about: "Hakkında",
    projects: "Projeler",
    services: "Hizmetler",
    contact: "Temas etmek"
  },
  home: {
    tagline: "Kıdemli Yazılım Mühendisi — hızlı gönderilen ve uzun süre dayanan ürünler, araçlar ve entegrasyonlar oluşturur.",
    openToWork: "Çalışmaya açık",
    resume: "Özgeçmiş"
  },
  projects: {
    title: "Projeler",
    subtitle: "Projelerin bir kısmı işten, bir kısmı da kendi zamanıma ait.",
    readMore: "Devamını oku",
    empty: "Hiçbir proje bulunamadı.",
    independent: "Bağımsız"
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
      moderniseSite: "Sitemi modernleştir"
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
      "Ben Paurush Rai; kurumsal web platformları, yapay zeka destekli uygulamalar ve geliştirici üretkenlik araçları tasarımında neredeyse 5 yıllık deneyime sahip, Hindistan merkezli, ön uç eğilimli, tam yığın mühendisiyim. Çalışmalarım karmaşık B2B kontrol panellerini, sağlam LMS entegrasyonlarını, özel Jira ve VS Code eklentilerini ve aradaki her şeyi kapsamaktadır.",
      "Performansa, temiz mimariye ve gerçekten önemli olan şeylerin nakliyesine çok önem veriyorum. İster sıfırdan yeni bir franchise portalı oluşturmak, ister gerçek zamanlı yapay zeka mülakat iş akışları tasarlamak, ister işletmeye yılda binlerce dolar tasarruf sağlayacak dahili araçlar geliştirmek olsun, odak noktam her zaman ölçülebilir şekilde ibreyi hareket ettiren işlerdir.",
      "İş dışında genellikle bir yan proje üzerinde çalışıyorum, sıkıcı bir iş akışını otomatikleştiriyorum veya daha önce hiç dokunmadığım bir kütüphaneye ulaşıyorum; gerçek bağlamlarda yeni araçlar öğrenmenin sürtünmesini seviyorum."
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
      Diller: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "Handlebars",
        "MDX"
      ],
      "Çerçeveler": [
        "React.js",
        "Next.js",
        "Vue.js",
        "Nuxt.js",
        "Astro.js",
        "Electron.js",
        "React Native"
      ],
      "Kütüphaneler": [
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
      "Veritabanı": [
        "PostgreSQL",
        "MongoDB"
      ],
      "Arka Uç": [
        "Node.js",
        "Express.js",
        "Hasura",
        "Directus",
        "RESTful APIs",
        "GraphQL APIs"
      ],
      "Sürüm Kontrolü": [
        "Git",
        "GitLab",
        "GitHub"
      ],
      "Platformlar ve Araçlar": [
        "Docker",
        "Firebase",
        "Datagrip",
        "Pipedream",
        "Vercel",
        "Apify",
        "Figma",
        "AdobeXD"
      ],
      "Diğer": [
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
        role: "Kıdemli Yazılım Mühendisi",
        location: "Mumbai, Hindistan",
        period: "Ocak 2025 – Şu Anda",
        highlights: [
          "Testlify'ı büyük LMS platformlarıyla entegre eden LTI uyumlu bir eklenti tasarladı ve kurumsal benimsemede %20-30 oranında büyümeye katkıda bulundu.",
          "Otomatik kayıt, transkripsiyon ve özetler sunan bir yapay zeka toplantı not alma aracı olan MetaNotes'u geliştirdik ve yılda 24 bin dolar tasarruf ettik.",
          "Pazarlama sitesinde ön uç performans optimizasyonunu yöneterek Lighthouse puanlarını mobil/masaüstünde 49/53'ten 87/91'e yükseltti.",
          "Git şubesine göre kodlama süresini otomatik olarak izlemek ve Jira'da oturum açmak için bir VS Code uzantısı tasarlandı ve manuel izlemeyi %60-70 oranında azalttı.",
          "Zaman çizelgeleri ve maliyet tahsisi için dahili bir Jira eklentisi oluşturuldu ve yılda 9 bin dolardan fazla tasarruf sağlandı.",
          "Yapay zeka odaklı röportaj iş akışları (Sohbet, Ses, Video Yapay Zeka) uygulanarak görüşmecinin çabası %40'ın üzerinde azaltıldı ve %20-30 gelir artışı sağlandı."
        ]
      },
      {
        company: "YakıtBuddy",
        role: "Yazılım Mühendisi",
        location: "Gurugram, Hindistan",
        period: "Eylül 2023 – Aralık 2024",
        highlights: [
          "Sıfırdan bir kiosk uygulaması ön ucu oluşturarak yakıt dağıtım süresini %60 oranında azalttık.",
          "Müşteriler, yöneticiler, franchise'lar ve sürücüler için 6 üretim web uygulaması geliştirildi ve ölçeklendirildi.",
          "Veri doğrulama ve tutarsızlık çözümü için 8 yönetici kontrol paneli tasarlandı ve çözüm süresi %60-70 oranında kısaltıldı.",
          "Kaliteyi ve işe başlama hızını artıran kod inceleme uygulamaları oluşturarak 3 geliştiriciye ve 5 stajyere danışmanlık yaptı.",
          "Birden fazla platformda uçtan uca 100'den fazla özellik sunuldu.",
          "Entegre Sentry ve Clarity, sorun çözme süresini %30 azaltır ve eyleme geçirilebilir kullanıcı içgörülerini %20 artırır."
        ]
      },
      {
        company: "Modokonizm",
        role: "Yazılım Mühendisi",
        location: "New York City, ABD (Uzaktan)",
        period: "Temmuz 2021 – Ekim 2023",
        highlights: [
          "Sürdürülebilir trafik büyümesini destekleyen 4 CMS odaklı duyarlı web sitesi tasarladı ve sürdürdü.",
          "Yeniden yapılandırılmış Directus CMS ve PostgreSQL sorgularıyla kolaylaştırılmış şema kurulumu, önyükleme süresini %70'in üzerinde azalttı.",
          "Google E-Tablolar ve Python kazıma kullanarak otomatik bir bahis projeksiyon sistemi tasarladı ve doğruluğu %15-20 oranında artırdı.",
          "Teslimatı hızlandıran 100'den fazla yeniden kullanılabilir kullanıcı arayüzü bileşeni ve tasarım sistemi oluşturuldu.",
          "Astro.js Jamstack + başsız CMS'ye geçiş yaparak 7 eski web sitesini modernize ederek içerik başlatma süresini %50 kısalttı."
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

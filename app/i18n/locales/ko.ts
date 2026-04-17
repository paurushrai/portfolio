import type { Locale } from "./en";

export const ko: Locale = {
  nav: {
    about: "에 대한",
    projects: "프로젝트",
    services: "서비스",
    contact: "연락하다"
  },
  home: {
    tagline: "수석 소프트웨어 엔지니어 — 빠르고 오래 지속되는 제품, 도구 및 통합을 구축합니다.",
    openToWork: "협업 환영",
    resume: "이력서"
  },
  projects: {
    title: "프로젝트",
    subtitle: "프로젝트 중 일부는 업무 중이고 일부는 개인 시간에 진행됩니다.",
    readMore: "더 읽어보세요",
    empty: "프로젝트를 찾을 수 없습니다.",
    independent: "독립적인"
  },
  services: {
    badge: "프리랜서로 이용 가능",
    title: "서비스",
    intro: "저는 매 분기마다 제한된 수의 프리랜서 프로젝트를 맡습니다. 내가 만드는 모든 것은 프로덕션 등급이고 성능이 뛰어나며 깔끔한 핸드오프로 배송됩니다. 대행사도 없고 하청 계약도 없습니다. 저와 직접 협력하세요.",
    pricing: {
      startingAt: "시작 시간",
      fixedPrice: "고정 가격",
      perProject: "프로젝트당",
      perTool: "도구당",
      perIntegration: "통합당",
      perSite: "사이트당",
      auditNote: "감사 + 권장 사항"
    },
    cta: {
      startProject: "프로젝트 시작",
      discussIdea: "당신의 아이디어에 대해 토론하세요",
      buildTool: "도구를 구축하세요",
      integrateLms: "LMS 통합",
      auditSite: "내 사이트 감사",
      moderniseSite: "내 사이트 현대화"
    },
    retainer: {
      label: "진행중인 작업",
      title: "월간 리테이너",
      description: "대기 중인 전담 엔지니어가 필요하십니까? 저는 정규직 채용에 따른 간접비 없이 지속적인 기능 작업, 버그 수정 또는 기술 파트너가 필요한 팀을 위해 리테이너 계약을 제공합니다.",
      hours: "최대 40시간/월",
      cta: "얘기하자"
    },
    faq: {
      title: "FAQ",
      items: [
        {
          q: "어떻게 시작하나요?",
          a: "프로젝트에 대한 간략한 설명과 함께 이메일이나 LinkedIn을 통해 연락하세요. 24시간 이내에 응답하여 30분 범위 지정 통화 일정을 정하겠습니다. 약속은 필요하지 않습니다."
        },
        {
          q: "해외 고객과 협력하시나요?",
          a: "예. 내 고객의 대부분은 미국, 영국 및 EU에 있습니다. 중복 호출이 가능한 비동기 우선 작업을 수행합니다."
        },
        {
          q: "일반적인 일정은 어떻게 되나요?",
          a: "소형 도구 및 감사: 1~2주. 전체 스택 앱 및 통합: 범위에 따라 4~10주. 스코핑 통화 후 자세한 견적을 안내해드리겠습니다."
        },
        {
          q: "리테이너를 제공합니까?",
          a: "예. 지속적인 작업을 위해 월 $2,000부터 시작하여 최대 40시간까지 월별 보유 서비스를 제공합니다."
        }
      ]
    },
    finalCta: {
      text: "뭔가를 만들 준비가 되셨나요?",
      link: "연락하세요"
    },
    servicesList: [
      {
        id: "fullstack-web",
        ctaKey: "startProject",
        title: "풀스택 웹 개발",
        tagline: "빠르게 구축되는 프로덕션급 앱.",
        description: "아키텍처 및 API 디자인부터 세련된 프런트엔드에 이르기까지 웹 애플리케이션의 엔드투엔드 개발입니다. 저는 B2B SaaS 플랫폼, 멀티 테넌트 대시보드, 수만 명의 사용자에게 서비스를 제공하는 고객 대상 앱을 구축했습니다.",
        stack: [
          "React / Next.js",
          "Vue / Nuxt.js",
          "Node.js / Express",
          "PostgreSQL / MongoDB",
          "REST & GraphQL APIs"
        ],
        deliverables: [
          "반응성이 뛰어나고 접근 가능한 UI",
          "인증된 사용자 흐름",
          "API 설계 및 통합",
          "배포 준비가 완료된 코드베이스",
          "문서화 및 전달"
        ],
        pricingKey: "startingAt",
        amount: "$2,500",
        noteKey: "perProject"
      },
      {
        id: "ai-integration",
        ctaKey: "discussIdea",
        title: "AI 워크플로우 통합",
        tagline: "실제로 작동하는 AI 기반 기능을 출시하세요.",
        description: "저는 LLM, 음성 AI 및 자동화 워크플로를 실제 제품에 통합합니다. 연간 24,000달러를 절약한 AI 회의 메모 작성자인 MetaNotes와 면접관의 노력을 40% 줄여주는 AI 기반 인터뷰 워크플로우(채팅, 음성, 비디오)를 구축했습니다.",
        stack: [
          "OpenAI / Claude / Whisper",
          "LangChain",
          "Pipedream / n8n",
          "Webhooks & event pipelines",
          "Vector DBs"
        ],
        deliverables: [
          "AI 기능 범위 지정 및 디자인",
          "LLM 프롬프트 엔지니어링",
          "백엔드 파이프라인 설정",
          "프론트엔드 AI UX",
          "비용 및 지연 시간 최적화"
        ],
        pricingKey: "startingAt",
        amount: "$3,000",
        noteKey: "perProject"
      },
      {
        id: "internal-tooling",
        ctaKey: "buildTool",
        title: "내부 도구 및 플러그인",
        tagline: "팀이 실제로 사용할 도구입니다.",
        description: "사용자 정의 개발자 도구, Jira 플러그인, VS Code 확장 및 브라우저 확장. 내 Jira 작업표 플러그인을 사용하면 연간 $9,000 이상을 절약할 수 있습니다. 내 VS Code 확장은 엔지니어링 팀의 수동 시간 추적을 제거했습니다.",
        stack: [
          "VS Code Extension API",
          "Jira Forge / Connect",
          "Chrome Extensions",
          "Node.js",
          "Shell scripting"
        ],
        deliverables: [
          "범위 요구 사항 및 사양",
          "작동 중인 플러그인/확장",
          "관리자 구성 패널",
          "팀 출시 지원"
        ],
        pricingKey: "startingAt",
        amount: "$1,500",
        noteKey: "perTool"
      },
      {
        id: "lms-lti",
        ctaKey: "integrateLms",
        title: "LMS/LTI 통합",
        tagline: "플랫폼을 LMS에 연결하세요.",
        description: "Moodle, Canvas, Blackboard 등을 위한 LTI 1.3 호환 플러그인 개발. 저는 Testlify의 LTI 플러그인을 처음부터 설계했습니다. 이는 기업 채택률이 20~30% 증가한 맞춤형 암호화 구현입니다.",
        stack: [
          "LTI 1.3 / LTI Advantage",
          "Moodle / Canvas / Blackboard",
          "OAuth 2.0 / JWKS",
          "Node.js",
          "Deep Linking & AGS"
        ],
        deliverables: [
          "LTI 1.3 호환 통합",
          "딥링킹 지원",
          "성적통과(AGS)",
          "다중 LMS 호환성",
          "보안 및 토큰 처리"
        ],
        pricingKey: "startingAt",
        amount: "$4,000",
        noteKey: "perIntegration"
      },
      {
        id: "performance-audit",
        ctaKey: "auditSite",
        title: "프런트엔드 성능 감사",
        tagline: "빠른 사이트 전환. 당신의 문제를 고치자.",
        description: "포괄적인 Lighthouse, 핵심 웹 바이탈 및 우선순위 수정 목록이 포함된 번들 분석. 저는 모바일/데스크톱에서 프로덕션 마케팅 사이트를 49/53에서 87/91로 올렸습니다. 이는 SEO 및 전환에 직접적인 영향을 미치는 개선 사항입니다.",
        stack: [
          "Lighthouse / PageSpeed",
          "WebPageTest",
          "Chrome DevTools",
          "Next.js / Vite optimisation",
          "Image & font pipeline"
        ],
        deliverables: [
          "전체 Lighthouse 감사 보고서",
          "우선순위 문제 목록",
          "번들 및 자산 분석",
          "구체적인 코드 수준 수정",
          "벤치마크 전/후"
        ],
        pricingKey: "fixedPrice",
        amount: "$800",
        noteKey: "auditNote"
      },
      {
        id: "cms-jamstack",
        ctaKey: "moderniseSite",
        title: "헤드리스 CMS 및 Jamstack",
        tagline: "콘텐츠 우선. 출시에 최적화되었습니다.",
        description: "레거시 사이트를 최신 Jamstack 스택으로 마이그레이션하거나 처음부터 새로운 사이트를 구축하세요. 저는 7개의 레거시 웹사이트를 Astro.js + 헤드리스 CMS로 마이그레이션하여 콘텐츠 시작 시간을 50% 단축하고 트래픽에 따라 확장되는 4개의 CMS 기반 사이트를 구축했습니다.",
        stack: [
          "Astro.js / Next.js",
          "Directus / Contentful / Sanity",
          "PostgreSQL",
          "Vercel / Netlify",
          "MDX / Contentlayer"
        ],
        deliverables: [
          "CMS 설정 및 스키마 디자인",
          "콘텐츠 모델링",
          "정적 사이트 생성",
          "편집자 친화적인 저작",
          "CI/CD 배포 파이프라인"
        ],
        pricingKey: "startingAt",
        amount: "$2,000",
        noteKey: "perSite"
      }
    ]
  },
  about: {
    title: "나에 대해",
    subtitle: "내가 누구이고 무엇을 하는지에 대한 간략한 배경지식입니다.",
    bio: [
      "저는 Paurush Rai입니다. 인도에 본사를 둔 프런트엔드 지향 풀스택 엔지니어로 엔터프라이즈 웹 플랫폼, AI 기반 애플리케이션 및 개발자 생산성 도구를 설계한 지 거의 5년이 되었습니다. 내 작업은 복잡한 B2B 대시보드, 강력한 LMS 통합, 사용자 정의 Jira 및 VS Code 플러그인, 그리고 그 사이의 모든 것을 포괄합니다.",
      "저는 성능, 깔끔한 아키텍처, 실제로 중요한 배송에 깊은 관심을 갖고 있습니다. 처음부터 그린필드 프랜차이즈 포털을 구축하든, 실시간 AI 인터뷰 워크플로우를 엔지니어링하든, 연간 수천 달러를 절약할 수 있는 내부 도구를 개발하든, 저는 항상 눈에 띄게 변화하는 작업에 집중합니다.",
      "업무 외에는 보통 사이드 프로젝트를 시작하거나, 지루한 작업 흐름을 자동화하거나, 이전에 한 번도 만져본 적이 없는 라이브러리에 접근합니다. 저는 실제 상황에서 새로운 도구를 배우는 마찰을 좋아합니다."
    ],
    whatIBuild: "내가 만드는 것",
    technicalSkills: "기술적 능력",
    viewFullStack: "StackShare에서 전체 스택 보기",
    workHistory: "경력",
    downloadResume: "이력서 다운로드",
    buildItems: [
      "엔터프라이즈 B2B 플랫폼",
      "AI 애플리케이션 및 워크플로",
      "관리 및 프랜차이즈 대시보드",
      "LMS/LTI 통합",
      "헤드리스 CMS 및 Jamstack",
      "내부 개발자 도구",
      "VS Code 및 Jira 플러그인",
      "데이터 파이프라인 및 자동화",
      "사용자 정의 구성 요소 라이브러리",
      "프로그레시브 웹 앱",
      "브라우저 확장"
    ],
    skills: {
      "언어": [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "Handlebars",
        "MDX"
      ],
      "프레임워크": [
        "React.js",
        "Next.js",
        "Vue.js",
        "Nuxt.js",
        "Astro.js",
        "Electron.js",
        "React Native"
      ],
      "도서관": [
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
      "데이터 베이스": [
        "PostgreSQL",
        "MongoDB"
      ],
      "백엔드": [
        "Node.js",
        "Express.js",
        "Hasura",
        "Directus",
        "RESTful APIs",
        "GraphQL APIs"
      ],
      "버전 관리": [
        "Git",
        "GitLab",
        "GitHub"
      ],
      "플랫폼 및 도구": [
        "Docker",
        "Firebase",
        "Datagrip",
        "Pipedream",
        "Vercel",
        "Apify",
        "Figma",
        "AdobeXD"
      ],
      "다른": [
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
        company: "증언하다",
        role: "수석 소프트웨어 엔지니어",
        location: "인도 뭄바이",
        period: "2025년 1월 – 현재",
        highlights: [
          "Testlify를 주요 LMS 플랫폼과 통합하는 LTI 호환 플러그인을 설계하여 기업 채택률 20~30% 성장에 기여했습니다.",
          "자동 녹음, 전사, 요약 기능을 갖춘 AI 회의 메모 작성기인 MetaNotes를 구축하여 연간 24,000달러를 절약했습니다.",
          "마케팅 사이트에서 프런트엔드 성능 최적화를 주도하여 모바일/데스크톱에서 Lighthouse 점수를 49/53에서 87/91로 높였습니다.",
          "Git 브랜치별로 코딩 시간을 자동 추적하고 Jira에 로그인하도록 VS Code 확장을 설계하여 수동 추적을 60~70% 줄였습니다.",
          "작업표 및 비용 할당을 위한 내부 Jira 플러그인을 만들어 연간 $9K+를 절약했습니다.",
          "AI 기반 인터뷰 워크플로우(채팅, 음성, 비디오 AI)를 구현하여 면접관의 노력을 40% 이상 줄이고 수익을 20~30% 증가시켰습니다."
        ]
      },
      {
        company: "퓨얼버디",
        role: "소프트웨어 엔지니어",
        location: "구루그람, 인도",
        period: "2023년 9월 – 2024년 12월",
        highlights: [
          "키오스크 애플리케이션 프런트엔드를 처음부터 구축하여 연료 분배 시간을 60% 단축했습니다.",
          "고객, 관리자, 프랜차이즈 및 운전자를 위한 6개의 프로덕션 웹 애플리케이션을 개발하고 확장했습니다.",
          "데이터 검증 및 불일치 해결을 위해 8개의 관리 대시보드를 설계하여 해결 시간을 60~70% 단축했습니다.",
          "3명의 개발자와 5명의 인턴을 멘토링하여 품질과 온보딩 속도를 향상시키는 코드 검토 관행을 확립했습니다.",
          "여러 플랫폼에 걸쳐 100개 이상의 기능을 엔드 투 엔드로 제공했습니다.",
          "Sentry와 Clarity가 통합되어 문제 해결 시간이 30% 단축되고 실행 가능한 사용자 통찰력이 20% 향상됩니다."
        ]
      },
      {
        company: "모드코즘",
        role: "소프트웨어 엔지니어",
        location: "미국 뉴욕시(원격)",
        period: "2021년 7월 – 2023년 10월",
        highlights: [
          "지속적인 트래픽 증가를 지원하는 4개의 CMS 기반 반응형 웹사이트를 설계하고 유지관리했습니다.",
          "PostgreSQL 쿼리를 통해 Directus CMS를 해체하고 스키마 설정을 간소화하여 부트스트래핑 시간을 70% 이상 단축했습니다.",
          "Google Sheets 및 Python 스크래핑을 사용하여 자동화된 베팅 프로젝션 시스템을 설계하여 정확도를 15~20% 향상했습니다.",
          "100개 이상의 재사용 가능한 UI 구성 요소 및 디자인 시스템을 만들어 전달 속도를 높였습니다.",
          "Astro.js Jamstack + 헤드리스 CMS로 마이그레이션하여 7개의 레거시 웹사이트를 현대화하여 콘텐츠 시작 시간을 50% 단축했습니다."
        ]
      }
    ]
  },
  contact: {
    title: "연락하다",
    heading: "연락하기",
    subtitle: "프로젝트 문의, 질문, 또는 간단한 인사라도 환영합니다. 메시지를 보내주시면 하루 안에 답변드리겠습니다.",
    form: {
      name: "이름",
      email: "이메일",
      message: "메시지",
      namePlaceholder: "홍길동",
      emailPlaceholder: "hong@company.com",
      messagePlaceholder: "프로젝트나 논의하고 싶은 내용을 알려주세요...",
      submit: "메시지 보내기",
      sending: "전송 중…",
    },
    success: {
      title: "메시지가 전송되었습니다",
      body: "연락해 주셔서 감사합니다 — 24시간 이내에 이메일로 답변드리겠습니다.",
      again: "다른 메시지 보내기",
    },
    error: {
      network: "네트워크 오류. 연결을 확인해 주세요.",
      generic: "문제가 발생했습니다. 다시 시도해 주세요.",
    },
    socials: "또는 여기서 찾아보세요",
  },
};

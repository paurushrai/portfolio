import type { Locale } from "./en";

export const ko: Locale = {
  nav: {
    about: "에 대한",
    projects: "프로젝트",
    articles: "글",
    services: "서비스",
    contact: "연락하다",
    privacy: "개인정보 처리방침",
  },
  home: {
    tagline: "수석 프로덕트 엔지니어 — 빠르고 오래 지속되는 제품, 도구 및 통합을 구축합니다.",
    openToWork: "협업 환영",
    resume: "이력서"
  },
  projects: {
    title: "프로젝트",
    subtitle: "프로젝트 중 일부는 업무 중이고 일부는 개인 시간에 진행됩니다.",
    readMore: "더 읽어보세요",
    empty: "프로젝트를 찾을 수 없습니다.",
    independent: "독립적인",
    personalProject: "개인 프로젝트",
    associatedWith: "협력사",
    inProgress: "ì§í ì¤",
    all: "ì ì²´",
    personal: "ê°ì¸"
  },
  articles: {
    title: "글",
    subtitle: "엔지니어링, 도구, 제품 개발에 대한 생각 — Medium에 게시.",
    viewAll: "Medium에서 모두 보기",
    empty: "아직 글이 없습니다 — 곧 다시 확인해 주세요.",
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
      moderniseSite: "내 사이트 현대화",
      buildDesktop: "내 데스크톱 앱 구축",
      buildMobile: "내 모바일 앱 구축"
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
        id: "desktop-apps",
        ctaKey: "buildDesktop",
        title: "데스크톱 애플리케이션 개발",
        tagline: "Mac, Windows, Linux를 위한 네이티브 감각의 앱.",
        description: "Electron과 Tauri로 구축된 크로스 플랫폼 데스크톱 애플리케이션 — 하나의 코드베이스, 세 가지 운영 체제. 오프라인 우선 생산성 도구부터 데이터 집약적인 내부 앱까지, 모든 플랫폼에서 자연스럽게 어울리는 네이티브 메뉴, 시스템 트레이, OS 통합을 갖춘 서명되고 자동 업데이트되는 빌드를 출시합니다.",
        stack: [
          "Electron",
          "Tauri (Rust)",
          "React / TypeScript",
          "Native OS APIs",
          "Auto-update & code signing"
        ],
        deliverables: [
          "크로스 플랫폼 빌드 (Mac/Win/Linux)",
          "네이티브 메뉴 및 시스템 트레이",
          "자동 업데이트 파이프라인",
          "코드 서명 및 공증",
          "설치 프로그램 및 배포"
        ],
        pricingKey: "startingAt",
        amount: "$4,500",
        noteKey: "perProject"
      },
      {
        id: "mobile-apps",
        ctaKey: "buildMobile",
        title: "모바일 앱 개발",
        tagline: "단일 코드베이스로 iOS 및 Android 구현.",
        description: "React Native와 Expo로 구축된 크로스 플랫폼 모바일 앱 — 두 개의 코드베이스를 유지하지 않고도 네이티브 성능을 제공합니다. 아키텍처부터 스토어 승인까지 전 과정을 처리합니다: 푸시 알림, 딥 링크, 오프라인 동기화, 네이티브 기기 통합을 App Store와 Play Store 양쪽에 출시합니다.",
        stack: [
          "React Native / Expo",
          "TypeScript",
          "Native modules (iOS/Android)",
          "Push notifications",
          "App Store / Play Store"
        ],
        deliverables: [
          "하나의 코드베이스로 iOS + Android 구현",
          "App Store 및 Play Store 제출",
          "푸시 알림 및 딥 링크",
          "오프라인 우선 데이터 동기화",
          "네이티브 기기 통합"
        ],
        pricingKey: "startingAt",
        amount: "$4,000",
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
      "저는 Paurush Rai입니다 — 인도에 기반을 둔 Senior Product Engineer로, 프런트엔드를 핵심으로 하면서 풀스택까지 아우르며 엔터프라이즈 웹 플랫폼, AI 기반 애플리케이션, 개발자 생산성 도구를 5년 이상 만들어 왔습니다. 제 작업은 복잡한 B2B 대시보드, 1EdTech 인증 LMS 통합, 그리고 사용자 정의 Jira 및 VS Code 플러그인에 이릅니다.",
      "저는 성능, 깔끔한 아키텍처, 그리고 진짜로 중요한 것을 출시하는 데 깊은 관심을 두고 있습니다. 그린필드 프랜차이즈 포털을 처음부터 구축하든, 실시간 AI 인터뷰 워크플로우를 설계하든, 매년 수천 달러를 절감하는 내부 도구를 개발하든, 제 초점은 언제나 측정 가능한 성과를 내는 작업에 있습니다.",
      "업무 외에는 보통 사이드 프로젝트를 시작하거나, 지루한 작업 흐름을 자동화하거나, 한 번도 써본 적 없는 라이브러리에 손을 뻗곤 합니다 — 저는 실제 상황에서 새로운 도구를 배우는 마찰을 좋아합니다."
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
      "언어": ["JavaScript", "TypeScript"],
      "프레임워크": ["React.js", "Next.js", "React Native", "Node.js", "Express.js"],
      "프런트엔드": ["Tailwind CSS", "Shadcn", "HTML/CSS", "Vue.js", "Nuxt.js", "Astro.js"],
      "라이브러리": ["Zod", "Clerk", "Stripe"],
      "AI, 클라우드 및 자동화": ["OpenAI API", "LLM Integration", "MCP", "AWS", "n8n"],
      "데이터": ["PostgreSQL", "MongoDB", "Redis", "Prisma", "GraphQL", "REST APIs"],
      "인프라": ["Hasura", "Directus", "Payload", "BullMQ", "WebSocket"],
      "테스팅": ["Vitest", "Playwright"],
      "DevOps 및 모니터링": ["Docker", "GitHub Actions", "Git", "GitHub", "GitLab", "Vercel", "Turborepo", "Sentry"],
      "확장 프로그램 및 플러그인": ["VS Code Extension", "Chrome Extension", "LTI 1.3 Plugin", "Jira Plugin"]
    },
    experience: [
      {
        company: "Testlify",
        role: "수석 소프트웨어 엔지니어",
        location: "인도 뭄바이 (원격)",
        period: "2025년 1월 – 현재",
        highlights: [
          "11,000+ 페이지 규모의 마케팅 사이트에 WordPress 대신 Jamstack 아키텍처를 선택하여 더 빠른 로딩으로 이탈률을 낮추고 CMS를 통한 콘텐츠 전달 속도를 높였으며, 페이지 로딩 시간을 60% 단축할 것으로 예상됩니다.",
          "Testlify를 Canvas, Moodle 같은 LMS 플랫폼과 연결하는 1EdTech 인증 LTI 1.3 통합을 설계하고 구축하여, 강사가 평가를 배정하고 성적을 성적표로 다시 동기화할 수 있도록 했습니다.",
          "AI 엔지니어 및 디자이너와 협업하여 AI 기반 회의 노트 작성기의 프런트엔드를 설계하여 연간 24,000달러의 운영 비용을 없앴습니다.",
          "전사와 외부 고객이 사용하는 작업 시간표 플랫폼을 출시하여 서드파티 도구를 대체하고 연간 $9,000+의 라이선스 비용을 절감했습니다.",
          "Git 브랜치의 Jira 작업 시간을 Appforest Timesheets에 자동으로 기록하는 팀 전체용 VS Code 확장을 개발하여 수동 추적 작업을 70% 줄였습니다.",
          "4개 애플리케이션 스위트 전반에 걸쳐 일관되고 재사용 가능한 UI를 위해 앱별 중복 대신 상태 비저장 컴포넌트 라이브러리를 채택했으며, 비공개 npm 패키지로 배포하여 기능 제공 기간을 30% 단축했습니다."
        ]
      },
      {
        company: "FuelBuddy",
        role: "소프트웨어 엔지니어",
        location: "구루그람, 인도",
        period: "2023년 9월 – 2024년 12월",
        highlights: [
          "임베디드, 백엔드, 운영 팀과 함께 키오스크 애플리케이션을 처음부터 구축하여 연료 분배 시간을 60% 단축했습니다.",
          "프로그레시브 웹 앱을 React Native로 마이그레이션하여 8주 만에 14개 사용자 플로우에서 100% 기능 동등성을 달성했습니다.",
          "여러 제품에 걸쳐 TanStack Query를 표준화하여 프런트엔드 팀을 통합된 서버 상태 아키텍처로 정렬하고 오래된 데이터 결함을 50% 줄였습니다.",
          "Playwright를 팀의 E2E 프레임워크로 정착시켜 수동 QA 작업을 40% 줄였습니다.",
          "코드 리뷰와 페어링을 통해 7명의 엔지니어를 멘토링하여 신입 직원의 적응 시간을 25% 단축했습니다."
        ]
      },
      {
        company: "Modocosm",
        role: "소프트웨어 엔지니어",
        location: "미국 뉴욕시 (원격)",
        period: "2021년 7월 – 2023년 8월",
        highlights: [
          "Directus 내부를 리버스 엔지니어링하여 PostgreSQL 스키마 프로비저닝을 간소화하고 신규 프로젝트 부트스트랩 시간을 70% 이상 단축했습니다.",
          "뉴스 미디어 고객을 위해 플랫폼 간 동영상 지표를 통합하는 소셜 분석 대시보드를 개발하여 보고 작업을 60% 줄였습니다.",
          "Astro.js와 헤드리스 CMS로 7개의 레거시 웹사이트를 현대화하여 콘텐츠 게시 속도를 두 배로 높였습니다.",
          "프로덕션에 배포되어 오늘날까지 운영 중인 4개의 CMS 기반 반응형 웹사이트를 제공하고 최적화했습니다."
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

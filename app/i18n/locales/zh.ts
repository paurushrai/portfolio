import type { Locale } from "./en";

export const zh: Locale = {
  nav: {
    about: "关于我",
    projects: "项目",
    services: "服务",
    contact: "联系我",
  },
  home: {
    tagline:
      "高级软件工程师 — 构建快速交付、经久耐用的产品、工具与集成方案。",
    openToWork: "欢迎合作",
  },
  projects: {
    title: "项目",
    subtitle: "部分项目来自工作，其余来自个人时间。",
    readMore: "阅读更多",
    empty: "未找到项目。",
    independent: "独立",
  },
  services: {
    badge: "接受自由职业项目",
    title: "服务",
    intro:
      "每季度我只接受有限数量的自由职业项目。我构建的一切均达到生产级标准，性能优越，并提供清晰的交付文档。无中间商，不分包 — 您直接与我合作。",
    pricing: {
      startingAt: "起价",
      fixedPrice: "固定价格",
      perProject: "每个项目",
      perTool: "每个工具",
      perIntegration: "每次集成",
      perSite: "每个站点",
      auditNote: "审计 + 建议报告",
    },
    cta: {
      startProject: "开始项目",
      discussIdea: "讨论您的想法",
      buildTool: "开发您的工具",
      integrateLms: "集成您的 LMS",
      auditSite: "审计我的站点",
      moderniseSite: "升级我的站点",
    },
    retainer: {
      label: "持续合作",
      title: "月度顾问服务",
      description:
        "需要专属工程师随时待命？我为需要持续功能开发、Bug 修复或技术合作伙伴的团队提供顾问服务协议 — 无需承担全职员工的成本。",
      hours: "每月最多 40 小时",
      cta: "立即咨询",
    },
    faq: {
      title: "常见问题",
      items: [
        {
          q: "如何开始合作？",
          a: "请通过电子邮件或 LinkedIn 发送项目简介，我将在 24 小时内回复并安排 30 分钟的需求沟通电话 — 无需承诺。",
        },
        {
          q: "您与国际客户合作吗？",
          a: "是的。我的大多数客户来自美国、英国和欧盟。我以异步沟通为主，并可安排时区重叠的通话。",
        },
        {
          q: "项目通常需要多长时间？",
          a: "小型工具和审计：1–2 周。全栈应用和集成：根据范围需要 4–10 周。需求沟通后我将提供详细报价。",
        },
        {
          q: "您提供顾问服务协议吗？",
          a: "是的 — 对于持续合作，我提供从每月 $2,000 起、最多 40 小时的月度顾问协议。",
        },
      ],
    },
    finalCta: {
      text: "准备好开始构建了吗？",
      link: "立即联系",
    },
  },
  about: {
    title: "关于我",
    subtitle: "简单介绍一下我是谁以及我的工作。",
    bio: [
      "我是 Paurush Rai — 一名以前端为主的全栈工程师，总部位于印度，拥有近 5 年设计企业级 Web 平台、AI 驱动应用和开发者生产力工具的经验。我的工作涵盖复杂的 B2B 仪表盘、强大的 LMS 集成、自定义 Jira 和 VS Code 插件等各个领域。",
      "我深切关注性能、clean architecture 以及构建真正有价值的产品。无论是从零打造特许经营门户、开发实时 AI 面试工作流，还是创建每年为公司节省数千美元的内部工具，我始终专注于能够带来可量化影响的工作。",
      "工作之余，我通常在启动一个副项目、自动化繁琐的工作流程，或者探索从未用过的新库 — 我喜欢在真实场景中学习新工具所带来的挑战与摩擦。",
    ],
    whatIBuild: "我构建什么",
    technicalSkills: "技术技能",
    viewFullStack: "在 StackShare 查看完整技术栈",
    workHistory: "工作经历",
    buildItems: [
      "企业B2B平台",
      "人工智能应用程序和工作流程",
      "管理和特许经营仪表板",
      "LMS / LTI 集成",
      "无头 CMS 和 Jamstack",
      "内部开发人员工具",
      "VS Code 和 Jira 插件",
      "数据管道和自动化",
      "自定义组件库",
      "渐进式网络应用程序",
      "浏览器扩展",
    ],
    skills: {
      "语言": ["HTML", "CSS", "JavaScript", "TypeScript", "Handlebars", "MDX"],
      "框架": ["React.js", "Next.js", "Vue.js", "Nuxt.js", "Astro.js", "Electron.js", "React Native"],
      "图书馆": ["Tailwind", "DaisyUI", "Shadcn", "Element Plus", "Chart.js", "Pinia", "Recoil", "Clerk", "Stripe"],
      "数据库": ["PostgreSQL", "MongoDB"],
      "后端": ["Node.js", "Express.js", "Hasura", "Directus", "RESTful APIs", "GraphQL APIs"],
      "版本控制": ["Git", "GitLab", "GitHub"],
      "平台和工具": ["Docker", "Firebase", "Datagrip", "Pipedream", "Vercel", "Apify", "Figma", "AdobeXD"],
      "其他": ["Chrome Plugin", "VS Code Extension", "LTI Plugin", "Jira Plugin", "CI/CD", "Shell Scripting"],
    },
    experience: [
      {
        company: "Testlify",
        role: "高级软件工程师",
        location: "印度孟买",
        period: "2025 年 1 月 – 至今",
        highlights: [
          "构建了一个符合 LTI 要求的插件，将 Testlify 与主要 LMS 平台集成，促进企业采用率增长 20-30%。",
          "构建了 MetaNotes，这是一款具有自动记录、转录和摘要功能的人工智能会议记录器，每年节省 2.4 万美元。",
          "领导了营销网站的前端性能优化，将 Lighthouse 在移动/桌面上的得分从 49/53 提升到 87/91。",
          "设计了一个 VS Code 扩展，通过 Git 分支自动跟踪编码时间并记录到 Jira，将手动跟踪减少 60-70%。",
          "创建了一个用于时间表和成本分配的内部 Jira 插件，每年节省 9,000 美元以上。",
          "实施了人工智能驱动的面试工作流程（聊天、语音、视频人工智能），将面试官的工作量减少了 40% 以上，并推动了 20-30% 的收入增长。",
        ],
      },
      {
        company: "FuelBuddy",
        role: "软件工程师",
        location: "印度古尔冈",
        period: "2023 年 9 月 – 2024 年 12 月",
        highlights: [
          "从头开始构建了自助服务终端应用程序前端，将加油时间减少了 60%。",
          "为客户、管理员、特许经营商和司机开发并扩展了 6 个生产 Web 应用程序。",
          "设计了 8 个用于数据验证和差异解决的管理仪表板，将解决时间缩短了 60-70%。",
          "指导了 3 名开发人员和 5 名实习生，建立了提高质量和入职速度的代码审查实践。",
          "跨多个平台提供了 100 多个端到端功能。",
          "集成 Sentry 和 Clarity，将问题解决时间缩短 30%，并将可操作的用户见解增加 20%。",
        ],
      },
      {
        company: "Modocosm",
        role: "软件工程师",
        location: "美国纽约市（远程）",
        period: "2021 年 7 月 – 2023 年 10 月",
        highlights: [
          "设计和维护 4 个 CMS 驱动的响应式网站，支持持续的流量增长。",
          "解构 Directus CMS 并通过 PostgreSQL 查询简化架构设置，将引导时间减少 70% 以上。",
          "使用 Google Sheets 和 Python 抓取构建了一个自动投注预测系统，将准确性提高了 15-20%。",
          "创建了 100 多个可重用的 UI 组件和设计系统，加速了交付。",
          "通过迁移到 Astro.js Jamstack + Headless CMS，对 7 个旧网站进行现代化改造，将内容发布时间缩短 50%。",
        ],
      },
    ],

  },
  contact: {
    title: "联系我",
  },
};

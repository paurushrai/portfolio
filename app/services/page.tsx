import { Navigation } from "../components/nav";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Hire Paurush Rai for freelance software engineering — full-stack web apps, AI integrations, internal tooling, LMS plugins, and more.",
};

const services = [
  {
    id: "fullstack-web",
    title: "Full-Stack Web Development",
    tagline: "Production-grade apps, built fast.",
    description:
      "End-to-end development of web applications — from architecture and API design to polished frontend. I've built B2B SaaS platforms, multi-tenant dashboards, and customer-facing apps that serve tens of thousands of users.",
    stack: ["React / Next.js", "Vue / Nuxt.js", "Node.js / Express", "PostgreSQL / MongoDB", "REST & GraphQL APIs"],
    deliverables: [
      "Responsive, accessible UI",
      "Authenticated user flows",
      "API design & integration",
      "Deployment-ready codebase",
      "Documentation & handoff",
    ],
    pricing: {
      label: "Starting at",
      amount: "$2,500",
      note: "per project",
    },
    cta: "Start a project",
  },
  {
    id: "ai-integration",
    title: "AI Workflow Integration",
    tagline: "Ship AI-powered features that actually work.",
    description:
      "I integrate LLMs, voice AI, and automation workflows into real products. Built MetaNotes — an AI meeting notetaker that saved $24K/year — and AI-driven interview workflows (chat, voice, video) that cut interviewer effort by 40%.",
    stack: ["OpenAI / Claude / Whisper", "LangChain", "Pipedream / n8n", "Webhooks & event pipelines", "Vector DBs"],
    deliverables: [
      "AI feature scoping & design",
      "LLM prompt engineering",
      "Backend pipeline setup",
      "Frontend AI UX",
      "Cost & latency optimisation",
    ],
    pricing: {
      label: "Starting at",
      amount: "$3,000",
      note: "per project",
    },
    cta: "Discuss your idea",
  },
  {
    id: "internal-tooling",
    title: "Internal Tools & Plugins",
    tagline: "Tools your team will actually use.",
    description:
      "Custom developer tools, Jira plugins, VS Code extensions, and browser extensions. My Jira timesheet plugin saves $9K+/year; my VS Code extension eliminated manual time tracking for an engineering team.",
    stack: ["VS Code Extension API", "Jira Forge / Connect", "Chrome Extensions", "Node.js", "Shell scripting"],
    deliverables: [
      "Scoped requirements & spec",
      "Working plugin / extension",
      "Admin configuration panel",
      "Team rollout support",
    ],
    pricing: {
      label: "Starting at",
      amount: "$1,500",
      note: "per tool",
    },
    cta: "Build your tool",
  },
  {
    id: "lms-lti",
    title: "LMS / LTI Integration",
    tagline: "Connect your platform to any LMS.",
    description:
      "LTI 1.3-compliant plugin development for Moodle, Canvas, Blackboard, and beyond. I architected Testlify's LTI plugin from scratch — a custom cryptographic implementation that drove 20–30% enterprise adoption growth.",
    stack: ["LTI 1.3 / LTI Advantage", "Moodle / Canvas / Blackboard", "OAuth 2.0 / JWKS", "Node.js", "Deep Linking & AGS"],
    deliverables: [
      "LTI 1.3 compliant integration",
      "Deep Linking support",
      "Grade passback (AGS)",
      "Multi-LMS compatibility",
      "Security & token handling",
    ],
    pricing: {
      label: "Starting at",
      amount: "$4,000",
      note: "per integration",
    },
    cta: "Integrate your LMS",
  },
  {
    id: "performance-audit",
    title: "Frontend Performance Audit",
    tagline: "Fast sites convert. Let's fix yours.",
    description:
      "Comprehensive Lighthouse, Core Web Vitals, and bundle analysis with a prioritised fix list. I lifted a production marketing site from 49/53 → 87/91 on mobile/desktop — improvements that directly impact SEO and conversions.",
    stack: ["Lighthouse / PageSpeed", "WebPageTest", "Chrome DevTools", "Next.js / Vite optimisation", "Image & font pipeline"],
    deliverables: [
      "Full Lighthouse audit report",
      "Prioritised issue list",
      "Bundle & asset analysis",
      "Concrete code-level fixes",
      "Before/after benchmark",
    ],
    pricing: {
      label: "Fixed price",
      amount: "$800",
      note: "audit + recommendations",
    },
    cta: "Audit my site",
  },
  {
    id: "cms-jamstack",
    title: "Headless CMS & Jamstack",
    tagline: "Content-first. Launch-optimised.",
    description:
      "Migrate legacy sites to modern Jamstack stacks or build new ones from scratch. I've migrated 7 legacy websites to Astro.js + headless CMS, cutting content launch time by 50%, and built 4 CMS-driven sites that scale with traffic.",
    stack: ["Astro.js / Next.js", "Directus / Contentful / Sanity", "PostgreSQL", "Vercel / Netlify", "MDX / Contentlayer"],
    deliverables: [
      "CMS setup & schema design",
      "Content modelling",
      "Static site generation",
      "Editor-friendly authoring",
      "CI/CD deployment pipeline",
    ],
    pricing: {
      label: "Starting at",
      amount: "$2,000",
      note: "per site",
    },
    cta: "Modernise my site",
  },
];

const faqs = [
  {
    q: "How do I get started?",
    a: "Reach out via email or LinkedIn with a brief description of your project. I'll respond within 24 hours to schedule a 30-minute scoping call — no commitment required.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. Most of my clients are based in the US, UK, and EU. I work async-first with availability for overlap calls.",
  },
  {
    q: "What's your typical timeline?",
    a: "Small tools & audits: 1–2 weeks. Full-stack apps & integrations: 4–10 weeks depending on scope. I'll give you a detailed estimate after the scoping call.",
  },
  {
    q: "Do you offer retainers?",
    a: "Yes — for ongoing work, I offer monthly retainer arrangements starting at $2,000/month for up to 40 hours.",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 relative pb-24">
      <Navigation />

      <main className="px-6 pt-20 mx-auto max-w-5xl lg:px-8 md:pt-24 lg:pt-32">

        {/* ── Header ── */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-medium uppercase tracking-widest text-zinc-500 mb-4">
            Available for freelance
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl mb-5">
            Services
          </h1>
          <p className="text-zinc-400 leading-relaxed">
            I take on a limited number of freelance projects each quarter.
            Everything I build is production-grade, performant, and shipped with
            clean handoff. No agencies, no subcontracting — you work directly
            with me.
          </p>
        </div>

        <div className="w-full h-px bg-zinc-800 mb-16" />

        {/* ── Service Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900/40 p-7 hover:border-zinc-700 hover:bg-zinc-900/70 transition-all duration-300"
            >
              {/* top accent line */}
              <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-zinc-500/0 via-zinc-400/40 to-zinc-500/0 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="mb-5">
                <h2 className="text-lg font-semibold text-zinc-100 mb-1">
                  {service.title}
                </h2>
                <p className="text-xs text-zinc-500 font-medium tracking-wide">
                  {service.tagline}
                </p>
              </div>

              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Deliverables */}
              <ul className="space-y-2 mb-6">
                {service.deliverables.map((d) => (
                  <li key={d} className="flex items-center gap-2.5 text-sm text-zinc-400">
                    <Check className="w-3.5 h-3.5 text-zinc-500 shrink-0" aria-hidden="true" />
                    {d}
                  </li>
                ))}
              </ul>

              {/* Stack tags */}
              <div className="flex flex-wrap gap-1.5 mb-8">
                {service.stack.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 text-[11px] rounded-full bg-zinc-800 text-zinc-500 border border-zinc-700/60"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Pricing + CTA */}
              <div className="mt-auto flex items-end justify-between gap-4">
                <div>
                  <p className="text-[11px] text-zinc-600 uppercase tracking-widest mb-0.5">
                    {service.pricing.label}
                  </p>
                  <p className="text-2xl font-bold text-zinc-100">
                    {service.pricing.amount}
                  </p>
                  <p className="text-xs text-zinc-600">{service.pricing.note}</p>
                </div>

                <Link
                  href={`/contact`}
                  aria-label={service.cta}
                  className="flex items-center gap-1.5 text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-200 group/cta shrink-0"
                >
                  {service.cta}
                  <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-0.5 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* ── Retainer Banner ── */}
        <div className="relative rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8 md:p-10 mb-24 overflow-hidden">
          <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-zinc-500/0 via-zinc-400/30 to-zinc-500/0" />
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-zinc-500 mb-2 font-medium">Ongoing work</p>
              <h2 className="text-xl font-bold text-zinc-100 mb-2">Monthly Retainer</h2>
              <p className="text-sm text-zinc-400 max-w-lg leading-relaxed">
                Need a dedicated engineer on call? I offer retainer arrangements for teams that need ongoing feature work, bug fixes, or a technical partner — without the overhead of a full-time hire.
              </p>
            </div>
            <div className="shrink-0 text-right">
              <p className="text-3xl font-bold text-zinc-100">$2,000<span className="text-base font-normal text-zinc-500">/mo</span></p>
              <p className="text-xs text-zinc-600 mb-4">up to 40 hrs/month</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-100 text-zinc-900 text-sm font-semibold hover:bg-white transition-colors duration-200"
              >
                Let's talk
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* ── FAQ ── */}
        <section className="mb-16">
          <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-8">
            FAQ
          </h2>
          <div className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.q} className="grid md:grid-cols-[1fr_2fr] gap-3 md:gap-8">
                <p className="text-sm font-medium text-zinc-200">{faq.q}</p>
                <p className="text-sm text-zinc-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="w-full h-px bg-zinc-800 mb-12" />

        {/* ── Final CTA ── */}
        <div className="text-center">
          <p className="text-zinc-400 text-sm mb-2">Ready to build something?</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-zinc-100 font-medium hover:text-white transition-colors duration-200 group"
          >
            Get in touch
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
          </Link>
        </div>

      </main>
    </div>
  );
}

import React from "react";
import { Navigation } from "../components/nav";

const skills = {
  Languages: ["HTML", "CSS", "JavaScript", "TypeScript", "Handlebars", "MDX"],
  Frameworks: ["React.js", "Next.js", "Vue.js", "Nuxt.js", "Astro.js", "Electron.js", "React Native"],
  Libraries: ["Tailwind", "DaisyUI", "Shadcn", "Element Plus", "Chart.js", "Pinia", "Recoil", "Clerk", "Stripe"],
  Database: ["PostgreSQL", "MongoDB"],
  "Back End": ["Node.js", "Express.js", "Hasura", "Directus", "RESTful APIs", "GraphQL APIs"],
  "Version Control": ["Git", "GitLab", "GitHub"],
  "Platforms & Tools": ["Docker", "Firebase", "Datagrip", "Pipedream", "Vercel", "Apify", "Figma", "AdobeXD"],
  Other: ["Chrome Plugin", "VS Code Extension", "LTI Plugin", "Jira Plugin", "CI/CD", "Shell Scripting"],
};

const experience = [
  {
    company: "Testlify",
    role: "Senior Software Engineer",
    location: "Mumbai, India",
    period: "January 2025 – Present",
    highlights: [
      "Architected an LTI-compliant plugin integrating Testlify with major LMS platforms, contributing to 20–30% growth in enterprise adoption.",
      "Built MetaNotes, an AI meeting notetaker with automated recording, transcription, and summaries — saving $24K annually.",
      "Led frontend performance optimisation on the marketing site, lifting Lighthouse scores from 49/53 to 87/91 on mobile/desktop.",
      "Engineered a VS Code extension to auto-track coding time by Git branch and log to Jira, cutting manual tracking by 60–70%.",
      "Created an internal Jira plugin for timesheets and cost allocation, saving $9K+ annually.",
      "Implemented AI-driven interview workflows (Chat, Voice, Video AI), reducing interviewer effort by 40%+ and driving 20–30% revenue growth.",
    ],
  },
  {
    company: "FuelBuddy",
    role: "Software Engineer",
    location: "Gurugram, India",
    period: "September 2023 – December 2024",
    highlights: [
      "Built a kiosk application frontend from scratch, reducing fuel dispensing time by 60%.",
      "Developed and scaled 6 production web applications for customers, admins, franchises, and drivers.",
      "Designed 8 admin dashboards for data validation and discrepancy resolution, reducing resolution time by 60–70%.",
      "Mentored 3 developers and 5 interns, establishing code review practices that improved quality and onboarding speed.",
      "Delivered 100+ features end-to-end across multiple platforms.",
      "Integrated Sentry and Clarity, reducing issue resolution time by 30% and increasing actionable user insights by 20%.",
    ],
  },
  {
    company: "Modocosm",
    role: "Software Engineer",
    location: "New York City, US (Remote)",
    period: "July 2021 – October 2023",
    highlights: [
      "Designed and maintained 4 CMS-driven responsive websites supporting sustained traffic growth.",
      "Deconstructed Directus CMS and streamlined schema setup with PostgreSQL queries, reducing bootstrapping time by 70%+.",
      "Architected an automated betting projection system using Google Sheets and Python scraping, improving accuracy by 15–20%.",
      "Created 100+ reusable UI components and design systems, accelerating delivery.",
      "Modernised 7 legacy websites by migrating to Astro.js Jamstack + headless CMS, cutting content launch time by 50%.",
    ],
  },
];

export default function AboutPage() {
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-16 max-w-4xl lg:px-8 md:pt-24 lg:pt-32">

        {/* ── Header ── */}
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            About Me
          </h1>
          <p className="mt-4 text-zinc-400">
            A little background on who I am and what I do.
          </p>
        </div>

        <div className="w-full h-px bg-zinc-800" />

        {/* ── Bio ── */}
        <div className="space-y-5 text-zinc-400 leading-relaxed text-base">
          <p>
            I'm <span className="text-zinc-100 font-medium">Paurush Rai</span> — a frontend-leaning full-stack engineer based in India, with almost 5 years of experience
            building performant web platforms and developer productivity tools. My work spans product UIs, internal tooling, browser
            extensions, LMS integrations, and everything in between.
          </p>
          <p>
            I care deeply about performance, clean architecture, and shipping things that actually matter — not just
            features that look good in a sprint review, but work that measurably moves the needle. That focus on
            impact is what keeps me product-minded even when I'm deep in the code.
          </p>
          <p>
            Outside of work I'm usually spinning up a side project or reaching for a library I've never touched before —
            I like the friction of learning new tools in real contexts.
          </p>
        </div>

        {/* ── What I Build ── */}
        <section>
          <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-5">What I Build</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "CMS-integrated Websites",
              "Data Scraping & Orchestration Workflows",
              "Web Applications",
              "Mobile Apps",
              "Progressive Web Apps",
              "Admin Dashboards",
              "Desktop Software",
              "VS Code Extensions",
              "Jira Plugins",
              "LTI Plugins",
              "Chrome Extensions",
              "Developer Tooling",
            ].map((item) => (
              <span
                key={item}
                className="px-3 py-1.5 text-xs rounded-full bg-zinc-800/60 text-zinc-300 border border-zinc-700/60 hover:border-zinc-500 hover:text-zinc-100 duration-200"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        <div className="w-full h-px bg-zinc-800" />

        {/* ── Tech Skills ── */}
        <section>
          <h2 className="text-2xl font-bold text-zinc-100 mb-8">Technical Skills</h2>
          <div className="space-y-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="grid grid-cols-[140px_1fr] gap-4 items-start">
                <span className="text-sm font-medium text-zinc-500 pt-1">{category}</span>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700 hover:border-zinc-500 hover:text-zinc-100 duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="w-full h-px bg-zinc-800" />

        {/* ── Work History ── */}
        <section className="pb-4">
          <h2 className="text-2xl font-bold text-zinc-100 mb-10">Work History</h2>
          <div className="relative space-y-12 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-zinc-800">
            {experience.map((job) => (
              <div key={job.company} className="relative pl-8">
                {/* timeline dot */}
                <div className="absolute left-0 top-[6px] -translate-x-1/2 w-[9px] h-[9px] rounded-full bg-zinc-600 border border-zinc-500" />

                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                  <h3 className="text-lg font-semibold text-zinc-100">{job.company}</h3>
                  <span className="text-xs text-zinc-500 shrink-0">{job.period}</span>
                </div>
                <p className="text-sm text-zinc-400 mb-4">
                  {job.role} &mdash; {job.location}
                </p>

                <ul className="space-y-2">
                  {job.highlights.map((point, i) => (
                    <li key={i} className="flex gap-3 text-sm text-zinc-400">
                      <span className="mt-[6px] shrink-0 w-1 h-1 rounded-full bg-zinc-600" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}

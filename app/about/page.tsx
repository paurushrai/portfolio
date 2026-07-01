"use client";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { Navigation } from "../components/nav";
import { useLanguage } from "../i18n/LanguageContext";


export default function AboutPage() {
  const { t } = useLanguage();
  const a = t.about;
  return (
    <div className="bg-linear-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 relative pb-16">
      <Navigation />
      <main className="px-6 pt-20 mx-auto space-y-16 max-w-4xl lg:px-8 md:pt-24 lg:pt-32">

        {/* ── Header ── */}
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            {a.title}
          </h1>
          <p className="mt-4 text-zinc-400">{a.subtitle}</p>
          <a
            href="/resume.pdf"
            download="Paurush_Rai_Resume.pdf"
            className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-700 bg-zinc-800/50 text-sm text-zinc-300 hover:text-zinc-100 hover:border-zinc-500 hover:bg-zinc-800 duration-200"
          >
            <Download className="w-4 h-4" />
            {a.downloadResume}
          </a>
        </div>

        <div className="w-full h-px bg-zinc-800" />

        {/* ── Bio ── */}
        <div className="space-y-5 text-zinc-400 leading-relaxed text-base">
          {a.bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        {/* ── What I Build ── */}
        <section>
          <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-5">{a.whatIBuild}</h2>
          <div className="flex flex-wrap gap-2">
            {a.buildItems.map((item) => (
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
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <h2 className="text-2xl font-bold text-zinc-100">{a.technicalSkills}</h2>
            <Link
              href="https://stackshare.io/paurushrai/my-stack"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-200 duration-200 group"
            >
              <span className="border-b border-transparent group-hover:border-zinc-500 transition-colors">
                {a.viewFullStack}
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 duration-200" />
            </Link>
          </div>
          <div className="space-y-6">
            {Object.entries(a.skills).map(([category, items]) => (
              <div key={category} className="grid grid-cols-[140px_1fr] gap-4 items-start">
                <span className="text-sm font-medium text-zinc-400 pt-1">{category}</span>
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
          <h2 className="text-2xl font-bold text-zinc-100 mb-10">{a.workHistory}</h2>
          <div className="relative space-y-12 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-zinc-800">
            {a.experience.map((job) => (
              <div key={job.company} className="relative pl-8">
                {/* timeline dot */}
                <div className="absolute left-0 top-[6px] -translate-x-1/2 w-[9px] h-[9px] rounded-full bg-zinc-600 border border-zinc-500" />

                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                  <h3 className="text-lg font-semibold text-zinc-100">{job.company}</h3>
                  <span className="text-xs text-zinc-400 shrink-0">{job.period}</span>
                </div>
                <p className="text-sm text-zinc-400 mb-4">
                  {job.role} &mdash; {job.location}
                </p>

                <ul className="space-y-2">
                  {job.highlights.map((point) => (
                    <li key={point} className="flex gap-3 text-sm text-zinc-400">
                      <span className="mt-[6px] shrink-0 w-1 h-1 rounded-full bg-zinc-600" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}

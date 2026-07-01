"use client";
import { Navigation } from "../components/nav";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

export default function ServicesPage() {
  const { t } = useLanguage();
  const s = t.services;

  return (
    <div className="bg-linear-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 relative pb-24">
      <Navigation />

      <main className="px-6 pt-20 mx-auto max-w-5xl lg:px-8 md:pt-24 lg:pt-32">

        {/* ── Header ── */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-4">
            {s.badge}
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl mb-5">
            {s.title}
          </h1>
          <p className="text-zinc-400 leading-relaxed">{s.intro}</p>
        </div>

        <div className="w-full h-px bg-zinc-800 mb-16" />

        {/* ── Service Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {s.servicesList.map((service) => (
            <div
              key={service.id}
              className="group relative flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900/40 p-7 hover:border-zinc-700 hover:bg-zinc-900/70 transition-all duration-300"
            >
              <span className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-zinc-500/0 via-zinc-400/40 to-zinc-500/0 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="mb-5">
                <h2 className="text-lg font-semibold text-zinc-100 mb-1">
                  {service.title}
                </h2>
                <p className="text-xs text-zinc-400 font-medium tracking-wide">
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
                {service.stack.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-[11px] rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Pricing + CTA */}
              <div className="mt-auto flex items-end justify-between gap-4">
                <div>
                  <p className="text-[11px] text-zinc-500 uppercase tracking-widest mb-0.5">
                    {s.pricing[service.pricingKey as keyof typeof s.pricing]}
                  </p>
                  <p className="text-2xl font-bold text-zinc-100">{service.amount}</p>
                  <p className="text-xs text-zinc-500">{s.pricing[service.noteKey as keyof typeof s.pricing]}</p>
                </div>
                <Link
                  href="/contact"
                  aria-label={s.cta[service.ctaKey as keyof typeof s.cta]}
                  className="flex items-center gap-1.5 text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-200 group/cta shrink-0"
                >
                  {s.cta[service.ctaKey as keyof typeof s.cta]}
                  <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-0.5 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* ── Retainer Banner ── */}
        <div className="relative rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8 md:p-10 mb-24 overflow-hidden">
          <span className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-zinc-500/0 via-zinc-400/30 to-zinc-500/0" />
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-zinc-400 mb-2 font-medium">
                {s.retainer.label}
              </p>
              <h2 className="text-xl font-bold text-zinc-100 mb-2">{s.retainer.title}</h2>
              <p className="text-sm text-zinc-400 max-w-lg leading-relaxed">
                {s.retainer.description}
              </p>
            </div>
            <div className="shrink-0 text-right">
              <p className="text-3xl font-bold text-zinc-100">
                $2,000<span className="text-base font-normal text-zinc-400">/mo</span>
              </p>
              <p className="text-xs text-zinc-500 mb-4">{s.retainer.hours}</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-100 text-zinc-900 text-sm font-semibold hover:bg-white transition-colors duration-200"
              >
                {s.retainer.cta}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* ── FAQ ── */}
        <section className="mb-16">
          <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-widest mb-8">
            {s.faq.title}
          </h2>
          <div className="space-y-8">
            {s.faq.items.map((faq) => (
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
          <p className="text-zinc-400 text-sm mb-2">{s.finalCta.text}</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-zinc-100 font-medium hover:text-white transition-colors duration-200 group"
          >
            {s.finalCta.link}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
          </Link>
        </div>

      </main>
    </div>
  );
}

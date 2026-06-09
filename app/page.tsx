"use client";
import Link from "next/link";
import React from "react";
import dynamic from "next/dynamic";
import { Download } from "lucide-react";
import { useLanguage } from "./i18n/LanguageContext";
import { LanguageSwitcher } from "./components/LanguageSwitcher";

const Particles = dynamic(() => import("./components/particles"), {
  ssr: false,
  loading: () => null,
});

export default function Home() {
  const { t } = useLanguage();

  const navigation = [
    { name: t.nav.about, href: "/about" },
    { name: t.nav.projects, href: "/projects" },
    { name: t.nav.articles, href: "/articles" },
    // { name: t.nav.services, href: "/services" },
    { name: t.nav.contact, href: "/contact" },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-screen h-[100dvh] overflow-hidden bg-gradient-to-tl from-black via-zinc-900/50 to-black">
      {/* Language switcher — top right on home page */}
      <div className="absolute top-6 right-6 z-50">
        <LanguageSwitcher />
      </div>

      {/* Privacy link — bottom right */}
      <div className="absolute bottom-6 right-6 z-50">
        <Link
          href="/privacy"
          className="text-xs text-zinc-600 hover:text-zinc-400 duration-300 transition-colors"
        >
          Privacy Policy
        </Link>
      </div>

      <nav aria-label="Main navigation" className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <main className="flex flex-col items-center">
        <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text">
          Paurush Rai
        </h1>

        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <div className="my-16 text-center animate-fade-in flex flex-col items-center gap-4 px-6 md:px-0">
          <p className="text-sm text-zinc-400 max-w-sm">{t.home.tagline}</p>
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-700/60 bg-zinc-900/40 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs text-zinc-400 tracking-wide">
                {t.home.openToWork}
              </span>
            </div>
            <a
              href="/resume.pdf"
              download="Paurush_Rai_Resume.pdf"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-700/60 bg-zinc-900/40 backdrop-blur-sm text-xs text-zinc-400 hover:text-zinc-100 hover:border-zinc-500 duration-200"
            >
              <Download className="w-3 h-3" />
              {t.home.resume}
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

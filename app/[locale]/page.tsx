"use client";
import { Download, Send } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { LanguageSwitcher } from "../components/LanguageSwitcher";
import { SocialLinks } from "../components/social-links";
import { useLanguage } from "../i18n/LanguageContext";
import { RESUME_URL } from "../lib/resume";

const Particles = dynamic(() => import("../components/particles"), {
  ssr: false,
  loading: () => null,
});

export default function Home() {
  const { t, localePath } = useLanguage();

  const navigation = [
    { name: t.nav.about, href: "/about" },
    { name: t.nav.projects, href: "/projects" },
    { name: t.nav.blogs, href: "/blogs" },
    // Hidden from primary nav - shared directly with freelance clients, kept in sitemap.ts.
    // { name: t.nav.services, href: "/services" },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-screen h-dvh overflow-hidden bg-linear-to-tl from-black via-zinc-900/50 to-black">
      {/* Language switcher - top right on home page */}
      <div className="absolute top-6 right-6 z-50">
        <LanguageSwitcher />
      </div>

      {/* Privacy link - bottom right */}
      <div className="absolute bottom-6 right-6 z-50">
        <Link
          href={localePath("/privacy")}
          className="text-xs text-zinc-600 hover:text-zinc-400 duration-300 transition-colors"
        >
          {t.nav.privacy}
        </Link>
      </div>

      {/* Socials - bottom left */}
      <div className="absolute bottom-6 left-6 z-50">
        <SocialLinks
          tone="bright"
          className="rounded-full border border-zinc-800/60 bg-zinc-900/60 px-3.5 py-2 backdrop-blur-xs"
        />
      </div>

      <nav aria-label="Main navigation" className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item, index) => (
            <li key={item.href}>
              <Link
                href={localePath(item.href)}
                className="group relative text-sm text-zinc-500 duration-500 hover:text-zinc-300"
              >
                {item.name}
                <span
                  className="absolute inset-x-0 -bottom-1 h-px origin-center scale-x-0 bg-zinc-300 transition-transform duration-300 animate-nav-hint group-hover:scale-x-100 group-focus-visible:scale-x-100"
                  style={{ animationDelay: `${2.6 + index * 0.15}s` }}
                />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-linear-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <main className="flex flex-col items-center">
        <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text">
          Paurush Rai
        </h1>

        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-linear-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <div className="my-16 text-center animate-fade-in flex flex-col items-center gap-4 px-6 md:px-0">
          <p className="text-sm text-zinc-400 whitespace-nowrap">
            {t.home.tagline.role}, {t.home.tagline.detail}
          </p>
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <Link
              href={localePath("/contact")}
              className="inline-flex items-center gap-[9px] rounded-full bg-zinc-100 px-4 py-[9px] text-[13.5px] font-semibold tracking-[0.2px] text-zinc-900 duration-200 hover:bg-white hover:scale-105 active:scale-95"
            >
              <Send className="w-3.5 h-3.5" />
              {t.nav.contact}
            </Link>
            <a
              href={RESUME_URL}
              download="Paurush_Rai_Resume.pdf"
              className="inline-flex items-center gap-[9px] rounded-full bg-zinc-800 px-4 py-[9px] text-[13.5px] font-semibold tracking-[0.2px] text-zinc-200 hover:bg-zinc-700 duration-200"
            >
              <Download className="w-3.5 h-3.5" />
              {t.home.resume}
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

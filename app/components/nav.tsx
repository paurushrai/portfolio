"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";

export const Navigation: React.FC = () => {
  const { t } = useLanguage();
  const [isIntersecting, setIsIntersecting] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsIntersecting(window.scrollY < 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <div
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur transition-colors duration-200 border-b transform-gpu ${
          isIntersecting
            ? "bg-zinc-900/0 border-transparent"
            : "bg-zinc-900/50 border-zinc-800"
        }`}
      >
        <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
          <div className="flex items-center gap-4 md:gap-7">
            <Link
              href="/about"
              className="duration-200 text-zinc-400 hover:text-zinc-100 text-sm rounded px-1"
            >
              {t.nav.about}
            </Link>
            <Link
              href="/projects"
              className="duration-200 text-zinc-400 hover:text-zinc-100 text-sm rounded px-1"
            >
              {t.nav.projects}
            </Link>
            <Link
              href="/articles"
              className="duration-200 text-zinc-400 hover:text-zinc-100 text-sm rounded px-1"
            >
              {t.nav.articles}
            </Link>
            {/* <Link
              href="/services"
              className="duration-200 text-zinc-400 hover:text-zinc-100 text-sm rounded px-1"
            >
              {t.nav.services}
            </Link> */}
            <Link
              href="/contact"
              className="duration-200 text-zinc-400 hover:text-zinc-100 text-sm rounded px-1"
            >
              {t.nav.contact}
            </Link>
            <LanguageSwitcher />
          </div>

          <Link
            href="/"
            aria-label="Back to home"
            className="duration-200 text-zinc-300 hover:text-zinc-100 rounded"
          >
            <ArrowLeft className="w-6 h-6" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </header>
  );
};

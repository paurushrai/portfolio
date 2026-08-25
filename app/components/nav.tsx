"use client";
import { ArrowLeft, Menu, X } from "lucide-react";
import Link from "next/link";
import type React from "react";
import { useEffect, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";

export const Navigation: React.FC = () => {
  const { t, localePath } = useLanguage();
  const [isIntersecting, setIsIntersecting] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsIntersecting(window.scrollY < 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/about", label: t.nav.about },
    { href: "/projects", label: t.nav.projects },
    { href: "/blogs", label: t.nav.blogs },
    { href: "/services", label: t.nav.services },
    { href: "/contact", label: t.nav.contact },
  ];

  const linkClass =
    "duration-200 text-zinc-400 hover:text-zinc-100 text-sm rounded-sm px-1";

  return (
    <header>
      {menuOpen && (
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 z-40 md:hidden bg-black/50 backdrop-blur-xs"
        />
      )}
      <div
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur-sm transition-colors duration-200 border-b transform-gpu ${
          isIntersecting && !menuOpen
            ? "bg-zinc-900/0 border-transparent"
            : "bg-zinc-900/50 border-zinc-800"
        }`}
      >
        <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
          <div className="flex items-center gap-4 md:gap-7">
            <nav className="items-center hidden gap-4 md:flex md:gap-7">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={localePath(link.href)}
                  className={linkClass}
                >
                  {link.label}
                </Link>
              ))}
              <LanguageSwitcher />
            </nav>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="duration-200 rounded-sm md:hidden text-zinc-300 hover:text-zinc-100"
            >
              {menuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>

          <Link
            href={localePath("/")}
            aria-label="Back to home"
            className="duration-200 rounded-sm text-zinc-300 hover:text-zinc-100"
          >
            <ArrowLeft className="w-6 h-6" aria-hidden="true" />
          </Link>
        </div>

        {menuOpen && (
          <nav className="flex flex-col px-6 pb-4 md:hidden">
            {links.map((link) => (
              <Link
                key={link.href}
                href={localePath(link.href)}
                onClick={() => setMenuOpen(false)}
                className="px-2 py-3 text-base duration-200 border-b text-zinc-300 hover:text-zinc-100 border-zinc-800/60"
              >
                {link.label}
              </Link>
            ))}
            <div className="px-2 pt-4">
              <LanguageSwitcher />
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

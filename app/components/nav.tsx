"use client";
import { ArrowLeft, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type React from "react";
import { useEffect, useState } from "react";
import { stripLocale } from "../i18n/config";
import { useLanguage } from "../i18n/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";

export const Navigation: React.FC = () => {
  const { t, localePath } = useLanguage();
  const [isIntersecting, setIsIntersecting] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const currentPath = stripLocale(usePathname() ?? "/");

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
    // Hidden from primary nav - shared directly with freelance clients, kept in sitemap.ts.
    // { href: "/services", label: t.nav.services },
    { href: "/contact", label: t.nav.contact },
  ];

  const isActive = (href: string) =>
    currentPath === href || currentPath.startsWith(`${href}/`);

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
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur-sm transition-colors duration-200 border-b ${
          isIntersecting && !menuOpen
            ? "bg-zinc-900/0 border-transparent"
            : "bg-zinc-900/50 border-zinc-800"
        }`}
      >
        <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
          <div className="flex items-center gap-4 md:gap-7">
            <nav className="items-center hidden gap-4 md:flex md:gap-7">
              {links.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={localePath(link.href)}
                    aria-current={active ? "page" : undefined}
                    className={`group relative text-sm duration-200 rounded-sm px-1 ${
                      active
                        ? "text-zinc-100"
                        : "text-zinc-400 hover:text-zinc-100"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute inset-x-1 -bottom-1.5 h-px origin-center transition-transform duration-300 ${
                        active
                          ? "scale-x-100 bg-zinc-100"
                          : "scale-x-0 bg-zinc-300 group-hover:scale-x-100 group-focus-visible:scale-x-100"
                      }`}
                    />
                  </Link>
                );
              })}
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
            {links.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={localePath(link.href)}
                  onClick={() => setMenuOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`px-2 py-3 text-base duration-200 border-b border-zinc-800/60 ${
                    active
                      ? "text-zinc-100 font-medium"
                      : "text-zinc-300 hover:text-zinc-100"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="px-2 pt-4">
              <LanguageSwitcher />
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

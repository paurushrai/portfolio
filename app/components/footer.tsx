"use client";

import { Send } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { stripLocale } from "../i18n/config";
import { useLanguage } from "../i18n/LanguageContext";
import { RevolvingBorder } from "./revolving-border";
import { SocialLinks } from "./social-links";

const DETAIL_PAGE_RE = /^\/(projects|blogs)\/.+/;

export function Footer() {
  const { t, localePath } = useLanguage();
  const pathname = usePathname();
  const isDetailPage = DETAIL_PAGE_RE.test(stripLocale(pathname ?? "/"));

  const navLinks = [
    { href: "/about", label: t.nav.about },
    { href: "/projects", label: t.nav.projects },
    { href: "/blogs", label: t.nav.blogs },
    // Hidden from footer - shared directly with freelance clients, kept in sitemap.ts.
    // { href: "/services", label: t.nav.services },
  ];

  return (
    <footer className="border-t border-zinc-800 bg-black">
      <div className="container mx-auto flex flex-col gap-8 p-6 lg:px-8 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} Paurush Rai. All rights reserved.
        </p>

        {isDetailPage && (
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-zinc-400">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={localePath(link.href)}
                className="duration-200 hover:text-zinc-100"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}

        <div className="flex items-center gap-6">
          <SocialLinks />

          <Link
            href={localePath("/contact")}
            className="relative inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm text-zinc-300 duration-200 hover:text-white overflow-hidden"
          >
            <RevolvingBorder />
            <span className="relative flex items-center gap-1.5">
              <Send className="w-3.5 h-3.5" aria-hidden="true" />
              {t.nav.contact}
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
}

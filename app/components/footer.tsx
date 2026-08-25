"use client";

import { Github, LinkedinIcon, Mail, MessageCircle, Send } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { stripLocale } from "../i18n/config";
import { useLanguage } from "../i18n/LanguageContext";
import { SOCIAL_LINKS } from "../lib/social-links";

const DETAIL_PAGE_RE = /^\/(projects|blogs)\/.+/;

const ICONS: Record<(typeof SOCIAL_LINKS)[number]["id"], React.ReactNode> = {
  linkedin: <LinkedinIcon className="w-4 h-4" aria-hidden="true" />,
  github: <Github className="w-4 h-4" aria-hidden="true" />,
  email: <Mail className="w-4 h-4" aria-hidden="true" />,
  discord: <MessageCircle className="w-4 h-4" aria-hidden="true" />,
};

export function Footer() {
  const { t, localePath } = useLanguage();
  const pathname = usePathname();
  const isDetailPage = DETAIL_PAGE_RE.test(stripLocale(pathname ?? "/"));

  const navLinks = [
    { href: "/about", label: t.nav.about },
    { href: "/projects", label: t.nav.projects },
    { href: "/blogs", label: t.nav.blogs },
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
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.id}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-zinc-500 duration-200 hover:text-zinc-200"
              >
                {ICONS[s.id]}
              </a>
            ))}
          </div>

          <Link
            href={localePath("/contact")}
            className="inline-flex items-center gap-1.5 rounded-full border border-zinc-700 px-3.5 py-1.5 text-sm text-zinc-300 duration-200 hover:border-zinc-500 hover:text-white"
          >
            <Send className="w-3.5 h-3.5" aria-hidden="true" />
            {t.nav.contact}
          </Link>
        </div>
      </div>
    </footer>
  );
}

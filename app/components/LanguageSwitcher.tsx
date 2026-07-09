"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import type { Language } from "../i18n/translations";

const languages: { code: Language; label: string; flag: string }[] = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "ja", label: "日本語", flag: "🇯🇵" },
  { code: "zh", label: "中文", flag: "🇨🇳" },
  { code: "pt", label: "Português", flag: "🇧🇷" },
  { code: "hi", label: "हिन्दी", flag: "🇮🇳" },
  { code: "ko", label: "한국어", flag: "🇰🇷" },
  { code: "it", label: "Italiano", flag: "🇮🇹" },
  { code: "ru", label: "Русский", flag: "🇷🇺" },
  { code: "tr", label: "Türkçe", flag: "🇹🇷" },
];

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLButtonElement | null)[]>([]);

  // On open, move focus into the menu at the current language (APG menu pattern).
  useEffect(() => {
    if (!open) return;
    const currentIndex = Math.max(
      0,
      languages.findIndex((l) => l.code === language),
    );
    itemsRef.current[currentIndex]?.focus();
  }, [open, language]);

  const handleMenuKeyDown = (e: React.KeyboardEvent, index: number) => {
    const lastIndex = languages.length - 1;
    let nextIndex: number | null = null;
    switch (e.key) {
      case "ArrowDown":
        nextIndex = index === lastIndex ? 0 : index + 1;
        break;
      case "ArrowUp":
        nextIndex = index === 0 ? lastIndex : index - 1;
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = lastIndex;
        break;
      default:
        return;
    }
    e.preventDefault();
    itemsRef.current[nextIndex]?.focus();
  };

  // Close on outside click or Escape
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const current = languages.find((l) => l.code === language) ?? languages[0];

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        id="language-switcher-btn"
        onClick={() => setOpen((o) => !o)}
        aria-label="Select language"
        aria-expanded={open}
        aria-haspopup="menu"
        className="flex items-center gap-1 text-zinc-400 hover:text-zinc-100 transition-colors duration-200 select-none"
      >
        <span className="text-base leading-none font-flag">{current.flag}</span>
        <span className="text-xs font-medium uppercase tracking-wider">
          {current.code}
        </span>
        <ChevronDown
          className={`w-3 h-3 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div
          role="menu"
          aria-label="Language options"
          className="absolute right-0 top-full mt-2 w-38 rounded-xl border border-zinc-800 bg-zinc-950 shadow-2xl shadow-black/60 overflow-hidden z-60"
        >
          {languages.map((lang, index) => (
            <button
              type="button"
              key={lang.code}
              ref={(el) => {
                itemsRef.current[index] = el;
              }}
              role="menuitem"
              tabIndex={-1}
              aria-current={language === lang.code ? "true" : undefined}
              onClick={() => {
                setLanguage(lang.code);
                setOpen(false);
              }}
              onKeyDown={(e) => handleMenuKeyDown(e, index)}
              className={`w-full flex items-center gap-2.5 px-3.5 py-2 text-sm text-left transition-colors duration-150 ${
                language === lang.code
                  ? "text-zinc-100 bg-zinc-800"
                  : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50"
              }`}
            >
              <span className="text-base leading-none font-flag">
                {lang.flag}
              </span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

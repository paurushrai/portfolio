"use client";

import { polyfillCountryFlagEmojis } from "country-flag-emoji-polyfill";
import type React from "react";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import { translations, type Language, type Locale } from "./translations";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Locale;
};

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: translations.en,
});

const SUPPORTED: Language[] = ["en", "de", "fr", "es", "ja", "zh", "pt", "hi", "ko", "it", "ru", "tr"];

function detectBrowserLanguage(): Language {
  if (typeof window === "undefined") return "en";
  for (const lang of navigator.languages ?? [navigator.language]) {
    const code = lang.toLowerCase().split("-")[0] as Language;
    if (SUPPORTED.includes(code)) return code;
  }
  return "en";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Windows has no native flag emoji glyphs; this injects a Twemoji
    // flags-only font on platforms where flags don't render.
    polyfillCountryFlagEmojis();
    const stored = localStorage.getItem("lang") as Language | null;
    const lang =
      stored && SUPPORTED.includes(stored) ? stored : detectBrowserLanguage();
    setLanguageState(lang);
    setMounted(true);
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("lang", lang);
  }, []);

  const t = mounted ? translations[language] : translations.en;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

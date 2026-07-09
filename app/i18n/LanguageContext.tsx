"use client";

import { polyfillCountryFlagEmojis } from "country-flag-emoji-polyfill";
import { usePathname, useRouter } from "next/navigation";
import type React from "react";
import { createContext, useCallback, useContext, useEffect } from "react";
import {
  type AppLocale,
  DEFAULT_LOCALE,
  localizedPath,
  stripLocale,
} from "./config";
import { type Locale, translations } from "./translations";

type LanguageContextType = {
  language: AppLocale;
  setLanguage: (lang: AppLocale) => void;
  /** Prefix an app path for the active locale (default locale stays unprefixed). */
  localePath: (path: string) => string;
  t: Locale;
};

const LanguageContext = createContext<LanguageContextType>({
  language: DEFAULT_LOCALE,
  setLanguage: () => {},
  localePath: (path) => path,
  t: translations.en,
});

export function LanguageProvider({
  locale,
  children,
}: {
  locale: AppLocale;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Windows has no native flag emoji glyphs; inject a Twemoji flags-only font.
    polyfillCountryFlagEmojis();
  }, []);

  // Switching language navigates to the same page under the target locale.
  const setLanguage = useCallback(
    (lang: AppLocale) => {
      const basePath = stripLocale(pathname ?? "/");
      router.push(localizedPath(basePath, lang));
    },
    [pathname, router],
  );

  const localePath = useCallback(
    (path: string) => localizedPath(path, locale),
    [locale],
  );

  return (
    <LanguageContext.Provider
      value={{ language: locale, setLanguage, localePath, t: translations[locale] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

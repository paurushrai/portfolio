import { SITE_URL, type AppLocale, DEFAULT_LOCALE, localizedPath } from "../i18n/config";
import { translations } from "../i18n/translations";

export const AUTHOR_NAME = "Paurush Rai";

export const personRef = {
  "@type": "Person" as const,
  name: AUTHOR_NAME,
  url: SITE_URL,
};

/** BreadcrumbList JSON-LD. `path` is the unprefixed (default-locale) route. */
export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${localizedPath(item.path, DEFAULT_LOCALE)}`,
    })),
  };
}

/** FAQPage JSON-LD sourced from the active locale's FAQ copy. */
export function faqJsonLd(locale: AppLocale) {
  const items = translations[locale].services.faq.items;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

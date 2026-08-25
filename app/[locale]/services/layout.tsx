import type { Metadata } from "next";
import { Footer } from "../../components/footer";
import { type AppLocale, DEFAULT_LOCALE, alternatesFor, isLocale } from "../../i18n/config";
import { en } from "../../i18n/locales/en";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: en.services.faq.items.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale: AppLocale = isLocale(params.locale) ? params.locale : DEFAULT_LOCALE;
  const alternates = alternatesFor("/services", locale);
  return {
    title: "Freelance Software Engineer for Hire — Paurush Rai",
    description:
      "Hire Paurush Rai for freelance software engineering — full-stack web apps, AI integrations, internal tooling, LMS plugins, and more.",
    keywords: [
      "Freelance Full-Stack Developer",
      "Hire Senior Product Engineer",
      "AI Integration Services",
      "LMS Plugin Development",
      "Internal Tooling Development",
      "MVP Development",
      "React Development Services",
    ],
    alternates,
    openGraph: {
      title: "Freelance Software Engineer for Hire — Paurush Rai",
      description:
        "Hire Paurush Rai for freelance software engineering — full-stack web apps, AI integrations, internal tooling, LMS plugins, and more.",
      url: alternates.canonical,
    },
  };
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* JSON-LD structured data, serialized from trusted app constants (no user input). */}
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD from trusted app constants, no user input
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
      <Footer />
    </>
  );
}

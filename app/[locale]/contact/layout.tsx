import type { Metadata } from "next";
import { Footer } from "../../components/footer";
import { type AppLocale, DEFAULT_LOCALE, alternatesFor, isLocale } from "../../i18n/config";
import { personRef } from "../../lib/schema";

export async function generateMetadata(
  props: {
    params: Promise<{ locale: string }>;
  }
): Promise<Metadata> {
  const params = await props.params;
  const locale: AppLocale = isLocale(params.locale) ? params.locale : DEFAULT_LOCALE;
  const alternates = alternatesFor("/contact", locale);
  return {
    title: "Contact | Paurush Rai | Hire a Senior Software Engineer & Full-Stack Developer",
    description: "Get in touch with Paurush Rai, Senior Software Engineer, Senior Frontend Engineer & Frontend-Focused Full-Stack Developer available for full-stack, frontend, and AI integration roles.",
    keywords: [
      "Hire Senior Software Engineer",
      "Hire Senior Frontend Engineer",
      "Hire Full-Stack Developer",
      "Hire Frontend-Focused Full Stack Developer",
      "Hire Frontend Expert",
      "Hire Senior Full-Stack Engineer",
      "Hire React Developer",
      "Hire Node.js Developer",
      "AI Integration Developer",
      "Freelance Software Engineer India",
      "Contact Paurush Rai",
    ],
    alternates,
    openGraph: {
      title: "Contact | Paurush Rai | Senior Software Engineer & Full-Stack Developer",
      description: "Available for senior software engineering, full-stack, frontend architecture, and AI integration roles. Let's build something great together.",
      url: alternates.canonical,
    },
  };
}

export default async function ContactLayout(
  props: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
  }
) {
  const params = await props.params;
  const locale: AppLocale = isLocale(params.locale) ? params.locale : DEFAULT_LOCALE;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: alternatesFor("/contact", locale).canonical,
    mainEntity: personRef,
  };

  return (
    <>
      {/* JSON-LD structured data, serialized from trusted app constants (no user input). */}
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD from trusted app constants, no user input
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {props.children}
      <Footer />
    </>
  );
}

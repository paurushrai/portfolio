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
  const alternates = alternatesFor("/about", locale);
  return {
    title: "About Paurush Rai | Senior Software Engineer & Full-Stack Developer",
    description: "Meet Paurush Rai, Senior Software Engineer & Frontend-Focused Full-Stack Developer with 5+ years building enterprise SaaS, AI platforms, and developer tools. Based in India.",
    keywords: [
      "Senior Software Engineer",
      "Senior Frontend Engineer",
      "Full-Stack Developer",
      "Frontend-Focused Full Stack Developer",
      "Frontend Expert",
      "Expert Frontend Engineer",
      "Senior Full-Stack Engineer",
      "Hire Senior Software Engineer",
      "Hire Senior Frontend Engineer",
      "Hire Full-Stack Developer",
      "React Developer",
      "Next.js Developer",
      "React Native Developer",
      "TypeScript",
      "Node.js",
      "AI Integration",
      "Enterprise SaaS",
      "India Software Engineer",
      "Paurush Rai",
    ],
    alternates,
    openGraph: {
      title: "About Paurush Rai | Senior Software Engineer & Full-Stack Developer",
      description: "5+ years building enterprise SaaS, AI platforms, and developer tools. Full-stack TypeScript and frontend architecture specialist based in India.",
      url: alternates.canonical,
    },
  };
}


export default async function AboutLayout(
  props: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
  }
) {
  const params = await props.params;
  const locale: AppLocale = isLocale(params.locale) ? params.locale : DEFAULT_LOCALE;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    url: alternatesFor("/about", locale).canonical,
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

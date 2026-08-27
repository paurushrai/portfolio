import type { Metadata } from "next";
import { Footer } from "../../components/footer";
import { type AppLocale, DEFAULT_LOCALE, alternatesFor, isLocale } from "../../i18n/config";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale: AppLocale = isLocale(params.locale) ? params.locale : DEFAULT_LOCALE;
  const alternates = alternatesFor("/contact", locale);
  return {
    title: "Contact — Paurush Rai | Hire a Senior Frontend Engineer",
    description: "Get in touch with Paurush Rai — Senior Frontend Engineer & Frontend Expert available for frontend, full-stack, and AI integration roles.",
    keywords: [
      "Hire Senior Frontend Engineer",
      "Hire Senior Frontend Expert",
      "Hire Senior Software Engineer",
      "Hire Full-Stack Developer",
      "Hire React Developer",
      "Hire React Native Developer",
      "AI Integration Developer",
      "Freelance Software Engineer India",
      "Contact Paurush Rai",
    ],
    alternates,
    openGraph: {
      title: "Contact Paurush Rai — Senior Frontend Engineer",
      description: "Available for senior frontend, full-stack, and AI integration roles. Let's build something great together.",
      url: alternates.canonical,
    },
  };
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}

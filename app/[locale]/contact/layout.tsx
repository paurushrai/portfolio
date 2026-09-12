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

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}

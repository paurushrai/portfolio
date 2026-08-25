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
    title: "Contact — Paurush Rai | Hire a Senior Product Engineer",
    description: "Get in touch with Paurush Rai — Senior Product Engineer & Full-Stack Developer available for frontend, full-stack, and AI integration roles. Reach out via email, LinkedIn, or the contact form.",
    keywords: [
      "Hire Senior Product Engineer",
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
      title: "Contact Paurush Rai — Senior Product Engineer",
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

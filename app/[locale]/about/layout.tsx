import type { Metadata } from "next";
import { Footer } from "../../components/footer";
import { type AppLocale, DEFAULT_LOCALE, alternatesFor, isLocale } from "../../i18n/config";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale: AppLocale = isLocale(params.locale) ? params.locale : DEFAULT_LOCALE;
  const alternates = alternatesFor("/about", locale);
  return {
    title: "About — Paurush Rai | Senior Product Engineer & Frontend Developer",
    description: "Meet Paurush Rai — Senior Product Engineer with 5+ years building enterprise SaaS, AI-integrated platforms, and developer tools using React, Next.js, TypeScript, and Node.js. Based in India.",
    keywords: [
      "Senior Product Engineer",
      "Senior Software Engineer",
      "Full-Stack Developer",
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
      title: "About Paurush Rai — Senior Product Engineer",
      description: "5+ years building enterprise SaaS, AI platforms, and developer tools. React, Next.js, TypeScript, Node.js specialist based in India.",
      url: alternates.canonical,
    },
  };
}


export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}

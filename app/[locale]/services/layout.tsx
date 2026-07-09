import type { Metadata } from "next";
import { type AppLocale, DEFAULT_LOCALE, alternatesFor, isLocale } from "../../i18n/config";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale: AppLocale = isLocale(params.locale) ? params.locale : DEFAULT_LOCALE;
  const alternates = alternatesFor("/services", locale);
  return {
    title: "Services",
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
      title: "Services | paurushrai.in",
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
  return <>{children}</>;
}

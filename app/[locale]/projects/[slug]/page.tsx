import { notFound } from "next/navigation";
import { allProjects } from "contentlayer/generated";
import type { Metadata } from "next";
import "./mdx.css";
import {
  type AppLocale,
  DEFAULT_LOCALE,
  isLocale,
  LOCALES,
  localizedPath,
} from "../../../i18n/config";
import { LocaleProjectClient } from "./LocaleProjectClient";

const BASE_URL = "https://paurushrai.in";

type Props = {
  params: {
    locale: string;
    slug: string;
  };
};

export function generateStaticParams() {
  const slugs = new Set(allProjects.map((project) => project.slug));
  return Array.from(slugs, (slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale: AppLocale = isLocale(params.locale) ? params.locale : DEFAULT_LOCALE;
  const project =
    allProjects.find((p) => p.slug === params.slug && p.locale === locale) ??
    allProjects.find((p) => p.slug === params.slug && p.locale === DEFAULT_LOCALE);
  if (!project) return {};
  const path = `/projects/${params.slug}`;
  const canonical = `${BASE_URL}${localizedPath(path, locale)}`;
  const languages: Record<string, string> = {
    "x-default": `${BASE_URL}${localizedPath(path, DEFAULT_LOCALE)}`,
  };
  for (const l of LOCALES) {
    languages[l] = `${BASE_URL}${localizedPath(path, l)}`;
  }
  return {
    title: project.title,
    description: project.description,
    alternates: { canonical, languages },
    openGraph: {
      title: project.title,
      description: project.description,
      url: canonical,
      type: "article",
    },
  };
}

export default async function PostPage({ params }: Props) {
  const slug = params?.slug;
  const projectLocales = allProjects.filter((project) => project.slug === slug);

  if (projectLocales.length === 0) {
    notFound();
  }

  const enProject = projectLocales.find((p) => p.locale === "en") ?? projectLocales[0];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: enProject.title,
    description: enProject.description,
    url: enProject.url ?? `https://paurushrai.in/projects/${slug}`,
    author: {
      "@type": "Person",
      name: "Paurush Rai",
      url: "https://paurushrai.in",
    },
  };

  return (
    <div className="bg-zinc-50 min-h-screen">
      {/* JSON-LD structured data, serialized from trusted app constants (no user input). */}
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD from trusted app constants, no user input
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LocaleProjectClient projectLocales={projectLocales} />
    </div>
  );
}

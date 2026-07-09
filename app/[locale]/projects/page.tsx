
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../../components/nav";
import { LocaleProjectFilter } from "./LocaleProjectFilter";
import type { Metadata } from "next";
import { type AppLocale, DEFAULT_LOCALE, alternatesFor, isLocale } from "../../i18n/config";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale: AppLocale = isLocale(params.locale) ? params.locale : DEFAULT_LOCALE;
  const alternates = alternatesFor("/projects", locale);
  return {
    title: "Projects — Paurush Rai | Senior Product Engineer",
    description: "Explore projects by Paurush Rai — a Senior Product Engineer & Full-Stack Developer. Includes enterprise SaaS platforms, AI-integrated applications, logistics platforms, and developer productivity tools built with React, Next.js, and TypeScript.",
    keywords: [
      "Senior Product Engineer Portfolio",
      "Full-Stack Developer Projects",
      "React Projects",
      "Next.js Portfolio",
      "React Native Apps",
      "AI Application Projects",
      "Enterprise SaaS",
      "LTI LMS Integration",
      "VS Code Extension Development",
      "Jira Plugin Development",
      "Paurush Rai Projects",
    ],
    alternates,
    openGraph: {
      title: "Projects — Paurush Rai | Senior Product Engineer",
      description: "Enterprise SaaS, AI-integrated apps, fintech platforms and developer tools built with React, Next.js, and TypeScript.",
      url: alternates.canonical,
    },
  };
}


export type ProjectMeta = {
  _id: string;
  slug: string;
  locale: string;
  title: string;
  description: string;
  date?: string;
  url?: string;
  repository?: string;
  company?: string;
  published?: boolean;
  wip?: boolean;
  path: string;
};

export default function ProjectsPage() {
  const projectsMeta: ProjectMeta[] = allProjects.map((p) => ({
    _id: p._id,
    slug: p.slug,
    locale: p.locale ?? "en",
    title: p.title,
    description: p.description,
    date: p.date ? String(p.date) : undefined,
    url: p.url,
    repository: p.repository,
    company: p.company,
    published: p.published,
    wip: p.wip,
    path: p.path,
  }));

  return (
    <div className="relative pb-16">
      <Navigation />
      <LocaleProjectFilter projects={projectsMeta} />
    </div>
  );
}

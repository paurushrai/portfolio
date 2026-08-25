"use client";

import { useLanguage } from "../../../i18n/LanguageContext";
import { pickLocalized } from "../../../lib/pick-localized";
import { ProjectCard } from "../ProjectCard";
import type { ProjectMeta } from "../page";
import type { Project } from "@/.contentlayer/generated";

const RELATED_COUNT = 3;

function toProjectMeta(p: Project): ProjectMeta {
  return {
    _id: p._id,
    slug: p.slug,
    locale: p.locale,
    title: p.title,
    description: p.description,
    date: p.date ? String(p.date) : undefined,
    url: p.url,
    repository: p.repository,
    company: p.company,
    published: p.published,
    wip: p.wip,
    path: p.path,
  };
}

export function RelatedProjects({ otherProjects }: { otherProjects: Project[] }) {
  const { t, language } = useLanguage();

  const related = pickLocalized(otherProjects, language)
    .sort(
      (a, b) =>
        new Date(String(b.date ?? 0)).getTime() - new Date(String(a.date ?? 0)).getTime(),
    )
    .slice(0, RELATED_COUNT)
    .map(toProjectMeta);

  if (related.length === 0) return null;

  return (
    <div className="relative px-6 py-16 mx-auto max-w-5xl lg:px-8">
      <h2 className="mb-6 text-xl font-semibold text-zinc-100 font-display">
        {t.projects.moreTitle}
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {related.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  );
}

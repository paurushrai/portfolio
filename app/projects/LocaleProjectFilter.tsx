"use client";

import { useLanguage } from "../i18n/LanguageContext";
import { Card } from "../components/card";
import Link from "next/link";
import { Briefcase } from "lucide-react";
import type { ProjectMeta } from "./page";

type Props = {
  projects: ProjectMeta[];
};

const FEATURED_SLUG = "metanotes";
const TOP2_SLUG = "testlify-app";
const TOP3_SLUG = "fuelbuddy-customer-app";

export function LocaleProjectFilter({ projects }: Props) {
  const { language, t } = useLanguage();

  // Group by slug → { locale → project }
  const bySlug = new Map<string, Record<string, ProjectMeta>>();
  for (const p of projects) {
    if (!bySlug.has(p.slug)) bySlug.set(p.slug, {});
    bySlug.get(p.slug)![p.locale] = p;
  }

  // Pick current locale, fall back to "en"
  const localed: ProjectMeta[] = [];
  bySlug.forEach((localeMap) => {
    const pick = localeMap[language] ?? localeMap["en"];
    if (pick) localed.push(pick);
  });

  const published = localed.filter((p) => p.published);
  const featured = published.find((p) => p.slug === FEATURED_SLUG);
  const top2 = published.find((p) => p.slug === TOP2_SLUG);
  const top3 = published.find((p) => p.slug === TOP3_SLUG);
  const sorted = published
    .filter(
      (p) =>
        p.slug !== FEATURED_SLUG &&
        p.slug !== TOP2_SLUG &&
        p.slug !== TOP3_SLUG,
    )
    .sort(
      (a, b) =>
        new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
    );

  const hasFeaturedSection = featured || top2 || top3;

  return (
    <main className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
      <div className="max-w-2xl mx-auto lg:mx-0">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
          {t.projects.title}
        </h1>
        <p className="mt-4 text-zinc-400">{t.projects.subtitle}</p>
      </div>
      <div className="w-full h-px bg-zinc-800" />

      {!hasFeaturedSection && sorted.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <p className="text-zinc-400 text-lg">{t.projects.empty}</p>
        </div>
      ) : (
        <>
          {hasFeaturedSection ? (
            <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
              {featured ? (
                <Card>
                  <Link href={`/projects/${featured.slug}`}>
                    <article className="relative w-full h-full p-4 md:p-8">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-medium tracking-wide uppercase group-hover:text-zinc-200 duration-150">
                          <Briefcase className="w-4 h-4" />
                          <span>
                            {featured.company
                              ? featured.company
                              : t.projects.independent}
                          </span>
                        </div>
                      </div>
                      <h2
                        id="featured-post"
                        className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-5xl xl:text-6xl font-display"
                      >
                        {featured.title}
                      </h2>
                      <p className="mt-6 sm:mt-8 text-base sm:text-lg leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300 pb-8 lg:pb-12">
                        {featured.description}
                      </p>
                      <div className="absolute bottom-4 md:bottom-8">
                        <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                          {t.projects.readMore}{" "}
                          <span aria-hidden="true">&rarr;</span>
                        </p>
                      </div>
                    </article>
                  </Link>
                </Card>
              ) : null}

              <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0">
                {[top2, top3]
                  .filter(Boolean)
                  .map((project) => (
                    <Card key={project!.slug}>
                      <Link href={`/projects/${project!.slug}`}>
                        <article className="p-4 md:p-8">
                          <div className="flex justify-between gap-2 items-center">
                            <span className="flex items-center gap-1.5 text-xs font-semibold tracking-wide uppercase duration-1000 text-zinc-400 group-hover:text-zinc-200">
                              <Briefcase className="w-4 h-4" />
                              <span>
                                {project!.company
                                  ? project!.company
                                  : t.projects.independent}
                              </span>
                            </span>
                          </div>
                          <h2 className="z-20 mt-4 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
                            {project!.title}
                          </h2>
                          <p className="z-20 mt-4 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
                            {project!.description}
                          </p>
                        </article>
                      </Link>
                    </Card>
                  ))}
              </div>
            </div>
          ) : null}

          {hasFeaturedSection && (
            <div className="hidden w-full h-px md:block bg-zinc-800" />
          )}

          {sorted.length > 0 && (
            <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
              {[0, 1, 2].map((col) => (
                <div key={col} className="grid grid-cols-1 gap-4">
                  {sorted
                    .filter((_, i) => i % 3 === col)
                    .map((project) => (
                      <Card key={project.slug}>
                        <Link href={`/projects/${project.slug}`}>
                          <article className="p-4 md:p-8">
                            <div className="flex justify-between gap-2 items-center">
                              <span className="flex items-center gap-1.5 text-xs font-semibold tracking-wide uppercase duration-1000 text-zinc-400 group-hover:text-zinc-200">
                                <Briefcase className="w-4 h-4" />
                                <span>
                                  {project.company
                                    ? project.company
                                    : t.projects.independent}
                                </span>
                              </span>
                            </div>
                            <h2 className="z-20 mt-4 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
                              {project.title}
                            </h2>
                            <p className="z-20 mt-4 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
                              {project.description}
                            </p>
                          </article>
                        </Link>
                      </Card>
                    ))}
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </main>
  );
}

"use client";

import { Briefcase } from "lucide-react";
import Link from "next/link";
import { Card } from "../components/card";
import { useLanguage } from "../i18n/LanguageContext";
import type { ProjectMeta } from "./page";

/** Standard project card used across the featured secondaries and the main grid. */
export function ProjectCard({ project }: { project: ProjectMeta }) {
  const { t } = useLanguage();
  return (
    <Card>
      <Link href={`/projects/${project.slug}`}>
        <article className="p-4 md:p-8">
          <div className="flex justify-between gap-2 items-center">
            <span className="flex items-center gap-1.5 text-xs font-semibold tracking-wide uppercase duration-1000 text-zinc-400 group-hover:text-zinc-200">
              <Briefcase className="w-4 h-4" />
              <span>{project.company ? project.company : t.projects.independent}</span>
            </span>
            {project.wip ? (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium normal-case tracking-normal text-emerald-400 ring-1 ring-inset ring-emerald-500/20">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"
                  aria-hidden="true"
                />
                {t.projects.inProgress}
              </span>
            ) : null}
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
  );
}

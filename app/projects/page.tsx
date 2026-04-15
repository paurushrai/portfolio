import React from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { LocaleProjectFilter } from "./LocaleProjectFilter";

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
    path: p.path,
  }));

  return (
    <div className="relative pb-16">
      <Navigation />
      <LocaleProjectFilter projects={projectsMeta} />
    </div>
  );
}

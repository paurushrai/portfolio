import React from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { LocaleProjectFilter } from "./LocaleProjectFilter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "A collection of web platforms, mobile apps, and developer tools I've built — spanning enterprise SaaS, fintech, and AI-driven products.",
  alternates: {
    canonical: "https://paurushrai.in/projects",
  },
  openGraph: {
    title: "Projects | paurushrai.in",
    description: "A collection of web platforms, mobile apps, and developer tools I've built — spanning enterprise SaaS, fintech, and AI-driven products.",
    url: "https://paurushrai.in/projects",
  },
};

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

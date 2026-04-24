import React from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { LocaleProjectFilter } from "./LocaleProjectFilter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Paurush Rai | Senior Software Engineer",
  description: "Explore projects by Paurush Rai — a Senior Software Engineer & Full-Stack Developer. Includes enterprise SaaS platforms, AI-integrated applications, fintech products, and developer productivity tools built with React, Next.js, and TypeScript.",
  keywords: [
    "Senior Software Engineer Portfolio",
    "Frontend Developer Projects",
    "Full-Stack Developer Projects",
    "AI Integration Projects",
    "React Projects",
    "Next.js Portfolio",
    "Enterprise SaaS",
    "Product Developer Portfolio",
    "Paurush Rai Projects",
  ],
  alternates: {
    canonical: "https://paurushrai.in/projects",
  },
  openGraph: {
    title: "Projects — Paurush Rai | Senior Software Engineer",
    description: "Enterprise SaaS, AI-integrated apps, fintech platforms and developer tools built with React, Next.js, and TypeScript.",
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

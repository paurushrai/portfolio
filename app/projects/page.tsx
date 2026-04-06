import React from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Redis } from "@upstash/redis";
import { LocaleProjectFilter } from "./LocaleProjectFilter";

const isRedisConfigured =
  !!process.env.UPSTASH_REDIS_REST_URL &&
  !!process.env.UPSTASH_REDIS_REST_TOKEN;

export const dynamic = "force-dynamic";

// Strip the compiled MDX body (a function) so only plain JSON crosses
// the server→client boundary. The project list page never renders body content.
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

export default async function ProjectsPage() {
  let views: Record<string, number> = {};

  if (isRedisConfigured) {
    try {
      const redis = Redis.fromEnv();
      const enProjects = allProjects.filter(
        (p) => (p.locale ?? "en") === "en",
      );
      const result = await redis.mget<number[]>(
        ...enProjects.map((p) => ["pageviews", "projects", p.slug].join(":")),
      );
      views = result.reduce(
        (acc, v, i) => {
          acc[enProjects[i].slug] = v ?? 0;
          return acc;
        },
        {} as Record<string, number>,
      );
    } catch (err) {
      console.error("[Redis] Failed to fetch view counts:", err);
    }
  }

  // Only pass serializable fields — no body, no _raw
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
      <LocaleProjectFilter projects={projectsMeta} views={views} />
    </div>
  );
}

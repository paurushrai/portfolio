import { notFound } from "next/navigation";
import { allProjects } from "contentlayer/generated";
import { Mdx } from "@/app/components/mdx";
import { Header } from "./header";
import "./mdx.css";
import { ReportView } from "./view";
import { Redis } from "@upstash/redis";

import { LocaleProjectClient } from "./LocaleProjectClient";

export const dynamic = "force-dynamic";

const isRedisConfigured =
  !!process.env.UPSTASH_REDIS_REST_URL &&
  !!process.env.UPSTASH_REDIS_REST_TOKEN;

type Props = {
  params: {
    slug: string;
  };
};

export default async function PostPage({ params }: Props) {
  const slug = params?.slug;
  
  const projectLocales = allProjects.filter((project) => project.slug === slug);

  if (projectLocales.length === 0) {
    notFound();
  }

  let views = 0;

  if (isRedisConfigured) {
    try {
      const redis = Redis.fromEnv();
      views =
        (await redis.get<number>(["pageviews", "projects", slug].join(":"))) ?? 0;
    } catch (err) {
      console.error("[Redis] Failed to fetch view count:", err);
    }
  }

  return (
    <div className="bg-zinc-50 min-h-screen">
      <LocaleProjectClient projectLocales={projectLocales} views={views} />
    </div>
  );
}

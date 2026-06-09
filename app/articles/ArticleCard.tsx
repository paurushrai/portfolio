"use client";
import { BookOpen } from "lucide-react";
import { Card } from "../components/card";
import type { ArticleMeta } from "./types";

const DATE_LOCALE = "en-US";

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString(DATE_LOCALE, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function ArticleCard({ article }: { article: ArticleMeta }) {
  return (
    <Card>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        <article className="flex flex-col h-full">
          {article.imageUrl ? (
            // biome-ignore lint/performance/noImgElement: cover images come from arbitrary Medium CDN hosts; native <img> avoids maintaining a next/image remote-host allow-list
            <img
              src={article.imageUrl}
              alt=""
              loading="lazy"
              className="object-cover w-full aspect-[16/9] border-b border-zinc-800"
            />
          ) : null}
          <div className="p-4 md:p-8">
            <div className="flex items-center justify-between gap-2">
              <span className="flex items-center gap-1.5 text-xs font-semibold tracking-wide uppercase duration-1000 text-zinc-400 group-hover:text-zinc-200">
                <BookOpen className="w-4 h-4" />
                <span>{article.source}</span>
              </span>
              <time
                dateTime={article.publishedAt}
                className="text-xs text-zinc-500 duration-1000 group-hover:text-zinc-300"
              >
                {formatDate(article.publishedAt)}
              </time>
            </div>
            <h2 className="z-20 mt-4 text-xl font-medium duration-1000 lg:text-2xl text-zinc-200 group-hover:text-white font-display">
              {article.title}
            </h2>
            <p className="z-20 mt-4 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
              {article.snippet}
            </p>
          </div>
        </article>
      </a>
    </Card>
  );
}

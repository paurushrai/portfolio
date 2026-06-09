"use client";
import { BookOpen } from "lucide-react";
import { useState } from "react";
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

function CoverPlaceholder() {
  return (
    <div className="flex items-center justify-center w-full border-b aspect-[16/9] border-zinc-800 bg-gradient-to-br from-zinc-800/50 via-zinc-900 to-zinc-900">
      <BookOpen className="w-8 h-8 text-zinc-700" aria-hidden="true" />
    </div>
  );
}

export function ArticleCard({ article }: { article: ArticleMeta }) {
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = Boolean(article.imageUrl) && !imageFailed;

  return (
    <Card>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        <article className="flex flex-col">
          {showImage ? (
            // biome-ignore lint/performance/noImgElement: cover images come from arbitrary Medium CDN hosts; native <img> avoids maintaining a next/image remote-host allow-list
            <img
              src={article.imageUrl ?? undefined}
              alt=""
              loading="lazy"
              onError={() => setImageFailed(true)}
              className="object-cover w-full border-b aspect-[16/9] border-zinc-800"
            />
          ) : (
            <CoverPlaceholder />
          )}
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

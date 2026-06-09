"use client";
import { useLanguage } from "../i18n/LanguageContext";
import { ArticleCard } from "./ArticleCard";
import { ARTICLE_FEEDS } from "./feeds";
import type { ArticleMeta } from "./types";

const COLUMNS = 3;
const FALLBACK_PROFILE_URL = "https://medium.com";
const PRIMARY_PROFILE_URL =
  ARTICLE_FEEDS[0]?.profileUrl ?? FALLBACK_PROFILE_URL;

export function ArticleList({ articles }: { articles: ArticleMeta[] }) {
  const { t } = useLanguage();

  return (
    <main className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
      <div className="max-w-2xl mx-auto lg:mx-0">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
          {t.articles.title}
        </h1>
        <p className="mt-4 text-zinc-400">{t.articles.subtitle}</p>
      </div>
      <div className="w-full h-px bg-zinc-800" />

      {articles.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <p className="text-lg text-zinc-400">{t.articles.empty}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          {Array.from({ length: COLUMNS }, (_, col) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: fixed 3-column masonry layout — the column position is the stable identity
            <div key={col} className="grid grid-cols-1 gap-4">
              {articles
                .filter((_, i) => i % COLUMNS === col)
                .map((article) => (
                  <ArticleCard key={article.url} article={article} />
                ))}
            </div>
          ))}
        </div>
      )}

      <div className="flex justify-center pt-4">
        <a
          href={PRIMARY_PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm duration-200 text-zinc-300 hover:text-zinc-100"
        >
          {t.articles.viewAll} <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </main>
  );
}

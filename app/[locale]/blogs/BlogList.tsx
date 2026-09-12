"use client";

import { useLanguage } from "../../i18n/LanguageContext";
import { pickLocalized } from "../../lib/pick-localized";
import { BlogCard } from "./BlogCard";
import type { BlogMeta } from "./page";

export function BlogList({ blogs }: { blogs: BlogMeta[] }) {
  const { language, t } = useLanguage();

  const sorted = pickLocalized(blogs, language).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <main className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
      <div className="max-w-2xl mx-auto lg:mx-0">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
          {t.blogs.title}
        </h1>
        <p className="mt-4 text-zinc-400">{t.blogs.subtitle}</p>
      </div>
      <div className="w-full h-px bg-zinc-800" />

      {sorted.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <p className="text-lg text-zinc-400">{t.blogs.empty}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 mx-auto lg:mx-0 md:grid-cols-2 lg:grid-cols-3">
          {sorted.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
        </div>
      )}
    </main>
  );
}

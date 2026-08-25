"use client";

import Link from "next/link";
import { useLanguage } from "../../../i18n/LanguageContext";
import { pickLocalized } from "../../../lib/pick-localized";
import { BlogCard } from "../BlogCard";
import type { BlogMeta } from "../page";
import type { Blog } from "@/.contentlayer/generated";

const RELATED_COUNT = 3;

function toBlogMeta(b: Blog): BlogMeta {
  return {
    _id: b._id,
    slug: b.slug,
    locale: b.locale,
    title: b.title,
    description: b.description,
    date: String(b.date),
    published: b.published,
    coverImage: b.coverImage,
    tags: b.tags ?? [],
    readingTime: b.readingTime,
    path: b.path,
  };
}

export function RelatedBlogs({ otherBlogs }: { otherBlogs: Blog[] }) {
  const { t, language, localePath } = useLanguage();

  const related = pickLocalized(otherBlogs, language)
    .sort((a, b) => new Date(String(b.date)).getTime() - new Date(String(a.date)).getTime())
    .slice(0, RELATED_COUNT)
    .map(toBlogMeta);

  if (related.length === 0) return null;

  return (
    <div className="relative px-6 py-16 mx-auto max-w-5xl lg:px-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-zinc-100 font-display">
          {t.blogs.moreTitle}
        </h2>
        <Link
          href={localePath("/blogs")}
          className="text-sm text-zinc-400 duration-200 hover:text-zinc-100"
        >
          {t.blogs.viewAll} <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {related.map((b) => (
          <BlogCard key={b.slug} blog={b} />
        ))}
      </div>
    </div>
  );
}

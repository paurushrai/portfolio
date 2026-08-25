"use client";

import { BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "../../components/card";
import { useLanguage } from "../../i18n/LanguageContext";
import type { BlogMeta } from "./page";

function formatDate(iso: string, locale: string): string {
  return new Date(iso).toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function CoverPlaceholder({ title }: { title: string }) {
  return (
    <div className="relative flex items-end w-full overflow-hidden border-b aspect-video border-zinc-800 bg-linear-to-br from-zinc-800 via-zinc-900 to-black">
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-size-[18px_18px]" />
      <div className="absolute w-40 h-40 rounded-full -top-10 -left-10 bg-accent-500/10 blur-3xl" />
      <BookOpen
        className="absolute w-6 h-6 top-5 right-5 text-zinc-600"
        aria-hidden="true"
      />
      <p className="relative p-5 text-lg font-semibold leading-snug md:p-7 md:text-2xl text-zinc-100 font-display line-clamp-3">
        {title}
      </p>
    </div>
  );
}

export function BlogCard({ blog }: { blog: BlogMeta }) {
  const { language, t, localePath } = useLanguage();

  return (
    <Card>
      <Link href={localePath(`/blogs/${blog.slug}`)} className="block h-full">
        <article className="flex flex-col h-full">
          {blog.coverImage ? (
            <div className="relative w-full overflow-hidden border-b aspect-video border-zinc-800">
              <Image
                src={blog.coverImage}
                alt=""
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          ) : (
            <CoverPlaceholder title={blog.title} />
          )}
          <div className="p-4 md:p-8">
            <div className="flex items-center justify-between gap-2">
              <span className="flex items-center gap-1.5 text-xs font-semibold tracking-wide uppercase duration-1000 text-zinc-400 group-hover:text-zinc-200">
                <BookOpen className="w-4 h-4" />
                <span>
                  {blog.readingTime} {t.blogs.minRead}
                </span>
              </span>
              <time
                dateTime={blog.date}
                className="text-xs text-zinc-500 duration-1000 group-hover:text-zinc-300"
              >
                {formatDate(blog.date, language)}
              </time>
            </div>
            <h2 className="z-20 mt-4 text-xl font-medium duration-1000 lg:text-2xl text-zinc-200 group-hover:text-white font-display line-clamp-2">
              {blog.title}
            </h2>
            <p className="z-20 mt-4 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200 line-clamp-5">
              {blog.description}
            </p>
          </div>
        </article>
      </Link>
    </Card>
  );
}

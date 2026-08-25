"use client";

import { useLanguage } from "../../../i18n/LanguageContext";
import { Header } from "./header";
import { Mdx } from "@/app/components/mdx";
import type { Blog } from "@/.contentlayer/generated";

type Props = {
  blogLocales: Blog[];
};

export function LocaleBlogClient({ blogLocales }: Props) {
  const { language } = useLanguage();

  let blog = blogLocales.find((b) => b.locale === language);
  if (!blog) {
    blog = blogLocales.find((b) => b.locale === "en") || blogLocales[0];
  }

  return (
    <>
      <Header
        blog={{
          title: blog.title,
          description: blog.description,
          date: String(blog.date),
          readingTime: blog.readingTime,
          tags: blog.tags ?? [],
        }}
      />
      <div className="px-6 py-12 mx-auto max-w-3xl lg:px-8">
        <article className="prose prose-zinc prose-quoteless max-w-none">
          <Mdx code={blog.body.code} />
        </article>
      </div>
    </>
  );
}

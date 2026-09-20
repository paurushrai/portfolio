import { notFound } from "next/navigation";
import { allBlogs } from "contentlayer/generated";
import type { Metadata } from "next";
import "./mdx.css";
import {
  type AppLocale,
  DEFAULT_LOCALE,
  SITE_URL,
  isLocale,
  LOCALES,
  localizedPath,
} from "../../../i18n/config";
import { AUTHOR_NAME, breadcrumbJsonLd, personRef } from "../../../lib/schema";
import { LocaleBlogClient } from "./LocaleBlogClient";
import { RelatedBlogs } from "./RelatedBlogs";

const BASE_URL = SITE_URL;

type Props = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

export function generateStaticParams() {
  const slugs = new Set(allBlogs.map((blog) => blog.slug));
  return Array.from(slugs, (slug) => ({ slug }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const locale: AppLocale = isLocale(params.locale) ? params.locale : DEFAULT_LOCALE;
  const blog =
    allBlogs.find((b) => b.slug === params.slug && b.locale === locale) ??
    allBlogs.find((b) => b.slug === params.slug && b.locale === DEFAULT_LOCALE);
  if (!blog) return {};

  const path = `/blogs/${params.slug}`;
  const canonical = `${BASE_URL}${localizedPath(path, locale)}`;
  const languages: Record<string, string> = {
    "x-default": `${BASE_URL}${localizedPath(path, DEFAULT_LOCALE)}`,
  };
  for (const l of LOCALES) {
    languages[l] = `${BASE_URL}${localizedPath(path, l)}`;
  }
  const imageUrl = blog.coverImage ? `${BASE_URL}${blog.coverImage}` : undefined;

  return {
    title: `${blog.title} | Paurush Rai`,
    description: blog.description,
    keywords: blog.tags,
    authors: [{ name: AUTHOR_NAME, url: BASE_URL }],
    alternates: { canonical, languages },
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: canonical,
      type: "article",
      publishedTime: String(blog.date),
      authors: [AUTHOR_NAME],
      tags: blog.tags,
      images: imageUrl ? [{ url: imageUrl }] : undefined,
    },
    twitter: {
      card: imageUrl ? "summary_large_image" : "summary",
      title: blog.title,
      description: blog.description,
      images: imageUrl ? [imageUrl] : undefined,
    },
  };
}

export default async function BlogPostPage(props: Props) {
  const params = await props.params;
  const slug = params?.slug;
  const blogLocales = allBlogs.filter((blog) => blog.slug === slug);

  if (blogLocales.length === 0) {
    notFound();
  }

  const enBlog = blogLocales.find((b) => b.locale === "en") ?? blogLocales[0];
  const canonical = `${BASE_URL}${localizedPath(`/blogs/${slug}`, DEFAULT_LOCALE)}`;
  const imageUrl = enBlog.coverImage ? `${BASE_URL}${enBlog.coverImage}` : undefined;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: enBlog.title,
    description: enBlog.description,
    datePublished: String(enBlog.date),
    dateModified: String(enBlog.date),
    image: imageUrl,
    mainEntityOfPage: canonical,
    keywords: enBlog.tags?.join(", "),
    author: personRef,
    publisher: personRef,
  };
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blogs" },
    { name: enBlog.title, path: `/blogs/${slug}` },
  ]);

  return (
    <>
      <div className="bg-zinc-50 min-h-screen">
        {/* JSON-LD structured data, serialized from trusted app constants (no user input). */}
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD from trusted app constants, no user input
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD from trusted app constants, no user input
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
        />
        <LocaleBlogClient blogLocales={blogLocales} />
      </div>
      <RelatedBlogs otherBlogs={allBlogs.filter((blog) => blog.slug !== slug)} />
    </>
  );
}

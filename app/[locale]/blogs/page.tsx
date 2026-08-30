import { allBlogs } from "contentlayer/generated";
import type { Metadata } from "next";
import { Navigation } from "../../components/nav";
import { type AppLocale, DEFAULT_LOCALE, alternatesFor, isLocale } from "../../i18n/config";
import { BlogList } from "./BlogList";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale: AppLocale = isLocale(params.locale) ? params.locale : DEFAULT_LOCALE;
  const alternates = alternatesFor("/blogs", locale);
  return {
    title: "Blog | Paurush Rai | Senior Frontend Engineer",
    description:
      "Writing on software engineering, developer tooling, automation, and building products that last, from a Senior Frontend Engineer.",
    keywords: [
      "Paurush Rai Blog",
      "Software Engineering Blog",
      "Developer Productivity",
      "Git Workflow",
      "macOS Automation",
      "Frontend Engineering",
    ],
    alternates,
    openGraph: {
      title: "Blog | Paurush Rai | Senior Frontend Engineer",
      description: "Writing on software engineering, developer tooling, and building products that last.",
      url: alternates.canonical,
      type: "website",
      images: [{ url: "https://paurushrai.in/og.png", width: 1200, height: 630 }],
    },
  };
}

export type BlogMeta = {
  _id: string;
  slug: string;
  locale: string;
  title: string;
  description: string;
  date: string;
  published?: boolean;
  coverImage?: string;
  tags: string[];
  readingTime: number;
  path: string;
};

export default function BlogsPage() {
  const blogsMeta: BlogMeta[] = allBlogs.map((b) => ({
    _id: b._id,
    slug: b.slug,
    locale: b.locale ?? "en",
    title: b.title,
    description: b.description,
    date: String(b.date),
    published: b.published,
    coverImage: b.coverImage,
    tags: b.tags ?? [],
    readingTime: b.readingTime,
    path: b.path,
  }));

  return (
    <div className="relative pb-16">
      <Navigation />
      <BlogList blogs={blogsMeta} />
    </div>
  );
}

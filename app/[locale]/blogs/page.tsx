import { allBlogs } from "contentlayer/generated";
import type { Metadata } from "next";
import { Navigation } from "../../components/nav";
import { type AppLocale, DEFAULT_LOCALE, SITE_URL, alternatesFor, isLocale, localizedPath } from "../../i18n/config";
import { pickLocalized } from "../../lib/pick-localized";
import { BlogList } from "./BlogList";

export async function generateMetadata(
  props: {
    params: Promise<{ locale: string }>;
  }
): Promise<Metadata> {
  const params = await props.params;
  const locale: AppLocale = isLocale(params.locale) ? params.locale : DEFAULT_LOCALE;
  const alternates = alternatesFor("/blogs", locale);
  return {
    title: "Blog | Paurush Rai | Senior Software Engineer & Full-Stack Developer",
    description:
      "Writing on software engineering, modern frontend architecture, full-stack development, developer tooling, and automation from a Senior Software Engineer.",
    keywords: [
      "Paurush Rai Blog",
      "Software Engineering Blog",
      "Full-Stack Development",
      "Frontend Engineering",
      "Frontend-Focused Full Stack",
      "Frontend Expert",
      "Developer Productivity",
      "Git Workflow",
      "macOS Automation",
    ],
    alternates,
    openGraph: {
      title: "Blog | Paurush Rai | Senior Software Engineer & Full-Stack Developer",
      description: "Writing on software engineering, developer tooling, frontend architecture, and building products that last.",
      url: alternates.canonical,
      type: "website",
      images: [{ url: `${SITE_URL}/og.png`, width: 1200, height: 630 }],
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

export default async function BlogsPage(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;
  const locale: AppLocale = isLocale(params.locale) ? params.locale : DEFAULT_LOCALE;
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

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Blog",
    url: alternatesFor("/blogs", locale).canonical,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: pickLocalized(allBlogs, locale).map((b, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: b.title,
        url: `${SITE_URL}${localizedPath(`/blogs/${b.slug}`, locale)}`,
      })),
    },
  };

  return (
    <div className="relative pb-16">
      {/* JSON-LD structured data, serialized from trusted app constants (no user input). */}
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD from trusted app constants, no user input
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <Navigation />
      <BlogList blogs={blogsMeta} />
    </div>
  );
}

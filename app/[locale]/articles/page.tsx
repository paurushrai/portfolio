import type { Metadata } from "next";
import { Navigation } from "../../components/nav";
import { type AppLocale, DEFAULT_LOCALE, alternatesFor, isLocale } from "../../i18n/config";
import { ArticleList } from "./ArticleList";
import { getArticles } from "./fetchArticles";

// Must be a static literal for Next's build-time analysis. Mirror of
// REVALIDATE_SECONDS in fetchArticles.ts — keep both in sync.
export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale: AppLocale = isLocale(params.locale) ? params.locale : DEFAULT_LOCALE;
  const alternates = alternatesFor("/articles", locale);
  return {
    title: "Articles — Paurush Rai | Senior Product Engineer",
    description:
      "Articles by Paurush Rai on software engineering, developer tools, AI integration, and building production-grade products — published on Medium.",
    keywords: [
      "Paurush Rai Articles",
      "Software Engineering Blog",
      "Frontend Engineering Articles",
      "AI Integration",
      "React",
      "Next.js",
      "Developer Tools",
      "Medium",
    ],
    alternates,
    openGraph: {
      title: "Articles — Paurush Rai | Senior Product Engineer",
      description:
        "Writing on software engineering, developer tools, and building products.",
      url: alternates.canonical,
    },
  };
}

export default async function ArticlesPage() {
  const articles = await getArticles();

  return (
    <div className="relative pb-16">
      <Navigation />
      <ArticleList articles={articles} />
    </div>
  );
}

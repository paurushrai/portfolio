import type { Metadata } from "next";
import { Navigation } from "../components/nav";
import { ArticleList } from "./ArticleList";
import { getArticles } from "./fetchArticles";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Articles — Paurush Rai | Senior Software Engineer",
  description:
    "Articles by Paurush Rai on software engineering, developer tools, AI integration, and building production-grade products — published on Medium.",
  keywords: [
    "Paurush Rai Articles",
    "Software Engineering Blog",
    "Frontend Engineering Articles",
    "Developer Tools",
    "Medium",
  ],
  alternates: {
    canonical: "https://paurushrai.in/articles",
  },
  openGraph: {
    title: "Articles — Paurush Rai | Senior Software Engineer",
    description:
      "Writing on software engineering, developer tools, and building products.",
    url: "https://paurushrai.in/articles",
  },
};

export default async function ArticlesPage() {
  const articles = await getArticles();

  return (
    <div className="relative pb-16">
      <Navigation />
      <ArticleList articles={articles} />
    </div>
  );
}

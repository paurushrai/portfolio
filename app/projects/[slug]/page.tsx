import { notFound } from "next/navigation";
import { allProjects } from "contentlayer/generated";
import type { Metadata } from "next";
import "./mdx.css";
import { LocaleProjectClient } from "./LocaleProjectClient";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = allProjects.find(
    (p) => p.slug === params.slug && p.locale === "en",
  );
  if (!project) return {};
  const url = `https://paurushrai.in/projects/${params.slug}`;
  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: url },
    openGraph: {
      title: project.title,
      description: project.description,
      url,
      type: "article",
    },
  };
}

export default async function PostPage({ params }: Props) {
  const slug = params?.slug;
  const projectLocales = allProjects.filter((project) => project.slug === slug);

  if (projectLocales.length === 0) {
    notFound();
  }

  const enProject = projectLocales.find((p) => p.locale === "en") ?? projectLocales[0];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: enProject.title,
    description: enProject.description,
    url: enProject.url ?? `https://paurushrai.in/projects/${slug}`,
    author: {
      "@type": "Person",
      name: "Paurush Rai",
      url: "https://paurushrai.in",
    },
  };

  return (
    <div className="bg-zinc-50 min-h-screen">
      {/* JSON-LD structured data, serialized from trusted app constants (no user input). */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LocaleProjectClient projectLocales={projectLocales} />
    </div>
  );
}

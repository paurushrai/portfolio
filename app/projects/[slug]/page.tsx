import { notFound } from "next/navigation";
import { allProjects } from "contentlayer/generated";
import "./mdx.css";
import { LocaleProjectClient } from "./LocaleProjectClient";

type Props = {
  params: {
    slug: string;
  };
};

export default async function PostPage({ params }: Props) {
  const slug = params?.slug;
  const projectLocales = allProjects.filter((project) => project.slug === slug);

  if (projectLocales.length === 0) {
    notFound();
  }

  return (
    <div className="bg-zinc-50 min-h-screen">
      <LocaleProjectClient projectLocales={projectLocales} />
    </div>
  );
}

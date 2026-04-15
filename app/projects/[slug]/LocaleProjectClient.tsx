"use client";

import React from "react";
import { useLanguage } from "../../i18n/LanguageContext";
import { Header } from "./header";
import { Mdx } from "@/app/components/mdx";
import type { Project } from "@/.contentlayer/generated";

type Props = {
  projectLocales: Project[];
};

export function LocaleProjectClient({ projectLocales }: Props) {
  const { language } = useLanguage();

  let project = projectLocales.find((p) => p.locale === language);
  if (!project) {
    project = projectLocales.find((p) => p.locale === "en") || projectLocales[0];
  }

  return (
    <>
      <Header project={project} />
      <article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
        <Mdx code={project.body.code} />
      </article>
    </>
  );
}

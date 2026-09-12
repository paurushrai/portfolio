"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/app/i18n/LanguageContext";

type Props = {
  project: {
    url?: string;
    title: string;
    description: string;
    repository?: string;
    company?: string;
    wip?: boolean;
  };
};

export const Header: React.FC<Props> = ({ project }) => {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(true);
  const { t, localePath } = useLanguage();

  const links: { label: string; href: string }[] = [];
  if (project.repository) {
    links.push({
      label: "GitHub",
      href: `https://github.com/${project.repository}`,
    });
  }
  if (project.url) {
    links.push({
      label: "Live",
      href: project.url,
    });
  }
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIsIntersecting(entry.isIntersecting),
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      ref={ref}
      className="relative z-20 isolate overflow-hidden bg-linear-to-tl from-black via-zinc-900 to-black"
    >
      <div
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur-sm duration-200 border-b ${
          isIntersecting
            ? "bg-zinc-900/0 border-transparent"
            : "bg-zinc-900/50 border-zinc-800"
        }`}
      >
        <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
          <div className="flex justify-between gap-8">
            <span
              className={`duration-200 text-sm font-medium flex items-center ${
                isIntersecting ? "text-zinc-400" : "text-zinc-100"
              }`}
            >
              {project.company && project.company !== "Personal Project"
                ? `${t.projects.associatedWith} ${project.company}`
                : t.projects.personalProject}
            </span>
          </div>

          <Link
            href={localePath("/projects")}
            aria-label="Back to projects"
            className={`duration-200 hover:font-medium ${
              isIntersecting
                ? " text-zinc-400 hover:text-zinc-100"
                : "text-zinc-100 hover:text-white"
            } `}
          >
            <ArrowLeft className="w-6 h-6" aria-hidden="true" />
          </Link>
        </div>
      </div>
      <div className="container mx-auto relative isolate overflow-hidden  py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="mx-auto max-w-2xl lg:mx-0">
            {project.wip ? (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 mb-4 text-sm font-medium text-emerald-400 ring-1 ring-inset ring-emerald-500/20">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"
                  aria-hidden="true"
                />
                {t.projects.inProgress}
              </span>
            ) : null}
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-display">
              {project.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-300">
              {project.description}
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-y-6 gap-x-8 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link, index) => (
                <Link
                  target="_blank"
                  key={link.label}
                  href={link.href}
                  className="group relative inline-flex items-center gap-1.5"
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  >
                    &rarr;
                  </span>
                  <span
                    className="absolute inset-x-0 -bottom-1 h-px origin-center scale-x-0 bg-white transition-transform duration-300 animate-nav-hint group-hover:scale-x-100 group-focus-visible:scale-x-100"
                    style={{ animationDelay: `${0.6 + index * 0.15}s` }}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

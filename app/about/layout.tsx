import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Full-stack Software Engineer with 5+ years building enterprise web platforms, AI-driven applications, and developer productivity tools. Based in Dubai.",
  alternates: {
    canonical: "https://paurushrai.in/about",
  },
  openGraph: {
    title: "About | paurushrai.in",
    description: "Full-stack Software Engineer with 5+ years building enterprise web platforms, AI-driven applications, and developer productivity tools.",
    url: "https://paurushrai.in/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

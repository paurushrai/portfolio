import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Hire Paurush Rai for freelance software engineering — full-stack web apps, AI integrations, internal tooling, LMS plugins, and more.",
  keywords: [
    "Freelance Full-Stack Developer",
    "Hire Senior Product Engineer",
    "AI Integration Services",
    "LMS Plugin Development",
    "Internal Tooling Development",
    "MVP Development",
    "React Development Services",
  ],
  alternates: {
    canonical: "https://paurushrai.in/services",
  },
  openGraph: {
    title: "Services | paurushrai.in",
    description:
      "Hire Paurush Rai for freelance software engineering — full-stack web apps, AI integrations, internal tooling, LMS plugins, and more.",
    url: "https://paurushrai.in/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

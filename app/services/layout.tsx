import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Hire Paurush Rai for freelance software engineering — full-stack web apps, AI integrations, internal tooling, LMS plugins, and more.",
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

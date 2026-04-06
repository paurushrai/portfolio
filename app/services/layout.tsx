import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Hire Paurush Rai for freelance software engineering — full-stack web apps, AI integrations, internal tooling, LMS plugins, and more.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Paurush Rai | Senior Software Engineer & Frontend Developer",
  description: "Meet Paurush Rai — Senior Software Engineer with 5+ years building enterprise SaaS, AI-integrated platforms, and developer tools using React, Next.js, TypeScript, and Node.js. Based in Dubai.",
  keywords: [
    "Senior Software Engineer",
    "Senior Frontend Developer",
    "Full-Stack Developer",
    "AI Integration",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Enterprise SaaS",
    "Paurush Rai",
    "Dubai Software Engineer",
  ],
  alternates: {
    canonical: "https://paurushrai.in/about",
  },
  openGraph: {
    title: "About Paurush Rai — Senior Software Engineer",
    description: "5+ years building enterprise SaaS, AI platforms, and developer tools. React, Next.js, TypeScript, Node.js specialist based in Dubai.",
    url: "https://paurushrai.in/about",
  },
};


export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

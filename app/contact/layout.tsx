import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Paurush Rai | Hire a Senior Software Engineer",
  description: "Get in touch with Paurush Rai — Senior Software Engineer & Full-Stack Developer available for frontend, full-stack, and AI integration roles. Reach out via email, LinkedIn, or the contact form.",
  keywords: [
    "Hire Senior Software Engineer",
    "Hire Frontend Developer",
    "Hire Full-Stack Developer",
    "Contact Paurush Rai",
    "AI Integration Developer",
    "Product Engineer for Hire",
    "React Developer for Hire",
  ],
  alternates: {
    canonical: "https://paurushrai.in/contact",
  },
  openGraph: {
    title: "Contact Paurush Rai — Senior Software Engineer",
    description: "Available for senior frontend, full-stack, and AI integration roles. Let's build something great together.",
    url: "https://paurushrai.in/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

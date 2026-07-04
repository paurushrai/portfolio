import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Paurush Rai | Hire a Senior Product Engineer",
  description: "Get in touch with Paurush Rai — Senior Product Engineer & Full-Stack Developer available for frontend, full-stack, and AI integration roles. Reach out via email, LinkedIn, or the contact form.",
  keywords: [
    "Hire Senior Product Engineer",
    "Hire Senior Software Engineer",
    "Hire Full-Stack Developer",
    "Hire React Developer",
    "Hire React Native Developer",
    "AI Integration Developer",
    "Freelance Software Engineer India",
    "Contact Paurush Rai",
  ],
  alternates: {
    canonical: "https://paurushrai.in/contact",
  },
  openGraph: {
    title: "Contact Paurush Rai — Senior Product Engineer",
    description: "Available for senior frontend, full-stack, and AI integration roles. Let's build something great together.",
    url: "https://paurushrai.in/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

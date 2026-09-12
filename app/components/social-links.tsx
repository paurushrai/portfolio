import { Mail, MessageCircle } from "lucide-react";
import { SOCIAL_LINKS } from "../lib/social-links";
import { GithubIcon, LinkedinIcon } from "./icons";

const SOCIAL_ICONS: Record<
  (typeof SOCIAL_LINKS)[number]["id"],
  React.ReactNode
> = {
  linkedin: <LinkedinIcon className="w-4 h-4" aria-hidden="true" />,
  github: <GithubIcon className="w-4 h-4" aria-hidden="true" />,
  email: <Mail className="w-4 h-4" aria-hidden="true" />,
  discord: <MessageCircle className="w-4 h-4" aria-hidden="true" />,
};

type SocialLinksProps = {
  className?: string;
  tone?: "muted" | "bright";
};

export function SocialLinks({
  className = "",
  tone = "muted",
}: SocialLinksProps) {
  const linkClassName =
    tone === "bright"
      ? "text-zinc-400 duration-200 hover:text-white hover:scale-110"
      : "text-zinc-500 duration-200 hover:text-zinc-200";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {SOCIAL_LINKS.map((s) => (
        <a
          key={s.id}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          className={linkClassName}
        >
          {SOCIAL_ICONS[s.id]}
        </a>
      ))}
    </div>
  );
}

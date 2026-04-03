"use client";
import { Github, LinkedinIcon, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const socials = [
  {
    icon: <LinkedinIcon size={20} />,
    href: "https://linkedin.com/in/paurushrai",
    label: "LinkedIn",
    handle: "paurushrai",
  },
  {
    icon: <Mail size={20} />,
    href: "mailto:paurushrai96@gmail.com",
    label: "Email",
    handle: "paurushrai96@gmail.com",
  },
	{
    icon: <MessageCircle size={20} />,
    href: "https://discord.com/users/paurushrai",
    label: "Discord",
    handle: "paurushrai",
  },
  {
    icon: <Github size={20} />,
    href: "https://github.com/paurushrai",
    label: "Github",
    handle: "paurushrai",
  },
];

export default function ContactPage() {
  return (
    <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <main className="container flex flex-col items-center justify-center min-h-[100dvh] px-4 mx-auto">
        <h1 className="sr-only">Contact</h1>
        <div className="grid w-full grid-cols-1 gap-4 mx-auto mt-32 sm:mt-0 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {socials.map((s) => (
            <Card key={s.href}>
              <Link
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${s.label}: ${s.handle}`}
                className="p-4 relative flex flex-col items-center gap-3 duration-700 group md:gap-4 md:py-12 lg:pb-16 md:p-8"
              >
                <span
                  className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                  aria-hidden="true"
                />
                <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                  {s.icon}
                </span>{" "}
                <div className="z-10 flex flex-col items-center">
                  <span className="text-sm font-medium duration-150 lg:text-base xl:text-lg text-zinc-200 group-hover:text-white font-display break-all text-center">
                    {s.handle}
                  </span>
                  <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                    {s.label}
                  </span>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}

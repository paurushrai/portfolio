"use client";
import { Github, LinkedinIcon, Mail, MessageCircle, Send, CheckCircle, AlertCircle } from "lucide-react";
import Link from "next/link";
import type React from "react";
import { useState } from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { useLanguage } from "../i18n/LanguageContext";

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

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const { t } = useLanguage();
  const c = t.contact;
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        const text = await res.text();
        setErrorMsg(text || c.error.generic);
        setStatus("error");
      }
    } catch {
      setErrorMsg(c.error.network);
      setStatus("error");
    }
  };

  const inputClass =
    "w-full px-4 py-2.5 rounded-lg bg-zinc-800/60 border border-zinc-700 text-zinc-100 placeholder-zinc-500 text-sm focus:outline-none focus:border-zinc-500 focus:bg-zinc-800 duration-200";

  return (
    <div className="min-h-screen bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <main className="px-6 pt-20 pb-24 mx-auto max-w-4xl lg:px-8 md:pt-24 lg:pt-32 space-y-16">

        {/* ── Header ── */}
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            {c.heading}
          </h1>
          <p className="mt-4 text-zinc-400">
            {c.subtitle}
          </p>
        </div>

        <div className="w-full h-px bg-zinc-800" />

        {/* ── Contact Form ── */}
        <section className="max-w-xl">
          {status === "success" ? (
            <div className="flex flex-col items-start gap-3 p-6 rounded-xl border border-accent-800/60 bg-accent-900/20">
              <div className="flex items-center gap-2 text-accent-400">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium text-sm">{c.success.title}</span>
              </div>
              <p className="text-sm text-zinc-400">
                {c.success.body}
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-1 text-xs text-zinc-500 hover:text-zinc-300 duration-200 underline underline-offset-2"
              >
                {c.success.again}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-medium text-zinc-400 uppercase tracking-widest">
                    {c.form.name}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder={c.form.namePlaceholder}
                    value={form.name}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-medium text-zinc-400 uppercase tracking-widest">
                    {c.form.email}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder={c.form.emailPlaceholder}
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-medium text-zinc-400 uppercase tracking-widest">
                  {c.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder={c.form.messagePlaceholder}
                  value={form.message}
                  onChange={handleChange}
                  className={`${inputClass} resize-none`}
                />
              </div>

              {status === "error" && (
                <div className="flex items-start gap-2 p-3 rounded-lg border border-red-800/60 bg-red-900/20 text-sm text-red-400">
                  <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-100 text-zinc-900 text-sm font-medium hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed duration-200"
              >
                {status === "loading" ? (
                  <>
                    <span className="w-4 h-4 border-2 border-zinc-400 border-t-zinc-900 rounded-full animate-spin" />
                    {c.form.sending}
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    {c.form.submit}
                  </>
                )}
              </button>
            </form>
          )}
        </section>

        <div className="w-full h-px bg-zinc-800" />

        {/* ── Social Cards ── */}
        <section>
          <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-6">
            {c.socials}
          </h2>
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {socials.map((s) => (
              <Card key={s.href}>
                <Link
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${s.label}: ${s.handle}`}
                  className="p-4 relative flex flex-col items-center gap-3 duration-700 group md:gap-4 md:py-8 md:p-8"
                >
                  <span
                    className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                    aria-hidden="true"
                  />
                  <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                    {s.icon}
                  </span>
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
        </section>

      </main>
    </div>
  );
}

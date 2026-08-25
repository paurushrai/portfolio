"use client";
import { ArrowLeft, BookOpen, Calendar } from "lucide-react";
import Link from "next/link";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/app/i18n/LanguageContext";

type Props = {
	blog: {
		title: string;
		description: string;
		date: string;
		readingTime: number;
		tags: string[];
	};
};

function formatDate(iso: string, locale: string): string {
	return new Date(iso).toLocaleDateString(locale, {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
}

export const Header: React.FC<Props> = ({ blog }) => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIsIntersecting] = useState(true);
	const { t, localePath, language } = useLanguage();

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIsIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<header
			ref={ref}
			className="relative isolate overflow-hidden bg-linear-to-tl from-black via-zinc-900 to-black"
		>
			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur-sm lg:backdrop-blur-none duration-200 border-b lg:bg-transparent ${
					isIntersecting
						? "bg-zinc-900/0 border-transparent"
						: "bg-white/10  border-zinc-200 lg:border-transparent"
				}`}
			>
				<div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
					<div className="flex justify-between gap-8">
						<span
							className={`duration-200 text-sm font-medium flex items-center gap-1.5 ${
								isIntersecting
									? "text-zinc-400"
									: "text-zinc-600"
							}`}
						>
							<Calendar className="w-4 h-4" aria-hidden="true" />
							{formatDate(blog.date, language)}
						</span>
					</div>

					<Link
						href={localePath("/blogs")}
						aria-label="Back to blog"
						className={`duration-200 hover:font-medium ${
							isIntersecting
								? " text-zinc-400 hover:text-zinc-100"
								: "text-zinc-600 hover:text-zinc-900"
						} `}
					>
						<ArrowLeft className="w-6 h-6" aria-hidden="true" />
					</Link>
				</div>
			</div>
			<div className="container mx-auto relative isolate overflow-hidden  py-24 sm:py-32">
				<div className="mx-auto max-w-3xl text-center flex flex-col items-center">
					<div className="mx-auto max-w-3xl">
						{blog.tags.length > 0 ? (
							<div className="flex flex-wrap items-center justify-center gap-2 mb-4">
								{blog.tags.map((tag) => (
									<span
										key={tag}
										className="inline-flex items-center rounded-full bg-zinc-500/10 px-3 py-1 text-xs font-medium text-zinc-300 ring-1 ring-inset ring-zinc-500/20"
									>
										{tag}
									</span>
								))}
							</div>
						) : null}
						<h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-display">
							{blog.title}
						</h1>
						<p className="mt-6 text-lg leading-8 text-zinc-300">
							{blog.description}
						</p>
						<div className="mt-6 flex items-center justify-center gap-1.5 text-sm text-zinc-400">
							<BookOpen className="w-4 h-4" aria-hidden="true" />
							{blog.readingTime} {t.blogs.minRead}
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

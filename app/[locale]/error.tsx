"use client";

import Link from "next/link";
import { ArrowLeft, RefreshCcw } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

export default function GlobalError({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	const { localePath } = useLanguage();
	return (
		<div className="flex flex-col items-center justify-center w-screen min-h-screen bg-linear-to-tl from-black via-zinc-900/50 to-black">
			<div className="flex flex-col items-center text-center px-6 max-w-md">
				<p className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-4">
					Error
				</p>
				<h1 className="text-3xl font-bold text-zinc-100 font-display sm:text-4xl">
					Something went wrong
				</h1>
				<p className="mt-4 text-zinc-400 text-sm leading-relaxed">
					An unexpected error occurred.
					{error.digest && (
						<span className="block mt-1 text-zinc-600 font-mono text-xs">
							{error.digest}
						</span>
					)}
				</p>

				<div className="flex items-center gap-4 mt-10">
					<button
						type="button"
						onClick={reset}
						className="flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-700 bg-zinc-800/50 text-sm text-zinc-300 hover:text-zinc-100 hover:border-zinc-500 hover:bg-zinc-800 duration-200"
					>
						<RefreshCcw className="w-3.5 h-3.5" />
						Try again
					</button>

					<Link
						href={localePath("/")}
						className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-100 duration-200 group"
					>
						<ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 duration-200" />
						Back to home
					</Link>
				</div>
			</div>
		</div>
	);
}

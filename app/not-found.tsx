import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
	return (
		<div className="flex flex-col items-center justify-center w-screen h-[100dvh] bg-gradient-to-tl from-black via-zinc-900/50 to-black">
			<div className="flex flex-col items-center text-center px-6">
				<p className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-4">
					404
				</p>
				<h1 className="text-4xl font-bold text-zinc-100 font-display sm:text-6xl">
					Page not found
				</h1>
				<p className="mt-4 text-zinc-400 max-w-sm">
					The page you're looking for doesn't exist or has been moved.
				</p>
				<Link
					href="/"
					className="mt-10 flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-100 duration-200 group"
				>
					<ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 duration-200" />
					Back to home
				</Link>
			</div>
		</div>
	);
}

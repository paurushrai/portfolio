import type { Project } from "@/.contentlayer/generated";
import Link from "next/link";
import { Briefcase } from "lucide-react";

type Props = {
	project: Project;
	views: number;
};

export const Article: React.FC<Props> = ({ project, views }) => {
	return (
		<Link href={`/projects/${project?.slug}`}>
			<article className="p-4 md:p-8">
				<div className="flex justify-between gap-2 items-center">
					<span className="flex items-center gap-1.5 text-xs font-semibold tracking-wide uppercase duration-1000 text-zinc-400 group-hover:text-zinc-200">
						<Briefcase className="w-4 h-4" />
                        <span>{project.company ? project.company : "Independent"}</span>
					</span>
				</div>
				<h2 className="z-20 mt-4 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
					{project.title}
				</h2>
				<p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
					{project.description}
				</p>
			</article>
		</Link>
	);
};

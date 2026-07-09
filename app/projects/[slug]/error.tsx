"use client";

import { ErrorState } from "../../components/ErrorState";

export default function ProjectError({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	return (
		<ErrorState
			description="This project page failed to load."
			backHref="/projects"
			backLabel="Return to projects"
			digest={error.digest}
			reset={reset}
		/>
	);
}

"use client";

import { ErrorState } from "./components/ErrorState";

export default function GlobalError({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	return (
		<ErrorState
			description="An unexpected error occurred."
			backHref="/"
			backLabel="Back to home"
			digest={error.digest}
			reset={reset}
		/>
	);
}

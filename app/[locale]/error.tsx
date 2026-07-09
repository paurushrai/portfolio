"use client";

import { ErrorState } from "../components/ErrorState";
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
		<ErrorState
			description="An unexpected error occurred."
			backHref={localePath("/")}
			backLabel="Back to home"
			digest={error.digest}
			reset={reset}
		/>
	);
}

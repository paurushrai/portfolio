"use client";

import { ErrorState } from "../../../components/ErrorState";
import { useLanguage } from "../../../i18n/LanguageContext";

export default function ProjectError({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	const { localePath } = useLanguage();
	return (
		<ErrorState
			description="This project page failed to load."
			backHref={localePath("/projects")}
			backLabel="Return to projects"
			digest={error.digest}
			reset={reset}
		/>
	);
}

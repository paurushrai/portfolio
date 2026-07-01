"use client";
import { useEffect, useRef, useState } from "react";

interface TextTypeProps {
	/** Phrases to cycle through, typed then deleted in order. */
	texts: string[];
	className?: string;
	cursorClassName?: string;
	typingSpeed?: number;
	deletingSpeed?: number;
	pauseDuration?: number;
}

/**
 * Typewriter effect: types each phrase, holds, deletes, advances, loops.
 *
 * - Respects `prefers-reduced-motion` (renders the first phrase statically).
 * - Screen readers get the full role list via an sr-only span; the animated
 *   text is aria-hidden so AT isn't spammed by every keystroke.
 * - Single self-scheduling timeout (no interval left running between phases).
 */
export default function TextType({
	texts,
	className,
	cursorClassName = "text-accent-500",
	typingSpeed = 90,
	deletingSpeed = 45,
	pauseDuration = 1600,
}: TextTypeProps) {
	const [display, setDisplay] = useState("");
	const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

	useEffect(() => {
		if (texts.length === 0) return;

		const prefersReducedMotion = window.matchMedia(
			"(prefers-reduced-motion: reduce)",
		).matches;
		if (prefersReducedMotion) {
			setDisplay(texts[0]);
			return;
		}

		let textIndex = 0;
		let charIndex = 0;
		let deleting = false;

		const tick = () => {
			const current = texts[textIndex];

			if (!deleting) {
				charIndex++;
				setDisplay(current.slice(0, charIndex));
				if (charIndex === current.length) {
					deleting = true;
					timeoutRef.current = setTimeout(tick, pauseDuration);
					return;
				}
				timeoutRef.current = setTimeout(tick, typingSpeed);
			} else {
				charIndex--;
				setDisplay(current.slice(0, charIndex));
				if (charIndex === 0) {
					deleting = false;
					textIndex = (textIndex + 1) % texts.length;
					timeoutRef.current = setTimeout(tick, typingSpeed);
					return;
				}
				timeoutRef.current = setTimeout(tick, deletingSpeed);
			}
		};

		timeoutRef.current = setTimeout(tick, typingSpeed);
		return () => clearTimeout(timeoutRef.current);
	}, [texts, typingSpeed, deletingSpeed, pauseDuration]);

	return (
		<span className={className}>
			<span className="sr-only">{texts.join(", ")}</span>
			<span aria-hidden="true">{display}</span>
			<span aria-hidden="true" className={`animate-pulse ${cursorClassName}`}>
				|
			</span>
		</span>
	);
}

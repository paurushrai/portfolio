"use client";
import { useEffect, useRef } from "react";

type Easing = "linear" | "ease-in" | "ease-out" | "ease-in-out";

interface ClickSparkProps {
	/** Any CSS color. Defaults to the theme accent (`--accent-500`). */
	sparkColor?: string;
	sparkSize?: number;
	sparkRadius?: number;
	sparkCount?: number;
	/** Animation length per burst, in milliseconds. */
	duration?: number;
	easing?: Easing;
	extraScale?: number;
}

interface Spark {
	x: number;
	y: number;
	angle: number;
	startTime: number;
}

const EASING: Record<Easing, (t: number) => number> = {
	linear: (t) => t,
	"ease-in": (t) => t * t,
	"ease-in-out": (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
	"ease-out": (t) => t * (2 - t),
};

/**
 * Global click-spark flourish. Renders a single fixed, pointer-events-none
 * canvas over the viewport and draws a radial burst wherever the user clicks.
 *
 * Adapted from reactbits.dev for this codebase:
 * - Idle-stops the rAF loop when no sparks are active (no permanent draw loop).
 * - Scales the backing store by devicePixelRatio for crisp lines on retina.
 * - Respects `prefers-reduced-motion` (renders nothing, skips listeners).
 * - Defaults the spark color to the `--accent-500` theme token.
 */
export default function ClickSpark({
	sparkColor,
	sparkSize = 10,
	sparkRadius = 15,
	sparkCount = 8,
	duration = 400,
	easing = "ease-out",
	extraScale = 1,
}: ClickSparkProps) {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const prefersReducedMotion =
			typeof window !== "undefined" &&
			window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		if (prefersReducedMotion) return;

		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		// Resolve the accent token once; canvas can't read CSS vars directly.
		// `--accent-500` is stored as space-separated RGB channels ("16 185 129").
		const channels = getComputedStyle(document.documentElement)
			.getPropertyValue("--accent-500")
			.trim();
		const color = sparkColor ?? (channels ? `rgb(${channels})` : "#fff");

		const sparks: Spark[] = [];
		let animationId = 0;
		let running = false;

		const resize = () => {
			const dpr = window.devicePixelRatio || 1;
			canvas.width = Math.floor(window.innerWidth * dpr);
			canvas.height = Math.floor(window.innerHeight * dpr);
			// Draw in CSS pixels; the backing store is dpr-scaled for sharpness.
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
		};

		const draw = (timestamp: number) => {
			ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
			ctx.strokeStyle = color;
			ctx.lineWidth = 2;

			for (let i = sparks.length - 1; i >= 0; i--) {
				const spark = sparks[i];
				const elapsed = timestamp - spark.startTime;
				if (elapsed >= duration) {
					sparks.splice(i, 1);
					continue;
				}

				const eased = EASING[easing](elapsed / duration);
				const distance = eased * sparkRadius * extraScale;
				const lineLength = sparkSize * (1 - eased);
				const cos = Math.cos(spark.angle);
				const sin = Math.sin(spark.angle);

				ctx.beginPath();
				ctx.moveTo(spark.x + distance * cos, spark.y + distance * sin);
				ctx.lineTo(
					spark.x + (distance + lineLength) * cos,
					spark.y + (distance + lineLength) * sin,
				);
				ctx.stroke();
			}

			// Idle out when there's nothing left to animate.
			if (sparks.length === 0) {
				running = false;
				return;
			}
			animationId = requestAnimationFrame(draw);
		};

		const start = () => {
			if (running) return;
			running = true;
			animationId = requestAnimationFrame(draw);
		};

		const handleClick = (e: MouseEvent) => {
			const now = performance.now();
			for (let i = 0; i < sparkCount; i++) {
				sparks.push({
					x: e.clientX,
					y: e.clientY,
					angle: (2 * Math.PI * i) / sparkCount,
					startTime: now,
				});
			}
			start();
		};

		resize();
		window.addEventListener("resize", resize);
		window.addEventListener("click", handleClick);

		return () => {
			window.removeEventListener("resize", resize);
			window.removeEventListener("click", handleClick);
			cancelAnimationFrame(animationId);
		};
	}, [
		sparkColor,
		sparkSize,
		sparkRadius,
		sparkCount,
		duration,
		easing,
		extraScale,
	]);

	return (
		<div
			aria-hidden="true"
			className="pointer-events-none fixed inset-0 z-[9999]"
		>
			<canvas ref={canvasRef} className="block h-full w-full" />
		</div>
	);
}

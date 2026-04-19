import { useEffect, useRef, useState } from "react";

interface MousePosition {
	x: number;
	y: number;
}

export function useMousePosition(): MousePosition {
	const [mousePosition, setMousePosition] = useState<MousePosition>({
		x: 0,
		y: 0,
	});
	const rafId = useRef<number>(0);

	useEffect(() => {
		const handleMouseMove = (event: MouseEvent) => {
			cancelAnimationFrame(rafId.current);
			rafId.current = requestAnimationFrame(() => {
				setMousePosition({ x: event.clientX, y: event.clientY });
			});
		};

		window.addEventListener("mousemove", handleMouseMove, { passive: true });

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
			cancelAnimationFrame(rafId.current);
		};
	}, []);

	return mousePosition;
}

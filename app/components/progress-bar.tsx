"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export function ProgressBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isNavigating, setIsNavigating] = useState(false);

  // biome-ignore lint/correctness/useExhaustiveDependencies: pathname/searchParams are the route-change trigger, not read in the effect body
  useEffect(() => {
    setIsNavigating(true);
    const timeout = setTimeout(() => {
      setIsNavigating(false);
    }, 500);
    return () => clearTimeout(timeout);
  }, [pathname, searchParams]);

  if (pathname === "/") return null;

  return (
    <div
      className={`fixed top-0 left-0 right-0 h-0.5 bg-zinc-300 z-50 origin-left transition-all duration-500 ease-in-out ${
        isNavigating ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
      }`}
    />
  );
}

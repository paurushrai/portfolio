"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export function ProgressBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    // Whenever path or search params change, trigger the bar then hide it
    setIsNavigating(true);
    const timeout = setTimeout(() => {
      setIsNavigating(false);
    }, 500); // 500ms duration for the fake progress
    return () => clearTimeout(timeout);
  }, [pathname, searchParams]);

  if (pathname === "/") return null;

  return (
    <AnimatePresence>
      {isNavigating && (
        <motion.div
          initial={{ scaleX: 0, opacity: 1 }}
          animate={{ scaleX: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{ originX: 0 }}
          className="fixed top-0 left-0 right-0 h-0.5 bg-zinc-300 z-50"
        />
      )}
    </AnimatePresence>
  );
}

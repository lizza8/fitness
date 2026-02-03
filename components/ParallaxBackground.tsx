"use client";

import { useEffect } from "react";

export function ParallaxBackground() {
  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      return;
    }

    const handleMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 18;
      const y = (event.clientY / window.innerHeight - 0.5) * 18;
      document.documentElement.style.setProperty("--px", `${x}`);
      document.documentElement.style.setProperty("--py", `${y}`);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <>
      <div className="parallax-background" aria-hidden="true" />
      <div className="parallax-glows" aria-hidden="true" />
    </>
  );
}

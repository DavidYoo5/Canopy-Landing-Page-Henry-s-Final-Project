"use client";

import { useEffect, useRef } from "react";

export default function ScrollMoveText({ children, className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    function handleScroll() {
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const start = windowHeight * 0.9;
      const end = windowHeight * 0.6;

      const progress = (start - rect.top) / (start - end);
      const clampedProgress = Math.min(Math.max(progress, 0), 1);

      element.style.setProperty("--scroll-progress", clampedProgress);
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

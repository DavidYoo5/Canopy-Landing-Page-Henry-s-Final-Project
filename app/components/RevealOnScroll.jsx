"use client";

import { useEffect, useRef, useState } from "react";
import styles from "@/app/page.module.css";

export default function RevealOnScroll({ children, className = "" }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.25,
      },
    );

    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section
      ref={ref}
      className={`${className} ${styles.revealSection} ${
        isVisible ? styles.revealVisible : ""
      }`}
    >
      {children}
    </section>
  );
}

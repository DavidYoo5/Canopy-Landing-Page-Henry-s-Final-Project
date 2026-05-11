"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ScrollAnim.module.css";

export default function ScrollAnim() {
  const wrapperRef = useRef(null);
  const maxScroll = 500;
  const [progress, setProgress] = useState(0);

  // "before" = above viewport, "active" = fixed on screen, "after" = below wrapper
  const [phase, setPhase] = useState("before");

  useEffect(() => {
    const onScroll = () => {
      const el = wrapperRef.current;
      if (!el) return;

      //the bounding rectangle for the element, where the top is
      const rect = el.getBoundingClientRect();
      const scrolled = -rect.top;

      // const maxScroll = el.offsetHeight - window.innerHeight;
      // const maxScroll = 500;

      //progress of the scroll
      const p = Math.max(0, Math.min(1, scrolled / maxScroll));

      setProgress(p);
      console.log("what is progress", p);

      if (p <= 0) {
        setPhase("before");
      } else if (p >= 1) {
        setPhase("after");
      } else {
        setPhase("active");
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  const panelClass =
    phase === "active"
      ? styles.panelFixed
      : phase === "after"
        ? styles.panelAfter
        : styles.panelBefore;



  // height is alway double the maxScroll so you can scroll through it
  return (
    <div
      ref={wrapperRef}
      className={styles.wrapper}
      style={{ height: maxScroll * 2.5 }}
    >
      <div className={`${styles.panel} ${panelClass}`}>
        <h1>{progress}% Scrolled</h1>
        <br />

        <h2>You can use the progress to do animation</h2>
        <div style={{position:"absolute", width: progress* 50, height: progress * 50, background: "red" }}></div>
      </div>
    </div>
  );
}

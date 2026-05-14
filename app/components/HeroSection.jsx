"use client";

import { useEffect, useRef, useState } from "react";
import styles from "../page.module.css";

export default function HeroSection() {
  const wrapperRef = useRef(null);
  const maxScroll = 5000;
  const [scrolled, setScrolled] = useState(0);
  const [phase, setPhase] = useState("before");

  useEffect(() => {
    const onScroll = () => {
      const el = wrapperRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const s = -rect.top;
      setScrolled(s);
      if (s <= 0) setPhase("before");
      else if (s >= maxScroll) setPhase("after");
      else setPhase("active");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const animScroll = 600;

  const t1out = Math.max(0, Math.min(1, scrolled / 400));           // screen 1 fades OUT over 400px
  const t2in = Math.max(0, Math.min(1, (scrolled - 600) / 400));  // screen 2 fades IN 200px later
  const t2out = Math.max(0, Math.min(1, (scrolled - 2000) / 400));
  const t3in = Math.max(0, Math.min(1, (scrolled - 2200) / 400));
  const t3out = Math.max(0, Math.min(1, (scrolled - 4000) / 400));
  const t4in = Math.max(0, Math.min(1, (scrolled - 4200) / 400));

  const screen1Opacity = 1 - t1out;
  const screen2Opacity = t2in * (1 - t2out);
  const screen3Opacity = t3in * (1 - t3out);
  const screen4Opacity = t4in;

 const logoProgress = Math.max(0, Math.min(1, (scrolled - 4200) / 500));
const wordmarkProgress = Math.max(0, Math.min(1, (scrolled - 4600) / 400));

  const overscroll = Math.max(0, scrolled - maxScroll);
  const fadeOut = Math.max(0, 1 - overscroll / 400);

  const easeOut = (t) => 1 - Math.pow(1 - t, 3);
  const lp = easeOut(logoProgress);
  const wp = easeOut(wordmarkProgress);

  const headingStyle = {
    fontFamily: "'DM Serif Display', Georgia, serif",
    fontWeight: 400,
    lineHeight: 1.15,
    textAlign: "center",
    margin: 0,
    letterSpacing: "-0.01em",
    fontSize: "clamp(2.5rem, 6vw, 6rem)",
    color: "#0d3d2e",
  };

  const panelStyle = {
    position: phase === "after" ? "absolute" : phase === "active" ? "fixed" : "absolute",
    top: phase === "after" ? "auto" : 0,
    bottom: phase === "after" ? 0 : "auto",
    left: 0,
    width: "100%",
    height: "100vh",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div
      ref={wrapperRef}
      className={styles.wrapper}
      style={{ height: maxScroll + (typeof window !== "undefined" ? window.innerHeight : 800) }}
    >
      <div style={panelStyle}>
        <div style={{ position: "absolute", inset: 0, opacity: fadeOut, transition: "none" }}>

          {/* Background */}
          <div style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/heroBg.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }} />

          {/* Vignette */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse at center, transparent 40%, rgba(10, 40, 25, 0.18) 100%)",
            pointerEvents: "none",
          }} />

          {/* Screen 1: Finance is stressful */}
          <div style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: screen1Opacity,
            padding: "0 2rem",
          }}>
            <h1 style={headingStyle}>
              Finance is Stressful
            </h1>
          </div>

          {/* Screen 2: It doesn't have to be */}
          <div style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: screen2Opacity,
            padding: "0 2rem",
          }}>
            <h1 style={headingStyle}>
              It Doesn't Have to Be
            </h1>
          </div>

          {/* Screen 3: Welcome to Canopy + Find your financial shelter */}
          <div style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            opacity: screen3Opacity,
            padding: "0 2rem",
            gap: "1.25rem",
          }}>
            <p style={{
              fontFamily: "system-ui, -apple-system, sans-serif",
              fontSize: "clamp(0.9rem, 1.8vw, 1.1rem)",
              fontWeight: 500,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#2d6a4f",
              margin: 0,
            }}>
              Welcome to Canopy
            </p>
            <h1 style={headingStyle}>
              Find Your Finance Shelter
            </h1>
          </div>

          {/* Screen 4: Animated logo */}
          <div style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            opacity: screen4Opacity,
          }}>
            <svg
              viewBox="0 0 185.04 177.99"
              style={{ width: "clamp(180px, 26vw, 300px)", overflow: "visible" }}
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Right leaf — slides in from right */}
              <path
                fill="#2e8d6f"
                d="M95.9,18.02c.33-.72.81-.53,1.9,1.28,6.87,11.46,19.25,18.17,29.54,26.69,6.24,5.16,12,11.28,14.89,18.84,3.13,8.19,2.61,17.25,2.04,25.99-.03.43-.24,1.01-.66.93-.16-.03-.29-.17-.4-.29-7.19-8.15-17.37-12.84-26.79-18.26-4.43-2.55-8.82-5.37-12.1-9.3-3.77-4.51-5.83-10.22-7.05-15.97-1.24-5.8-1.69-11.74-1.81-17.66-.06-2.97-.03-5.95.02-8.92.02-1.19.09-2.62.41-3.33Z"
                style={{
                  transform: `translateX(${(1 - lp) * 100}px)`,
                  opacity: lp,
                }}
              />

              {/* Left leaf — slides in from left */}
              <path
                fill="#002b22"
                d="M87.79.69c-.03-.11-.08-.22-.14-.32-1.15-1.9-2.88,4.13-3.12,4.81-2.65,7.32-6.11,14.53-10.89,20.71-4.99,6.48-11.36,11.73-17.31,17.35s-11.63,11.83-14.68,19.42c-3.57,8.89-3.2,18.8-2.77,28.36,0,.15.01.3.08.43.33.66,1.32.06,1.76-.53,2.25-2.99,5.31-5.27,8.43-7.34,5.31-3.53,10.92-6.61,16.46-9.76,4.57-2.6,9.18-5.31,12.7-9.22,5.85-6.51,7.95-15.54,8.82-24.25,1.27-12.81.32-25.73.74-38.6.01-.36.02-.73-.08-1.06Z"
                style={{
                  transform: `translateX(${(1 - lp) * -100}px)`,
                  opacity: lp,
                }}
              />

              {/* Bottom bar — slides in from bottom */}
              <rect
                fill="#002d24"
                x="39.05" y="99.72" width="105.49" height="13.11" rx="3.06" ry="3.06"
                style={{
                  transform: `translateY(${(1 - lp) * 60}px)`,
                  opacity: lp,
                }}
              />

              {/* Wordmark — fades up after icon */}
              <g
                fill="#004738"
                style={{
                  transform: `translateY(${(1 - wp) * 20}px)`,
                  opacity: wp,
                }}
              >
                <path d="M19.27,166.42c-3.36,0-6.25-.53-8.68-1.59-2.43-1.06-4.43-2.52-5.99-4.37-1.56-1.85-2.72-3.96-3.47-6.34-.75-2.37-1.13-4.87-1.13-7.49,0-2.85.53-5.53,1.59-8.04,1.06-2.51,2.56-4.71,4.48-6.6,1.93-1.89,4.22-3.38,6.89-4.46,2.66-1.08,5.59-1.62,8.8-1.62,2.81,0,5.19.25,7.12.75,1.93.5,3.38,1.02,4.34,1.56l.69,10.82h-1.74c-.93-1.97-1.87-3.7-2.84-5.21s-2.12-2.69-3.47-3.56c-1.35-.87-3.07-1.3-5.15-1.3-2.89,0-5.38.7-7.46,2.11-2.08,1.41-3.68,3.39-4.8,5.96-1.12,2.57-1.68,5.62-1.68,9.17s.64,6.43,1.91,8.77c1.27,2.33,2.98,4.07,5.12,5.21,2.14,1.14,4.5,1.71,7.09,1.71,3.01,0,5.48-.57,7.41-1.71,1.93-1.14,3.8-2.77,5.61-4.89l1.04.69c-1.43,3.55-3.57,6.17-6.42,7.87-2.86,1.7-5.94,2.55-9.26,2.55Z" />
                <path d="M44.61,166.07c-1.97,0-3.5-.53-4.6-1.59-1.1-1.06-1.65-2.46-1.65-4.19,0-1.27.38-2.52,1.13-3.73.75-1.21,2.25-2.21,4.48-2.98,1.12-.39,2.55-.77,4.28-1.16,1.74-.39,3.28-.69,4.63-.93v-3.24c0-1.81-.41-3.17-1.22-4.08-.81-.91-1.77-1.36-2.89-1.36-.81,0-1.53.06-2.17.17-.64.12-1.4.33-2.29.64v5.55c-.62.12-1.2.17-1.74.17-1.16,0-2-.24-2.52-.72-.52-.48-.78-1.03-.78-1.65,0-.35.07-.71.2-1.1.13-.39.36-.75.67-1.1.66-.73,1.56-1.5,2.72-2.31,1.16-.81,2.38-1.5,3.67-2.08,1.29-.58,2.48-.87,3.56-.87,2.58,0,4.59.6,6.02,1.79,1.43,1.2,2.14,3.14,2.14,5.84v13.37c0,.85.15,1.49.43,1.91.29.42.8.64,1.53.64.39,0,.79-.08,1.21-.23.42-.15.83-.42,1.21-.81l.52.52c-.5,1.31-1.3,2.23-2.4,2.75-1.1.52-2.15.78-3.15.78-1.08,0-2.04-.27-2.86-.81-.83-.54-1.38-1.41-1.65-2.6h-.64c-1.12.96-2.29,1.77-3.5,2.43s-2.67.98-4.37.98ZM44.03,159.01c0,.96.27,1.83.81,2.6.54.77,1.45,1.16,2.72,1.16.96,0,1.82-.15,2.58-.46.75-.31,1.67-.75,2.75-1.33v-7.7c-.62.08-1.4.24-2.34.49-.95.25-1.94.59-2.98,1.01-1.27.5-2.18,1.1-2.72,1.79-.54.69-.81,1.5-.81,2.43Z" />
                <path d="M64.92,165.55v-1.85l2.14-.23c1.04-.12,1.56-.81,1.56-2.08v-16.37l-3.07-2.6v-.81l7.98-2.08h.46v4.57h.46c1.31-1.74,2.76-2.93,4.34-3.59,1.58-.66,3.16-.98,4.74-.98,2.28,0,4.1.6,5.47,1.79,1.37,1.2,2.05,3.14,2.05,5.84v16.32l3.76.23v1.85h-12.85v-1.85l2.14-.23c1.04-.12,1.56-.81,1.56-2.08v-12.44c0-1.81-.43-3.16-1.3-4.05-.87-.89-2.04-1.33-3.5-1.33-2.28,0-4.57.75-6.89,2.26v17.65l3.76.23v1.85h-12.84Z" />
                <path d="M110.98,166.13c-2.82,0-5.2-.59-7.15-1.76-1.95-1.18-3.43-2.78-4.46-4.8-1.02-2.03-1.53-4.29-1.53-6.8s.58-4.71,1.74-6.71c1.16-2.01,2.73-3.6,4.72-4.77,1.99-1.18,4.21-1.76,6.68-1.76,2.7,0,5.03.57,7,1.71,1.97,1.14,3.49,2.7,4.57,4.69,1.08,1.99,1.62,4.27,1.62,6.86s-.58,4.77-1.74,6.8-2.73,3.63-4.72,4.8c-1.99,1.18-4.23,1.76-6.74,1.76ZM110.98,163.7c2.16,0,3.89-1.02,5.18-3.07,1.29-2.04,1.94-4.67,1.94-7.87s-.64-5.76-1.91-7.78c-1.27-2.03-3.01-3.04-5.21-3.04s-3.83,1.01-5.12,3.04c-1.29,2.03-1.94,4.62-1.94,7.78s.63,5.78,1.88,7.84c1.25,2.06,2.98,3.1,5.18,3.1Z" />
                <path d="M127.53,177.99v-1.85l2.14-.23c1.04-.12,1.56-.81,1.56-2.08v-28.82l-3.07-2.6v-.81l7.98-2.08h.46v4.4h.52c.69-1.08,1.7-2.08,3.01-3.01,1.31-.93,3.11-1.39,5.38-1.39,1.85,0,3.55.46,5.09,1.39,1.54.93,2.77,2.26,3.67,3.99s1.36,3.86,1.36,6.37c0,2.82-.66,5.35-1.97,7.61-1.31,2.26-3.07,4.03-5.27,5.32-2.2,1.29-4.63,1.94-7.29,1.94-.93,0-1.76-.06-2.52-.17-.75-.12-1.42-.25-2-.4v10.36l3.76.23v1.85h-12.85ZM142.69,143.68c-1.04,0-2.05.14-3.04.4-.98.27-2,.87-3.04,1.79v14.64c.7.73,1.54,1.4,2.55,2,1,.6,2.14.9,3.41.9,2.35,0,4.18-.86,5.5-2.57,1.31-1.72,1.97-4.23,1.97-7.55,0-3.09-.71-5.46-2.14-7.12-1.43-1.66-3.16-2.49-5.21-2.49Z" />
                <path d="M164.21,177.99c-1.12,0-1.95-.3-2.49-.9-.54-.6-.85-1.33-.93-2.2-.08-.87-.02-1.69.17-2.46h5.5l3.3-5.55-9.2-22.05-1.1-2.6-2.66-.29v-1.85h13.37v1.85l-2.03.17c-.62.04-1.14.12-1.56.23s-.52.48-.29,1.1l.64,1.62,5.67,14.52,5.61-17.24-3.24-.4v-1.85h10.07v1.85l-1.56.12c-.62.04-1.02.13-1.21.26-.19.14-.39.41-.58.84l-.58,1.39-8.04,19.56-.69,1.74-.06.23-3.01,7.58c-.39.96-1,1.93-1.85,2.89-.85.96-1.93,1.45-3.24,1.45Z" />
              </g>
            </svg>
          </div>

        </div>
      </div>
    </div>
  );
}
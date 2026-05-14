"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "../context/ThemeContext";

export default function CoreValue() {
  const wrapperRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const { darkMode } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      const el = wrapperRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const scrolled = -rect.top;
      const maxScroll = el.offsetHeight - window.innerHeight;

      const p = Math.max(0, Math.min(1, scrolled / maxScroll));

      setProgress(p);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const circle1Progress = Math.max(0, Math.min(1, progress / 0.5));
  const circle2Progress = Math.max(0, Math.min(1, (progress - 0.5) / 0.5));

  const r = 300;
  const circumference = 2 * Math.PI * r;

  const textStyle = {
    fontFamily: "DM Sans",
    fontSize: "clamp(2rem, 3.2vw, 3rem)",
    lineHeight: 1.18,
    color: darkMode ? "#fffbd3" : "#004738",
    margin: 0,
    transition: "color 0.3s ease",
  };

  const serifStyle = {
    fontFamily: "DM Serif Display",
    fontSize: "clamp(2.4rem, 4vw, 3.6rem)",
    fontWeight: 400,
  };

  const sectionBackground = "transparent";
  const baseCircleColor = darkMode ? "rgba(255, 251, 211, 0.14)" : "#e5efe2";
  const activeCircleColor = darkMode ? "#d6ec8f" : "#35966a";

  return (
    <section
      style={{
        height: "1180px",
        background: sectionBackground,
        position: "relative",
        overflow: "visible",
        transition: "background 0.3s ease",
      }}
    >
      <div
        ref={wrapperRef}
        style={{
          height: "1180px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "sticky",
            top: 0,
            height: "1180px",
            background: sectionBackground,
            overflow: "visible",
          }}
        >
          <div
            style={{
              width: "min(1100px, calc(100% - 100px))",
              height: "1180px",
              margin: "0 auto",
              position: "relative",
            }}
          >
            {/* TOP LEFT CIRCLE */}
            <svg
              style={{
                position: "absolute",
                top: "0px",
                left: "-350px",
                width: "580px",
                height: "580px",
                overflow: "visible",
              }}
              viewBox="0 0 700 700"
            >
              <circle
                cx="340"
                cy="320"
                r={r}
                fill="none"
                stroke={baseCircleColor}
                strokeWidth="3"
              />
              <circle
                cx="350"
                cy="350"
                r={r}
                fill="none"
                stroke={baseCircleColor}
                strokeWidth="3"
              />

              <circle
                cx="350"
                cy="350"
                r={r}
                fill="none"
                stroke={activeCircleColor}
                strokeWidth="3"
                strokeDasharray={circumference}
                strokeDashoffset={circumference * (1 - circle1Progress)}
                strokeLinecap="round"
                transform="rotate(-120 350 350)"
              />
            </svg>

            {/* TOP TEXT */}
            <div
              style={{
                position: "absolute",
                top: "190px",
                right: "20px",
                maxWidth: "590px",
                zIndex: 2,
              }}
            >
              <p style={textStyle}>
                Turn everyday spending
                <br />
                into a <span style={serifStyle}>simple growth journey</span>
              </p>
            </div>

            {/* BOTTOM TEXT */}
            <div
              style={{
                position: "absolute",
                left: "20px",
                bottom: "60px",
                maxWidth: "520px",
                zIndex: 2,
              }}
            >
              <p style={textStyle}>
                <span style={serifStyle}>Track</span> your money
                <br />
                <span style={serifStyle}>stay</span> on budget
                <br />
                and <span style={serifStyle}>grow</span> your goals
              </p>
            </div>

            {/* BOTTOM RIGHT CIRCLE */}
            <svg
              style={{
                position: "absolute",
                right: "-350px",
                bottom: "-120px",
                width: "580px",
                height: "580px",
                overflow: "visible",
              }}
              viewBox="0 0 700 700"
            >
              <circle
                cx="350"
                cy="350"
                r={r}
                fill="none"
                stroke={baseCircleColor}
                strokeWidth="3"
              />
              <circle
                cx="330"
                cy="340"
                r={r}
                fill="none"
                stroke={baseCircleColor}
                strokeWidth="3"
              />

              <circle
                cx="350"
                cy="350"
                r={r}
                fill="none"
                stroke={activeCircleColor}
                strokeWidth="3"
                strokeDasharray={circumference}
                strokeDashoffset={circumference * (1 - circle2Progress)}
                strokeLinecap="round"
                transform="scale(-1 1) translate(-700 0) rotate(120 350 350)"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

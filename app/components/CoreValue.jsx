"use client";

import { useEffect, useRef, useState } from "react";

export default function CoreValue() {
    const wrapperRef = useRef(null);
    const [progress, setProgress] = useState(0);

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

    // SVG circle circumference: 2 * pi * r
    const r = 300;
    const circumference = 2 * Math.PI * r;

    // const textStyle = {
    //     fontFamily: "'DM Serif Display', Georgia, serif",
    //     fontSize: "clamp(1.1rem, 2vw, 1.45rem)",
    //     color: "#004738",
    //     lineHeight: 1.5,
    //     margin: 0,
    // };

    return (
        <div style={{ position: "relative", zIndex: 0, backgroundColor:"#fafdf5" }}>
            <div ref={wrapperRef} style={{ height: "150vh", position: "relative" }}>
                <div style={{
                    position: "sticky",
                    top: 0,
                    height: "100vh",
                    background: "#fafdf5",
                    // NO overflow:hidden so circles show fully
                }}>

                    {/* Circle top-left SVG */}
                    <svg
                        style={{
                            position: "absolute",
                            top: 300,
                            left: 0,
                            width: "45vw",
                            height: "45vw",
                            overflow: "visible",
                            transform: "translate(-30%, -30%)",
                        }}
                        viewBox="0 0 700 700"
                    >
                        {/* Gray base */}
                        <circle cx="340" cy="320" r={r} fill="none" stroke="#e5efe2ff" strokeWidth="3" />
                        <circle cx="350" cy="350" r={r} fill="none" stroke="#e5efe2ff" strokeWidth="3" />
                        {/* Green fill — drawn from top (12 o'clock), clockwise */}
                        <circle
                            cx="350" cy="350" r={r}
                            fill="none"
                            stroke="#35966aff"
                            strokeWidth="3"
                            strokeDasharray={circumference}
                            strokeDashoffset={circumference * (1 - circle1Progress)}
                            strokeLinecap="round"
                            transform="rotate(-120 350 350)"
                        />
                    </svg>

                    {/* Circle bottom-right SVG */}
                    <svg
                        style={{
                            position: "absolute",
                            top: 400,
                            right: 0,
                            width: "45vw",
                            height: "45vw",
                            overflow: "visible",
                            transform: "translate(30%, 30%)",
                        }}
                        viewBox="0 0 700 700"
                    >
                        {/* Gray base */}
                        <circle cx="350" cy="350" r={r} fill="none" stroke="#e5efe2ff" strokeWidth="3" />
                        <circle cx="330" cy="340" r={r} fill="none" stroke="#e5efe2ff" strokeWidth="3" />
                        {/* Green fill — drawn from top, clockwise */}
                        {/* Bottom-right green circle — starts 2 o'clock, counter-clockwise */}
                        <circle
                            cx="350" cy="350" r={r}
                            fill="none"
                            stroke="#35966aff"
                            strokeWidth="3"
                            strokeDasharray={circumference}
                            strokeDashoffset={circumference * (1 - circle2Progress)}
                            strokeLinecap="round"
                            transform="scale(-1 1) translate(-700 0) rotate(120 350 350)"
                        />
                    </svg>

                    {/* Text 1 — upper area */}
                    <div style={{
                        position: "absolute",
                        top: "36%",
                        left: "40%",
                    }}>
                        <p style={{fontFamily:"DM Sans",fontSize:"3rem", color:"#004738"}}>
                            Turn everyday spending<br />
                            into a <span style={{fontFamily:"DM Serif Display", fontSize:"3.5rem"}}>simple growth journey</span>
                        </p>
                    </div>

                    {/* Text 2 — lower area */}
                    <div style={{
                        position: "absolute",
                        bottom: "-30%",
                        left: "8%",
                    }}>
                        <p style={{fontFamily:"DM Sans",fontSize:"3rem",color:"#004738"}}>
                            <span style={{fontFamily:"DM Serif Display", fontSize:"3.5rem"}}>Track</span> your money<br /><span style={{fontFamily:"DM Serif Display", fontSize:"3.5rem"}}>stay</span> on budget<br />
                            and <span style={{fontFamily:"DM Serif Display", fontSize:"3.5rem"}}>grow</span> your goals
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}
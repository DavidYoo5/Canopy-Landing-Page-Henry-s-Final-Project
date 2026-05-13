"use client";

import { useEffect, useState, useRef } from "react";
import styles from "../page.module.css";

const slides = [
  {
    title: "Why Canopy?",
    text: "Why did we choose an app called Canopy?",
    image: "/ForestImage.jpg",
    reverse: true,
  },
  {
    title: "A Layer of Protection",
    text: "The forest canopy protects what grows below.",
    image: "/ForestSun1.jpg",
  },
  {
    title: "Calm & Trustworthy",
    text: "The word “Canopy” feels natural, safe, and relaxing, which helps reduce the stress often associated with finance apps.",
    image: "/CalmandTrust2.jpg",
    reverse: true,
  },
  {
    title: "Protect Your Budget",
    text: "Our app helps you track spending and grow better money habits.",
    image: "/Upview.jpg",
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState("right");
  const [isPaused, setIsPaused] = useState(false);
  const [timerReset, setTimerReset] = useState(false);

  const carouselRef = useRef(null);
  const hasResetOnView = useRef(false);

  /* =========================
     RESET TIMER
  ========================= */
  const resetTimer = () => {
    setTimerReset((prev) => !prev);
  };

  /* =========================
     CHANGE SLIDE
  ========================= */
  const goToSlide = (getNextSlide, newDirection) => {
    setDirection(newDirection);

    setCurrentSlide((prev) => {
      const next = getNextSlide(prev);

      resetTimer();

      return next;
    });
  };

  /* =========================
     AUTO SLIDE
  ========================= */
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      goToSlide((prev) => (prev + 1) % slides.length, "right");
    }, 10000);

    return () => clearInterval(interval);
  }, [isPaused, timerReset]);

  /* =========================
     NEXT / PREV
  ========================= */
  const nextSlide = () => {
    goToSlide((prev) => (prev + 1) % slides.length, "right");
  };

  const prevSlide = () => {
    goToSlide((prev) => (prev - 1 + slides.length) % slides.length, "left");
  };

  /* =========================
     RESET ON SCROLL BACK
  ========================= */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasResetOnView.current) {
          hasResetOnView.current = true;

          setCurrentSlide(0);
          setDirection("right");
          resetTimer();
        }

        if (!entry.isIntersecting) {
          hasResetOnView.current = false;
        }
      },
      {
        threshold: 0.6,
      },
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={carouselRef}
      className={styles.heroCarousel}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* LEFT ARROW */}
      <button
        onClick={prevSlide}
        className={`${styles.carouselArrow} ${styles.carouselArrowLeft}`}
        type="button"
      >
        <span className={styles.arrow}>‹</span>
      </button>

      {/* SLIDE */}
      <div
        key={`${currentSlide}-${timerReset}`}
        className={`${styles.carouselSlide} ${
          direction === "right" ? styles.slideRight : styles.slideLeft
        } ${slides[currentSlide].reverse ? styles.reverseSlide : ""}`}
      >
        {/* IMAGE */}
        <div className={styles.carouselImageWrap}>
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className={styles.carouselImage}
          />
        </div>

        {/* TEXT */}
        <div className={styles.carouselText}>
          <h1>{slides[currentSlide].title}</h1>
          <p>{slides[currentSlide].text}</p>
        </div>

        {/* TIMER */}
        <div className={styles.carouselProgress}>
          <div
            className={`${styles.carouselProgressBar} ${
              timerReset ? styles.timerA : styles.timerB
            } ${isPaused ? styles.paused : ""}`}
          />
        </div>
      </div>

      {/* RIGHT ARROW */}
      <button
        onClick={nextSlide}
        className={`${styles.carouselArrow} ${styles.carouselArrowRight}`}
        type="button"
      >
        <span className={styles.arrow}>›</span>
      </button>
    </div>
  );
}

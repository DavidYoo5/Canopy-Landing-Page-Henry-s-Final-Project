"use client";

import { useEffect, useState } from "react";
import styles from "../page.module.css";

const slides = [
  {
    title: "Why Canopy?",
    text: "Why did we choose an app called Canopy?",
  },
  {
    title: "A layer of protection",
    text: "The forest canopy protects what grows below.",
  },
  {
    title: "Protect your budget",
    text: "Our app helps you track spending and grow better money habits.",
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState("right");
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setDirection("right");
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => {
    setDirection("right");
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection("left");
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div
      className={styles.heroCarousel}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <button
  onClick={prevSlide}
  className={`${styles.carouselArrow} ${styles.carouselArrowLeft}`}
>
  <span className={styles.arrow}>‹</span>
</button>

      <div
        key={currentSlide}
        className={`${styles.carouselSlide} ${
          direction === "right" ? styles.slideRight : styles.slideLeft
        }`}
      >
        <div className={styles.carouselText}>
          <h1>{slides[currentSlide].title}</h1>
          <p>{slides[currentSlide].text}</p>
        </div>

        <div className={styles.carouselProgress}>
          <div
            key={`${currentSlide}-${isPaused}`}
            className={`${styles.carouselProgressBar} ${
              isPaused ? styles.paused : ""
            }`}
          ></div>
        </div>
      </div>

      <button
  onClick={nextSlide}
  className={`${styles.carouselArrow} ${styles.carouselArrowRight}`}
>
  <span className={styles.arrow}>›</span>
</button>
    </div>
  );
}

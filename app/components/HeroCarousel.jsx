"use client";

import { useEffect, useRef, useState } from "react";
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
  const [timerKey, setTimerKey] = useState(0);

  const carouselRef = useRef(null);
  const wasInView = useRef(false);

  function resetTimer() {
    setTimerKey((prev) => prev + 1);
  }

  function goToSlide(nextSlide, newDirection) {
    setDirection(newDirection);
    setCurrentSlide(nextSlide);
    resetTimer();
  }

  function nextSlide() {
    goToSlide((currentSlide + 1) % slides.length, "right");
  }

  function prevSlide() {
    goToSlide((currentSlide - 1 + slides.length) % slides.length, "left");
  }

  useEffect(() => {
    slides.forEach((slide) => {
      const image = new Image();
      image.src = slide.image;
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !wasInView.current) {
          wasInView.current = true;
          setCurrentSlide(0);
          setDirection("right");
          resetTimer();
        }

        if (!entry.isIntersecting) {
          wasInView.current = false;
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
    <div>
      <h2 className={styles.headingCarousel}>The Brand</h2>
      <p className={styles.carouselDescription}>
        <em>Canopy comes from the forest layer above.</em>
      </p>

      <div
        ref={carouselRef}
        className={styles.heroCarousel}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <button
          onClick={prevSlide}
          className={`${styles.carouselArrow} ${styles.carouselArrowLeft}`}
          type="button"
        >
          <span className={styles.arrow}>‹</span>
        </button>

        <div
          key={currentSlide}
          className={`${styles.carouselSlide} ${
            direction === "right" ? styles.slideRight : styles.slideLeft
          } ${slides[currentSlide].reverse ? styles.reverseSlide : ""}`}
        >
          <div className={styles.carouselImageWrap}>
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className={styles.carouselImage}
              loading="eager"
              decoding="sync"
              fetchPriority="high"
            />
          </div>

          <div className={styles.carouselText}>
            <h1>{slides[currentSlide].title}</h1>
            <p>{slides[currentSlide].text}</p>
          </div>

          <div className={styles.carouselProgress}>
            <div
              key={timerKey}
              className={`${styles.carouselProgressBar} ${
                isPaused ? styles.paused : ""
              }`}
              onAnimationEnd={() => {
                if (!isPaused) {
                  nextSlide();
                }
              }}
            />
          </div>
        </div>

        <button
          onClick={nextSlide}
          className={`${styles.carouselArrow} ${styles.carouselArrowRight}`}
          type="button"
        >
          <span className={styles.arrow}>›</span>
        </button>
      </div>
    </div>
  );
}

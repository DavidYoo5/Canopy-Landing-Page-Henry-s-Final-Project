"use client";

import { useState } from "react";
import styles from "./page.module.css";

import BackToTop from "./components/BackToTop";
import DarkModeToggle from "./components/DarkModeToggle";
import HeroCarousel from "./components/HeroCarousel";
import HeroSection from "./components/HeroSection";
import CoreValue from "./components/CoreValue";
import VideoSection from "./components/VideoSection";

export default function Home() {
  return (
    <main className={styles.page}>
      {/* NAVBAR */}
      <nav className={styles.navbar}>
        <div className={styles.navInner}>
          <a href="/" className={styles.navLogo}>
            <img
              src="/logo.svg"
              alt="Canopy logo"
              className={styles.navLogoImg}
            />
            <span>Canopy</span>
          </a>

          <ul className={styles.navLinks}>
            <li>
              <a href="#section-banner" className={styles.navLink}>
                Welcome
              </a>
            </li>
            <li>
              <a href="#section-logo" className={styles.navLink}>
                Intro
              </a>
            </li>
            <li>
              <a href="#section-set-budget" className={styles.navLink}>
                Budget
              </a>
            </li>
            <li>
              <a href="#section-insight" className={styles.navLink}>
                Insights
              </a>
            </li>
            <li>
              <a href="#section-grow-savings-tree" className={styles.navLink}>
                Weekly Quests
              </a>
            </li>
            <li>
              <a href="#section-hero-carousel" className={styles.navLink}>
                Why Canopy
              </a>
            </li>
            <li>
              <a href="#section-about-us" className={styles.navLink}>
                About Us
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <DarkModeToggle />

      {/* Hero */}
      <HeroSection></HeroSection>

      {/* Core Value */}
      <CoreValue></CoreValue>

      {/* Video Section */}
      <VideoSection></VideoSection>

      {/* CONTENT */}
      <section className={styles.content}>
        <h1 className={styles.pageTitle}>Welcome to Canopy</h1>

        <section
          id="section-banner"
          className={styles.contentSection}
        ></section>

        <section id="section-logo" className={styles.contentSection}></section>

        <section
          id="section-experience-caopy-heading"
          className={styles.contentSection}
        ></section>

        <section
          id="section-set-budget"
          className={styles.contentSection}
        ></section>

        <section
          id="section-insight"
          className={styles.contentSection}
        ></section>

        <section
          id="section-grow-savings-tree"
          className={styles.contentSection}
        ></section>

        <section id="section-hero-carousel" className={styles.contentSection}>
          <div className={styles.heroSplit}>
            {/* LEFT IMAGE PLACEHOLDER */}
            <div className={styles.heroLeft}>
              <img
                src="/ForestImage.jpg" // change later
                alt="Hero visual"
                className={styles.heroPlaceholder}
              />
            </div>

            {/* RIGHT CAROUSEL */}
            <div className={styles.heroRight}>
              <HeroCarousel />
            </div>
          </div>
        </section>

        <section
          id="section-about-us"
          className={styles.contentSection}
        ></section>
      </section>

      {/* FOOTER */}
      <footer className={styles.siteFooter}>
        <div className={styles.footerInner}>
          <div className={styles.footerLogo}>
            <img
              src="/logo green.svg"
              alt="Canopy logo"
              className={styles.navLogoImg}
            />
            <span className={styles.footerLogoText}>Canopy</span>
          </div>

          <p className={styles.footerCopy}>
            © 2026 Canopy. All rights reserved.
          </p>
        </div>
      </footer>
      <BackToTop />
    </main>
  );
}

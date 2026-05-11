"use client";

import { useState } from "react";
import styles from "./page.module.css";

import BackToTop from "./components/BackToTop";
import DarkModeToggle from "./components/DarkModeToggle";
import HeroCarousel from "./components/HeroCarousel";
import RevealOnScroll from "./components/RevealOnScroll";
import FeatureBudgetDemo from "./components/FeatureBudgetDemo";
import TeamSection from "./components/TeamSection";

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

      {/* CONTENT */}
      <section className={styles.content}>
        <h1 className={styles.pageTitle}>Welcome to Canopy</h1>
      </section>

      <section id="section-banner" className={styles.contentSection}></section>

      <section id="section-logo" className={styles.contentSection}></section>

      {/* EXPERIENCE CANOPY SECTION */}
      <section className={styles.experienceIntroSection}>
        <h3 className={styles.interactiveAppHeading}>
          Interactive app features
        </h3>

        <RevealOnScroll className={styles.typingTitleReveal}>
          <h1 className={styles.interactiveAppTitle}>
            <span className={styles.typingText}>Experience Canopy</span>
          </h1>
        </RevealOnScroll>

        <h2 className={styles.interactiveAppDescription}>
          Click, Type, and Hover to preview
        </h2>
      </section>

      {/* FEATURE 1 */}
      <FeatureBudgetDemo />

      <section id="section-insight" className={styles.contentSection}></section>

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

      {/* CTA Message Section */}
      <RevealOnScroll className={styles.ctaMessageSection}>
        <h1 className={styles.ctaMessage}>
          <span className={styles.ctaLineMask}>
            <span className={styles.ctaSans}>Start small.</span>
          </span>

          <span className={styles.ctaLineMask}>
            <span className={styles.ctaSans}>Stay on track.</span>
          </span>

          <span className={styles.ctaLineMask}>
            <span className={styles.ctaSerif}>Grow with Canopy.</span>
          </span>
        </h1>
      </RevealOnScroll>

      {/* Meet the Team Section */}
      <TeamSection />

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

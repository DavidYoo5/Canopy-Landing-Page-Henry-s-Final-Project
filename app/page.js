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
              <a href="#section-Home" className={styles.navLink}>
                Home
              </a>
            </li>
            <li>
              <a href="#section-Demo" className={styles.navLink}>
                Demo
              </a>
            </li>
            <li>
              <a href="#section-Branding" className={styles.navLink}>
                Branding
              </a>
            </li>
            <li>
              <a href="#section-LetsGrow" className={styles.navLink}>
                Let's Grow
              </a>
            </li>
            <li>
              <a href="#section-Roots" className={styles.navLink}>
                Roots
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <DarkModeToggle />

      {/* CONTENT */}
      <section className={styles.content}>
        <section
          id="section-Home"
          className={styles.contentSection}
        ></section>

        <section id="section-logo" className={styles.contentSection}></section>

        <section
          id="section-experience-caopy-heading"
          className={styles.contentSection}
        ></section>

        <section
          id="section-Demo"
          className={styles.contentSection}
        >
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

        <section
          id="section-budget-demo"
          className={styles.contentSection}
        >
          <FeatureBudgetDemo />
        </section>

        <section
          id="section-insight-demo"
          className={styles.contentSection}
        >

        </section>

        <section
          id="section-grow-savings-tree"
          className={styles.contentSection}
        ></section>

        <section id="section-Branding" className={styles.contentSection}>
          {/* RIGHT CAROUSEL */}
            <RevealOnScroll className={styles.carouselReveal}>
              <HeroCarousel />
            </RevealOnScroll>
        </section>


        <section 
          id="section-LetsGrow"
          className={styles.contentSection}
        >
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
        </section>

        <section
          id="section-Roots"
          className={styles.contentSection}
        >
          <TeamSection />
        </section>
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

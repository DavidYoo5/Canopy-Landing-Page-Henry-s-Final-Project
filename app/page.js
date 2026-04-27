"use client";

import { useState } from "react";
import styles from "./page.module.css";

import DarkModeToggle from "./components/DarkModeToggle";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

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
            <li><a href="#section-hero" className={styles.navLink}>Hero</a></li>
            <li><a href="#section-sign-up" className={styles.navLink}>Sign Up</a></li>
            <li><a href="#section-expenses" className={styles.navLink}>Expenses</a></li>
            <li><a href="#section-Insights" className={styles.navLink}>Insights</a></li>
            <li><a href="#section-progression" className={styles.navLink}>Progression</a></li>
            <li><a href="#section-goal-tree" className={styles.navLink}>Goal Tree</a></li>
            <li><a href="#section-about-us" className={styles.navLink}>About us</a></li>
          </ul>

          <button
            className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <DarkModeToggle />

      {/* MOBILE MENU */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}>
        <a href="#section-hero" className={styles.mobileLink}>Hero</a>
        <a href="#section-sign-up" className={styles.mobileLink}>Sign Up</a>
        <a href="#section-expenses" className={styles.mobileLink}>Expenses</a>
        <a href="#section-Insights" className={styles.mobileLink}>Insights</a>
        <a href="#section-progression" className={styles.mobileLink}>Progression</a>
        <a href="#section-goal-tree" className={styles.mobileLink}>Goal Tree</a>
        <a href="#section-about-us" className={styles.mobileLink}>About us</a>
      </div>

      {/* CONTENT */}
      <section className={styles.content}>
        <h1 className={styles.pageTitle}>Welcome to Canopy</h1>
        <section id="section-hero" className={styles.contentSection}></section>
        <section id="section-sign-up" className={styles.contentSection}></section>
        <section id="section-expenses" className={styles.contentSection}></section>
        <section id="section-Insights" className={styles.contentSection}></section>
        <section id="section-progression" className={styles.contentSection}></section>
        <section id="section-goal-tree" className={styles.contentSection}></section>
        <section id="section-about-us" className={styles.contentSection}></section>
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
    </main>
  );
}
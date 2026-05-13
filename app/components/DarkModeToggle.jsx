"use client";

import { useTheme } from "../context/ThemeContext";
import styles from "../page.module.css";

export default function DarkModeToggle() {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <button
      className={styles.darkToggle}
      onClick={() => setDarkMode(!darkMode)}
      type="button"
      aria-label="Toggle dark mode"
    >
      {darkMode ? (
        <img src="/LightModeIcon.svg" alt="Sun" />
      ) : (
        <img src="/DarkModeIcon.svg" alt="Moon" />
      )}
    </button>
  );
}

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
      {darkMode ? <img src="/Sun.svg" alt="Sun" style={{width:"25px"}} /> : <img src="/Moon.svg" alt="Moon" style={{width:"25px"}}/>}
    </button>
  );
}
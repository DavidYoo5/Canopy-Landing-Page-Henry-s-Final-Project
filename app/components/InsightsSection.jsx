"use client";

import { useState } from "react";
import styles from "../page.module.css";

import InsightChart from "./InsightChart";
import CategorySelect from "./CategorySelect";

export default function InsightsSection() {
  const categories = [
  {
    id: 1,
    name: "Food",
    price: "$21.75",
    icon: "/food-categoryicon.svg",
    iconColor: "#004738",
    sectionColor: "#EFC71D",
  },
  {
    id: 2,
    name: "Drink",
    price: "$8.50",
    icon: "/drink-category-icon.svg",
    iconColor: "#004738",
    sectionColor: "#CCEA9D",
  },
  {
    id: 3,
    name: "Shopping",
    price: "$63.15",
    icon: "/shopping-cetegory-icon.svg",
    iconColor: "#FFFBD3",
    sectionColor: "#8DAB59",
  },
  {
    id: 4,
    name: "Groceries",
    price: "$42.80",
    icon: "/grocery-category-icon.svg",
    iconColor: "#FFFBD3",
    sectionColor: "#2E8D6F",
    textColor: "#FFFBD3"
  },
  {
  id: 5,
  name: "Lifestyle",
  price: "$26.40",
  icon: "/lifestyle-category-icon.svg",
  iconColor: "#FFFBD3",
  sectionColor: "#004738",
 textColor: "#FFFBD3"
},
  {
    id: 6,
    name: "Transportation",
    price: "$14.90",
    icon: "/transportation-category-icon.svg",
    iconColor: "#004738",
    sectionColor: "#FFFBD3",
  },
];

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <section className={styles.insightsSection}>
        <div className={styles.insightsContainer}>
      <p className={styles.insightsNumber}>02</p>

      <div className={styles.insightsLayout}>
        {/* LEFT CARD */}
        <div className={styles.insightsTextCard}>
          <p className={styles.featureLabel}>FEATURE 02</p>

          <h2>Explore Simple Insights</h2>

          <p className={styles.insightsDescription}>
            After adding an expense, you can check your insights to see where
            your expenses go.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className={styles.insightsInteractiveArea}>
        <div className={styles.insightsRightStack}>

        <div className={styles.chartWrapper}>
      <InsightChart
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        />
     </div>

        <div className={styles.categorySelectWrapper}>
        <CategorySelect />
        </div>

    </div>
    </div>
    </div>
    </div>
    </section>
  );
}
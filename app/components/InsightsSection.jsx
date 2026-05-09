"use client";

import { useState } from "react";
import styles from "../page.module.css";

import CategorySelect from "./CategorySelect";
import InsightChart from "./InsightChart";

export default function InsightsSection() {
  const categories = [
    {
      id: 1,
      name: "Food",
      price: "$18.50",
      icon: "/food-categoryicon.svg",
      color: "#8DAB59",
    },
    {
      id: 2,
      name: "Shopping",
      price: "$42.25",
      icon: "/shopping-category-icon.svg",
      color: "#FFFBD3",
    },
    {
      id: 3,
      name: "Transportation",
      price: "$12.75",
      icon: "/transportation-category-icon.svg",
      color: "#004738",
    },
    {
      id: 4,
      name: "Lifestyle",
      price: "$25.00",
      icon: "/lifestyle-category-icon.svg",
      color: "#E8F5B0",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <div className={styles.insightsSection}>
      <p className={styles.insightsNumber}>02</p>

      <div className={styles.insightsLayout}>
        <div className={styles.insightsTextCard}>
          <h2>Explore Simple Insights</h2>

          <p>
            After adding an expense, you can check your insights to see where
            your daily spending goes.
          </p>
        </div>

        <div className={styles.insightsInteractiveArea}>
          <CategorySelect
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />

          <InsightChart selectedCategory={selectedCategory} />
        </div>
      </div>
    </div>
  );
}
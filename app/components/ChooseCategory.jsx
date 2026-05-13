"use client";


import { useState } from "react";
import styles from "../page.module.css";

const icons = [
  "/icons/food.svg",
  "/icons/baby.svg",
  "/icons/bike.svg",
  "/icons/broom.svg",
  "/icons/cake.svg",
  "/icons/cup.svg",
  "/icons/drinks.svg",
  "/icons/gift.svg",
  "/icons/heart.svg",
  "/icons/medical.svg",
  "/icons/music.svg",
  "/icons/palette.svg",
  "/icons/scissors.svg",
  "/icons/train.svg",
  "/icons/computer.svg",
  "/icons/tooth.svg",
];


export default function ChooseCategory() {
  const [categoryName, setCategoryName] = useState("");
  const [selectedIcon, setSelectedIcon] = useState("");
  const [savedCategory, setSavedCategory] = useState(null);

  function handleSave() {
    if (!categoryName.trim() || !selectedIcon) return;

    setSavedCategory({
      name: categoryName,
      icon: selectedIcon,
    });
  }

  function handleReset() {
    setCategoryName("");
    setSelectedIcon("");
    setSavedCategory(null);
  }

  return (
    <section id="Choose-Category" className={styles.chooseCategorySection}>
        <p className={styles.chooseCategoryNumber}>02</p>
      <div className={styles.chooseCategoryTextCard}>
        <p className={styles.chooseCategoryFeatureLabel}>FEATURE 02</p>

        <div className={styles.chooseCategoryTextContent}>
          <h2>Set Categories For Your Expenses</h2>
          <p>
            Once you have set your categories, you can easily track your expenses
            and understand where your money is going.
          </p>
        </div>
      </div>

      <div className={styles.chooseCategoryFeatureWrap}>
        <div className={styles.chooseCategoryBox}>
          <h3>Edit Category</h3>

          <label>Name</label>
          <input
            type="text"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            placeholder="Category name"
          />

          <label>Icons</label>

          <div className={styles.iconPreviewBox}>
            {selectedIcon && <img src={selectedIcon} alt="Selected icon" />}
          </div>

          <div className={styles.iconGrid}>
            {icons.map((icon) => (
              <button
                key={icon}
                type="button"
                className={`${styles.iconButton} ${
                  selectedIcon === icon ? styles.activeIcon : ""
                }`}
                onClick={() => setSelectedIcon(icon)}
              >
                <img src={icon} alt="Category icon" />
              </button>
            ))}
          </div>

          <div className={styles.categoryButtons}>
            <button type="button" onClick={handleSave}>
              Save
            </button>

            <button type="button" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>

        {savedCategory && (
          <div className={styles.savedCategoryPill}>
            <img src={savedCategory.icon} alt="Saved category icon" />
            <p>{savedCategory.name}</p>
          </div>
        )}
      </div>
    </section>
  );
}
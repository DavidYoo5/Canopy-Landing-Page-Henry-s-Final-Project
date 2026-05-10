"use client";

import styles from "../page.module.css";

export default function CategorySelect(props) {
  const categories = props.categories;
  const setSelectedCategory = props.setSelectedCategory;

  return (
    <div className={styles.categorySelect}>
      {categories.map(function (category) {
        return (
          <button
            key={category.id}
            className={styles.categoryButton}
            onClick={() => setSelectedCategory(category)}
          >
            <img
              src={category.icon}
              alt={category.name}
              className={styles.categoryIcon}
            />
          </button>
        );
      })}
    </div>
  );
}
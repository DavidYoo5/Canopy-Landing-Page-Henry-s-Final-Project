"use client";

import styles from "../page.module.css";

export default function InsightChart(props) {
  const categories = props.categories;
  const selectedCategory = props.selectedCategory;
  const setSelectedCategory = props.setSelectedCategory;

  return (
    <div className={styles.insightChart}>
      <div className={styles.chartCircle}>
        {categories.map(function (category, index) {
          return (
            <button
              key={category.id}
              className={`${styles.chartIconButton} ${styles["chartIcon" + index]}`}
              onClick={() => setSelectedCategory(category)}
            >
              <span
                className={styles.chartIcon}
                style={{
                  backgroundColor: category.iconColor,
                  maskImage: `url(${category.icon})`,
                  WebkitMaskImage: `url(${category.icon})`,
                }}
              ></span>
            </button>
          );
        })}

        <div
          className={styles.chartCenter}
          style={{ backgroundColor: selectedCategory.sectionColor }}
        >
          <div key={selectedCategory.id} className={styles.chartCenterContent}>
            <p
              className={styles.chartCategory} style={{ color: selectedCategory.textColor }}>
                {selectedCategory.name}
            </p>

            <p
                className={styles.chartPrice} style={{ color: selectedCategory.textColor }}>{selectedCategory.price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

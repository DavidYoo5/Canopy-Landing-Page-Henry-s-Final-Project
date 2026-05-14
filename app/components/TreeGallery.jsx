"use client";

import { useEffect, useState } from "react";
import styles from "../TreeGallery.module.css";

// All the special trees data
const specialTrees = [
  {
    id: 0,
    name: "Maple",
    image: "/trees/Fall_animated_optimized.png",
    description: "The fiery Maple represents bold spending awareness.",
    color: "#c0392b",
  },
  {
    id: 1,
    name: "Sakura",
    image: "/trees/Sakura_animated_optimized.png",
    description: "The gentle Sakura rewards consistent daily savings.",
    color: "#e91e8c",
  },
  {
    id: 2,
    name: "Canopy Oak",
    image: "/trees/Summer_animated_optimized.png",
    description: "The mighty Oak unlocks when you master your budget.",
    color: "#27ae60",
  },
  {
    id: 3,
    name: "Golden Elm",
    image: "/trees/Spring_animated_optimized.png",
    description: "The radiant Elm celebrates your golden streak milestones.",
    color: "#f39c12",
  },
  {
    id: 4,
    name: "Snow Pine",
    image: "/trees/Winter_animated_optimized.png",
    description: "The rare Snow Pine appears for long-term savings champions.",
    color: "#4a9e8e",
  },
];

export default function TreeGallery() {
  const [activeIndex, setActiveIndex] = useState(2); // Start with middle tree active

  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.innerTextContainer}>
          <p className={styles.featureNumber}>05</p>
          <div className={styles.pageTitleContainer}>
            <h1 className={styles.pageTitleMain}>Unlock Your Special Tree</h1>
          </div>

          <div className={styles.headingArea}>
            <p className={styles.subheading}>
              Hover over a tree to discover unique species from around <br />
              the world{" "}
            </p>
          </div>
        </div>

        {/* Hover Accordion Gallery */}
        <div className={styles.accordionContainer}>
          {specialTrees.map((tree, idx) => {
            const isActive = activeIndex === idx;

            return (
              <div
                key={tree.id}
                className={`${styles.accordionPanel} ${isActive ? styles.panelActive : ""}`}
                onMouseEnter={() => setActiveIndex(idx)}
                onClick={() => setActiveIndex(idx)}
              >
                {/* Background Glow */}
                <div
                  className={styles.panelGlow}
                  style={{
                    background: tree.color,
                    opacity: isActive ? 0.3 : 0.05,
                  }}
                />

                {/* Content wrapper to handle the expanding width smoothly */}
                <div className={styles.panelContent}>
                  <img
                    src={tree.image}
                    alt={tree.name}
                    className={`${styles.treeImage} ${isActive ? styles.treeImageActive : ""}`}
                  />

                  {/* Info fades in when active */}
                  <div
                    className={`${styles.treeInfo} ${isActive ? styles.treeInfoActive : ""}`}
                  >
                    <h3
                      className={styles.treeName}
                      style={{ color: tree.color }}
                    >
                      {tree.name}
                    </h3>
                    <p className={styles.treeDesc}>{tree.description}</p>
                  </div>
                </div>

                {/* Vertical title when collapsed */}
                <div
                  className={`${styles.collapsedTitle} ${!isActive ? styles.collapsedTitleVisible : ""}`}
                >
                  <span style={{ color: tree.color }}>{tree.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

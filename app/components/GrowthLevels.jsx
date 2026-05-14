"use client";

import { useState } from "react";
import styles from "../GrowthLevels.module.css";

const stages = [
  {
    id: 0,
    name: "Seed",
    label: "NEW USER",
    image: "/trees/Seed_animated_optimized.png",
    quests: {
      title: "Getting Started",
      week: "New User",
      level: "New",
      tasks: [
        { text: "Log in to Canopy", done: false },
        { text: "Set up your profile", done: false },
        { text: "Link a bank account", done: false },
        { text: "Set a savings goal", done: false },
        { text: "Explore the dashboard", done: false },
      ],
    },
  },
  {
    id: 1,
    name: "Sprout",
    label: "LEVEL 1",
    image: "/trees/first-sprout-animated.png",
    quests: {
      title: "Tuition",
      week: "Week 1",
      level: "Lv 1",
      tasks: [
        { text: "Log in to Canopy", done: true },
        { text: "Log Expenses", done: true },
        { text: "Add to your savings", done: false },
        { text: "Set or Adjust Daily Budget", done: false },
        { text: "Spend Within Daily Budget", done: false },
      ],
    },
  },
  {
    id: 2,
    name: "Sprout",
    label: "LEVEL 2",
    image: "/trees/Sprout_2_animated_optimized.png",
    quests: {
      title: "Groceries",
      week: "Week 2",
      level: "Lv 2",
      tasks: [
        { text: "Log in to Canopy", done: true },
        { text: "Log Expenses", done: true },
        { text: "Add to your savings", done: true },
        { text: "Set or Adjust Daily Budget", done: false },
        { text: "Spend Within Daily Budget", done: false },
      ],
    },
  },
  {
    id: 3,
    name: "Sapling",
    label: "LEVEL 3",
    image: "/trees/Sprout_3_animated_optimized.png",
    quests: {
      title: "Entertainment",
      week: "Week 3",
      level: "Lv 3",
      tasks: [
        { text: "Log in to Canopy", done: true },
        { text: "Log Expenses", done: true },
        { text: "Add to your savings", done: true },
        { text: "Set or Adjust Daily Budget", done: true },
        { text: "Spend Within Daily Budget", done: false },
      ],
    },
  },
  {
    id: 4,
    name: "Young Tree",
    label: "LEVEL 4",
    image: "/trees/Little_Tree_animated_optimized.png",
    quests: {
      title: "All Categories",
      week: "Week 4",
      level: "Lv 4",
      tasks: [
        { text: "Log in to Canopy", done: true },
        { text: "Log Expenses", done: true },
        { text: "Add to your savings", done: true },
        { text: "Set or Adjust Daily Budget", done: true },
        { text: "Spend Within Daily Budget", done: true },
      ],
    },
  },
  {
    id: 5,
    name: "UNLOCK +",
    label: "LEVEL 5",
    image: "/trees/Spring_animated_optimized.png",
    quests: {
      title: "All Categories",
      week: "Week 5+",
      level: "Lv 5",
      tasks: [
        { text: "Log in to Canopy", done: true },
        { text: "Log Expenses", done: true },
        { text: "Add to your savings", done: true },
        { text: "Set or Adjust Daily Budget", done: true },
        { text: "Spend Within Daily Budget", done: true },
      ],
    },
  },
];

export default function GrowthLevels() {
  const [activeStage, setActiveStage] = useState(1); // default to Sprout

  const currentQuest = stages[activeStage].quests;

  return (
    <div className={styles.wrapper}>
      <div className={styles.innerTextContainer}>
        <p className={styles.featureNumber}>04</p>
        <div className={styles.pageTitleContainer}>
          <h1 className={styles.pageTitleMain}>Build Your Habit</h1>
        </div>

        {/* Section heading */}
        <div className={styles.headingArea}>
          <p className={styles.subheading}>
            Grow your savings tree by completing weekly quests
          </p>
        </div>
      </div>

      <div className={styles.splitLayout}>
        {/* LEFT: Growth timeline */}
        <div className={styles.growthPanel}>
          <div className={styles.panelHeader}>
            <span className={styles.panelTitle}>GROWTH LEVELS</span>
            <span className={styles.panelDivider}>—</span>
            <span className={styles.panelSubtitle}>QUEST PROGRESSION</span>
          </div>

          {/* Progress bar */}
          <div className={styles.progressTrack}>
            <div
              className={styles.progressFill}
              style={{ width: `${(activeStage / (stages.length - 1)) * 100}%` }}
            />
            {stages.map((stage, idx) => (
              <button
                key={stage.id}
                className={`${styles.progressDot} ${
                  idx <= activeStage ? styles.progressDotActive : ""
                } ${idx === activeStage ? styles.progressDotCurrent : ""}`}
                style={{ left: `${(idx / (stages.length - 1)) * 100}%` }}
                onClick={() => setActiveStage(idx)}
                aria-label={`Select ${stage.name}`}
              />
            ))}
          </div>

          {/* Tree stages */}
          <div className={styles.stagesRow}>
            {stages.map((stage, idx) => (
              <button
                key={stage.id}
                className={`${styles.stageItem} ${
                  idx === activeStage ? styles.stageItemActive : ""
                }`}
                onClick={() => setActiveStage(idx)}
              >
                <div className={styles.treeImageWrap}>
                  <img
                    src={stage.image}
                    alt={stage.name}
                    className={styles.treeImage}
                    style={{
                      height: `${40 + idx * 18}px`,
                      opacity: idx <= activeStage ? 1 : 0.4,
                    }}
                  />
                </div>
                <span className={styles.stageLabel}>{stage.label}</span>
                <span className={styles.stageName}>{stage.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT: Quest card */}
        <div className={styles.questCard} key={activeStage}>
          <div className={styles.questWeekBadge}>{currentQuest.week}</div>

          <ul className={styles.questList}>
            {currentQuest.tasks.map((task, idx) => (
              <li key={idx} className={styles.questItem}>
                <span className={styles.questText}>{task.text}</span>
                {task.done ? (
                  <img
                    src="/trees/Stamp.png"
                    alt="completed"
                    className={styles.questSticker}
                  />
                ) : (
                  <span className={styles.questEmpty} />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

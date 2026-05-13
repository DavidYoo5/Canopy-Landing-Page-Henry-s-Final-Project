"use client";

import { useEffect, useState } from "react";
import styles from "@/app/page.module.css";
import ScrollMoveText from "./ScrollMoveText";

export default function FeatureBudgetDemo() {
  const [mode, setMode] = useState("budget");
  const [budgetType, setBudgetType] = useState("daily");
  const [todayDate, setTodayDate] = useState("");

  const [expenseName, setExpenseName] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [budgetAmount, setBudgetAmount] = useState("");

  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const [saveStatus, setSaveStatus] = useState("");

  const categories = [
    "Food",
    "Drink",
    "Transport",
    "Groceries",
    "Health",
    "Shopping",
    "Housing",
  ];

  useEffect(() => {
    const formattedDate = new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });

    setTodayDate(formattedDate);
  }, []);

  function handleSave() {
    setSaveStatus("Saved ✓");

    setTimeout(() => {
      setSaveStatus("");
    }, 1500);
  }

  return (
    <section className={styles.featureOneGrid}>
      <div className={styles.featureOneDemo}>
        <div className={styles.budgetPreviewCard}>
          {/* Expense / Budget tabs */}
          <div className={styles.appTopTabs}>
            <button
              type="button"
              onClick={() => {
                setMode("expense");
                setIsCategoryOpen(false);
                setSaveStatus("");
              }}
              className={`${styles.appTopTab} ${
                mode === "expense" ? styles.appTopTabActive : ""
              }`}
            >
              Expense
            </button>

            <button
              type="button"
              onClick={() => {
                setMode("budget");
                setIsCategoryOpen(false);
                setSaveStatus("");
              }}
              className={`${styles.appTopTab} ${
                mode === "budget" ? styles.appTopTabActive : ""
              }`}
            >
              Budget
            </button>
          </div>

          <div
            className={`${styles.appTabLine} ${
              mode === "budget" ? styles.appTabLineRight : styles.appTabLineLeft
            }`}
          />

          {/* Expense layout */}
          {mode === "expense" ? (
            <div className={styles.expenseForm}>
              <div className={styles.fullField}>
                <label>Expense Name</label>
                <input
                  className={styles.previewInput}
                  type="text"
                  value={expenseName}
                  onChange={(event) => setExpenseName(event.target.value)}
                  placeholder="Coffee"
                />
              </div>

              <div className={styles.inputGrid}>
                <div className={styles.fieldGroup}>
                  <label>Amount</label>
                  <input
                    className={styles.previewInput}
                    type="text"
                    inputMode="decimal"
                    value={expenseAmount}
                    onChange={(event) => setExpenseAmount(event.target.value)}
                    placeholder="$"
                  />
                </div>

                <div className={styles.fieldGroup}>
                  <label>Date</label>
                  <div className={styles.previewInput}>{todayDate}</div>
                </div>
              </div>

              <div className={styles.fullField}>
                <label>Categories</label>

                <button
                  type="button"
                  className={styles.categorySelect}
                  onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                >
                  <span>{selectedCategory}</span>

                  <span
                    className={`${styles.selectArrow} ${
                      isCategoryOpen ? styles.selectArrowOpen : ""
                    }`}
                  >
                    ▸
                  </span>
                </button>

                {isCategoryOpen && (
                  <div className={styles.categoryDropdown}>
                    {categories.map((category) => (
                      <button
                        key={category}
                        type="button"
                        className={styles.categoryOption}
                        onClick={() => {
                          setSelectedCategory(category);
                          setIsCategoryOpen(false);
                        }}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* Budget layout */
            <div className={styles.budgetForm}>
              <div className={styles.budgetSwitch}>
                <span
                  className={`${styles.switchThumb} ${
                    budgetType === "monthly" ? styles.switchThumbRight : ""
                  }`}
                />

                <button
                  type="button"
                  onClick={() => setBudgetType("daily")}
                  className={`${styles.switchButton} ${
                    budgetType === "daily" ? styles.switchButtonActive : ""
                  }`}
                >
                  Daily
                </button>

                <button
                  type="button"
                  onClick={() => setBudgetType("monthly")}
                  className={`${styles.switchButton} ${
                    budgetType === "monthly" ? styles.switchButtonActive : ""
                  }`}
                >
                  Monthly
                </button>
              </div>

              <div className={styles.inputGrid}>
                <div className={styles.fieldGroup}>
                  <label>Amount</label>
                  <input
                    className={styles.previewInput}
                    type="text"
                    inputMode="decimal"
                    value={budgetAmount}
                    onChange={(event) => setBudgetAmount(event.target.value)}
                    placeholder="$"
                  />
                </div>

                <div className={styles.fieldGroup}>
                  <label>Date</label>
                  <div className={styles.previewInput}>{todayDate}</div>
                </div>
              </div>
            </div>
          )}

          <button
            type="button"
            className={`${styles.previewSaveButton} ${
              saveStatus ? styles.previewSaveButtonSaved : ""
            }`}
            onClick={handleSave}
          >
            {saveStatus || "Save"}
          </button>
        </div>
      </div>

      <div className={styles.featureTextCard}>
        <span className={styles.featureNumber}>01</span>

        <ScrollMoveText className={styles.featureTextScroll}>
          <h2>
            Log Expenses and <br /> Set Budgets
          </h2>

          <div className={styles.featureTextBottom}>
            <p className={styles.featureDescription}>
              Quickly add expenses, set daily or monthly budgets, and check your
              daily budget.
            </p>

            <p className={styles.featureHint}>
              Try it: type, switch, and save.
            </p>
          </div>
        </ScrollMoveText>
      </div>
    </section>
  );
}

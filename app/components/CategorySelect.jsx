"use client";

import { useState } from "react";
import styles from "../page.module.css";

export default function CategorySelect() {
  const [cartItems, setCartItems] = useState([]);
  const [dailyAmount, setDailyAmount] = useState(0);
  const [showDailyAmount, setShowDailyAmount] = useState(false);

  const categories = [
    { id: 1, name: "Food", price: 10, icon: "/pizza-icon.svg" },
    { id: 2, name: "Drink", price: 8.50, icon: "/drinks-icon.svg" },
    { id: 3, name: "Shopping", price: 63.15, icon: "/bag-icon.svg" },
    { id: 4, name: "Groceries", price: 12, icon: "/croisant-icon.svg" },
    { id: 5, name: "Lifestyle", price: 11.75, icon: "/burger-icon.svg" },
  ];

  function handleDragStart(event, category) {
    event.dataTransfer.setData("categoryId", category.id);
  }

  function handleDragOver(event) {
    event.preventDefault();
  }

  function handleDrop(event) {
    event.preventDefault();

    let categoryId = event.dataTransfer.getData("categoryId");
    categoryId = Number(categoryId);

    let droppedCategory;

    for (let i = 0; i < categories.length; i++) {
      if (categories[i].id === categoryId) {
        droppedCategory = categories[i];
      }
    }

    if (droppedCategory) {
      let updatedCart = [...cartItems, droppedCategory];

      setCartItems(updatedCart);

      if (showDailyAmount === true) {
        let totalAmount = 0;

        for (let i = 0; i < updatedCart.length; i++) {
          totalAmount = totalAmount + updatedCart[i].price;
        }

        setDailyAmount(totalAmount);
      }
    }
  }

  function handleViewDailyAmount() {
    let totalAmount = 0;

    for (let i = 0; i < cartItems.length; i++) {
      totalAmount = totalAmount + cartItems[i].price;
    }

    setDailyAmount(totalAmount);
    setShowDailyAmount(true);
  }

  return (
    <div className={styles.categorySelectArea}>
      <div className={styles.dragIconColumn}>
        {categories.map(function (category) {
          return (
            <img
              key={category.id}
              src={category.icon}
              alt={category.name}
              className={styles.dragCategoryIcon}
              draggable="true"
              onDragStart={(event) => handleDragStart(event, category)}
            />
          );
        })}
      </div>

      <div
        className={styles.cartDropZone}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <img
          src="/fi-sr-shopping-cart.svg"
          alt="Cart"
          className={styles.categoryCartIcon}
        />

        <p className={styles.cartText}>Click + Drag Items Into Cart</p>

        <div className={styles.cartDroppedItems}>
          {cartItems.map(function (item, index) {
            return (
              <img
                key={index}
                src={item.icon}
                alt={item.name}
                className={styles.droppedCartIcon}
              />
            );
          })}
        </div>
      </div>

      <div className={styles.dailyAmountArea}>
        <button
          className={styles.dailyAmountButton}
          onClick={handleViewDailyAmount}
        >
          Daily Amount $
        </button>

        <div className={styles.dailyAmountBox}>
          {showDailyAmount === true ? dailyAmount.toFixed(2) : ""}
        </div>
      </div>
    </div>
  );
}
import React from "react";
import styles from "../Styles/Home.module.css";

const ProductItem = ({ item }) => {
  return (
    <div>
      <img className={styles.image} src={item.image} alt="" />
      <h3>{item.title}</h3>
      <h4>₹ {item.price}</h4>
      <div className={styles.category}>
        <p>{item.category}</p>
        <div className={styles.rating}>
          <p>⭐{item.rating.rate}</p>
          <p>Ratings {item.rating.count}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

import React from "react";
import styles from "../Styles/Home.module.css";

const handleChange = (e) => {
  console.log(e.target.value);
};

const Category = () => {
  return (
    <div className={styles.category_container}>
      <h2>Filter by Category</h2>
      <div className={styles.radio}>
        <input
          onChange={handleChange}
          type="radio"
          id="men"
          name="drone"
          value="men's clothing"
        />
        <label htmlFor="men">Men</label>
      </div>

      <div className={styles.radio}>
        <input
          onChange={handleChange}
          type="radio"
          id="women"
          name="drone"
          value="women's clothing"
        />
        <label htmlFor="women">Women</label>
      </div>

      <div className={styles.radio}>
        <input
          onChange={handleChange}
          type="radio"
          id="electronics"
          name="drone"
          value="electronics"
        />
        <label htmlFor="electronics">Louie</label>
      </div>

      <div className={styles.radio}>
        <input
          onChange={handleChange}
          type="radio"
          id="jewelery"
          name="drone"
          value="jewelery"
        />
        <label htmlFor="jewelery">Jewelery</label>
      </div>
    </div>
  );
};

export default Category;

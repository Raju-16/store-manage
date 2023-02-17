import React, { useEffect, useState } from "react";
import styles from "../Styles/Home.module.css";
import { useSearchParams } from "react-router-dom";

const Category = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selCategory, setSelCategory] = useState("");

  const handleChange = (e) => {
    setSelCategory(e.target.value);
  };

  useEffect(() => {
    console.log("i am in useEffect");
    if (selCategory) {
      let param = {};
      selCategory && (param.category = selCategory);
      setSearchParams(param);
    }
  }, [setSearchParams, selCategory]);

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

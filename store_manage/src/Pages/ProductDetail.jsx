import React, { useEffect } from "react";
import styles from "../Styles/Home.module.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../Redux/action";

const ProductDetail = () => {
  const selectedProduct = useSelector((state) => state.products);
  const { id } = useParams();
  const dispatch = useDispatch();

  console.log("selectedProduct", selectedProduct);

  useEffect(() => {
    if (id) {
      console.log("kuch bhi");
      dispatch(getProductById(id));
    }
  }, []);

  return (
    <div>
      <img className={styles.image} src={selectedProduct.image} alt="" />
      <h3>{selectedProduct.title}</h3>
      <h4>₹ {selectedProduct.price}</h4>
      <div className={styles.category}>
        <p>{selectedProduct.category}</p>
        <div className={styles.rating}>
          <p>⭐{selectedProduct.rating.rate}</p>
          <p>Ratings {selectedProduct.rating.count}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

import React, { useEffect } from "react";
import styles from "../Styles/Home.module.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getProductById, quantity } from "../Redux/action";

const ProductDetail = () => {
  const selectedProduct = useSelector((state) => state.selectedProduct);
  const cartItems = useSelector((state) => state.cart);
  const { id } = useParams();
  const dispatch = useDispatch();

  const handleOnAdd = () => {
    dispatch(addToCart(id));
  };

  const handleOnSelect = (e) => {
    e = +e
    dispatch(quantity(e));
  };

  useEffect(() => {
    dispatch(getProductById(id));
  }, []);

  return (
    <div>
      <img className={styles.image} src={selectedProduct.image} alt="" />
      <h3>{selectedProduct.title}</h3>
      <h4>₹ {selectedProduct.price}</h4>
      <p>₹ {selectedProduct.description}</p>
      <div className={styles.category}>
        <p>{selectedProduct.category}</p>
      </div>
      <div>
        <select onChange={(e) => handleOnSelect(e.target.value)} name="" id="">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button onClick={handleOnAdd}>Add To Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;

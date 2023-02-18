import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../Styles/Home.module.css";
import { addOne, removeOne } from "../Redux/action";
import { Link } from "react-router-dom";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart);
  const qunt = useSelector((state) => state.quantity);
  const [price, setPrice] = useState(0);
  const dispatch = useDispatch();


  const handleAddOne = (el) => {
    dispatch(addOne(el));
  };

  const handleRemoveOne = (el) => {
    dispatch(removeOne(el));
  };

  const total = () => {
    let price = 0;
    var newPrice;
    cartItems.map((item) => {
      newPrice = item.price * qunt + price;
    });
    setPrice(newPrice);
  };

  useEffect(() => {
    total();
  }, [total, cartItems.length]);

  return (
    <div>
      <div>
        Total : {price}
        <Link to={"/order"}>
          <button>Move to Payment</button>
        </Link>
      </div>
      {cartItems.length > 0 &&
        cartItems.map((item) => {
          return (
            <div className={styles.checkoutPage} key={item.id}>
              <div className={styles.imageDiv}>
                <img className={styles.image} src={item.image} alt="" />
              </div>
              <div className={styles.detailDiv}>
                <h3>{item.title}</h3>
                <div className={styles.total}>
                  <h4>₹ {item.price * qunt}</h4>
                  <div className={styles.qunt}>
                    <button
                      className={styles.checkoutBtn}
                      onClick={() => handleRemoveOne(item)}
                    >
                      -
                    </button>
                    <p>{qunt}</p>
                    <button
                      className={styles.checkoutBtn}
                      onClick={() => handleAddOne(item)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Checkout;

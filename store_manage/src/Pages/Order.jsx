import React from "react";
import { useSelector } from "react-redux";
import styles from "../Styles/Home.module.css";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const cartItems = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const hanldeOnConfirm = () => {
    alert(`Your Order is Confirmed 
  You will get your product after 5 days`);
    navigate("/", { replace: true });
  };

  return (
    <div>
      {cartItems.length > 0 &&
        cartItems.map((item) => {
          return (
            <div className={styles.checkoutPage} key={item.id}>
              <div className={styles.imageDiv}>
                <img className={styles.image} src={item.image} alt="" />
              </div>
              <div className={styles.detailDiv}>
                <h3>{item.title}</h3>
              </div>
            </div>
          );
        })}

      <div>
        <h3>D-456, Rohini delhi,</h3>
        <p>Near Kroal bag</p>
      </div>
      <button onClick={hanldeOnConfirm}>Confirm</button>
    </div>
  );
};

export default Order;

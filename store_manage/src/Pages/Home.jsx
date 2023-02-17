import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../Redux/action";
import styles from "../Styles/Home.module.css";
import Category from "../Components/Category";
import { Link } from "react-router-dom";
import ProductItem from "./ProductItem";

const Home = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    // if (products.length === 0) {
    dispatch(getAllProduct());
    // }
  }, [dispatch]);

  // console.log("products", products);

  return (
    <div className={styles.mainbox}>
      <div className={styles.container1}>
        <Category />
      </div>
      <div className={styles.container2}>
        {products.length > 0 &&
          products.map((item) => {
            return (
              <Link
                to={`/productdetail/${item.id}`}
                className={styles.products}
                key={item.id}
              >
                <ProductItem item={item} />
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Home;

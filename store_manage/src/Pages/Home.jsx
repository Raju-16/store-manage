import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct, getFilterProduct } from "../Redux/action";
import styles from "../Styles/Home.module.css";
import Category from "../Components/Category";
import { Link, useSearchParams } from "react-router-dom";
import ProductItem from "./ProductItem";

const Home = () => {
  const products = useSelector((state) => state.products);
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const queryParam = {
      param: {
        category: searchParams.get("category"),
      },
    };
    console.log("Query", queryParam);
    if (queryParam.param.category) {
      dispatch(getFilterProduct(queryParam.param));
    } else {
      dispatch(getAllProduct());
    }
  }, [dispatch, searchParams]);

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

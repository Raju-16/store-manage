import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import Order from "./Order";
import Checkout from "./Checkout";
import About from "./About";
import Home from "./Home";

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productdetail/:id" element={<ProductDetail />} />
        <Route path="/order" element={<Order />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default Allroutes;

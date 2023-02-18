import React from "react";
import styles from "../Styles/Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul className={styles.navItems}>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/checkout"}>Checkout</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

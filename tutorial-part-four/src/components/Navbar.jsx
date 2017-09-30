import React from "react";
import styles from "../pages/index.module.css";
import Link from "gatsby-link";

const Navbar = props => (
  <div className={styles.navbar}>
    <Link to="/">
      <h1 className={styles.siteTitle}>Pandas Eating Lots!</h1>
    </Link>
    <Link to="/about/">About Us</Link>
  </div>
);

export default Navbar;

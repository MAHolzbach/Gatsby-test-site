import React from "react";
import styles from "../pages/index.module.css";
import Link from "gatsby-link";

const Navbar = (props, data) => (
  <div className={styles.navbar}>
    <Link to="/" className={styles.siteTitle}>
      <h1 className={styles.siteTitle}>{data.site.siteMetadata.title}</h1>
    </Link>
    <Link to="/about/" className={styles.navLink}>
      About Us
    </Link>
  </div>
);

export default Navbar;

import React from "react";
import Link from "gatsby-link";
import styles from "./index.module.css";

export default ({ children }) => (
  <div className={styles.container}>
    <div className={styles.navbarLinks}>
      <Link to={`/`}>
        <h3 className={styles.siteTitle}>Hungry Hungry Panda</h3>
      </Link>
      <Link className={styles.linkStyle} to={`/about/`}>
        About
      </Link>
    </div>
    {children()}
  </div>
);

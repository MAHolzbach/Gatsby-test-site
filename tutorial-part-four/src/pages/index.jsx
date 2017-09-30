import React from "react";
import styles from "./index.module.css";
import Container from "../components/Container";
import Navbar from "../components/Navbar";

const Example = props => (
  <div className={styles.example}>
    <h2>{props.title}</h2>
    <img src={props.image} />
  </div>
);

export default () => (
  <div>
    <Navbar />
    <Container>
      <div className={styles.picGrid}>
        <Example
          title="Wow, look at 'em go!"
          image="https://2.bp.blogspot.com/-BMP2l6Hwvp4/TiAxeGx4CTI/AAAAAAAAD_M/XlC_mY3SoEw/s1600/panda-group-eating-bamboo.jpg"
        />
        <Example
          title="These suckers can eat, damn!"
          image="http://i.telegraph.co.uk/multimedia/archive/03466/panda_3466521b.jpg"
        />
        <Example
          title="Even the little ones!"
          image="https://3c1703fe8d.site.internapcdn.net/newman/csz/news/800/panda.jpg"
        />
      </div>
    </Container>
  </div>
);

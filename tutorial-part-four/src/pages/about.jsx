import React from "react";
import Container from "../components/Container";
import Navbar from "../components/Navbar";

export default ({ data }) => (
  <div>
    <Navbar />
    <Container>
      <h1>About {data.site.siteMetadata.title}</h1>
      <p>
        We're the only site running on your computer dedicated to showing the
        best photos and videos of pandas eating lots of food.
      </p>
      <p>
        We are a collective of of millions of people who love nothing more than
        to see pictures of pandas stuffing their cute furry faces. Join us! Or
        die!
      </p>
    </Container>
  </div>
);

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

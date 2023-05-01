import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <Container>
      <h2>Terms and coditions</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et accusamus
        repellendus suscipit dicta saepe. Cum dolorem quasi minima at officia.
      </p>
      <Link to="/register">Go Bak</Link>
    </Container>
  );
};

export default Terms;

import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Products = () => {
  // const navigate = useNavigate();
  // navigate("/welcome")

  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <Link to="/products/p1">product 1</Link>
        </li>
        <li>
          <Link to="/products/p2">product 2</Link>
        </li>
        <li>
          <Link to="/products/p3">product 3</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;

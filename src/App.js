import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./components/navbar/Navbar";
import CardComp from "./components/card/Product";
import Products from "./data/products";

export default function App() {
  const PRODUCTS = Products.map((product, index) => {
    return (
      <div className={`col-sm-6 mb-2`}>
        <CardComp key={index} item={product} />
      </div>
    );
  });

  return (
    <div>
      <NavbarComp />
      <div className={`container`}>
        {PRODUCTS}
      </div>
    </div>
  );
}

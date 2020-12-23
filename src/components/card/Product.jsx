import React from "react";
import ProductImg from "./ProductImg";
import ProductTitle from "./ProductTitle";
import ProductDesc from "./ProductDesc";

function ProductComp(props) {
  const { id, title, description, img, liked } = props.item;

  // $(function() {
  // $(".heart").on("click", function() {
  //   $(this).toggleClass("is-active");
  // });
  // });

  return (
    <div className="card bg-dark text-white">
      <ProductImg img={img} />
      <div className="card-img-overlay">
        <ProductTitle title={title} />
        <ProductDesc description={description} />
      </div>
      <div className="stage">
        <div className="heart" />
      </div>
    </div>
  );
}

export default ProductComp;

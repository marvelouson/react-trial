import React from "react";

function ProductImg(item) {
  return item.img ? (
    <img src={item.img} className="card-img" alt="product image" />
  ) : (
    <img
      src="https://via.placeholder.com/150/FFFF00/000000?Text=Placeholder"
      className="card-img"
      alt="no image"
    />
  );
}

export default ProductImg;

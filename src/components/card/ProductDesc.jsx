import React from "react";

function ProductDesc(item) {
  return item.description ? 
  (
    <p className="card-text">
      {item.description}
    </p>
  ) : "Description"
};

export default ProductDesc;
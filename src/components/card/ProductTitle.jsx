import React from "react";

function Title(item) {
  return item.title ? (
    <h5 className="card-title">{item.title}</h5>
  ) : "Title";
}

export default Title;
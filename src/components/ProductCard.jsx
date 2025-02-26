import React from "react";
const ProductCard = ({ plant }) => {
  return (
    <div>
      <p>{plant.name}</p>
      <p>{plant.orgPrice}</p>
      <p>{plant.offerPrice}</p>
      <p>{plant.offerPercent}</p>
      <p>{plant.tag}</p>
    </div>
  );
};

export default ProductCard;

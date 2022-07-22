import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <a className="productCard" href={`/product/${product._id}`}>
      <img className="img" src={product.images[0].url} alt={product.name} />
      
      <h2 className="p">{product.name}</h2>
        <span className="productCardSpan">
          {product.numOfReviews} {" Comments"}
        </span>
    </a>
  );
};

export default ProductCard;

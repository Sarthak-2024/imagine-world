import React from "react";
import "./CartItemCard.css";

const CartItemCard = ({ item, deleteCartItems }) => {
  return (
    <div className="CartItemCard">
      <a className="aaa" href={`/product/${item.product}`}>
        <img src={item.image} alt="ssa" />
        {item.name}
      </a>
      <div>
        <p onClick={() => deleteCartItems(item.product)}>Remove Post from Favorites</p>
      </div>
    </div>
  );
};

export default CartItemCard;

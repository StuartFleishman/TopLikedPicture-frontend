
import React from "react";
import "./Product.css";

function Product({ id, name, price, description, addToBasket }) {
 
  return (
    <div className="product">
      <div className="product__info">
        <p>{name}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
       {description}
      </div>

      <img src="" alt="" />

      <button onClick={() => addToBasket(id)}>Add to Basket</button>
    </div>
  );
}

export default Product;


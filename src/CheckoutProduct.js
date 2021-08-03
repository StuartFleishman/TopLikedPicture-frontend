import React from "react";
import "./Product.css";

function CheckoutProduct({ id, name, price, description, deleteFromBasket }) {


 

  // const renderPrice = () => {
  //  return price.toFixed(2)
  // }
 
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

      {<button className="product" onClick={() => deleteFromBasket(id)}>Delete</button>}
    </div>
  );
}

export default CheckoutProduct;


import React from "react";
import "./Product.css";

function Product({ id, name, price, description, addToBasket, inBasket }) {

  

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
      
      {!inBasket ? <button className="product" onClick={() => addToBasket(id) }>Add to Basket</button> : <h6>already in basket</h6>}
    </div>
  );
}

export default Product;


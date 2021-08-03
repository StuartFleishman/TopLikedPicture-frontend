
import React from "react";

import "./Product.css";

function Product({ id, name, price, description, addToBasket, image, basket }) {

  

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

      <img src={image} height={100} width={100} />
      
       {!basket.basket.find(b=> b.id === id) ? <button className="product" onClick={() => addToBasket(id) }>Add to Basket</button> : <h3>item in basket</h3>}
    </div>
  );
}

export default Product;


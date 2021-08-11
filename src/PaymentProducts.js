
import React, { useState, useEffect } from 'react'
import { connect } from "react-redux"
import "./Product.css";


function PaymentProducts({ id, name, price, description, deleteFromBasket, quantity, removeFromCart, qty, adjustItemQty, image}) {



 
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
     
    </div>
  );
}

export default connect(null)(PaymentProducts)

import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";
import {addToCart} from './actions/basketAction'
import "./Product.css";

function Product({ id, name, price, description, addToBasket, image, cart, quantity, addToCart }) {

  

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
  <h4>in stock {quantity}</h4>
      </div>
      <img src={image} height={100} width={100} />
      
       {!cart.find(b=> b.id === id) ? <button className="product" onClick={() => addToCart(id) }>Add to Basket</button> : <h3>item in basket</h3>}
    </div>
  );
}

export default connect(null, {addToCart})(Product);


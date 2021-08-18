
import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";
import {addToCart} from './actions/basketAction'
import "./Product.css";

function Product({ id, name, price, description, addToBasket, image, cart, quantity, addToCart }) {  
 
  return (
    <div className="product">
      <div className="product__info">
        <h1>{name}</h1>
        <h4>{description}</h4>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
          <h6 style={{color: 'red'}}>{quantity} in stock  </h6>
      </div>
          <img src={image} height={100} width={100} />
       {!cart.find(b=> b.id === id) ? <button className="product" onClick={() => addToCart(id) }> CART</button> : <h1>item in cart</h1>}
    </div>
  );
}

export default connect(null, {addToCart})(Product);


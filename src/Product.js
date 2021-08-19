
import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";
import {addToCart} from './actions/basketAction'
import "./Product.css";
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt'

function Product({ id, name, price, description, addToBasket, image, cart, quantity, addToCart }) {  
 
  return (
    <div className="product">
      <div className="product__info">
  {parseInt(quantity) === 0 ? <h6 style={{color: 'red'}}>out of stock</h6> : <h6>{quantity} in stock</h6>} 
        <h1>{name}</h1>
        <h4>{description}</h4>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
         
      </div>
          <img src={image} height={100} width={100} />
       {!cart.find(b=> b.id === id) && parseInt(quantity) === 0 ? <SentimentSatisfiedAltIcon /> : <button className="product" onClick={() => addToCart(id) }> CART</button> }
    </div>
  );
}

export default connect(null, {addToCart})(Product);


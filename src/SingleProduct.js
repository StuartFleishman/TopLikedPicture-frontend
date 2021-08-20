
import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";
import {addToCart} from './actions/basketAction'
import "./Product.css";
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt'
import AddShoppingCartTwoToneIcon from '@material-ui/icons/AddShoppingCartTwoTone';
import {Link} from "react-router-dom";

function SingleProduct({ id, name, price, description, addToBasket, image, cart, quantity, addToCart }) {  
 
  return (
    <div className="container">
      <div className="singleproduct__info">
     
        
          <p className="singleroduct__price">
            <small>$</small>
            <strong>{price}</strong>
          
           
           
            </p> 
   
      <div className="single__name">
        <h1 style={{color: "white"}}>{name}</h1>
      </div>
      
         
      </div>
      <div className="image__product">
          <img src={image} height={300} width={250} />
      </div>

      <div>
        <h2>Description: {description}</h2>
      </div>
  {cart.find(b=> b.id === id) ? <button  className="product" > in cart</button> : <button className="product" onClick={() => addToCart(id) }> CART</button> }

 
    </div>
  );
}

const mapStateToProps = state => {

  return {
    cart: state.products.cart
  }
}

export default connect(mapStateToProps, {addToCart})(SingleProduct);
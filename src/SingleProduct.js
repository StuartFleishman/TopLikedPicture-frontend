
import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";
import {addToCart, removeFromCart} from './actions/basketAction'
import "./SingleProduct.css";
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt'
import AddShoppingCartTwoToneIcon from '@material-ui/icons/AddShoppingCartTwoTone';
import {Link} from "react-router-dom";



function SingleProduct({ id, name, price, description, removeFromCart, image, cart, quantity, addToCart }) {  
 
  return (
    <>
    <div className="single__container">
      <div className="singleproduct__info">

   
    <h1 style={{color: "white"}}>{description} - ${price}</h1>
         
      </div>
      <br></br>
      <div className="single__image__product">
         
          <img src={image} height={300} width={250} />
         
      </div>

      <br></br>

      <div>
     
      </div>
      <br></br>
  {cart.find(b=> b.id === id) ? <button onClick={() => removeFromCart(id)}   style={{color: "white"}} > <h1>ADDED TO CART</h1></button> : <button className="product" onClick={() => addToCart(id) }> CART</button> }

 
    </div>
  
    </>
  );
}

const mapStateToProps = state => {

  return {
    cart: state.products.cart
  }
}

export default connect(mapStateToProps, {addToCart, removeFromCart})(SingleProduct);

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
        <div className="single__name">
  <h1 style={{color: "white", alignContent: "center"}}>{name} </h1> <span>  <small style={{color: "white"}}>$</small>
            
            <strong style={{color: "white"}}>{price}</strong></span>
           
        </div>
      
     
        <br></br>
          <p className="singleroduct__price">
            
          <strong style={{color: "red"}}>In stock ({quantity}) </strong>
          
          
          
           
           
            </p> 
   
   
         
      </div>
      <br></br>
      <div className="image__product">
          <img src={image} height={300} width={250} />
      </div>

      <br></br>

      <div>
       
        <h3 style={{color: "white"}}>{description}</h3>
      </div>
      <br></br>
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
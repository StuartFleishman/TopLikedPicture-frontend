
import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";
import {addToCart} from './actions/basketAction'
import "./SearchProduct.css";
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt'
import AddShoppingCartTwoToneIcon from '@material-ui/icons/AddShoppingCartTwoTone';
import {Link} from "react-router-dom";

function SearchProduct({ id, name, price, description, addToBasket, image, cart, quantity, addToCart }) {  
 
  return (
    <div className="search__product">
      <div className="search__product__info">
        {parseInt(quantity) === 0 ? 
        <h6 style={{color: 'red'}}>out of stock</h6> :   
          <p className="search__product__price">
            <Link add style={{ textDecoration: 'none' }} to={`/products/${id}`}>
            <h1 >{name}</h1>
            </Link>
        </p> }
       
      
         
      </div>
          <img src={image} height={1000} width={1000} />
       {parseInt(quantity) === 0 ? <SentimentSatisfiedAltIcon /> : cart.find(b=> b.id === id) ? <button  className="product" > in cart</button>: <button className="product" onClick={() => addToCart(id) }> CART</button> }
    </div>
  );
}

export default connect(null, {addToCart})(SearchProduct);


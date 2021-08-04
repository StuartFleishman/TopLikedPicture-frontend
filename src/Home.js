import React, { useState, useEffect } from 'react'
import { connect } from "react-redux"
import "./Home.css";
import Product from "./Product";
import {fetchProducts} from "./actions/productsAction"
import {addToBasket, addToCart} from './actions/basketAction'



function Home(props) {
 
  
  useEffect(() => {
    props.fetchProducts()
  }, []);

  const findProduct = (id) => {
    const newProduct = props.products.find(product => product.id === id)
    return props.addToBasket(newProduct)
  }

  const renderProducts = () => {
    return props.products.map(product => <Product key={product.id} id={product.id} cart={props.cart} quantity={product.quantity} name={product.name} price={product.price} image={product.image_url} description={product.description} addToBasket={findProduct} />)
  }

  
  
  return (
    <div className="home">
      <div className="home__container">
      
        <img
          className="home__image"
          src=""
          alt=""
        />
    
        <div className="home__row">
          {renderProducts()}
        </div>

      </div>
    </div>
  );
}

const mapStateToProps = (state) => {

  return {
   products: state.products.products,
   cart: state.products.cart
  }
}

export default connect(mapStateToProps, {fetchProducts, addToBasket})(Home)
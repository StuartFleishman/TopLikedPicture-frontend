import React, { useState, useEffect } from 'react'
import { connect } from "react-redux"
import "./Home.css";
import Product from "./Product";
import {fetchProducts, setProducts} from "./actions/productsAction"
import {addToBasket, addToCart} from './actions/basketAction'
import {firebaseApp} from './firebase'



function Home(props) {


  const findProduct = (id) => {
    const newProduct = props.products.find(product => product.id === id)
    return props.addToBasket(newProduct)
  }

  const renderProducts = () => {
    const productArray =  props.products.map(product => <Product key={product.id} id={product.id} cart={props.cart} quantity={product.quantity} name={product.name} price={product.price} image={product.image} description={product.description} addToBasket={findProduct} />)
    return productArray.slice(0, 5)
  }

  const renderOtherProducts = () => {
    const productArray =  props.products.map(product => <Product key={product.id} id={product.id} cart={props.cart} quantity={product.quantity} name={product.name} price={product.price} image={product.image_url} description={product.description} addToBasket={findProduct} />)
    return productArray.slice(5)
  }

  
  
  return (
    <div >
        <h1 style={{color: "white"}}>Triangle <span style={{color: "green"}}>Records</span></h1>
    </div>
  );
}

const mapStateToProps = (state) => {

  return {
   products: state.products.products,
   cart: state.products.cart
  }
}

export default connect(mapStateToProps, {fetchProducts, addToBasket, setProducts})(Home)
import React, { useState, useEffect } from 'react'
import { connect } from "react-redux"
import "./Home.css";
import Product from "./Product";
import {fetchProducts, setProducts} from "./actions/productsAction"
import {addToBasket, addToCart} from './actions/basketAction'
import {firebaseApp} from './firebase'



function Home(props) {
 
  
  useEffect(() => {
    const productRef = firebaseApp.database().ref("product")

    var key = firebaseApp.database().ref().push().getKey()

    

    productRef.on("value", (data) => {
      const products = data.val()
     
      const productList = []
      for (let val in products){
        const pro = {...products[val], id: val}

        productList.push(pro)
       
      }
      
      props.setProducts(productList)
    })
  }, []);

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

        <div className="home__row">
          {renderOtherProducts() }
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

export default connect(mapStateToProps, {fetchProducts, addToBasket, setProducts})(Home)
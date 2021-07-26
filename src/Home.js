import React, { useState, useEffect } from 'react'
import { connect } from "react-redux"
import "./Home.css";
import Product from "./Product";
import {fetchProducts} from "./actions/productsAction"



function Home(props) {
  
  
  useEffect(() => {
    props.fetchProducts()
  });

  const renderProducts = () => {
    return props.products.map(product => <Product key={product.id} id={product.id} name={product.name} price={product.price} description={product.description} />)
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
   products: state.products
  }
}

export default connect(mapStateToProps, {fetchProducts})(Home)
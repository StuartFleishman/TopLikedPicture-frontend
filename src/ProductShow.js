import React from 'react'
import { connect } from "react-redux"
import SingleProduct from './SingleProduct'
import Home from './Home'

function ProductShow({products}) {
  
  const productsArray = () => {
    if(products.find(product => window.location.href === `http://localhost:3000/products/${product.id}`) ) {
      const product = products.find(product => window.location.href === `http://localhost:3000/products/${product.id}`)
      return <SingleProduct key={product.id} id={product.id} image={product.image} quantity={product.quantity} name={product.name} price={product.price} description={product.description}  />
    }
    else {
      return <Home />
    }
  
    
  }

  return (
    <div>
      <>
      {productsArray()}
      </>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
   products: state.products.products,
  }
}


export default connect(mapStateToProps)(ProductShow)

import React from 'react'
import { connect } from "react-redux"
import SingleProduct from './SingleProduct'
import ProductHeader from './ProductHeader'

function ProductShow({products, routeData}) {
  
  const findProduct = () => {
      const id = routeData.match.params.id
  
      const product = products.find(product => product.id === id)
      return !!product ? <SingleProduct key={product.id} 
                                        id={product.id} 
                                        image={product.image} 
                                        quantity={product.quantity} 
                                        name={product.name} 
                                        price={product.price} 
                                        description={product.description} />
      : <h1>Triangle Records</h1>
  }
    
   
  
    
  

  return (
    <div>
      <>
      {findProduct()}
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

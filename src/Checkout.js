import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import Product from './Product'
import { connect } from "react-redux"

function Checkout(props) {

 

  const renderProducts = () => {
    return props.basket.map(product => <Product key={product.id} id={product.id} name={product.name} price={product.price} description={product.description} />)
  }

  const renderPrice = () => {
    if(props.basket.length > 1) {
    const prices = props.basket.map(product => product.price)
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    return prices.reduce(reducer)
    }
  }


  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad"
        src="" />
        <div>
          <h2 className="checkout__title">
            Your shopping Basket
          </h2>
          <ol>
            {renderProducts()}
          </ol>
        </div>
      </div>

      <div className="checkout__right">
          {<Subtotal price={renderPrice()} />}
      </div>


    </div>

   
  )
}

const mapStateToProps = state => {
  

  return {
    basket: state.basket
  }
}

export default connect(mapStateToProps)(Checkout)

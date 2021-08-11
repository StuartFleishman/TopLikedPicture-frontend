import React from 'react'
import './Payment.css'
import { connect } from "react-redux"
import PaymentProducts from './PaymentProducts'
import CheckoutProduct from './CheckoutProduct'
import {Link} from "react-router-dom"
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"

function Payment({user, cart}) {

  const stripe = useStripe()
  const elements = useElements()

  const renderProducts = () => {
    return cart.map(product => <CheckoutProduct key={product.id} id={product.id} image={product.image} qty={product.qty}  quantity={product.quantity}  name={product.name} price={product.price} description={product.description} />)
  }

  const renderQty = () => {
    if(cart.length >= 1) {
    const items = cart.map(product => product.qty)
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    return items.reduce(reducer) 
    }
    else {
      return 0
    }
  }

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="checkout">{renderQty()} items</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delievery Address</h3>
          </div>
            <div className="payment__address">
              <p>{user.user?.email}</p>
              <p>Address</p>
            </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
              <h3>Reivew Items & Delivery</h3>
          </div>
          <div className="payment__items">
            <ol>
              {renderProducts()}
            </ol>
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
              <h3>Payment Method</h3>
          </div>
        
        <div className="payment__details">

          <form>
            <CardElement />
          </form>

        </div>
      </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  
  return {
    user: state.user, 
    cart: state.products.cart
  }
}

export default connect(mapStateToProps)(Payment)

import React from 'react'
import './Order.css'
import moment from "moment"
import PaymentProducts from './PaymentProducts'

import CheckoutProduct from './CheckoutProduct'

function Order({ order, price }) {

  const changeAmount = ()  => {
    const amount = order.data.amount
    return amount / 100
  }
  return (
    <div className="order">
      <h2>Order </h2>
       <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
       {order.data.cart?.map(product => (
         <CheckoutProduct className="order__product" amount={order.data.amount} key={product.id} id={product.id} image={product.image} qty={product.qty}  quantity={product.quantity}  name={product.name} price={product.price} description={product.description} hideButton />
       ))}
       Order Total: <strong>${changeAmount()}</strong>
    </div>
  )
}

export default Order

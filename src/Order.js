import React from 'react'
import './Order.css'
import moment from "moment"
import PaymentProducts from './PaymentProducts'

import CheckoutProduct from './CheckoutProduct'

function Order({ order }) {
  return (
    <div className="order">
      <h2>Order</h2>
       <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>

       <p className="order__id">
         <small>{order.id}</small>
       </p>
       {order.data.cart?.map(product => (
         <CheckoutProduct key={product.id} id={product.id} image={product.image} qty={product.qty}  quantity={product.quantity}  name={product.name} price={product.price} description={product.description} hideButton />
       ))}
    </div>
  )
}

export default Order

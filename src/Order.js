import React from 'react'
import './Order.css'
import moment from "moment"
import PaymentProducts from './PaymentProducts'

import CheckoutProduct from './CheckoutProduct'

function Order({ order, price }) {

  const changeAmount = ()  => {
    let amount = order.data.amount
    return amount / 100
  }

  
  return (
    <div className="order">
      <h2 className="order__id" style={{color: "green"}}>Order Total: <span>${changeAmount().toFixed(2)}</span></h2>
      <br></br>
       <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
       {order.data.cart?.map(product => (
         <CheckoutProduct className="order__product" amount={order.data.amount} key={product.id} id={product.id} image={product.image} qty={product.qty}  quantity={product.quantity}  name={product.name} price={product.price} description={product.description} hideButton />
       ))}
       
       <br></br>
       <div className="address">
       <h3>Delievered To: </h3>
       <h3>{order.data.address?.name} </h3>
         <h3>{order.data.address?.street} </h3>
       <h3>{order.data.address?.state} - {order.data.address?.zipcode} </h3>
       </div>
    
    </div>
  )
}

export default Order

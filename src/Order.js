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
         <div className="address">
       <h3>Delievery Address: </h3>
       <h3>{order.data.address?.name} </h3>
         <h3>{order.data.address?.street} </h3>
       <h3>{order.data.address?.state} - {order.data.address?.zipcode} </h3>
       <br></br>
       <h4 style={{color: "white"}}>Order Total: <span>${changeAmount().toFixed(2)}</span></h4>
       </div>

      <br></br>
       <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
       {order.data.cart?.map(product => (
         <CheckoutProduct className="order__product" amount={order.data.amount} key={product.id} id={product.id} image={product.image} qty={product.qty}  quantity={product.quantity}  name={product.name} price={product.price} description={product.description} hideButton />
       ))}
       
       <br></br>
    
    
    </div>
  )
}

export default Order

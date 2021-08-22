import React, { useState, useEffect } from 'react'
import { db } from './firebase'
import { connect } from "react-redux"
import Order from './Order.js'
import './Orders.css'

function Orders({user, cart}) {
  
  const [orders, setOrders] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalItems, setTotalItems] = useState(0)

  useEffect(() => {

    let items = 0;
    let price = 0;

    orders.forEach((product) => {
      product.data.cart.map(item => {
        items += item.qty;
        price += item.qty * item.price;
      })
    });

    

    setTotalItems(items);
    setTotalPrice(parseInt(price));



    if(user) {
    db.collection('users').doc(user.user?.uid).collection('orders').orderBy('created', 'desc').onSnapshot(snapshot => (
      setOrders(snapshot.docs.map(doc => ({
        id: doc.id, 
        data: doc.data()
      })))
    ))
    } else {
      setOrders([])
    }
  }, [user, orders])


  return (
    <div className="orders">
      <h1 style={{color: "white", textAlign: "center"}}>Your Orders</h1>
      <div className="orders__order">
          {orders?.map(order => (
            <Order order={order} price={totalPrice.toFixed(2)} />
          ))}
           
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  
  return {
    cart: state.products.cart,
    user: state.user,
    loggedIn: state.user.loggedIn
  }
}

export default connect(mapStateToProps)(Orders)

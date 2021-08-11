import React, { useState, useEffect } from 'react'
import { db } from './firebase'
import { connect } from "react-redux"
import Order from './Order.js'
import './Orders.css'

function Orders({user}) {
  
  const [orders, setOrders] = useState([])

  useEffect(() => {
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
  }, [user])


  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders__order">
          {orders?.map(order => (
            <Order order={order} />
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

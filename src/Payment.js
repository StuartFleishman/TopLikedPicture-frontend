import React, { useState, useEffect } from 'react'
import './Payment.css'
import { connect } from "react-redux"
import PaymentProducts from './PaymentProducts'
import CheckoutProduct from './CheckoutProduct'
import {Link, useHistory} from "react-router-dom"
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import axios from './axios'
import { emptyBasket } from './actions/productsAction'
import { db } from './firebase'
import {firebaseApp} from './firebase'
import ShoppingBasketTwoToneIcon from '@material-ui/icons/ShoppingBasketTwoTone';


function Payment({user, cart, emptyBasket, loggedIn}) {

  let history = useHistory()

  const [error, setError] = useState(null)
  const [disabled, setDisabled] = useState(true)
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalItems, setTotalItems] = useState(0)
  const [succeeded, setSucceeded] = useState(false)
  const [processing, setProcessing] = useState("")
  const [clientSecret, setClientSecret] = useState(true)

  const [address, setAddress] = useState({
    name: "", street: "", state: "", zipcode: ""
  })

  const stripe = useStripe()
  const elements = useElements()


  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);

    const finalTotal = totalPrice.toFixed(2)

    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        url: `/payments/create?total=${finalTotal * 100}`,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': "https://store-app-2aa0a.web.app/"
        }
      })
      setClientSecret(response.data.clientSecret)
      if(setSucceeded) {
        const productRef = firebaseApp.database().ref()
          cart.map(product => { 
          const quantity =  parseInt(product.quantity)
          const qty = product.qty
          const updatedQuantity = quantity - qty
          const qtyProduct = {...product, quantity: updatedQuantity}
          productRef.child(`product/${product.id}`).set(qtyProduct)
        })
      }
    }

    getClientSecret()
  }, [totalPrice, totalItems, setTotalPrice, setTotalItems, cart, setSucceeded]);

  

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

  const handleSubmit = async (e) => {
    e.preventDefault()
    setProcessing(true)

    

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        type: 'card',
        card: elements.getElement(CardElement)
      }
    }).then(({ paymentIntent }) => {
      

      db.collection('users').doc(user.user?.uid).collection('orders').doc(paymentIntent.id).set({
        cart: cart,
        amount: paymentIntent.amount,
        address: address,
        created: paymentIntent.created
      })

      setSucceeded(true)
      setError(null)
      setProcessing(false)

      emptyBasket()


      

      history.replace('/orders')
    })
  }



  const handleChange = e => {
      setDisabled(e.empty)
      setError(e.error ? e.error.message : "")
  }

  return (
    <div className="payment">
      <div className="payment__container">
  
        <div className="payment__section">
          <div className="payment__title">
            <h3>Guest</h3>
          </div>
            <div className="payment__address">
              <p>{user.user?.email}</p>
            
            </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
              <h3>Reivew Items </h3>
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
        {loggedIn ?
        <div className="payment__details">

          <form onSubmit={handleSubmit}>
            <CardElement  onChange={handleChange} />
           <br></br>
                <label>Name</label>
                <input value={address.name} onChange={(e) => setAddress({...address, name: e.target.value})} />
                <label>Street Address</label>
                <input value={address.street} onChange={(e) => setAddress({...address, street: e.target.value})} />
                <label>State</label>
                <input value={address.state} onChange={(e) => setAddress({...address, state: e.target.value})}/>
                <label>Zip Code</label>
                <input value={address.zipcode} onChange={(e) => setAddress({...address, zipcode: e.target.value})}/>
               
        <br></br>
            <div className='payment__priceContainer'>
                <h3>Order Total: ${totalPrice.toFixed(2)}</h3>
                <button className="payment__button" disabled={processing || disabled || succeeded}>
                    <span>{processing ? <p>Processing</p> : "BUY NOW"}</span>
                </button>
            </div>

            {error && <div>{error}</div>}
          </form>
          
        </div>
        :     
              <Link to="/login">please sign in</Link>}
      </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  
  return {
    user: state.user, 
    cart: state.products.cart, 
    loggedIn: state.user.loggedIn
  }
}

export default connect(mapStateToProps, {emptyBasket})(Payment)

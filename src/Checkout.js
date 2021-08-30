import React, {useState, useEffect} from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import Product from './Product'
import CheckoutProduct from './CheckoutProduct'
import { connect } from "react-redux"
import {deleteFromBasket} from './actions/basketAction'
import {firebaseApp} from './firebase'
import FlipMove from 'react-flip-move'


function Checkout({cart, deleteFromBasket, products, loggedIn}) {

  const [totalPrice, setTotalPrice] = useState(0)
  const [totalItems, setTotalItems] = useState(0)

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  const renderProducts = () => {
   
    return cart.map(product => <li style={{color: "black"}}><CheckoutProduct key={product.id} qty={product.qty} quantity={product.quantity} id={product.id} image={product.image} updateSubTotal={updateSubTotal} qty={product.qty}  name={product.name} price={product.price} description={product.description} deleteFromBasket={deleteFromBasket} updateInstock={updateInstock} /></li> )
  }



  const renderPrice = () => {
    if(cart.length >= 1) {
    const prices = cart.map(product => product.price)
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    return prices.reduce(reducer) 
    }
  }

  const updateSubTotal = (count) => {
    return renderPrice(count)
  }

  const updateInstock= (id, value) => {
    console.log(id, value)
  }


  return (
    <div className="checkout">

       
      <div className="checkout__left">
        <div>
          <h2 className="checkout__title">
             Your Cart
          </h2>
          <div>
          <FlipMove typeName="ul" >
            
            {renderProducts()}
         
          </FlipMove>
          
          </div>
        </div>
      </div>

  
      <div className="checkout__right">
          <Subtotal price={totalPrice} items={totalItems} />
      </div>
          


    </div>

   
  )
}

const mapStateToProps = state => {

  return {
    cart: state.products.cart, 
    products: state.products.products,
    loggedIn: state.user.loggedIn
  }
}

export default connect(mapStateToProps, {deleteFromBasket})(Checkout)

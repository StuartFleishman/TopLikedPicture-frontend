import React, {useState, useEffect} from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import Product from './Product'
import CheckoutProduct from './CheckoutProduct'
import { connect } from "react-redux"
import {deleteFromBasket} from './actions/basketAction'


function Checkout({cart, deleteFromBasket}) {

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
   
    return cart.map(product => <CheckoutProduct key={product.id} id={product.id} image={product.image} updateSubTotal={updateSubTotal} qty={product.qty}  quantity={product.quantity}  name={product.name} price={product.price} description={product.description} deleteFromBasket={deleteFromBasket} />)
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


  return (
    <div className="checkout">
      <div className="checkout__left">
        <div>
          <h2 className="checkout__title">
             shopping Basket
          </h2>
          <div>
          <ol>
            {renderProducts()}
          </ol>
          </div>
        </div>
      </div>

      <div className="checkout__right">
          {<Subtotal price={totalPrice} items={totalItems} />}
      </div>


    </div>

   
  )
}

const mapStateToProps = state => {
 
  return {
    cart: state.products.cart
  }
}

export default connect(mapStateToProps, {deleteFromBasket})(Checkout)

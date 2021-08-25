
import React, { useState, useEffect } from 'react'
import { connect } from "react-redux"
import "./CheckOutProduct.css";
import {addToBasket, removeFromCart, adjustItemQty} from './actions/basketAction'

function CheckoutProduct({ id, qty, quantity, name, price, description, hideButton, removeFromCart, adjustItemQty, image}) {


  const [input, setInput] = useState(qty)

  const onChangeHandler = e => {

    const quantityNumber = parseInt(quantity)
  
    if(e.target.value <= quantityNumber)
      {
        setInput(e.target.value)
        adjustItemQty(id, e.target.value)
     
      }
  }

  const onAddHandler = e => {

    const quantityNumber = parseInt(quantity)
    let q = parseInt(qty)
  
    if(q <= quantityNumber)
      {
        q += 1
        adjustItemQty(id, q)
      }
  }
 
  return (
    <div className="checkoutproduct">
      <div className="checkoutproduct__info">
        <p>{name}</p>
        <p className="checkoutproduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
    {!hideButton &&(<h6 style={{color: 'red'}}>{quantity} in stock  </h6>) }
      </div>

      <img src={image} height={100} width={100} />
    {!hideButton && (
      <>
      <label htmlFor="qty">Qauntity {input} </label>
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
            onChange={onChangeHandler}
          /> 
        </>
          )}
          {hideButton ? <h4>you purchased {qty} of this item</h4>: <h1></h1>}
      {!hideButton && (
      <button className="checkoutproduct" onClick={() => removeFromCart(id)}>Delete</button>)}
      
    </div>
  );
}

export default connect(null, {addToBasket, removeFromCart, adjustItemQty})(CheckoutProduct)

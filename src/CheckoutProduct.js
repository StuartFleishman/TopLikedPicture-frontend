
import React, { useState, useEffect } from 'react'
import { connect } from "react-redux"
import "./Product.css";
import {addToBasket, removeFromCart, adjustItemQty} from './actions/basketAction'

function CheckoutProduct({ id, name, price, description, deleteFromBasket, quantity, removeFromCart, qty, adjustItemQty}) {


  const [input, setInput] = useState(1)

  const onChangeHandler = e => {
    setInput(e.target.value)
    adjustItemQty(id, e.target.value)
  }
 
  return (
    <div className="product">
      <div className="product__info">
        <p>{name}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
       {description}
      </div>

      <label htmlFor="qty">Qty</label>
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
            onChange={onChangeHandler}
          />

      <img src="" alt="" />

      {/* <button onClick={() => setCount(count => count > 0 ? count - 1 : count )}> -</button>
      <button onClick={() => setCount(count => count < quantity ? count + 1 : count ) }> +</button>
      <h1>{count}</h1> */}

      {<button className="product" onClick={() => removeFromCart(id)}>Delete</button>}
    </div>
  );
}

export default connect(null, {addToBasket, removeFromCart, adjustItemQty})(CheckoutProduct)

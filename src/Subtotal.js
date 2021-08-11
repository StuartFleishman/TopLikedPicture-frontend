import React from "react";
import "./Subtotal.css";
import { useHistory } from "react-router-dom"



function Subtotal({price, items}) {

  const history = useHistory()


  return (
    <div className="subtotal">
      <h4>total items: {items}</h4>
      <h1> Subtotal : ${price} </h1>
      <br></br>
      <button onClick={e => history.push('/payment')} className="product" value="checkout"> <strong className="checkout__button">CHECKOUT</strong> </button>
    </div>
  );
}

export default Subtotal;
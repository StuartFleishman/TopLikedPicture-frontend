import React from "react";
import "./Subtotal.css";


function Subtotal({price}) {
  

  return (
    <div className="subtotal">
      <h1>Subtotal : {price} </h1>
      <button>Checkout</button>
    </div>
  );
}

export default Subtotal;
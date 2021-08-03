import React from "react";
import "./Subtotal.css";
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';


function Subtotal({price}) {
  const renderPrice = () => {
    if(price) {
      return price.toFixed(2)
    }
    else {
      return 0
    }
   }

  return (
    <div className="subtotal">
      <h1>Subtotal : ${renderPrice()} </h1>
      <br></br>
      <button className="product" value="checkout"> <strong className="checkout__button">CHECKOUT</strong> </button>
    </div>
  );
}

export default Subtotal;
import React from 'react'
import './Footer.css'
import {Link} from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__row">
       
       <Link to="/products">
          <div className="footer__col" >
         
            <h4 style={{color: "green"}}>Shop</h4>
          
            <ul>
              <li></li>
            </ul>
          </div>
        </Link>

        <Link to="/checkout" >

          <div className="footer__col" >
           
            <h4 style={{color: "white"}}>Cart</h4>
            <ul>
              <li></li>
            </ul>
            
          </div>
          </Link>

          <Link to="/checkout">
          <div className="footer__col" >
            <h4 style={{color: "green"}}></h4>
          </div>
          </Link>

      <Link to="/checkout">
          <div className="footer__col" >
            <h4 style={{color: "green"}}></h4>
            <ul>
              <li></li>
            </ul>
          </div>
          </Link>

    

        </div>
      
      </div>
    </footer>
  )
}

export default Footer



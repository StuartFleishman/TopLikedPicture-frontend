import React, { useState, useEffect } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import { connect } from "react-redux"
import { auth } from "./firebase"
import {logout} from './actions/userAction'

import {Link} from 'react-router-dom'

function Header({ cart, user, loggedIn, logout }) { 
  
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    let count = 0
    cart.forEach(item => { count += item.qty})
    setCartCount(count)
  }, [cart, cartCount])


  // const handleAuthentication = () => {
   
  //     // auth.signOut()
  //     logout(null)
  // }
  

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/triangle/triangle_PNG105.png"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to="/login">
          <div className="header__option">
            { !loggedIn ?
            <>
            <span className="header__optionLineOne">Hello Guest</span>
            <span className="header__optionLineTwo">Sign In</span>
            </>
            :
            <>
            <span className="header__optionLineOne">{user.user?.email}</span>
            <span onClick={() => auth.signOut()} className="header__optionLineTwo"> Sign Out </span>
            </>
            }
          </div>
        </Link>

        
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {cartCount}
            </span>
          </div>
          </Link>
        
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  
  return {
    cart: state.products.cart,
    user: state.user,
    loggedIn: state.user.loggedIn
  }
}

export default connect(mapStateToProps, {logout})(Header)

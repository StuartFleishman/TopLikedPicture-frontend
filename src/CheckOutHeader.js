import React, { useState, useEffect } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import { connect } from "react-redux"
import { auth } from "./firebase"
import {logout} from './actions/userAction'
import {fetchProducts, setProducts} from "./actions/productsAction"
import {Link} from 'react-router-dom'
import {firebaseApp} from './firebase'
import Home from './Home'
import './Home.css'
import Product from './Product'
import {addToBasket, addToCart} from './actions/basketAction'
import ShoppingBasketTwoToneIcon from '@material-ui/icons/ShoppingBasketTwoTone';


function CheckOutHeader({ cart, user, loggedIn, products, setProducts, addToBasket}) { 
  
  const [cartCount, setCartCount] = useState(0)

  const [productList, setProductList] = useState([])
  const [searchBar, setSearchBar ] = useState("")
  const [searchNewBar, setNewSearchBar ] = useState("")

  useEffect(() => {
    const productRef = firebaseApp.database().ref("product")
    var key = firebaseApp.database().ref().push().getKey()

    productRef.on("value", (data) => {
      const products = data.val()
      const productList = []
      for (let val in products){
        const pro = {...products[val], id: val}
        productList.push(pro)
      }
      setProducts(productList)
    })

    let count = 0
    cart.forEach(item => { count += item.qty})
    setCartCount(count)

    
  }, [cart, cartCount, searchBar, setProducts])

  const findProduct = (id) => {
    const newProduct = products.find(product => product.id === id)
    return addToBasket(newProduct)
  }

  const renderProducts = () => {
   
    const productArray =  products.filter((val) => { 
      if (searchBar == "") {
        return val
      } else if (val.name.toLowerCase().includes(searchBar.toLowerCase())) {
        return val
      }
    }).map(product => {
    return <Product 
              key={product.id} 
              id={product.id} 
              cart={cart} 
              quantity={product.quantity} 
              name={product.name} 
              price={product.price} 
              image={product.image} 
              description={product.description} 
              addToBasket={findProduct} />})
    return productArray.slice(0, 5)
  
  }

  const renderOtherProducts = () => {
    const productArray =  products.map(product => <Product key={product.id} id={product.id} cart={cart} quantity={product.quantity} name={product.name} price={product.price} image={product.image_url} description={product.description} addToBasket={findProduct} />)
    return productArray.slice(5)
  }

 



  

  return (
    <>
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/triangle/triangle_PNG105.png"
        />
      </Link>
    

     

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
            <span className="header__optionLineOne">Hello {user.user?.email}</span>
            <span onClick={() => auth.signOut()} className="header__optionLineTwo"> Sign Out </span>
            </>
            }
          </div>
        </Link>

          <Link to="/products">
            <div className="header__option">
            <span className="header__optionLineOne">Shop</span>
              <span className="header__optionLineTwo">Records</span>
            </div>
          </Link>
        
        <Link to="/orders">
        <div className="header__option">
            <span className="header__optionLineOne">Review</span>
              <span className="header__optionLineTwo">Orders</span>
            </div>
          </Link>

       
       
      </div>
    
    </div>

          <div className="home">
          <div className="home__container">
            
            <img
              className="home__image"
              src=""
              alt=""
            />

            <div className="home__row">
         
            </div>

            <div className="home__row">
             
            </div>

          </div>
          </div>
              
          </>
  );
}

const mapStateToProps = state => {
  
  return {
    cart: state.products.cart,
    products: state.products.products,
    user: state.user,
    loggedIn: state.user.loggedIn
  }
}

export default connect(mapStateToProps, {logout, setProducts, addToBasket})(CheckOutHeader)
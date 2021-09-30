import React, { useEffect } from 'react'
import Header from './Header'
import Home from './Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Checkout from './Checkout'
import ProductForm from './ProductShow'
import Admin from './Admin'
import AdminHome from './AdminHome'
import Login from './Login'
import Signup from './Signup'
import { auth, firebaseApp } from "./firebase"
import {loginUser, logout} from './actions/userAction'
import { connect } from "react-redux"
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import Orders from './Orders'
import OrderHeader from './OrderHeader'
import CheckOutHeader from './CheckOutHeader'
import SearchHeader from './SearchHeader'
import Footer from './Footer'
import ProductContainer from './ProductContainer'

const promise = loadStripe('pk_test_51JNIcRCZzbqBIQx8Vm4CijT94O04TALJ83gexf8HMEy3xP6VlqGc0Gv7ZjcV2cJTY3ac6raxsxcSqS5eTINtIzJN007wXhcPhD')

const App = ({loginUser, logout}) => {

  useEffect(() => {
  
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
          loginUser(authUser)
      } else {
        logout(null)
      }
    })
    
  }, [])

  return (
    <Router>
      <div className="app">
          
          <Switch>
          <Route path='/search'> 
            <SearchHeader />
          </Route>
          <Route path='/login'> 
            <Login />
          </Route>
            <Route exact path='/'>
          <Header/> 
          <Home />
          <Footer />
          </Route>
          <Route path='/checkout'>
            <CheckOutHeader /> 
            <Checkout />
          </Route>
          <Route path='/orders'>
            <OrderHeader/> 
            <Orders />
          </Route>
          <Route path='/product/new'>
            <ProductForm />
          </Route>
          <Route path="/products" component={(routeInfo) => <ProductContainer routeData={routeInfo} />} />
          <Route path='/signup'>
            <Signup />
          </Route>
          <Route path='/payment'>
            <CheckOutHeader />
            <Elements stripe={promise}>
              <Payment/>
            </Elements>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}



export default connect(null, {loginUser, logout})(App)

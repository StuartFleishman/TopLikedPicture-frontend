import React, { useEffect } from 'react'
import './App.css';
import Header from './Header'
import Home from './Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Checkout from './Checkout'
import ProductForm from './ProductForm'
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

const promise = loadStripe('pk_test_51JNIcRCZzbqBIQx8Vm4CijT94O04TALJ83gexf8HMEy3xP6VlqGc0Gv7ZjcV2cJTY3ac6raxsxcSqS5eTINtIzJN007wXhcPhD')

const App = ({user, loginUser, logout}) => {

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
           <Route path='/admin'> 
            <Admin />
          </Route>
          <Route path='/login'> 
            <Login />
          </Route>
            <Route exact path='/'>
          <Header/> 
            <Home />
          </Route>
          <Route path='/home'>
            <AdminHome />
          </Route>
          <Route path='/checkout'>
            <Header/> 
            <Checkout />
          </Route>
          <Route path='/product/new'>
            <ProductForm />
          </Route>
          <Route path='/signup'>
            <Signup />
          </Route>
          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment/>
            </Elements>
          </Route>
          
          
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = state => {
  
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, {loginUser, logout})(App)

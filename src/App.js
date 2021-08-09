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

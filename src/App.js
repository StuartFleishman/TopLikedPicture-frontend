import React from 'react'
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

const App = (props) => {
  return (
    <Router>
      <div className="app">
          {window.location.pathname !== '/admin'  ? <Header/> : 
          <Switch>
           <Route path='/admin'> 
          <Admin />
          </Route>
          </Switch>}
        <Switch>
          <Route exact path='/'>
          <Home />
          </Route>
          <Route path='/home'>
          <AdminHome />
          </Route>
          <Route path='/checkout'>
            <Checkout />
          </Route>
          <Route path='/product/new'>
            <ProductForm />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;

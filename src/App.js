import React from 'react'
import './App.css';
import Header from './Header'
import Home from './Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Checkout from './Checkout'
import ProductForm from './ProductForm'

function App() {
  return (
    <Router>
      <div className="app">
      <Header />
        <Switch>
          <Route exact path='/'>
          <Home />
          <Header />
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

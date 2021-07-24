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

function App() {
  return (
    //BEM
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
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;

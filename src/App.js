import React from 'react'
import './App.css';
import Header from './Header'
import Home from './Home'

function App() {
  return (
    //BEM
    <div className="app">
        <Header />
        <Home />
      <h1></h1>
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk'
import productsReducer from './reducers/productsReducer'
import basketReducer from './reducers/basketReducer';
import adminReducer from './reducers/adminReducer'
import usersReducer from './reducers/usersReducer'


const combineReducer = combineReducers({products: productsReducer, basket: basketReducer, admin: adminReducer, user: usersReducer})

const store = createStore(combineReducer, applyMiddleware(thunk))


ReactDOM.render(
  <React.StrictMode>
   <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

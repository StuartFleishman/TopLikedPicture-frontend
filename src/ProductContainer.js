import React from 'react'
import {Switch,Route} from "react-router-dom";
import ProductHome from './ProductHome'
import ProductShow from './ProductShow'
import ProductHeader from './ProductHeader'

function ProductContainer() {
  return (
    <div>
             <Switch>
          <Route exact path="/products">
              <ProductHome  />
          </Route>
              <Route path="/products/:id" component={(routeData) => 
              <>
              <ProductHeader />
              <ProductShow routeData={routeData} /> 
              </>
              }/>  
        </Switch>
    </div>
  )
}

export default ProductContainer

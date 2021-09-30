
const url = `https://store-app-2aa0a-default-rtdb.firebaseio.com/`

export const setProducts = (products) => ({type: "GOT_PRODUCTS", payload: products})

const addProduct = (product) => ({type: 'ADD_PRODUCT', payload: product})

export const emptyBasket = () => ({type: "EMPTY_CART"})

export const fetchProducts = () => {
  return (dispatch) => { 
    fetch(url)
    .then(resp => resp.json())
    .then(products => {
    
      dispatch(setProducts(products))
    })
  }
}

export const createProduct = (product, history) => {
 
  return (dispatch) => {
    dispatch({type: "LOADING"})
    const configObj = {
      method: 'POST',
      body: product
    }

    fetch(url, configObj)
    .then(resp => resp.json())
    .then(product => {
      dispatch(addProduct(product))
      
      history.push(`/`)
    })
  }
  
}
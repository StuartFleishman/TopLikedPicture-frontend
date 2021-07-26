const url = `http://127.0.0.1:3001/products`

const setProducts = (products) => ({type: "GOT_PRODUCTS", payload: products})

export const fetchProducts = () => {
  return (dispatch) => { 
    fetch(url)
    .then(resp => resp.json())
    .then(products => {
      dispatch(setProducts(products))
    })
  }
}
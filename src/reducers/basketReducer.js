export default function basketReducer(state = {basket: [], inBasket: false}, action) {
  console.log(action.type)
  switch(action.type) {
    
    case 'ADD_PRODUCT': {
      return {...state, basket: [...state.basket, action.payload], inBasket: true}
    }
    case "DELETE_PRODUCT": 
        const newProduct = state.basket.filter(product => product.id !== action.payload)
        return {...state, basket: newProduct, inBasket: false}
    default: 
      return state
  }
}

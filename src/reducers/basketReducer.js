export default function basketReducer(state = {basket: [], inBasket: false}, action) {
 
  switch(action.type) {
    case 'ADD_BASKET': {
      return {...state, basket: [...state.basket, action.payload], inBasket: true}
    }

    case "DELETE_PRODUCT": 
        const newProduct = state.basket.filter(product => product.id !== action.payload)
        return {...state, basket: newProduct, inBasket: false}
    default: 
      return state
  }
}

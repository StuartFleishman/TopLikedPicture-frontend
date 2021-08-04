export default function productsReducer(state = [], action) {

  switch(action.type) {
    case 'GOT_PRODUCTS': {
      return action.payload
    }
    case 'ADD_PRODUCT': {
      return [...state, action.payload]
    }
    default: 
      return state
  }
}

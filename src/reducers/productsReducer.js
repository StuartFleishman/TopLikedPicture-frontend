export default function productsReducer(state = [], action) {
  
  switch(action.type) {
    case 'GOT_PRODUCTS': {
      return action.payload
    }
    default: 
      return state
  }
}

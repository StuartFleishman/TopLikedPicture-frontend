export default function basketReducer(state = [], action) {
  
  switch(action.type) {
    
    case 'ADD_PRODUCT': {
      return [...state, action.payload]
    }
    default: 
      return state
  }
}

export default function productsReducer(state = {products: [], cart: [], currentItem: null}, action) {

  switch(action.type) {
    case 'GOT_PRODUCTS': {
      return {...state, products: action.payload}
    }
    case 'ADD_PRODUCT': {
      return [...state, action.payload]
    }

    case 'ADD_TO_CART':
      
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case 'ADJUST_ITEM_QTY':
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, qty: +action.payload.qty }
              : item
          ),
        };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    default: 
      return state
  }
}

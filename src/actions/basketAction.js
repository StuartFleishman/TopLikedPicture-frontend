export const addToBasket = (product) => ({type: 'ADD_BASKET', payload: product})

export const deleteFromBasket = (id) => ({type: "DELETE_PRODUCT", payload: id})

export const addToCart = (itemID) => {
  return {
    type: 'ADD_TO_CART',
    payload: {
      id: itemID,
    },
  };
}

export const adjustItemQty = (itemID, qty) => {
  return {
    type: 'ADJUST_ITEM_QTY',
    payload: {
      id: itemID,
      qty,
    },
  };
};

export const removeFromCart = (itemID) => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: {
      id: itemID,
    },
  };
};



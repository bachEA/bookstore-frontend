export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case 'REQUEST_LOADING_CART':
      return { loading: true }
    case 'LOADING_CART_SUCCESSFUL':
      const addedItem = action.payload
      const existItem = state.cartItems.find((x) => x.id === addedItem.id)

      if (existItem) {
        // update quantity if item exists
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.id === existItem.id ? addedItem : x
          ),
        }
      } else {
        // add brand new item
        return {
          ...state,
          cartItems: [...state.cartItems, addedItem],
        }
      }

    case 'LOADING_CART_FAIL':
      return { loading: false, error: { message: 'Error' } }
    default:
      return state
  }
}

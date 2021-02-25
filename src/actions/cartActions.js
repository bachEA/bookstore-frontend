import axios from 'axios'

// dispatch is to send action, getState to get data from store
export const addItemToCardAction = (id, qty) => async (dispatch, getState) => {
  try {
    // dispatch({ type: 'REQUEST_LOADING_CART' })

    const url = `http://127.0.0.1:8000/api/v1/books/${id}`
    const { data } = await axios.get(url)

    console.log(data.title)

    dispatch({
      type: 'LOADING_CART_SUCCESSFUL',
      payload: {
        id: data.id,
        title: data.title,
        image: data.image,
        description: data.description,
        unit_price: data.unit_price,
        countInStock: data.countInStock ? data.countInStock : 10,
        qty: qty,
      },
    })
    localStorage.setItem(
      'cartItems',
      JSON.stringify(getState().cartItems.cartItems)
    )
  } catch {
    // dispatch({ type: 'LOADING_CART_FAIL' })
  }
}

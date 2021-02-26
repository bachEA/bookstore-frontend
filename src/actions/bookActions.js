import axios from 'axios'

export const bookListAction = (keyword = '') => async (dispatch) => {
  try {
    dispatch({ type: 'BOOK_LIST_REQUEST' })

    const url = `http://127.0.0.1:8000/api/v1/books/${keyword}`

    const { data } = await axios.get(url)
    dispatch({ type: 'BOOK_LIST_REQUEST_SUCCESS', payload: data })
  } catch (error) {
    dispatch({ type: 'BOOK_LIST_REQUEST_FAIL' })
  }
}

export const bookDetailAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: 'SINGLE_BOOK_REQUEST' })

    const url = `http://127.0.0.1:8000/api/v1/books/${id}`

    const { data } = await axios.get(url)

    dispatch({ type: 'SINGLE_BOOK_REQUEST_SUCCESSFUL', payload: data })
  } catch (error) {
    dispatch({ type: 'SINGLE_BOOK_REQUEST_FAIL' })
  }
}

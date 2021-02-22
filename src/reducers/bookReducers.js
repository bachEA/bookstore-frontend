const initState = {}

// reducers are functions that take in current state and action, and return a new state
export const bookListReducer = (state = { books: [] }, action) => {
  switch (action.type) {
    case 'BOOK_LIST_REQUEST':
      return { loading: true, books: [] }
    case 'BOOK_LIST_REQUEST_SUCCESS':
      return { loading: true, books: action.payload.books }
    case 'BOOK_LIST_REQUEST_FAIL':
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

// reducers are functions that take in current state and action, and return a new state
export const bookListReducer = (state = { books: [] }, action) => {
  switch (action.type) {
    case 'BOOK_LIST_REQUEST':
      return { loading: true, books: [] }
    case 'BOOK_LIST_REQUEST_SUCCESS':
      return {
        loading: true,
        books: action.payload.books,
        page: action.payload.page,
        pages: action.payload.pages,
      }
    case 'BOOK_LIST_REQUEST_FAIL':
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

export const bookDetailReducer = (state = { book: {} }, action) => {
  switch (action.type) {
    case 'SINGLE_BOOK_REQUEST':
      return { loading: true, book: {} }
    case 'SINGLE_BOOK_REQUEST_SUCCESSFUL':
      return { loading: false, book: action.payload }
    case 'SINGLE_BOOK_REQUEST_FAIL':
      return { loading: false, book: {} }
    default:
      return state
  }
}

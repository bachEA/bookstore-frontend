import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { bookListReducer, bookDetailReducer } from './reducers/bookReducers'
import { cartReducer } from './reducers/cartReducers'

const reducer = combineReducers({
  bookList: bookListReducer,
  bookDetail: bookDetailReducer,
  cartItems: cartReducer,
})
// sub-state bookListReducer managed by bookListReducer

const initState = {}
const middleware = [thunk]

const store = createStore(
  reducer,
  initState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store

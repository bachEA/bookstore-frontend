import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { bookListReducer } from './reducers/bookReducers'

const reducer = combineReducers({ bookListReducer: bookListReducer })
// sub-state bookListReducer managed by bookListReducer

const initState = {}
const middleware = [thunk]

const store = createStore(
  reducer,
  initState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store

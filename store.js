import { createStore, combineReducers, applyMiddleware } from 'redux'
import currencyReducer from './reducers/currency'
import thunk from 'redux-thunk'

const reducer = combineReducers({
  currencyReducer
})
const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

export default store;
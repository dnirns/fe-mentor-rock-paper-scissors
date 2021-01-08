import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { scoreReducer } from './reducers/scoreReducer'

const reducer = combineReducers({
  score: scoreReducer,
})

const initialState = {
  score: {
    score: 0,
  },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store

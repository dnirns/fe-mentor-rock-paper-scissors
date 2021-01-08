import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { scoreReducer } from './reducers/scoreReducer'

const reducer = combineReducers({
  score: scoreReducer,
})

const scoreFromStorage = localStorage.getItem('score')
  ? JSON.parse(localStorage.getItem('score'))
  : 0

const initialState = {
  score: {
    score: scoreFromStorage,
  },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store

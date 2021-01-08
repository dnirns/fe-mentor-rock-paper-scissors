import {
  INCREASE_SCORE,
  DECREASE_SCORE,
  RESET_SCORE,
} from '../constants/scoreConstants'

export const scoreReducer = (state = { score: 0 }, action) => {
  switch (action.type) {
    case INCREASE_SCORE:
      return { score: action.payload }
    case DECREASE_SCORE:
      return { score: action.payload }
    case RESET_SCORE:
      return { score: action.payload }
    default:
      return state
  }
}

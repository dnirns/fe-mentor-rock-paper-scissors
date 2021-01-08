import { INCREASE_SCORE, DECREASE_SCORE } from '../constants/scoreConstants'

export const increaseScore = (dispatch, state) => {
  dispatch({ type: INCREASE_SCORE, payload: state().score.score + 1 })
}

export const decreaseScore = (dispatch, state) => {
  dispatch({
    type: DECREASE_SCORE,
    payload: state().score.score - 1,
  })
}

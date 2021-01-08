import {
  INCREASE_SCORE,
  DECREASE_SCORE,
  RESET_SCORE,
} from '../constants/scoreConstants'

export const increaseScore = (dispatch, state) => {
  dispatch({ type: INCREASE_SCORE, payload: state().score.score + 1 })
  localStorage.setItem('score', state().score.score)
}

export const decreaseScore = (dispatch, state) => {
  dispatch({
    type: DECREASE_SCORE,
    payload: state().score.score - 1,
  })
  localStorage.setItem('score', state().score.score)
}

export const resetScore = (dispatch, state) => {
  dispatch({
    type: RESET_SCORE,
    payload: 0,
  })
  localStorage.setItem('score', state().score.score)
}

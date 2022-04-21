// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
import * as actions from './action-types';

const initialWheelState = 0
function wheel(state = initialWheelState, action) {
  let newState = state;
  console.log("state: ", state, "action: ", action);
  switch (action.type) {
    case actions.MOVE_CLOCKWISE:
      if (newState + 1 > 5) {
        return 0;
      }
      return state + 1;
    case actions.MOVE_COUNTERCLOCKWISE:
      if (newState - 1 < 0) {
        return 5
      }
      return state - 1;
    default:
      return state
  }
}

const initialQuizState = null
function quiz(state = initialQuizState, action) {
  return state
}

const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, action) {
  return state
}

const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
  return state
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  return state
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })

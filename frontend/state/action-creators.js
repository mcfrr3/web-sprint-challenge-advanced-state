import axios from 'axios';
import * as actions from './action-types';

// ❗ You don't need to add extra action creators to achieve MVP
export function moveClockwise() {
  return ({ type: actions.MOVE_CLOCKWISE });
 }

export function moveCounterClockwise() { 
  return ({ type: actions.MOVE_COUNTERCLOCKWISE });
}

export function selectAnswer(answerId) { 
  console.log("selectAnswer: ", answerId);
  return ({ type: actions.SET_SELECTED_ANSWER, payload: answerId });
}

export function setMessage(message) { 
  return ({ type: actions.SET_INFO_MESSAGE, payload: message });
}

export function setQuiz(quiz) { 
  return ({ type: actions.SET_QUIZ_INTO_STATE, payload: quiz });
}

export function inputChange() { }

export function resetForm() { }

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    dispatch(setQuiz(null));
    
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
    axios.get("http://localhost:9000/api/quiz/next")
      .then(res => {
        dispatch(setQuiz(res.data));
      })
      .catch(err => {
        debugger
      });
  }
}
export function postAnswer(quiz_Id, answer_Id) {
  return function (dispatch) {
    console.log("post answer");
    axios.post("http://localhost:9000/api/quiz/answer", { "quiz_id": quiz_Id, "answer_id": answer_Id})
      .then(res => {
        dispatch(selectAnswer(null));
        dispatch(setMessage(res.data.message));
        dispatch(fetchQuiz());
      })
      .catch(err => {
        debugger
      })
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
  }
}
export function postQuiz() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state

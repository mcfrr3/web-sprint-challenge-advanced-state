import React from 'react'
import { connect } from 'react-redux'
import { inputChange, resetForm, postQuiz } from '../state/action-creators'

export function Form(props) {
  console.log("props: ", props);
  const disabled = (props.form.newQuestion.trim().length > 0
    && props.form.newTrueAnswer.trim().length > 0
    && props.form.newFalseAnswer.trim().length > 0)
    ? ''
    : 'disabled';

  const onChange = evt => {
    console.log(evt.target.id, evt.target.value);
    props.inputChange(evt.target.id, evt.target.value);
  }

  const onSubmit = evt => {
    evt.preventDefault();
    props.postQuiz(props.form);
  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input 
        maxLength={50} 
        onChange={onChange} 
        id="newQuestion" 
        placeholder="Enter question" 
        value={props.form.newQuestion}
      />
      <input 
        maxLength={50} 
        onChange={onChange} 
        id="newTrueAnswer" 
        placeholder="Enter true answer" 
        value={props.form.newTrueAnswer}
      />
      <input 
        maxLength={50} 
        onChange={onChange} 
        id="newFalseAnswer" 
        placeholder="Enter false answer" 
        value={props.form.newFalseAnswer}
      />
      <button id="submitNewQuizBtn" disabled={disabled}>Submit new quiz</button>
    </form>
  )
}

const mapStateToProps = state => {
  console.log("state: ", state);
  return {
    form: state.form
  }
}

export default connect(mapStateToProps, {inputChange, resetForm, postQuiz})(Form)

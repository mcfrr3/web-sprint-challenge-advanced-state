import React, { useEffect } from 'react'
import { connect } from 'react-redux';

import { selectAnswer, setQuiz, setMessage, fetchQuiz, postAnswer } from '../state/action-creators';

function Quiz(props) {

  useEffect(() => {
    if (!props.quiz) {
      props.fetchQuiz();
    }
  }, [])

  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        props.quiz ? (
          <>
            <h2>{ props.quiz.question }</h2>

            <div id="quizAnswers">
              {
                props.quiz.answers.map(answer => {
                  const selected = answer.answer_id === props.selectedAnswer ? ' selected' : '';
                  return(
                    <div key={answer.answer_id} className={`answer${selected}`}>
                      { answer.text }
                      <button onClick={() => props.selectAnswer(answer.answer_id)}>
                        {answer.answer_id === props.selectedAnswer ? 'SELECTED' : 'Select'}
                      </button>
                    </div>  
                  )
                })
              }
            </div>

            <button 
              id="submitAnswerBtn" 
              onClick={() => {props.postAnswer(props.quiz.quiz_id, props.selectedAnswer)}}
              disabled={props.selectedAnswer ? '' : 'disabled'}
            >
              Submit answer
            </button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    infoMessage: state.infoMessage,
    quiz: state.quiz,
    selectedAnswer: state.selectedAnswer
  }
}

export default connect(mapStateToProps, {selectAnswer, setQuiz, setMessage, fetchQuiz, postAnswer})(Quiz);
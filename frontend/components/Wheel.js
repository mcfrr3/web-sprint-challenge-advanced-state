import React from 'react'
import { connect } from 'react-redux';

import { moveClockwise, moveCounterClockwise } from '../state/action-creators';

const Wheel = (props) => {
  const wheelArray = [...Array(6)];
  return (
    <div id="wrapper">
      <div id="wheel">
        {
          wheelArray.map((item, idx) => {
            const active = idx === props.wheel;
            return (
              <div 
                key={idx} 
                className={`cog${(active ? ' active' : '')}`}
                style={{ "--i": idx }}
              >{active ? 'B' : ''}</div>
            )
          })
        }
      </div>
      <div id="keypad">
        <button onClick={ () => props.moveCounterClockwise() } id="counterClockwiseBtn" >Counter clockwise</button>
        <button onClick={ () => props.moveClockwise() } id="clockwiseBtn">Clockwise</button>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    wheel: state.wheel
  }
}

export default connect(mapStateToProps, { moveClockwise, moveCounterClockwise })(Wheel);
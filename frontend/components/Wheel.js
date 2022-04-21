import React from 'react'
import { connect } from 'react-redux';

import { moveClockwise, moveCounterClockwise } from '../state/action-creators';

const Wheel = (props) => {
  const wheelArray = [...Array(6)];
  console.log("props: ", props);
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
        {/* <div className="cog active" style={{ "--i": 0 }}>B</div>
        <div className="cog" style={{ "--i": 1 }}></div>
        <div className="cog" style={{ "--i": 2 }}></div>
        <div className="cog" style={{ "--i": 3 }}></div>
        <div className="cog" style={{ "--i": 4 }}></div>
        <div className="cog" style={{ "--i": 5 }}></div>--i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button onClick={ () => props.moveCounterClockwise() } id="counterClockwiseBtn" >Counter clockwise</button>
        <button onClick={ () => props.moveClockwise() } id="clockwiseBtn">Clockwise</button>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  console.log("mapStateToProps: ", state);
  return {
    wheel: state.wheel
  }
}

export default connect(mapStateToProps, { moveClockwise, moveCounterClockwise })(Wheel);
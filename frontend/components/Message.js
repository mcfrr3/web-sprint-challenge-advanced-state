import React from 'react'
import { connect } from 'react-redux';

import {} from '../state/action-creators';

function Message(props) {
  console.log("props: ", props)
  return props.infoMessage ? <div id="message">{ props.infoMessage }</div> : '';
}

const mapStateToProps = state => {
  console.log("state: ", state);
  return {
    infoMessage: state.infoMessage
  }
}

export default connect(mapStateToProps, {})(Message);
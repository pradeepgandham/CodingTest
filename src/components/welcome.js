import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { startQuiz, updateUsername } from '../actions';

let Welcome = ({ startQuiz, updateUsername, name }) => {
  return (
  	<div>
  	  <h3>Lets see how well you know or remember basic of React an Javascript?</h3>
  	  <div>
  	  	<input type="text" placeholder="Your Name" onChange={(e)=>updateUsername(e.target.value)}/>
  	  </div>
  	  <input type="button" disabled={name.length===0}value="Take the Quiz" onClick={startQuiz}/>
  	</div>
  );
}

Welcome.propTypes = {
  startQuiz: PropTypes.func.isRequired,
  updateUsername: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch: Dispatch, ownProps) => ({
  startQuiz: () => dispatch(startQuiz()),
  updateUsername: (name) => dispatch(updateUsername(name)),
})

export default withRouter(connect(null, mapDispatchToProps)(Welcome));

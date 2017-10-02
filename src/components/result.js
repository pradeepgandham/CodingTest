import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { startQuiz } from '../actions';
import { questions } from '../constants';

let Result = ({ startQuiz, totalScore }) => {
  return (
  	<div>
  	  <h3>Let's See how you performed.</h3>
  	  <h5>
  	  	Your Total score was {totalScore*10} / {questions.length*10}
  	  </h5>
  	  <input type="button" value="Take the Quiz Again" onClick={startQuiz}/>
  	</div>
  );
}

Result.propTypes = {
  startQuiz: PropTypes.func.isRequired,
  totalScore: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  totalScore: state.totalScore,
});
const mapDispatchToProps = (dispatch: Dispatch, ownProps) => ({
  startQuiz: () => dispatch(startQuiz()),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Result));

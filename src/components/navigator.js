import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { goBack, goToNext } from '../actions';
import prev from '../images/prev.jpg';
import { questions } from '../constants';

let Navigator = ({ goBack, goToNext, currentQuestion }) => {
  return (
    <div className="top-bar">
      <div className="image"><img src={prev} alt="Go Back" onClick={goBack}/></div>
      <div className="pager">Step {currentQuestion+1} of {questions.length}</div>
      {currentQuestion+1 === questions.length ?
        <div className="skipQ">
          <input 
            className="selected"
            type="button"
            value="Submit"
            onClick={goToNext}
          />
        </div>
       :
        <div className="skipQ"><img src={prev} alt="Go Back" onClick={goToNext}/></div>
      }
    </div>
  );
}

const mapDispatchToProps = (dispatch: Dispatch, ownProps) => ({
  goBack: () => dispatch(goBack()),
  goToNext: () => dispatch(goToNext()),
});

Navigator.propTypes = {
  goBack: PropTypes.func.isRequired,
  goToNext: PropTypes.func.isRequired,
  currentQuestion: PropTypes.number.isRequired,
};

export default withRouter(connect(null,mapDispatchToProps)(Navigator));

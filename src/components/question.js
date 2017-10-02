import React from 'react';
import PropTypes from 'prop-types';

let Question = ({ question, logAnswer, selectedOptions }) => {
  return (
  	<div>
  	  <h1>{question.title}</h1>
  	  <h3>{question.text}</h3>
  	  <div className="options">
	  	  {question.options.map(o=><input 
	  	  		className={selectedOptions === o && "selected"}
		  	  	key={o.text}
		  	  	type="button"
		  	  	value={o.text}
		  	  	onClick={(e)=>logAnswer(o)}
	  	  	/>
	  	  )}
	  	</div>
	  	<div>
  	  </div>
  	</div>
  );
}

Question.propTypes = {
  question: PropTypes.object.isRequired,
  logAnswer: PropTypes.func.isRequired,
  selectedOptions: PropTypes.object,
};

export default Question;
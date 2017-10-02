import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { logAnswer } from '../actions';
import { questions } from '../constants';
import Welcome from '../components/welcome';
import Question from '../components/question';
import Navigator from '../components/navigator';
import ResultPage from '../components/result';

class App extends Component {
  render() {
    const { name, logAnswer, currentQuestion, selectedOptions} = this.props;
    if (currentQuestion === -1) {
      return (
        <div className="panel marging-top-100">
          <Welcome name={name} />
        </div>
      );
    } else if (currentQuestion + 1 > questions.length){
        return (
          <div>
            <h5>Welcome {name}</h5>
            <div className="panel">
              <ResultPage name={name}/>
            </div>
          </div>
        )
    } else {
      return (
        <div>
          <h5>Welcome {name}</h5>
          <div className="panel">
            <Navigator currentQuestion={currentQuestion}/>
            <Question
              question={questions[currentQuestion]}
              logAnswer={logAnswer}
              selectedOptions={selectedOptions[currentQuestion]}
            />
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  name: state.name,
  currentQuestion: state.currentQuestion,
  selectedOptions: state.selectedOptions,
});

const mapDispatchToProps = (dispatch: Dispatch, ownProps) => ({
  logAnswer: (o) => dispatch(logAnswer(o)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

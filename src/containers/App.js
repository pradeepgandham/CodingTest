import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/assessment" component={Home}/>
          <Route exact path="*" render={() => (
            <Redirect to="/assessment"/>
          )}/>
        </Switch>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
import '../styles/App.css';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { HashRouter as Router, Route } from 'react-router-dom';


import Login from '../pages/Login';
import IStageOne from '../pages/individual/IStageOne';

import ThankYou from '../pages/ThankYou';
import View from '../pages/main/View';


class App extends Component {
  render() {
    return (
     <Router>
      <div>
        <Route exact path="/" component={Login}/>
        <Route exact path="/login" component={Login}/>
        <Route path="/signup" component={IStageOne}/>
        <Route path="/success" component={ThankYou} />
        <Route path="/app" render={(props) => (<View {...props} page='dashboard' /> )}/>
      </div>
    </Router>
    );
  }
}

export default App;
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Index from './screen/Index';
import Login from './screen/Login';
import Sample from './screen/Sample'; 
import Bat from './screen/Bat'; 


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/index" component={Index} />
          <Route path="/" component={Bat} />
        </Switch>
      </Router>  
    );
  }
}

export default App;
import React, { Component } from 'react';
import india from './components/india';
import main from './components';
import err from './components/404';
import chk from './components/Pencil';

import {BrowserRouter as Router,Route,Switch,Link,Redirect} from 'react-router-dom';

class App extends Component {
  render() {
    return <Router>
    <Switch>
      <Route exact path="/" component={main}></Route>
      <Route exact path="/india" component={india}></Route>
      <Route exact path="/404" component={err}></Route>
      <Route exact path="/check" component={chk}></Route>
      <Redirect to="/404"></Redirect>
      </Switch>
    </Router>
  }
}

export default App;

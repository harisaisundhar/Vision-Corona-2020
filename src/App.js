import React, { Component } from 'react';
import Tracker from './components/Tracker';
import Dem from './components/Dem';


class App extends Component {
  render() {
    return (
      <div>
      <Dem />
      <Tracker /> 
      </div>
    );
  }
}

export default App;

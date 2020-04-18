import React, { Component } from 'react';
import Tracker from './components/Tracker';
import Dem from './components/Dem';
import Pen from './components/Pencil';
import Hov from './components/Hover';



class App extends Component {
  render() {
    return (
      <div>
  
  <Tracker/>
      <Hov/>
      </div>
    );
  }
}

export default App;

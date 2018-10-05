import React, { Component } from 'react';
import './App.css';
import Season from './components/Season';
import Winner from './components/Winner';
import Extra from './components/Extra';
import Economy from './components/Economy';
import Maxruns from './components/Maxruns';
class App extends Component {
  render() {
    return (
      
      <div className="App">
          <Season/>  
          <Winner/>
          <Extra/>
          <Economy/>
          <Maxruns/>     
         
      </div>
    );
  }
}

export default App;

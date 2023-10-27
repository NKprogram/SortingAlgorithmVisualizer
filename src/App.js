import React, {Component} from 'react';
import './App.css';

class App extends Component {
  state = {
    Array: [],
    ArraySteps: [],
    Colors: [],
    ColorsSteps: [],
    CurentStep: 0,
    BarCount: 0,
    Delay: 100,
    TheAlgorithm: '',
    timeouts: [],
  }
  render () {
    return ( <div className='app'>
      <h1> hello world </h1>
    </div>
    );
  }

}   
  

export default App;

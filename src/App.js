import React, { Component } from 'react';
import './App.css';
import Bar from './components/Bar';

class App extends Component {
  state = {
    Array: [],
    ArraySteps: [],
    Colors: [],
    ColorsSteps: [],
    timeouts: [],
    CurentStep: 0,
    ArrayLength: 20,
    Delay: 100,
    TheAlgorithm: '',
    userInput: '',
  };

  componentDidMount() {
    this.generateRandomArray();
  }

  generateRandomArray = () => {
    const count = this.state.ArrayLength;
    const tempArray = [];
    for (let i = 0; i < count; i++) {
      tempArray.push(this.generateRandomNumber(10, 300));
    }
    
    this.setState({
      Array: tempArray,
      ArraySteps: [tempArray],
      count: count,
      currentStep: 0,
    });
    
  };

  generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  handleInputChange = (event) => {
    this.setState({ userInput: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const userInput = parseInt(this.state.userInput, 10);
    if (!isNaN(userInput)) {
      this.setState({ ArrayLength: userInput }, () => {
        this.generateRandomArray();
      });
    }
  };

  render() {
    let bars = this.state.Array.map((value, index) => (
      <Bar
        key={index}
        index ={index}
        height={value}
        color={this.state.Colors[index]}
        width={this.state.ArrayLength}
      />
    ));

    return (
      <div className='App'>
        <h1>{bars}</h1>
        <form onSubmit={this.handleFormSubmit}>
          <label>
            Enter Array Length:
            <input
              type='number'
              value={this.state.userInput}
              onChange={this.handleInputChange}
            />
          </label>
          <button type='submit'>Create new Array</button>
        </form>
      </div>
    );
  }
};

export default App;
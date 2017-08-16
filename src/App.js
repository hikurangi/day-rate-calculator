import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Day Rate Calculator</h2>
        </div>
        <Calculator />
      </div>
    );
  }
}

class Calculator extends Component {
  constructor() {
    super()
    this.state = {
      salary: null,
      kiwisaver: null,
    }
  }
  render() {
    return (
      <div id="calculator">
        <Salary />
        <Kiwisaver />
      </div>
    )
  }
}

const Salary = props => {
  return (
    <input type="text"></input>
  )
}

const Kiwisaver = props => {
  return (
    <div></div>
  )
}

export default App;

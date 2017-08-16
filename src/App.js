import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
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
    <div id="calculator">
      <Salary />
      <Kiwisaver />
    </div>
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

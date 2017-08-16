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
      salary: "Enter your salary here.",
      kiwisaver: null,
    }
  }

  handleChange = e => { // arrow binds 'this' within the function properly
    console.log({thisInHandleChange: this});
    this.setState({
      salary: +e.target.value,

    })
  }

  clearValue = e => {
    e.target.value = ''
  }

  render() {
    return (
      <div id="calculator">
        <Salary
          salary={this.state.salary}
          clearValue={this.clearValue}
          handleChange={this.handleChange}
        />
        <Kiwisaver />
      </div>
    )
  }
}

const Salary = props => {
  return (
    <input
      type="number"
      defaultValue={props.salary}
      onFocus={props.clearValue}
      onChange={props.handleChange}/>
  )
}

const Kiwisaver = props => {
  return (
    <div></div>
  )
}

export default App;

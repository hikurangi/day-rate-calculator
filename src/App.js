import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Will be moved elsewhere!
import PropTypes from 'prop-types'

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
    const salary = e.target.value // always a number
    this.setState({
      salary,
      kiwisaver: salary * 0.03,
    })
  }

  handleBlur = e => {
    console.log('blurred!'); // get this working
  }

  render() {
    return (
      <div id="calculator">
        <Salary
          salary={this.state.salary}
          handleChange={this.handleChange}
        />
        <Kiwisaver
          kiwisaver={this.state.kiwisaver}
        />
      </div>
    )
  }
}

const Salary = props => {
  return (
    <input
      type="number"
      placeholder={props.salary}
      onChange={props.handleChange}
      onBlur={props.handleBlur} // wire this up so it works
    />
  )
}

const Kiwisaver = props => {
  return (
    <div>
      <p>{props.kiwisaver ? 'Kiwisaver contribution: $' + props.kiwisaver.toFixed(2) : ''}</p>
    </div>
  )
}

// Proptypes validation
Salary.propTypes = {
  salary: PropTypes.string,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
}

Kiwisaver.propTypes = {
  kiwisaver: PropTypes.number,
}

export default App;

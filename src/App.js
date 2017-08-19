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
      salary: null,
      assets: null,
    }
  }

  handleChange = e => { // arrow binds 'this' within the function properly
    this.setState({
      [e.target.name]: e.target.value, // destructuring
      depreciation: (prevState.assets/3)/(fte*2)
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
          salary={this.state.salary}
        />
        <Assets
          assets={this.state.assets}
          handleChange={this.handleChange}
        />
        <Depreciation
          depreciation={this.state.depreciation}
        />
      </div>
    )
  }
}

const Salary = props => { // all components using the generic handleChange need a 'name' attribute
  return (
    <input
      name="salary"
      type="number"
      placeholder="Enter your salary here."
      onChange={props.handleChange}
      onBlur={props.handleBlur} // wire this up so it works
    />
  )
}

const Kiwisaver = props => {
  return (
    <div>
      {props.kiwisaver ? 'Kiwisaver contribution: $' + props.kiwisaver.toFixed(2) : ''}
    </div>
  )
}

const Assets = props => {
  return (
    <input
      name="assets"
      type="number"
      placeholder="Enter the value of any business assets - your laptop for example."
      onChange={props.handleChange}
      onBlur={props.handleBlur}
    />
  )
}

const Depreciation = props => {
  return (
    <div>
      {props.depreciation}
    </div>
  )
}

// Proptypes validation
// Salary.propTypes = {
//   salary: PropTypes.string,
//   handleChange: PropTypes.func,
//   handleBlur: PropTypes.func,
// }


export default App;

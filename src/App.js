import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import logo from './logo.svg';
import './App.css';

import Calculator from './Calculator'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Contractor Day Rate Calculator</h2>
          <p>by Hikurangi Schaverien-Kaa with information from Jody at Enspiral Dev Academy</p>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <MuiThemeProvider>
          <Calculator />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'

import Calculator from './Calculator'

import logo from '../assets/logo.svg'
import '../App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Contractor Day Rate Calculator</h2>
          <p>by Hikurangi Schaverien-Kaa with information from Jody at Enspiral Dev Academy</p>
        </div>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <Calculator />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;

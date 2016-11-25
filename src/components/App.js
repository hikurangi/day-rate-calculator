import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'

import '../App.css'
import Calculator from './Calculator'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <Calculator />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;

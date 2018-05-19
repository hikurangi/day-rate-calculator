import React            from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme      from 'material-ui/styles/getMuiTheme'
import darkBaseTheme    from 'material-ui/styles/baseThemes/darkBaseTheme'
import Calculator       from './components/Calculator'
// import 'typeface-roboto'
import './App.css'

const App = () => {
  return (
    <div className="App">
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <Calculator />
      </MuiThemeProvider>
    </div>
  )
}

export default App;

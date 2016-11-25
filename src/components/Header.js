import React, { Component } from 'react'
import logo from '../assets/logo.svg'

class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Contractor Day Rate Calculator</h2>
        <h3><em>accurate for {this.props.thisYear}</em></h3>
        <p>Built by Hikurangi Schaverien-Kaa with information from Jody at Enspiral Dev Academy</p>
      </div>
    )
  }
}

export default Header

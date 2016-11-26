import React from 'react'

import logo from '../assets/logo.svg'

const Header = ({ thisYear }) => {
  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Contractor Day Rate Calculator</h2>
      <h3><em>accurate for { thisYear }</em></h3>
      <p>Built by Hikurangi Schaverien-Kaa with information from Jody at Enspiral Dev Academy</p>
    </div>
  )
}

export default Header

import React from 'react'
import { TableRow, TableHeaderColumn } from 'material-ui/Table'

import logo from '../assets/logo.svg'

const Header = ({ thisYear }) => {
  return (
    <TableRow className="App-header">
      <TableHeaderColumn>
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Contractor Day Rate Calculator</h2>
        <h3><em>accurate for { thisYear }</em></h3>
        <p>
          Built by Hikurangi Schaverien-Kaa with information from Jody at Enspiral Dev Academy
        </p>
      </TableHeaderColumn>
    </TableRow>
  )
}

export default Header

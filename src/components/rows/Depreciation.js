import React from 'react'

import { TableRow, TableRowColumn } from 'material-ui/Table'
import TextField from 'material-ui/TextField'

const Depreciation = ({ handleProp, depreciation }) => {
  return (
    <TableRow>
      <TableRowColumn>
        <h3>Depreciation</h3>
        The cost of your laptop:
        <TextField
          onChange={handleProp('laptopValue')}
        />
        <br/>
        Client pays a 50% share
        <br/>
        Your <a href="http://centraltas.co.nz/assets/SWS/HWIP/A-practical-guide-to-FTE-reporting-2015.pdf" target="blank"> FTE </a>
        <TextField
          onChange={handleProp('fte')}
        />
      </TableRowColumn>
      <TableRowColumn>
        { depreciation && ( depreciation !== Infinity ) ? '$ ' + ( depreciation * 12 ).toFixed(2) : null }</TableRowColumn>
    </TableRow>
  )
}

export default Depreciation

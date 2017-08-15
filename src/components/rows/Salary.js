import React from 'react'

import { TableRow, TableRowColumn } from 'material-ui/Table'
import TextField from 'material-ui/TextField'

const Salary = ({ kiwisaverCalc }) => {
  return (
    <TableRow>
      <TableRowColumn><h3>Salary</h3></TableRowColumn>
      <TableRowColumn>
        <TextField

        />
        <input
          type="text"
          hintText="Enter your expected full time salary"
          onChange={kiwisaverCalc}
          fullWidth={true}
          >
            
          </input>
      </TableRowColumn>
    </TableRow>
  )
}

export default Salary

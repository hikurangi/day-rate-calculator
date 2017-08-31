import React from 'react'

import { TableRow, TableRowColumn } from 'material-ui/Table'
import TextField from 'material-ui/TextField'

const AnnualLeave = ({ handleChange }) => {
  return (
    <TableRow>
      <TableRowColumn>
        <h3>Your total number of annual leave days</h3>
      </TableRowColumn>
      <TableRowColumn>
        <TextField
          name="annual leave" /* possible problem */
          hintText="Your total number of annual leave days"
          onChange={handleChange}
        />
      </TableRowColumn>
    </TableRow>
  )
}

export default AnnualLeave

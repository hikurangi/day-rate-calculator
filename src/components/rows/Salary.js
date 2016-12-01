import React from 'react'

import { TableRow, TableRowColumn } from 'material-ui/Table'
import TextField from 'material-ui/TextField'

const Salary = ({ handleProp, salary }) => {
  return (
    <TableRow>
      <TableRowColumn><h3>Salary</h3></TableRowColumn>
      <TableRowColumn>
        <TextField
          hintText="Enter your expected full time salary"
          onChange={handleProp('salary')}
          defaultValue={salary}
          fullWidth={true}
        />
      </TableRowColumn>
    </TableRow>
  )
}

export default Salary

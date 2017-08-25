import React from 'react'

import { TableRow, TableRowColumn } from 'material-ui/Table'
import TextField from 'material-ui/TextField'

const Cellphone = ({ handleChange }) => {
  return (
    <TableRow>
      <TableRowColumn>
        <h3>Your monthly cellphone costs:</h3>
      </TableRowColumn>
      <TableRowColumn>
        <TextField
          name="cellphone"
          hintText="Cellphone costs"
          onChange={handleChange}
        />
      </TableRowColumn>
    </TableRow>
  )
}

export default Cellphone

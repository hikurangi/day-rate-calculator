import React from 'react'

import { TableRow, TableRowColumn } from 'material-ui/Table'
import TextField from 'material-ui/TextField'

const Cellphone = ({ handleChange }) => {
  return (
    <TableRow>
      <TableRowColumn>
        <h3>Cellphone</h3>
      </TableRowColumn>
      <TableRowColumn>
        <TextField
          name="cellphone"
          hintText="Your monthly cellphone costs"
          onChange={handleChange}
        />
      </TableRowColumn>
    </TableRow>
  )
}

export default Cellphone

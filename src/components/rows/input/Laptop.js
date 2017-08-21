import React from 'react'
import { TableRow, TableRowColumn } from 'material-ui/Table'
import TextField from 'material-ui/TextField'

const Laptop = ({ handleChange }) => {
  return (
    <TableRow>
      <TableRowColumn>
        <h3>
          The cost of your work PC:
        </h3>
      </TableRowColumn>
      <TableRowColumn>
        <TextField
          name="laptop"
          type="number"
          hintText="Computer Price"
          onChange={handleChange}
          fullWidth={true}
        />
      </TableRowColumn>
    </TableRow>
  )
}

export default Laptop
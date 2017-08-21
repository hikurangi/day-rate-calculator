import React from 'react'
import { TableRow, TableRowColumn } from 'material-ui/Table'
import TextField from 'material-ui/TextField'

const FTE = ({ handleChange }) => {
  return (
    <TableRow>
      <TableRowColumn>
        <h3>
          Your <a href="http://centraltas.co.nz/assets/SWS/HWIP/A-practical-guide-to-FTE-reporting-2015.pdf" target="_blank">FTE</a>:
        </h3>
      </TableRowColumn>
      <TableRowColumn>
        <TextField
          name="fte"
          type="number"
          hintText="Enter your FTE"
          onChange={handleChange}
          fullWidth={true}
        />
      </TableRowColumn>
    </TableRow>
  )
}

export default FTE

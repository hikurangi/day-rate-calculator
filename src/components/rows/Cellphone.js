import React from 'react'

import { TableRow, TableRowColumn } from 'material-ui/Table'
import TextField from 'material-ui/TextField'

const Cellphone = ({ handleProp, cellphone }) => {
  return (
    <TableRow>
      <TableRowColumn>
        <h3>Monthly cellphone plan</h3>
        (Employer contribution)
        <TextField
          name="cellphone"
          onChange={handleProp}
        />
      </TableRowColumn>
      <TableRowColumn>{ cellphone ? '$ ' + (cellphone).toFixed(2)*12 : null }</TableRowColumn>
    </TableRow>
  )
}

export default Cellphone

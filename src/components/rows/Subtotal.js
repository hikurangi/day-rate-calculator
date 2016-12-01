import React from 'react'

import { TableRow, TableRowColumn } from 'material-ui/Table'

const Subtotal = ({ subtotal }) => {
  return (
    <TableRow>
      <TableRowColumn><h3>Total</h3></TableRowColumn>
      <TableRowColumn>{ subtotal ? '$ ' + (subtotal).toFixed(2) : null }</TableRowColumn>
    </TableRow>
  )
}

export default Subtotal

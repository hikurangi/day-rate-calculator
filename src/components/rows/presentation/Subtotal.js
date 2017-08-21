import React from 'react'

import { TableRow, TableRowColumn } from 'material-ui/Table'

const Subtotal = ({ style, subtotal }) => {
  return (
    <TableRow>
      <TableRowColumn><h3>Subtotal</h3></TableRowColumn>
      <TableRowColumn>
        <p style={style.outputNumbers}>
          { !isNaN(subtotal) ? '$ ' + subtotal.toFixed(2) : '' }
        </p>
      </TableRowColumn>
    </TableRow>
  )
}

export default Subtotal

import React from 'react'

import { TableRow, TableRowColumn } from 'material-ui/Table'

const Total = ({ total }) => {
  return (
    <TableRow>
      <TableRowColumn>
        <h3>Your day rate is</h3>
      </TableRowColumn>
      <TableRowColumn>{ total }</TableRowColumn>
    </TableRow>
  )
}

export default Total

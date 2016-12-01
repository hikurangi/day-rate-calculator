import React from 'react'

import { TableRow, TableRowColumn } from 'material-ui/Table'

const Total = ({ total }) => {
  return (
    <TableRow>
      <TableRowColumn>Your day rate is $82,770 / 224	</TableRowColumn>
      <TableRowColumn>{ total }</TableRowColumn>
    </TableRow>
  )
}

export default Total

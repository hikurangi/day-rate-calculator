import React from 'react'

import { TableRow, TableRowColumn } from 'material-ui/Table'

const Weekends = ({ weekends }) => {
  return (
    <TableRow>
      <TableRowColumn>Weekends</TableRowColumn>
      <TableRowColumn>{ weekends }</TableRowColumn>
    </TableRow>
  )
}

export default Weekends

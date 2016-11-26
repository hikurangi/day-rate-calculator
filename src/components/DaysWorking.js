import React from 'react'

import { TableRow, TableRowColumn } from 'material-ui/Table'

const DaysWorking = ({ daysWorking }) => {
  return (
    <TableRow>
      <TableRowColumn>Total days you ARE working (365 minus 141)</TableRowColumn>
      <TableRowColumn>{ daysWorking }</TableRowColumn>
    </TableRow>
  )
}

export default DaysWorking

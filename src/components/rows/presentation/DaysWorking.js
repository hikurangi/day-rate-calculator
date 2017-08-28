import React from 'react'

import { TableRow, TableRowColumn } from 'material-ui/Table'

const DaysWorking = ({ daysWorking }) => {
  return (
    <TableRow>
      <TableRowColumn>Total number of days you are working this year:</TableRowColumn>
      <TableRowColumn>{ daysWorking }</TableRowColumn>
    </TableRow>
  )
}

export default DaysWorking

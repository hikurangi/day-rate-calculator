import React from 'react'

import { TableRow, TableRowColumn } from 'material-ui/Table'

const DaysWorking = ({ daysWorking }) => {
  return (
    <TableRow>
      <TableRowColumn>
        <h3>Total number of days you are working this year</h3>
      </TableRowColumn>
      <TableRowColumn>{ daysWorking }</TableRowColumn>
    </TableRow>
  )
}

export default DaysWorking

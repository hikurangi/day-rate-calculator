import React from 'react'

import { TableRow, TableRowColumn } from 'material-ui/Table'

const DaysNotWorking = ({ daysNotWorking }) => {
  return (
    <TableRow>
      <TableRowColumn>Total days you are NOT working</TableRowColumn>
      <TableRowColumn>{ daysNotWorking }</TableRowColumn>
    </TableRow>
  )
}

export default DaysNotWorking

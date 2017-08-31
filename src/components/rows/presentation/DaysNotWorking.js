import React from 'react'

import { TableRow, TableRowColumn } from 'material-ui/Table'

const DaysNotWorking = ({ daysNotWorking }) => {
  return (
    <TableRow>
      <TableRowColumn>
        <h3>Total days you are NOT working</h3>
      </TableRowColumn>
      <TableRowColumn>{ daysNotWorking }</TableRowColumn>
    </TableRow>
  )
}

export default DaysNotWorking

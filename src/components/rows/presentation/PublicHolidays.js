import React from 'react'

import { TableRow, TableRowColumn } from 'material-ui/Table'

const PublicHolidays = ({ thisYear, publicHolidays }) => {
  return (
    <TableRow>
      <TableRowColumn>Public holidays in { thisYear }:</TableRowColumn>
      <TableRowColumn>{ publicHolidays }</TableRowColumn>
    </TableRow>
  )
}

export default PublicHolidays

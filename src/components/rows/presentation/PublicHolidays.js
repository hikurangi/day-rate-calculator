import React from 'react'

import { TableRow, TableRowColumn } from 'material-ui/Table'

const PublicHolidays = ({ publicHolidays }) => {
  return (
    <TableRow>
      <TableRowColumn>Public holidays (this is based on 2016)	</TableRowColumn>
      <TableRowColumn>{ publicHolidays }</TableRowColumn>
    </TableRow>
  )
}

export default PublicHolidays

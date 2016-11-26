import React from 'react'

import { TableRow, TableRowColumn } from 'material-ui/Table'

const PublicHolidays = ({ publicHolidays }) => {
  return (
    <TableRow>
      <TableRowColumn>Public holidays (this is based on 2016)	</TableRowColumn>
      <TableRowColumn>12</TableRowColumn>
    </TableRow>
  )
}

export default PublicHolidays

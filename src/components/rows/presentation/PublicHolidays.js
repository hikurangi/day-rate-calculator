import React from 'react'

import { TableRow, TableRowColumn } from 'material-ui/Table'

const PublicHolidays = ({ thisYear, publicHolidays, style }) => {
  return (
    <TableRow>
      <TableRowColumn>Public holidays in { thisYear }:</TableRowColumn>
      <TableRowColumn>
        <p style={style.outputNumbers}>
          { publicHolidays }
        </p>
      </TableRowColumn>
    </TableRow>
  )
}

export default PublicHolidays

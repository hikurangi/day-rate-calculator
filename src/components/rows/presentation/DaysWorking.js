import React from 'react'

import { TableRow, TableRowColumn } from 'material-ui/Table'

const DaysWorking = ({ annualLeave, sickLeave, publicHolidays, weekends, days, style }) => {
  delete days.thisYear
  // get total number of days in the year.
  // subtract weekends, sickLeave, annualLeave, publicHolidays from it.
  const total = Object.values(days)

  return (
    <TableRow>
      <TableRowColumn>
        <h3>Total number of days you are working this year</h3>
      </TableRowColumn>
      <TableRowColumn>
        <p style={style.outputNumbers}>{ !isNaN(total) && total }</p>
      </TableRowColumn>
    </TableRow>
  )
}

export default DaysWorking

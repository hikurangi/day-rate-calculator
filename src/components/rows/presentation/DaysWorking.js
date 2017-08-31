import React from 'react'

import { TableRow, TableRowColumn } from 'material-ui/Table'

const DaysWorking = ({ annualLeave, sickLeave, publicHolidays, weekends, days, style }) => {
  const total = Object.values(days).reduce((a, b) => {
      if (typeof a === 'number') {
        return a + b
      } else {
        return b
      }
    }, 0) - (+annualLeave + +sickLeave + +publicHolidays + +weekends)
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

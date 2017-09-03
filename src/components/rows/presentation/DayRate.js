import React from 'react'

import { TableRow, TableRowColumn } from 'material-ui/Table'

const DayRate = ({ total, style }) => {
  return (
    <TableRow>
      <TableRowColumn>
        <h3>Your day rate is</h3>
      </TableRowColumn>
      <TableRowColumn>
        <p style={style.outputNumbers}>
          { total }
        </p>
      </TableRowColumn>
    </TableRow>
  )
}

export default Total

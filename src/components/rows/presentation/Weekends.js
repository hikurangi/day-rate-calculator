import React from 'react'

import { TableRow, TableRowColumn } from 'material-ui/Table'

const Weekends = ({ weekends, thisYear, style }) => {
  return (
    <TableRow>
      <TableRowColumn>
        <h3>Total number of weekend days in { thisYear }</h3>
      </TableRowColumn>
      <TableRowColumn>
        <p style={style.outputNumbers}>
          { weekends }
        </p></TableRowColumn>
    </TableRow>
  )
}

export default Weekends

import React from 'react'

import { TableRow, TableRowColumn } from 'material-ui/Table'

const Weekends = ({ weekends, thisYear, style }) => {
  return (
    <TableRow>
      <TableRowColumn>Total number of weekend days in { thisYear }:</TableRowColumn>
      <TableRowColumn>
        <p style={style.outputNumbers}>
          { weekends }
        </p></TableRowColumn>
    </TableRow>
  )
}

export default Weekends

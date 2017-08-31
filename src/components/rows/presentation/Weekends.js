import React from 'react'

import { TableRow, TableRowColumn } from 'material-ui/Table'

const Weekends = ({ weekends, style }) => {
  return (
    <TableRow>
      <TableRowColumn>Weekends</TableRowColumn>
      <TableRowColumn>
        <p style={style.outputNumbers}>
          { weekends }
        </p></TableRowColumn>
    </TableRow>
  )
}

export default Weekends

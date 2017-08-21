import React from 'react'

import { TableRow, TableRowColumn } from 'material-ui/Table'

const Kiwisaver = ({kiwisaver}) => {
  return (
    <TableRow>
      <TableRowColumn>
        <h3>3% Kiwisaver Employer minimum contribution</h3>
      </TableRowColumn>
      <TableRowColumn>
        { kiwisaver ? '$ ' + kiwisaver.toFixed(2) : null }
      </TableRowColumn>
    </TableRow>
  )
}

export default Kiwisaver

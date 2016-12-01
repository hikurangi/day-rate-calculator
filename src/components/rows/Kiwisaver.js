import React from 'react'

import { TableRow, TableRowColumn } from 'material-ui/Table'

const Kiwisaver = ({kiwisaver}) => {
  return (
    <TableRow>
      <TableRowColumn>
        <h3>3% Kiwisaver Employer minimum contribution</h3>
      </TableRowColumn>
      <TableRowColumn>
        { kiwisaver ? '$ ' + (kiwisaver * 12).toFixed(2) : null }
      </TableRowColumn> {/* should actually show lower values down to three cents */}
    </TableRow>
  )
}

export default Kiwisaver

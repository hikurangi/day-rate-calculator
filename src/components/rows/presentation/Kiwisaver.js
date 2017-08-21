import React from 'react'
import { TableRow, TableRowColumn, style } from 'material-ui/Table'

const Kiwisaver = ({kiwisaver}) => {
  return (
    <TableRow>
      <TableRowColumn>
        <h3>3% Kiwisaver Employer minimum contribution</h3>
      </TableRowColumn>
      <TableRowColumn>
        <p className={style.outputNumbers}>
          { kiwisaver ? '$ ' + kiwisaver.toFixed(2) : null }
        </p>
      </TableRowColumn>
    </TableRow>
  )
}

export default Kiwisaver

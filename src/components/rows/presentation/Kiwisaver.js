import React from 'react'
import { TableRow, TableRowColumn } from 'material-ui/Table'

const Kiwisaver = ({kiwisaver, style}) => {
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

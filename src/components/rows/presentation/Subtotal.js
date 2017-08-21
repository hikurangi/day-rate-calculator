import React from 'react'

import { TableRow, TableRowColumn } from 'material-ui/Table'

const Subtotal = ({ style, salary, depreciation, cellphone }) => {
  const subtotal = (...args) => args.reduce((arg, acc) => {
    console.log({arg, acc});
    return acc + ((arg === undefined) || (arg === null) || (arg === 0)) ? 0 : arg
  }, 0)
  return (
    <TableRow>
      <TableRowColumn><h3>Subtotal</h3></TableRowColumn>
      <TableRowColumn>
        <p style={style.outputNumbers}>
          { '$ ' + subtotal(salary, salary * 0.03, depreciation, cellphone * 12) }
        </p>
      </TableRowColumn>
    </TableRow>
  )
}

export default Subtotal

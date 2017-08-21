import React from 'react'
import { TableRow, TableRowColumn } from 'material-ui/Table'

const Depreciation = ({ handleChange, style, laptop, fte }) => {
  return (
    <TableRow>
      <TableRowColumn>
        <h3>Depreciation</h3>
      </TableRowColumn>
      <TableRowColumn>
        <p className={style.outputNumbers}>
          {laptop && fte ? '$ ' + ((laptop/3)/(fte*2)).toFixed(2) : ''}
        </p>
      </TableRowColumn>
    </TableRow>
  )
}

export default Depreciation

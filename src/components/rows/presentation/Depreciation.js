import React from 'react'
import { TableRow, TableRowColumn } from 'material-ui/Table'

const Depreciation = ({ style, depreciation }) => {
  return (
    <TableRow>
      <TableRowColumn>
        <h3>Depreciation</h3>
      </TableRowColumn>
      <TableRowColumn>
        <p style={style.outputNumbers}>
          { !isNaN(depreciation) ? '$ ' + depreciation.toFixed(2) : '' }
        </p>
      </TableRowColumn>
    </TableRow>
  )
}

export default Depreciation

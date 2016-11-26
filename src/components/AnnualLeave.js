import React from 'react'

import { TableRow, TableRowColumn } from 'material-ui/Table'

const AnnualLeave = ({ annualLeave }) => {
  return (
    <TableRow>
      <TableRowColumn>Annual leave days</TableRowColumn>
      <TableRowColumn>{annualLeave}</TableRowColumn>
    </TableRow>
  )
}

export default AnnualLeave

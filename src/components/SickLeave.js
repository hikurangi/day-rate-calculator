import React from 'react'

import { TableRow, TableRowColumn } from 'material-ui/Table'

const SickLeave = ({ sickLeave }) => {
  return (
    <TableRow>
      <TableRowColumn>Sick leave days</TableRowColumn>
      <TableRowColumn>{ sickLeave }</TableRowColumn>
    </TableRow>
  )
}

export default SickLeave

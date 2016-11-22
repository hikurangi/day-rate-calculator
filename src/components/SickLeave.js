import React, { Component } from 'react'

import { TableRow, TableRowColumn } from 'material-ui/Table'

class SickLeave extends Component {
  render() {
    return (
      <TableRow>
        <TableRowColumn>Sick leave days</TableRowColumn>
        <TableRowColumn>5</TableRowColumn>
      </TableRow>
    )
  }
}

export default SickLeave

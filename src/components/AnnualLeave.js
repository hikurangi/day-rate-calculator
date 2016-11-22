import React, { Component } from 'react'

import { TableRow, TableRowColumn } from 'material-ui/Table'

class AnnualLeave extends Component {
  render() {
    return (
      <TableRow>
        <TableRowColumn>Annual leave days</TableRowColumn>
        <TableRowColumn>20</TableRowColumn>
      </TableRow>
    )
  }
}

export default AnnualLeave

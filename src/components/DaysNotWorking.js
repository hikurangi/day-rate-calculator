import React, { Component } from 'react'

import { TableRow, TableRowColumn } from 'material-ui/Table'

class DaysNotWorking extends Component {
  render() {
    return (
      <TableRow>
        <TableRowColumn>Total days you are NOT working</TableRowColumn>
        <TableRowColumn>141</TableRowColumn>
      </TableRow>
    )
  }
}

export default DaysNotWorking

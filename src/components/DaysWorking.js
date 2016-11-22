import React, { Component } from 'react'

import { TableRow, TableRowColumn } from 'material-ui/Table'

class DaysWorking extends Component {
  render() {
    return (
      <TableRow>
        <TableRowColumn>Total days you ARE working (365 minus 141)</TableRowColumn>
        <TableRowColumn>224</TableRowColumn>
      </TableRow>
    )
  }
}

export default DaysWorking

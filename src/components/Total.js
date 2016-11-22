import React, { Component } from 'react'

import { TableRow, TableRowColumn } from 'material-ui/Table'

class Total extends Component {
  render() {
    return (
      <TableRow>
        <TableRowColumn>Your day rate is $82,770 / 224	</TableRowColumn>
        <TableRowColumn>$369.50</TableRowColumn>
      </TableRow>
    )
  }
}

export default Total

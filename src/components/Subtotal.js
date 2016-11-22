import React, { Component } from 'react'

import { TableRow, TableRowColumn } from 'material-ui/Table'

class Subtotal extends Component {
  render() {
    return (
      <TableRow>
        <TableRowColumn><h3>Total</h3></TableRowColumn>
        <TableRowColumn>{ this.props.subtotal ? '$ ' + (this.props.subtotal).toFixed(2) : null }</TableRowColumn>
      </TableRow>
    )
  }
}

export default Subtotal

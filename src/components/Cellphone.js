import React, { Component } from 'react'

import { TableRow, TableRowColumn } from 'material-ui/Table'

class Cellphone extends Component {
  render() {
    return (
      <TableRow>
        <TableRowColumn>
          Monthly cellphone plan contribution
        </TableRowColumn>
        <TableRowColumn>{ this.props.cellphone ? '$ ' + (this.props.cellphone * 12).toFixed(2)*12 : null }</TableRowColumn>
      </TableRow>
    )
  }
}

export default Cellphone

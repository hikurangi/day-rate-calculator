import React, { Component } from 'react'

import { TableRow, TableRowColumn } from 'material-ui/Table'
import TextField from 'material-ui/TextField'

class Cellphone extends Component {
  render() {
    return (
      <TableRow>
        <TableRowColumn>
          <h3>Monthly cellphone plan</h3>
          (Employer contribution)
          <TextField                 onChange={this.props.handleProp('cellMonthly')} />
        </TableRowColumn>
        <TableRowColumn>{ this.props.cellphone ? '$ ' + (this.props.cellphone).toFixed(2)*12 : null }</TableRowColumn>
      </TableRow>
    )
  }
}

export default Cellphone

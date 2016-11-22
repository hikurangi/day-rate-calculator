import React, { Component } from 'react'

import { TableRow, TableRowColumn } from 'material-ui/Table'
import TextField from 'material-ui/TextField'

class Salary extends Component {
  render() {
    return (
      <TableRow>
        <TableRowColumn><h3>Salary</h3></TableRowColumn>
        <TableRowColumn>
          <TextField
            hintText="Enter your expected full time salary"
            onChange={this.props.handleProp('salary')}
          />
        </TableRowColumn>
      </TableRow>
    )
  }
}

export default Salary

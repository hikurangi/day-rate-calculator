import React, { Component } from 'react'

import { TableRow, TableRowColumn } from 'material-ui/Table'
import TextField from 'material-ui/TextField'

class Salary extends Component {
  render() {
    return (
      <TableRow>
        <TableRowColumn><h2>Salary</h2></TableRowColumn>
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

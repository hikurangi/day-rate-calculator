import React from 'react'

import { TableRow, TableRowColumn } from 'material-ui/Table'

class Salary extends Component {
  render() {
    return (
      <TableRow>
        <TableRowColumn>Salary</TableRowColumn>
        <TableRowColumn>
          $ <TextField
            hintText="Enter your expected full time salary"
            onChange={this.handleProp('salary')}
            />
        </TableRowColumn>
      </TableRow>
    )
  }
}

export default Salary

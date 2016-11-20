import React, { Component } from 'react'

import { TableRow, TableRowColumn } from 'material-ui/Table'

class Cellphone extends Component {
  render() {
    return (
      <TableRow>
        <TableRowColumn>
          Assuming you are having to use your own cellphone for work - $10 a month toward the cost of a decent plan
        </TableRowColumn>
        <TableRowColumn>$120</TableRowColumn>
      </TableRow>
    )
  }
}

export default Cellphone

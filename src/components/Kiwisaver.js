import React, { Component } from 'react'

import { TableRow, TableRowColumn } from 'material-ui/Table'

class Kiwisaver extends Component {
  render() {
    return (
      <TableRow>
        <TableRowColumn>
          3% Kiwisaver Employer minimum contribution
        </TableRowColumn>
        <TableRowColumn>{'$ ' + this.state.kiwiSaver.toFixed(2)}</TableRowColumn> {/* should actually show lower values down to three cents */}
      </TableRow>
    )
  }
}

export default Kiwisaver

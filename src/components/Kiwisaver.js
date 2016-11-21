import React, { Component } from 'react'

import { TableRow, TableRowColumn } from 'material-ui/Table'

class Kiwisaver extends Component {
  render() {
    console.log('this.props.kiwisaver in Kiwisaver',
    this.props.kiwisaver);
    return (
      <TableRow>
        <TableRowColumn>
          <h2>3% Kiwisaver Employer minimum contribution</h2>
        </TableRowColumn>
        <TableRowColumn>
          { this.props.kiwisaver ? '$ ' + (this.props.kiwisaver * 12).toFixed(2) : null }
        </TableRowColumn> {/* should actually show lower values down to three cents */}
      </TableRow>
    )
  }
}

export default Kiwisaver

import React, { Component } from 'react'

import { TableRow, TableRowColumn } from 'material-ui/Table'

class PublicHolidays extends Component {
  render() {
    return (
      <TableRow>
        <TableRowColumn>Public holidays (this is based on 2016)	</TableRowColumn>
        <TableRowColumn>12</TableRowColumn>
      </TableRow>
    )
  }
}

export default PublicHolidays

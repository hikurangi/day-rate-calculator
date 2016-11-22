import React, { Component } from 'react'

import { TableRow, TableRowColumn } from 'material-ui/Table'
import TextField from 'material-ui/TextField'

class Depreciation extends Component {
  render() {
    return (
      <TableRow>
        <TableRowColumn>
          <h3>Depreciation</h3>
          The cost of your laptop:
          <TextField
            onChange={this.props.handleProp('laptopValue')}
          />
          <br/>
          Client pays a 50% share
          <br/>
          Your <a href="http://centraltas.co.nz/assets/SWS/HWIP/A-practical-guide-to-FTE-reporting-2015.pdf" target="blank">FTE </a>
          <TextField
            onChange={this.props.handleProp('fte')}
          />
        </TableRowColumn>
        <TableRowColumn>
          { this.props.depreciation && ( this.props.depreciation !== Infinity ) ? '$ ' + (this.props.depreciation * 12).toFixed(2) : null }</TableRowColumn>
      </TableRow>
    )
  }
}

export default Depreciation

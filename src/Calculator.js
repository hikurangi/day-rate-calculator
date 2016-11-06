import React, { Component } from 'react'

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

class Calculator extends Component {
  render() {
    console.log('MUITHEME', this.muiTheme)
    return (
      <div className = "calculator">
      <Table>
        <TableBody>
          <TableRow>
            <TableRowColumn>1</TableRowColumn>
            <TableRowColumn>John Smith</TableRowColumn>
            <TableRowColumn>Employed</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>2</TableRowColumn>
            <TableRowColumn>Randal White</TableRowColumn>
            <TableRowColumn>Unemployed</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>3</TableRowColumn>
            <TableRowColumn>Stephanie Sanders</TableRowColumn>
            <TableRowColumn>Employed</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>4</TableRowColumn>
            <TableRowColumn>Steve Brown</TableRowColumn>
            <TableRowColumn>Employed</TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
        <TextField
          hintText="Hint Text"
        /><br />
        <br />
        <TextField
          hintText="The hint text can be as long as you want, it will wrap."
        /><br />
        <TextField
          id="text-field-default"
          defaultValue="Default Value"
        /><br />
        <TextField
          hintText="Hint Text"
          floatingLabelText="Floating Label Text"
        /><br />
        <TextField
          hintText="Hint Text"
          floatingLabelText="Fixed Floating Label Text"
          floatingLabelFixed={true}
        /><br />
        <TextField
          hintText="Password Field"
          floatingLabelText="Password"
          type="password"
        /><br />
        <TextField
          hintText="MultiLine with rows: 2 and rowsMax: 4"
          multiLine={true}
          rows={2}
          rowsMax={4}
        /><br />
        <TextField
          hintText="Message Field"
          floatingLabelText="MultiLine and FloatingLabel"
          multiLine={true}
          rows={2}
        /><br />
        <TextField
          hintText="Full width"
          fullWidth={true}
        />
        <RaisedButton label="Default" />
      </div>
    );
  }
}

export default Calculator

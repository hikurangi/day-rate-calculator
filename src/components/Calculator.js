import React, { Component } from 'react'

import {Table, TableBody, TableRow, TableRowColumn} from 'material-ui/Table'
// TableHeader, TableHeaderColumn in material-ui/Table

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import tableData from '../data/tableData'

// const styles = {
//   propContainer: {
//     width: 200,
//     overflow: 'hidden',
//     margin: '20px auto 0',
//   },
//   propToggleHeader: {
//     margin: '20px auto 10px',
//   },
// };

class Calculator extends Component {

  constructor(props) {
  super(props);
    this.state = {
      selectable: false,
      salary: 0,
      kiwiSaver: 0,
      depreciation: 0
    }
    this.handleProp = this.handleProp.bind(this)
    this.kiwisaverCalc = this.kiwisaverCalc.bind(this)
    this.depreciationCalc = this.depreciationCalc.bind(this)
  }

  // where to add dollar signs and commas

  // generic event handler
  handleProp(prop) {
    return e => {
      this.setState({[prop]:e.target.value})
      switch (prop) {
        case 'salary':
          this.kiwisaverCalc()
          break;
        case 'depreciation':
          this.depreciationCalc()
          break;
        default:
          null;
      }
    }
  }

  // lower level handler functions
  kiwisaverCalc () {
    this.setState({
      kiwiSaver: 0.3 * +(this.state.salary) || 0
    })
  }

  depreciationCalc () {
    this.setState({
      depreciation: 0.3 * +(this.state.salary) || 0
    })
  }

  render() {
    console.log('tableData', tableData)
    console.log('salary in state', this.state.salary)
    console.log('kiwiSaver in state', this.state.kiwiSaver);
    return (
      <div className="calculator">
      <Table selectable={this.state.selectable}>
        <TableBody>
          <TableRow>
            <TableRowColumn>Salary</TableRowColumn>
            <TableRowColumn>
              $ <TextField
                hintText="Enter your expected full time salary"
                onChange={this.handleProp('salary')}
                />
            </TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>
              3% Kiwisaver Employer minimum contribution
            </TableRowColumn>
            <TableRowColumn>{'$ ' + this.state.kiwiSaver.toFixed(2)}</TableRowColumn> {/* should actually show lower values down to three cents */}
          </TableRow>
          <TableRow>
            <TableRowColumn>
              <TextField
                hintText="The cost of a laptop"
                floatingLabelText="Depreciation over three years"
                onChange={this.handleProp('depreciation')}
              />
            </TableRowColumn>
            <TableRowColumn>$250</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>
              Assuming you are having to use your own cellphone for work - $10 a month toward the cost of a decent plan
            </TableRowColumn>
            <TableRowColumn>$120</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Total</TableRowColumn>
            <TableRowColumn>$82,770</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Annual leave days</TableRowColumn>
            <TableRowColumn>20</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Sick leave days</TableRowColumn>
            <TableRowColumn>5</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Public holidays (this is based on 2016)	</TableRowColumn>
            <TableRowColumn>12</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Weekends</TableRowColumn>
            <TableRowColumn>104</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Total days you are NOT working</TableRowColumn>
            <TableRowColumn>141</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Total days you ARE working (365 minus 141)</TableRowColumn>
            <TableRowColumn>224</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Your day rate is $82,770 / 224	</TableRowColumn>
            <TableRowColumn>$369.50</TableRowColumn>
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

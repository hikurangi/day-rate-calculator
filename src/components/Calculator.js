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
      kiwiSaver: 0
    }
    this.kiwisaverCalc = this.kiwisaverCalc.bind(this)
    this.handleProp = this.handleProp.bind(this)
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
        default:
      }
    }
  }

  // Lower level handler functions
  kiwisaverCalc () {
    this.setState({
      kiwiSaver: 0.3 * +(this.state.salary) || 0
    })
  }

  // handleChange = (event) => {
  //   this.setState({
  //     salary: event.target.value,
  //   })
  //   this.kiwisaverCalc() // needs to be called conditionally, not every time
  // }

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
              Depreciation over three years: cost of a $1500 laptop,you and your client going halves: (1,500/3)/2x your FTE. In this case, we’re assuming you are full time. So your FTE is 1.
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

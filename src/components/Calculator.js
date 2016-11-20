import React, { Component } from 'react'

// Material UI components
import {Table, TableBody, TableRow, TableRowColumn} from 'material-ui/Table'

// ?...
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

// Child components
import Salary from './Salary'
import Kiwisaver from './Kiwisaver'
import Depreciation from './Depreciation'

class Calculator extends Component {

  constructor(props) {
  super(props);
    this.state = {
      selectable: false,
      salary: 0,
      kiwisaver: 0,
      laptopValue: 0,
      depreciation: 0,
      fte: 0
    }
    this.handleProp = this.handleProp.bind(this)
    this.kiwisaverCalc = this.kiwisaverCalc.bind(this)
    this.depreciationCalc = this.depreciationCalc.bind(this)
    this.propSwitch = this.propSwitch.bind(this)
  }

  // where to add dollar signs and commas

  // generic event handler
  handleProp(prop) {
    return e => {
      this.setState({[prop]:e.target.value}, this.propSwitch(prop))
    }
  }

  // propSwitch - handles conditional function execution after the setState call in handleProp
  propSwitch (prop) {
    switch (prop) {
      case 'salary':
        this.kiwisaverCalc()
        break;
      case 'fte':
        this.depreciationCalc()
        break;
      default:
        console.log('state set with', this.state[prop])
    }
  }

  // lower level handler functions
  kiwisaverCalc () {
    this.setState({
      kiwisaver: 0.3 * +(this.state.salary) || 0 // using unary plus operator, similar to Number()
    })
  }

  depreciationCalc () {
    console.log('THIS.STATE.FTE', this.state.fte);
    this.setState({
      depreciation: ( this.state.laptopValue / 3 ) / this.state.fte * 2
    })
    console.log('depreciation just after setting state', this.state.depreciation)
  }

  render() {
    console.log('salary in state', this.state.salary)
    console.log('kiwisaver in state', this.state.kiwisaver)
    console.log('depreciation info in state', this.state.laptopValue, this.state.fte, this.state.depreciation);
    return (
      <div className="calculator">
      <Table selectable={this.state.selectable}>
        <TableBody>
          <Salary handleProp={this.handleProp} />
          <Kiwisaver
            handleProp={this.handleProp}
            kiwisaver={this.state.kiwisaver}
          />
          <Depreciation
            handleProp={this.handleProp}
            depreciation={this.state.depreciation}
            />
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

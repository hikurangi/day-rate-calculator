import React, { Component } from 'react'

// Material UI components
import {Table, TableBody, TableRow, TableRowColumn} from 'material-ui/Table'

// Child components
import Salary from './Salary'
import Kiwisaver from './Kiwisaver'
import Depreciation from './Depreciation'
import Cellphone from './Cellphone'

class Calculator extends Component {

  constructor(props) {
  super(props);
    this.state = {
      selectable: false,
      salary: 0,
      kiwisaver: 0,
      laptopValue: 0,
      depreciation: 0,
      fte: 0,
      cellphone: 0,
    }
  }

  // where to add dollar signs and commas

  // generic event handler
  handleProp = (prop) => {
    return e => {
      this.setState({[prop]:e.target.value}, this.propSwitch(prop)) // makes sure the property handler functions are using the most up-to-date version of the state
    }
  }

  // propSwitch - handles conditional function execution after the setState call in handleProps
  propSwitch = (prop) => {
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
  kiwisaverCalc = () => {
    this.setState({
      kiwisaver: 0.3 * +(this.state.salary) || 0 // using unary plus operator, similar to Number()
    })
  }

  depreciationCalc = () => {
    this.setState({
      depreciation: ( this.state.laptopValue / 3 ) / this.state.fte * 2
    })
  }

  render() {
    return (
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
          <Cellphone
            handleProp={this.handleProp}
          />
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
    );
  }
}

export default Calculator

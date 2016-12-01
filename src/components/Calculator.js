import React, { Component } from 'react'

// Material UI components
import { Table, TableHeader, TableHeaderColumn, TableBody, TableRow } from 'material-ui/Table'

// Child components
import Header from './Header'

  // Salary and Costs
  import Salary from './rows/Salary'
  import Kiwisaver from './rows/Kiwisaver'
  import Depreciation from './rows/Depreciation'
  import Cellphone from './rows/Cellphone'
  import Subtotal from './rows/Subtotal'

  // Days
  import AnnualLeave from './rows/AnnualLeave'
  import SickLeave from './rows/SickLeave'
  import PublicHolidays from './rows/PublicHolidays'
  import Weekends from './rows/Weekends'
  import DaysNotWorking from './rows/DaysNotWorking'
  import DaysWorking from './rows/DaysWorking'

  // Day Rate
  import Total from './rows/Total'

// Date information
const today = new Date()
// var dd = today.getDate()
// var mm = today.getMonth()+1 //January is 0!
var thisYear = today.getFullYear()

// using APIs to get
// const publicHolidays = 12

class Calculator extends Component {

  constructor(props) {
  super(props);
    this.state = {
      salary: 0,
      kiwisaver: 0,
      laptopValue: 0,
      fte: 0,
      depreciation: 0,
      cellMonthly: 0,
      cellphone: 0,
      subtotal: 0,
      thisYear,
      annualLeave: 20,
      sickLeave: 5,
      publicHolidays: 12,
      daysWorking: 0,
      daysNotWorking: 0,
      total: 0
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
      case 'laptopValue': // fall-through - omitting the 'break' between the two cases effectively means ( 'laptopValue' || 'fte' ) in this (nested) case
      case 'fte':
        this.depreciationCalc()
        break;
      case 'cellMonthly':
        this.cellphoneCalc()
        break;
      default:
        console.log('state set with', this.state[prop])
    }
  }

  // lower level handler functions
  kiwisaverCalc = () => {
    let calculation = 0.3 * Number(this.state.salary)
    console.log({calculation})
    this.setState({
      kiwisaver: calculation
    })
  }

  depreciationCalc = () => {
    this.setState({
      depreciation: ( this.state.laptopValue / 3 ) / ( this.state.fte * 2 )
    })
  }

  cellphoneCalc = () => {
    this.setState({
      cellphone: this.state.cellMonthly * 12
    })
  }

  subtotalCalc = () => {
    this.setState({
      subtotal: this.state.salary + this.state.kiwisaver + this.state.depreciation + this.state.cellphone
    })
  }

  render() {
    return (

        <Table selectable={this.state.selectable}>

          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
            >
            <TableRow>
              <TableHeaderColumn>
                <Header
                  thisYear={this.state.thisYear}
                />
              </TableHeaderColumn>
            </TableRow>
          </TableHeader>

          <TableBody>
            <Salary
              handleProp={this.handleProp}
            />
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
            <Subtotal
              subtotal={this.state.subtotal}
            />
            <AnnualLeave />
            <SickLeave />
            <PublicHolidays />
            <Weekends />
            <DaysNotWorking />
            <DaysWorking />
            <Total />
          </TableBody>

        </Table>
    );
  }
}

export default Calculator

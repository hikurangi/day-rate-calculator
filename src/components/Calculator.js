import React, { Component } from 'react'

// API
const api = require('../api/api')

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

// Date information - the single source of truth for the swhole app
const today = new Date()
// var dd = today.getDate()
// var mm = today.getMonth()+1 //January is 0!
var thisYear = today.getFullYear()

// User country
const country = 'nzl'

// Calculator
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
      publicHolidays: 0, // api call - no user input required (if country is assumed)
      weekends: 0, // also api call - no user input - connected to the first?
      daysWorking: 0,
      daysNotWorking: 0,
      total: 0
    }
  }

  // Lifecycle Methods
  componentDidMount() {
    console.log('api.publicHolidays', api.publicHolidays(thisYear, country))
  }
  // where to add dollar signs and commas

  // generic event handler
  handleProp = (prop) => {
    return e => {
      console.log('e.target.value', e.target.value)
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
  kiwisaverCalc = (e) => {
    console.log('kiwisaverCalc');
    this.setState({ salary: +e.target.value }, console.log({state: this.state}))
    this.setState(prevState => ({ kiwisaver: 0.03 * +prevState.salary }), console.log({state: this.state}))
  }

  depreciationCalc = () => {
    this.setState(prevState => ({ depreciation: ( prevState.laptopValue / 3 ) / ( prevState.fte * 2 )}))
  }

  cellphoneCalc = () => {
    this.setState(prevState => ({
      cellphone: prevState.cellMonthly * 12
    }))
  }

  subtotalCalc = () => {
    this.setState(prevState => ({
      subtotal: prevState.salary + prevState.kiwisaver + prevState.depreciation + prevState.cellphone
    }))
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
              onChange={this.state.kiwisaverCalc}
            />
            <Kiwisaver
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

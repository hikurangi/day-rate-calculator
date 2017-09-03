import React, { Component } from 'react'

import dotenv from 'dotenv'
dotenv.config()

import {
  Table,
  TableHeader,
  TableHeaderColumn,
  TableBody,
  TableRow
} from 'material-ui/Table'

// Child components
import Header from './Header'

  // Salary and Costs
  import Salary from './rows/input/Salary'
  import Kiwisaver from './rows/presentation/Kiwisaver'
  import Laptop from './rows/input/Laptop'
  import FTE from './rows/input/FTE'
  import Depreciation from './rows/presentation/Depreciation'
  import Cellphone from './rows/input/Cellphone'
  import EmployerPhoneContribution from './rows/presentation/EmployerPhoneContribution'
  import Subtotal from './rows/presentation/Subtotal'

  // Days
  import AnnualLeave from './rows/input/AnnualLeave'
  import SickLeave from './rows/input/SickLeave'
  import PublicHolidays from './rows/presentation/PublicHolidays'
  import Weekends from './rows/presentation/Weekends'
  import DaysNotWorking from './rows/presentation/DaysNotWorking'
  import DaysWorking from './rows/presentation/DaysWorking'

  // Day Rate
  import DayRate from './rows/presentation/DayRate'

// API
import publicHolidayChecker from '../api/public-holiday-checker'

// Date information - the single source of truth for the swhole app
import days from '../helpers/day-counter'

// User country
const country = 'nzl'

// Styles
const style = {
  outputNumbers: {
    fontSize: 16,
  }
}

// Calculator
class Calculator extends Component {

  constructor(props) {
  super(props);
    this.state = {
      days,
      selectable: false, // material ui customisation
    }
  }

  componentDidMount() {
    publicHolidayChecker(country, days.thisYear)
      .then(result => this.setState({publicHolidays: result.length}))
  }

  // Generic event handler
  handleChange = e => {
    this.setState({[e.target.name]:+e.target.value}, console.log({state: this.state})) // NOTE: e.target.value is converted to a number!
  }

  render() {
    const weekends = this.state.days[0] + this.state.days[6]
    const depreciation = (this.state.laptop/3)/(this.state.fte*2)
    
    return (
        <Table selectable={this.state.selectable}>
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
          >
            <TableRow>
              <TableHeaderColumn>
                <Header
                  thisYear={this.state.days.thisYear}
                />
              </TableHeaderColumn>
            </TableRow>
          </TableHeader>

          <TableBody>
            <Salary
              handleChange={this.handleChange}
            />
            <Kiwisaver
              kiwisaver={this.state.salary * 0.03}
              style={style}
            />
            <Laptop
              handleChange={this.handleChange}
            />
            <FTE
              handleChange={this.handleChange}
            />
            <Depreciation
              depreciation={depreciation}
              style={style}
            />
            <Cellphone
              handleChange={this.handleChange}
            />
            <EmployerPhoneContribution
              phoneContribution={this.state.cellphone * 12}
              style={style}
            />
            <Subtotal
              salary={this.state.salary}
              kiwisaver={this.state.salary * 0.03}
              depreciation={depreciation}
              phoneContribution={this.state.cellphone * 12}
              style={style}
            />
            <AnnualLeave
              handleChange={this.handleChange}
            />
            <SickLeave
              handleChange={this.handleChange}
            />
            <PublicHolidays
              thisYear={this.state.days.thisYear}
              publicHolidays={this.state.publicHolidays}
              style={style}
            />
            <Weekends
              weekends={weekends}
              thisYear={this.state.days.thisYear}
              style={style}
            />
            <DaysNotWorking
              annualLeave={this.state.annualLeave}
              sickLeave={this.state.sickLeave}
              publicHolidays={this.state.publicHolidays}
              weekends={weekends}
              style={style}
            />
            <DaysWorking
              annualLeave={this.state.annualLeave}
              sickLeave={this.state.sickLeave}
              publicHolidays={this.state.publicHolidays}
              weekends={weekends}
              days={this.state.days}
              style={style}
            />
            <DayRate
              style={style}
            />
          </TableBody>
        </Table>
    );
  }
}

export default Calculator

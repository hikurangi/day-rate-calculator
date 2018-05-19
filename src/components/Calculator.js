import React, { Component }      from 'react'
import dotenv                    from 'dotenv'
import {
  Table,
  TableHeader,
  TableHeaderColumn,
  TableBody,
  TableRow
}                                from 'material-ui/Table'
// Child components
import Header                    from './Header'
// Salary and Costs
import Salary                    from './rows/input/Salary'
import Kiwisaver                 from './rows/presentation/Kiwisaver'
import Laptop                    from './rows/input/Laptop'
import FTE                       from './rows/input/FTE'
import Depreciation              from './rows/presentation/Depreciation'
import Cellphone                 from './rows/input/Cellphone'
import EmployerPhoneContribution from './rows/presentation/EmployerPhoneContribution'
import Subtotal                  from './rows/presentation/Subtotal'
// Days
import AnnualLeave               from './rows/input/AnnualLeave'
import SickLeave                 from './rows/input/SickLeave'
import PublicHolidays            from './rows/presentation/PublicHolidays'
import Weekends                  from './rows/presentation/Weekends'
import DaysNotWorking            from './rows/presentation/DaysNotWorking'
import DaysWorking               from './rows/presentation/DaysWorking'
// Day Rate
import DayRate                   from './rows/presentation/DayRate'
// API
import publicHolidayChecker      from '../api/public-holiday-checker'
// Date information
import days                      from '../helpers/day-counter'
dotenv.config()

// User country
const COUNTRY = 'nzl' // TODO

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
    }  }
  
  componentDidMount() { // TODO: async/await refactor
    publicHolidayChecker(COUNTRY, days.thisYear)
      .then(res => console.log({res}))
      // .then(result = this.setState({publicHolidays: result.length}))
  }
  
  // Generic event handler
  handleChange = e => {
    this.setState({[e.target.name]:+e.target.value}, console.log({state: this.state})) // NOTE: e.target.value is converted to a number!
  }
  
  render() {
    
    // One-time logic
    const weekends = this.state.days[0] + this.state.days[6]
    const depreciation = (this.state.laptop/3)/(this.state.fte*2)
    const phoneContribution = this.state.cellphone * 12
    const kiwisaver = this.state.salary * 0.03

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
              kiwisaver={kiwisaver}
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
              phoneContribution={phoneContribution}
              style={style}
            />
            <Subtotal
              salary={this.state.salary}
              kiwisaver={kiwisaver}
              depreciation={depreciation}
              phoneContribution={phoneContribution}
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
              annualLeave={this.state.annualLeave}
              sickLeave={this.state.sickLeave}
              publicHolidays={this.state.publicHolidays}
              weekends={weekends}
              days={this.state.days}
              salary={this.state.salary}
              kiwisaver={kiwisaver}
              depreciation={depreciation}
              phoneContribution={phoneContribution}
              style={style}
            />
          </TableBody>
        </Table>
    );
  }
}

export default Calculator

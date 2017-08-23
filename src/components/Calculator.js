import React, { Component } from 'react'

// Material UI components
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
  import AnnualLeave from './rows/AnnualLeave'
  import SickLeave from './rows/SickLeave'
  import PublicHolidays from './rows/PublicHolidays'
  import Weekends from './rows/Weekends'
  import DaysNotWorking from './rows/DaysNotWorking'
  import DaysWorking from './rows/DaysWorking'

  // Day Rate
  import Total from './rows/Total'

// API
// const api = require('../api/api')

// Date information - the single source of truth for the swhole app
const today = new Date()
// var dd = today.getDate()
// var mm = today.getMonth()+1 //January is 0!
var thisYear = today.getFullYear()

// User country
// const country = 'nzl'

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
      thisYear,
      annualLeave: 20,
      sickLeave: 5,
      publicHolidays: 0, // api call - no user input required (if country is assumed)
      weekends: 0, // also api call - no user input - connected to the first?
      daysWorking: 0,
      daysNotWorking: 0,
      total: 0,
      selectable: false, // material ui customisation
    }
  }

  // Lifecycle Methods
  // componentDidMount() {
  //   console.log('api.publicHolidays', api.publicHolidays(thisYear, country))
  // }

  // generic event handler
  handleChange = e => {
    this.setState({[e.target.name]:e.target.value}) // makes sure the property handler functions are using the most up-to-date version of the state
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
              handleChange={this.handleChange}
              salary={this.state.salary}
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
              depreciation={((this.state.laptop/3)/(this.state.fte*2))}
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
              depreciation={((this.state.laptop/3)/(this.state.fte*2))}
              phoneContribution={this.state.cellphone * 12}
              style={style}
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

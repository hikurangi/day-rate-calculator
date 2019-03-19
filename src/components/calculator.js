import { h } from 'react-hyperscript-helpers';
import { useEffect, useState } from 'react';
// import { makeStyles }       from '@material-ui/styles'

import dotenv from 'dotenv';

// Salary and Costs
// import Salary                    from './rows/input/Salary'
// import Kiwisaver                 from './rows/presentation/Kiwisaver'
// import Laptop                    from './rows/input/Laptop'
// import FTE                       from './rows/input/FTE'
// import Depreciation              from './rows/presentation/Depreciation'
// import Cellphone                 from './rows/input/Cellphone'
// import EmployerPhoneContribution from './rows/presentation/EmployerPhoneContribution'
// import Subtotal                  from './rows/presentation/Subtotal'
// Days
// import AnnualLeave               from './rows/input/AnnualLeave'
// import SickLeave                 from './rows/input/SickLeave'
// import PublicHolidays            from './rows/presentation/PublicHolidays'
// import Weekends                  from './rows/presentation/Weekends'
// import DaysNotWorking            from './rows/presentation/DaysNotWorking'
// import DaysWorking               from './rows/presentation/DaysWorking'
// Day Rate
// import DayRate                   from './rows/presentation/DayRate'
// API
import publicHolidayChecker from '../api/public-holiday-checker';
// Date information
import { weekdays, thisYear } from '../helpers/day-counter';

dotenv.config();

// User country
const COUNTRY = 'nzl'; // TODO

// Styles
// const useStyles = makeStyles({ // can receive theme as param
// outputNumbers: {
//   fontSize: 16,
// },
// appHeader: {
//   backgroundColor: '#222',
//   height: '150px',
//   padding: '20px',
//   color: '#FFFFFF',
// }
// })

// Calculator
const Calculator = () => {
  const [workingDays, setWorkingDays] = useState(null);

  // const {
  //   appLogo
  //   appHeader,
  //   outputNumbers
  // } = useStyles()

  useEffect(() => {
    publicHolidayChecker(COUNTRY, thisYear).then(publicHolidays =>
      setWorkingDays(weekdays - publicHolidays.length)
    );
  });

  return h('p', 'here is calculator');
  // Generic event handler
  // handleChange = e => {
  //   this.setState({[e.target.name]:+e.target.value}, console.log({state: this.state})) // NOTE: e.target.value is converted to a number!
  // }

  // render() {

  // One-time logic
  // const depreciation = (this.state.laptop/3)/(this.state.fte*2)
  // const phoneContribution = this.state.cellphone * 12
  // const kiwisaver = this.state.salary * 0.03

  // return h(Table, [
  //   h(TableHead, [
  //     h(TableRow, [
  //       h(TableCell, [
  //         img({ src: logo, className: appLogo, alt: 'App Logo' }),
  //         h2('Contractor Day Rate Calculator'),
  //         h3([em(`accurate for ${thisYear}`)]),
  //         p('Built by Hikurangi Schaverien-Kaa with information from Jody at Enspiral Dev Academy')
  //       ])
  //     ])
  //   ])
  // ])
  {
    /*
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
      </TableBody> */
  }
  // }
};

export default Calculator;

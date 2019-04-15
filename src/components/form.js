import { h, p }     from 'react-hyperscript-helpers'
import FormControl  from '@material-ui/core/FormControl'
import Input        from '@material-ui/core/Input'
import { useState } from 'react'

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

const inputs = [
  {
    name: 'salary',
    placeholder: 'Salary',
    type: 'number'
  }
]

const Form = ({ workingDays }) => {
  const [state, setState] = useState({})
  const handleChange = ({ name }) => {
    
  }

  return h(FormControl, [
    p(
      `So, you’re a Contractor! You pay your own taxes, you don’t get holidays, you probably have to provide your own computer equipment,
      and you’re there for a very specific task / project. You can probably be terminated with very little notice. The good news is, 
      if you are going to be a Contractor, you can expect to be paid a bit more to compensate for the lack of job security. 
      When you’re calculating how much you need to earn, you could consider the following:`
    )
  ])
}

export default Form

  // One-time logic
  // const depreciation = (this.state.laptop/3)/(this.state.fte*2)
  // const phoneContribution = this.state.cellphone * 12
  // const kiwisaver = this.state.salary * 0.03
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

      
import { h }                   from 'react-hyperscript-helpers'
import { useEffect, useState } from 'react'
import CircularProgress        from '@material-ui/core/CircularProgress'
import Form                    from './form'

// API
import publicHolidayChecker    from '../api/public-holiday-checker'
// Date information
import { weekdays, thisYear }  from '../helpers/day-counter'

// User country
const COUNTRY = 'nzl' // TODO

// Calculator
const Calculator = () => {
  const [workingDays, setWorkingDays] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    publicHolidayChecker(COUNTRY, thisYear)
      .then(publicHolidays => {
        if (publicHolidays) {
          setWorkingDays(weekdays - publicHolidays.length)
          setLoading(false)
        }
      })
      .catch(console.error)
  }, [])

  return loading // TODO: transitions
    ? h(CircularProgress)
    : h(Form, { workingDays })
  // Generic event handler

  // handleChange = e => {
  //   this.setState({[e.target.name]:+e.target.value}, console.log({state: this.state})) // NOTE: e.target.value is converted to a number!
  // }
}

export default Calculator

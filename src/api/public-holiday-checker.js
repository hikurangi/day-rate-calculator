import differenceInMilliseconds from 'date-fns/differenceInMilliseconds'

// constants
const EXPIRY = 1000 * 60 * 60 * 24 * 7 // one week
const PUBLIC_HOLIDAY_API_URL = `https://www.kayaposoft.com/enrico/json/v1.0/`

const publicHolidayChecker = (country, year) => {
  const queryString = `?action=getPublicHolidaysForYear&year=${year}&country=${country}`
  
  return fetch(`${PUBLIC_HOLIDAY_API_URL}${queryString}`)
    .then(res => res.json())
    .catch(console.error)
  }

export default publicHolidayChecker

function isExpired (timestamp) {
  const now = new Date()
  const formattedDate = new Date(timestamp)
  return differenceInMilliseconds(now, formattedDate) >  EXPIRY
}
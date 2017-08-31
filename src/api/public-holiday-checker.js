const publicHolidayChecker = (country, year) => {
  return fetch(`https://www.kayaposoft.com/enrico/json/v1.0/?action=getPublicHolidaysForYear&year=${year}&country=${country}`)
    .then(res => res.json())
    .catch(err => console.log({ err }))
  }

export default publicHolidayChecker

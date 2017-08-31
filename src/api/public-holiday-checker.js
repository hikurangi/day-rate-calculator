const publicHolidayChecker = (country, year) => {
  let output
  fetch(`https://www.kayaposoft.com/enrico/json/v1.0/?action=getPublicHolidaysForYear&year=${year}&country=${country}`) // need to format
    .then(res => res.json())
    .then(json => output = json)
    })
    .catch(err => console.log({ err }))
  return output
}

export default publicHolidayChecker

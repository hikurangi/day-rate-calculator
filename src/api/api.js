// This calls the ANZ public holidays API to supply this year's public holidays https://developer.asb.co.nz/documentation/public-holidays

const publicHolidays = function (year) {
  console.log('year in PublicHolidays', year)
  return year
}

const api = {
  publicHolidays
}

module.exports = api

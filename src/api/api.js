const https = require ('https')
// This calls the ANZ public holidays API to supply this year's public holidays https://developer.asb.co.nz/documentation/public-holidays

const callback = function (response) {
  var str = ''

  response.on('data', function (chunk) {
    str += chunk
  })

  response.on('end', function () {
    console.log('api response', str)
  })
}

// publicHolidays retrieves the holidays in a given year
const publicHolidays = function (year, country) {
  //pretty sure that this will be to api object below
  this.options.path += `?countryCode=${country}&startDate=${year}-01-01&endDate=${year}-12-31`
  console.log('year in PublicHolidays', year)

  https.request(options, callback).end()

}

const options = {
  host: 'api.asb.co.nz',
  path: '/public/v1/'
}

const api = {
  publicHolidays,
  options
}

module.exports = api

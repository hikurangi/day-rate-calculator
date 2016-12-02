const http = require ('http')
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

const options = {
host: 'kayaposoft.com/',
path: 'enrico/json/v1.0/'
}

//http://kayaposoft.com/enrico/json/v1.0/?action=getPublicHolidaysForYear&year=2016&country=nzl&region=

// publicHolidays retrieves the holidays in a given year
const publicHolidays = function (year, country) {
  this.options.path += `?action=getPublicHolidaysForYear&year=${year}&country=${country}&region=`
  console.log('year in PublicHolidays', year)

  http.request(options, callback).end()

}

const api = {
  publicHolidays,
  options
}

module.exports = api

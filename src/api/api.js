// This calls the ANZ public holidays API to supply this year's public holidays https://developer.asb.co.nz/documentation/public-holidays
const api = {
  publicHolidays: function(year) {
    console.log('year in PublicHolidays', year);
    return year
  }
}

export default api

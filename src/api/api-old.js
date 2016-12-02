const http = require ('http')
// Originally used the ASB public holidays API https://developer.asb.co.nz/documentation/public-holidays

// Now using Enrico Service http://kayaposoft.com/enrico/

// var req = http.request({
//     withCredentials: false
// }, function(res) {
//     //...
// });

function publicHolidays(country, year) {

  console.log('Creating a simple HTTP request');

  // it's a public api with no auth

// Regular JSON
// http://kayaposoft.com/enrico/json/v1.0/?action=getPublicHolidaysForYear&year=${year}&country=${country}&region=

  http.get(`http://kayaposoft.com/enrico/json/v1.0/?action=getPublicHolidaysForYear&year=${year}&country=${country}&jsonp=myfunction`, function(res) {
    var body = ''; // Will contain the final response
    // Received data is a buffer.
    // Adding it to our body
    res.on('data', function(data){
      body += data;
    });
    // After the response is completed, parse it and log it to the console
    res.on('end', function() {
      var parsed = JSON.parse(body);
      console.log(parsed);
    });
  })
  // If any error has occured, log error to console
  .on('error', function(e) {
    console.log("Got error: " + e.message);
  });
}

const api = {
  publicHolidays
}

module.exports = api

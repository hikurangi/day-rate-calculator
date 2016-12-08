const http = require ('http')
// Originally used the ASB public holidays API https://developer.asb.co.nz/documentation/public-holidays

// Now using Enrico Service http://kayaposoft.com/enrico/

// var req = http.request({
//     withCredentials: false
// }, function(res) {
//     //...
// });

function publicHolidays(year, country) {

  const options = {
    host: 'kayaposoft.com',
    // port: 80, // default
    path: `/enrico/json/v1.0?action=getPublicHolidaysForYear&year=${year}&country=${country}&region=`,
    // method: 'GET', // default
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'withCredentials': false,
      'Access-Control-Allow-Origin': '*'
    }
  };

  const req = http.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
      console.log(`BODY: ${chunk}`);
    });
    res.on('end', () => {
      console.log('No more data in response.');
    });
  });

  req.on('error', (e) => {
    console.log(`problem with request: ${e.message}`);
  });

  req.end();

}

const api = {
  publicHolidays
}

module.exports = api

/**
 * Scrapes data from http://www.hctax.net/Voter/PrecinctData
 *
 * LEGAL WARNING: It is a criminal offense to use voter registration information
 * in connection with advertising or promoting commercial products or services.
 * See Tex. Elec. Code Ann. §18.009.
 */

// Include libraries
var request = require("request");
var _ = require('lodash');
var Converter = require("csvtojson").Converter;
var converter = new Converter({constructResult:false});

var url = "http://www.hctax.net/Voter/PrecinctData";

// Fetch data
// request.post(url)
//        .form( {precinct: '0570', precdata: 'Submit'} )
//        .on('response', function(response) {
//           console.log(response.statusCode);
//           console.log(response.headers['content-type']);
//         })
//         .on('error', function(err) {
//           console.log(err);
//         })
//        .pipe(converter);
//
// // Parse data
// converter.on("record_parsed", function (row) {
//   console.log(row);
// });
//


// Run it
getPrecinctList(function(list) {
  console.log(list);

  // Kill the worker
  process.exit();
});

// Configure Express
var express = require('express');
var app = express();
app.set('port', (process.env.PORT || 8000));



// Start the server
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

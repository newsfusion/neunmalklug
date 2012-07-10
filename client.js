var express = require('express');
var app = express.createServer(express.logger());
app.get('/', function(request, response) {
  response.send('Hello Edy and Stefaan! mit cloud9 ge2ändert!');
});
 
var port = process.env.C9_PORT || process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
var http = require('http')
,app = require('./config/express');

var porta - process.env.PORT || 3000;

http.createServer(app).listen(porta, function() {
	console.log('ON PORTA: ' + this.address().port);
});

app.get('*', function(req, res) {
  res.sendfile('./public/index.html');
});

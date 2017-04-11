var express = require('express')
,app = express()
,routes = require('../routes');

app.use(express.static('./public'));

routes(app);

module.exports = app;
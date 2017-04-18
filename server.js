var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var path = require('path');

var app = express();
var users = require('./routes/rohit');





app.use(logger('dev'));
//app.use(bodyParser.json());


app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

//app.use(express.static(path.join(__dirname , 'public'));

app.use('/',users);
app.listen(8080, function(req, res) {
  console.log('Server is running on port 8080...');
});
